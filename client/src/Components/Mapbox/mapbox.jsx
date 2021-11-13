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

  useEffect(() => {
    (async () => {
      const logEntries = await listLogEntries();
      setLogEntries(logEntries);
    })();
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
        mapStyle="mapbox://styles/accessjoao/ckvwr2unz0sgb14oa0tsnxngk"
        onDblClick={showAddMarkerPopup}
      >
        {logEntries.map((entry) => (
          <>
            <Marker
              key={entry._id}
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
                  Visit date: {new Date(entry.visitDate).toLocaleDateString()}
                </small>
              </Popup>
            ) : null}
          </>
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
                <LogEntryFrom />
              </div>
            </Popup>
          </>
        ) : null}
      </ReactMapGL>
    </div>
  );
};

export default MapBox;
