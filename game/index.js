import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Renderer from "./graphics/renderer";
import Systems from "./systems";
import Entities from "./entities";

import ShaderPass from "./graphics/passes/shader-pass";
import ScanlineShader from "./graphics/shaders/scanline-shader";
import PixelShader from "./graphics/shaders/pixel-shader";

class Game extends React.Component {
  render() {
    return (
      <GameEngine
        style={{ backgroundColor: "black" }}
        ref={"engine"}
        onEvent={this.handleEvent}
        systems={Systems}
        entities={Entities()}
        renderer={Renderer(
          new ShaderPass(PixelShader()),
          new ShaderPass(ScanlineShader())
        )}
      />
    );
  }
}

export default Game;
