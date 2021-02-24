import { Application, Sprite } from "pixi.js";

function makePixiApp() {
    const app = new Application({ width: 400, height: 400 });
    document.body.appendChild(app.view);
    const sprite = Sprite.from(process.env.PUBLIC_URL + "/bunny.png");
    app.stage.addChild(sprite);
}

export default makePixiApp;
