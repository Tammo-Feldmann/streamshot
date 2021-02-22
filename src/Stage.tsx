import { Container, Application } from "pixi.js";
import React from "react";

const Stage: React.FC = () => {
    // const StageEl = useRef(HTMLCanvasElement);

    //const PixiStage = document.getElementById("pixiStage") as HTMLCanvasElement;

    // The application will create a renderer using WebGL, if possible,
    // with a fallback to a canvas render. It will also setup the ticker
    // and the root stage PIXI.Container
    const pixiApp = new Application({
        width: 480,
        height: 320,
    });

    const container = new Container();

    // const texture = Texture.from("bunny.png");
    // const sprite = Sprite.from("bunny.png");

    // container.addChild(sprite);

    pixiApp.stage.addChild(container);

    // The application will create a canvas element for you that you
    // can then insert into the DOM
    //document.body.appendChild(app.view);

    // load the texture we need
    // pixiApp.loader.add("bunny", "bunny.png").load((loader, resources) => {
    //     // This creates a texture from a 'bunny.png' image
    //     const bunny = new PIXI.Sprite(resources?.bunny?.texture);

    //     // Setup the position of the bunny
    //     bunny.x = pixiApp.renderer.width / 2;
    //     bunny.y = pixiApp.renderer.height / 2;

    //     // Rotate around the center
    //     bunny.anchor.x = 0.5;
    //     bunny.anchor.y = 0.5;

    //     // Add the bunny to the scene we are building
    //     pixiApp.stage.addChild(bunny);

    //     // Listen for frame updates
    //     pixiApp.ticker.add(() => {
    //         // each frame we spin the bunny around a bit
    //         bunny.rotation += 0.01;
    //     });
    // });

    return <canvas id="pixiStage" />;
};

export default Stage;
