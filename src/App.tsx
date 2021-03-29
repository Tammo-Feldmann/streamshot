import React, { useEffect } from "react";
import makePixiApp from "./Stage";
import "./sass/styles.scss";
import { useWindowDimensions } from "./utils/windowDimensions";

const App: React.FC = () => {
    const { windowWidth, windowHeight } = useWindowDimensions();

    useEffect(() => {
        makePixiApp({ width: windowWidth, height: windowHeight });
    }, [windowWidth, windowHeight]);

    return <div className="test-styles">Test</div>;
};

export default App;
