import * as React from "react";
import { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { listLogEntries } from "../../FrontApi";
import "./mapbox.css";
import Flag from "./flag";
import LogEntryFrom from "./LogEntryForm";

const MapBox = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [addEntryLocation, setAddEntryLocation] = useState(null);
  const [entryId, setEntryId] = useState("");
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 0,
    longitude: 0,
    zoom: 1.5,
  });
  const [update, setUpdate] = useState(false);

  const getEntries = async () => {
    const logEntries = await listLogEntries();
    setLogEntries(logEntries);
  };

  useEffect(() => {
    getEntries();
  }, [update]);
  //get latitude and longitude where they click
  const showAddMarkerPopup = (event) => {
    const [longitude, latitude] = event.lngLat;
    setAddEntryLocation({
      latitude,
      longitude,
    });
  };

  const deleteHandler = async () => {
    try {
      console.log(entryId);
      const response = await fetch("http://localhost:1337/api/logs", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: entryId }),
      });
      const data = response.json();
      if (data) {
        console.log(data);
        console.log(update, logEntries);
        setUpdate(!update);
        console.log(update, logEntries);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        //mapStyle="mapbox://styles/accessjoao/ckvwr2unz0sgb14oa0tsnxngk"
        //mapStyle="mapbox://styles/accessjoao/ckw1rtodp0f3m14pgpn9mc39o"
        mapStyle="mapbox://styles/accessjoao/ckw1rzpb404r914sfw3v162fd"
        //mapStyle="mapbox://styles/accessjoao/ckw27rn7d0lhf15jyf9w9iry3"
        onDblClick={showAddMarkerPopup}
      >
        {logEntries.map((entry) => (
          <React.Fragment key={entry._id}>
            <Marker
              latitude={entry.latitude}
              longitude={entry.longitude}

              //offsetLeft={-5}
              // offsetTop={-20}
            >
              <div
                onClick={() => {
                  setShowPopup({
                    //...showPopup,
                    [entry._id]: true,
                  });
                  setEntryId(entry._id);
                }}
              >
                <Flag></Flag>
              </div>
            </Marker>
            {showPopup[entry._id] ? (
              <Popup
                latitude={entry.latitude}
                longitude={entry.longitude}
                closeButton={true}
                closeOnClick={false}
                dynamicPosition={true}
                onClose={() => setShowPopup({})}
                anchor="top"
              >
                <div className="popup" />
                <h3>{entry.title}</h3>
                <p>{entry.comments}</p>
                <small>
                  Visit Date: {new Date(entry.visitDate).toLocaleDateString()}
                </small>
                {entry.image ? (
                  <img src={"entry.image"} alt={entry.title} />
                ) : null}
                <button onClick={deleteHandler}>Delete</button>
              </Popup>
            ) : null}
          </React.Fragment>
        ))}
        {addEntryLocation ? (
          <>
            <Marker
              latitude={addEntryLocation.latitude}
              longitude={addEntryLocation.longitude}

              //offsetLeft={-5}
              // offsetTop={-20}
            >
              <Flag></Flag>
            </Marker>
            <Popup
              latitude={addEntryLocation.latitude}
              longitude={addEntryLocation.longitude}
              closeButton={true}
              closeOnClick={false}
              dynamicPosition={true}
              onClose={() => setAddEntryLocation(null)}
              anchor="top"
            >
              <div className="popup">
                <LogEntryFrom
                  onClose={() => {
                    setAddEntryLocation(null);
                    getEntries();
                  }}
                  location={addEntryLocation}
                />
              </div>
            </Popup>
          </>
        ) : null}
      </ReactMapGL>
    </div>
  );
};
export default MapBox;
