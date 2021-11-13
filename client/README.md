# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

/\*

import \* as React from "react";
import { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { listLogEntries } from "./FrontApi";

const App = () => {
const [logEntries, setLogEntries] = useState([]);
const [showPopup, setShowPopup] = useState({});
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
mapStyle="mapbox://styles/accessjoao/ckvwr2unz0sgb14oa0tsnxngk" >
{logEntries.map((entry) => (
<>
<Marker
key={entry.\_id}
latitude={entry.latitude}
longitude={entry.longitude}

              //offsetLeft={-5}
              // offsetTop={-20}
            >
              <div
                onClick={() =>
                  setShowPopup({
                    ...showPopup,
                    [entry._id]: true,
                  })
                }
              >
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
            {showPopup[entry._id] ? (
              <Popup
                latitude={entry.latitude}
                longitude={entry.longitude}
                closeButton={true}
                closeOnClick={false}
                onClose={() => this.setState({ showPopup: false })}
                anchor="top"
              >
                <div>You are here</div>
              </Popup>
            ) : null}
          </>
        ))}
      </ReactMapGL>
    </div>

);
};

export default App;

\*/
