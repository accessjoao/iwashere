import * as React from "react";
import { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import { listLogEntries } from "./FrontApi";

const App = () => {
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
      console.log(logEntries);
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
      />
    </div>
  );
};

export default App;
