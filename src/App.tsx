// /src/App.js
import React, { useEffect } from "react";
//import { BrowserRouter, Route, Switch } from "react-router-dom";

import makePixiApp from "./Stage";
import "./index.css";

const App: React.FC = () => {
    useEffect(() => {
        makePixiApp();
    }, []);

    return <div>Test</div>;
};

export default App;
