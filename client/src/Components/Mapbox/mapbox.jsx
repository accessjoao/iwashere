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
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 0,
    longitude: 0,
    zoom: 0.9,
  });

  const getEntries = async () => {
    const logEntries = await listLogEntries();
    setLogEntries(logEntries);
  };

  useEffect(() => {
    getEntries();
  }, []);
  //get latitude and longitude where they click
  const showAddMarkerPopup = (event) => {
    const [longitude, latitude] = event.lngLat;
    setAddEntryLocation({
      latitude,
      longitude,
    });
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
                onClick={() =>
                  setShowPopup({
                    //...showPopup,
                    [entry._id]: true,
                  })
                }
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
