import React from "react";
import {AppProviders} from "./providers/AppProviders";
import {Router} from "./routers/Router";

// Define the main component for rendering the app
const App = () => {
    return (
        <AppProviders>
            <Router/>
        </AppProviders>
    );
};

export default App;
