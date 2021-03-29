import { Application, Sprite } from "pixi.js";

interface IStageProps {
    width: number;
    height: number;
}

function makePixiApp({ width, height }: IStageProps) {
    const app = new Application({ width: width, height: height });
    document.body.appendChild(app.view);
    const sprite = Sprite.from(process.env.PUBLIC_URL + "/bunny.png");
    app.stage.addChild(sprite);
}

export default makePixiApp;
