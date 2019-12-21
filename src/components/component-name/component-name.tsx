import { Component, h } from "@stencil/core";
import { AnimationLoop, Model } from "@luma.gl/engine";
import { clear, Buffer } from "@luma.gl/webgl";

@Component({
  tag: "component-name",
  styleUrl: "component-name.scss",
  shadow: true
})
export class ComponentName {
  componentDidLoad() {
    const loop = new AnimationLoop({
      onInitialize({ gl }) {
        const positionBuffer = new Buffer(gl, new Float32Array([
          -0.5, -0.5,
          0.5, -0.5,
          0.0, 0.5
        ]));

        const colorBuffer = new Buffer(gl, new Float32Array([
          1.0, 0.0, 0.0,
          0.0, 1.0, 0.0,
          0.0, 0.0, 1.0
        ]));

        const vs = `
          attribute vec2 position;
          attribute vec3 color;

          varying vec3 vColor;

          void main() {
            vColor = color;
            gl_Position = vec4(position, 0.0, 1.0);
          }
        `;

        const fs = `
          varying vec3 vColor;

          void main() {
            gl_FragColor = vec4(vColor, 1.0);
          }
        `;

        const model = new Model(gl, {
          vs,
          fs,
          attributes: {
            position: positionBuffer,
            color: colorBuffer
          },
          vertexCount: 3
        });

        return { model };
      },

      onRender({ gl, model }) {
        clear(gl, { color: [0, 0, 0, 1] });
        model.draw();
      }
    });

    loop.start();
  }

  render() {
    return <div>Hello, World! I'm {}</div>;
  }
}
