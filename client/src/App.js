import * as React from "react";
import { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { listLogEntries } from "./FrontApi";

const App = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 0,
    longitude: 0,
    zoom: 1.5,
  });

  useEffect(() => {
    (async () => {
      const logEntries = await listLogEntries();
      setLogEntries(logEntries);
    })();
  }, []);

  return (
    <div>
      <h1>future navbar</h1>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/accessjoao/ckvwr2unz0sgb14oa0tsnxngk"
      >
        {logEntries.map((entry) => (
          <Marker
            key={entry._id}
            latitude={entry.latitude}
            longitude={entry.longitude}
            offsetLeft={-5}
            offsetTop={-20}
          >
            <div>
              <svg
                className="marker"
                style={{
                  width: "24px",
                  height: "24px",
                }}
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" y1="22" x2="4" y2="15"></line>
              </svg>
            </div>
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default App;

/*

<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>

*/
