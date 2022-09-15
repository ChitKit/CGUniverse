/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-cond-assign */
/* eslint-disable no-void */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-import-module-exports */
import matter_js_1 from 'matter-js';
import Renderer_1 from './renderer';
import { getScreenshot, createStackEngine } from './utils';

let _a;
const canvas = document.createElement('canvas');
canvas.style.width = '100vw';
canvas.style.height = '100vh';
canvas.style.position = 'fixed';
canvas.style.zIndex = '100000000000';
canvas.style.top = '0';
canvas.style.right = '0';
const ctx = canvas.getContext('2d');
(_a = document.getElementById('ctrl')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
  (0, exports.easterBreaker)();
});
const easterBreaker = async () => {
  let _a; let
    _b;
  if (!ctx) {
    throw new Error('canvas context is not supported ');
  }
  const width = Math.ceil(window.innerWidth / 30) * 30;
  const height = Math.ceil(window.innerHeight / 30) * 30;
  canvas.width = width;
  canvas.height = height;
  (_a = document.body) === null || _a === void 0 ? void 0 : _a.appendChild(canvas);
  const _image = await getScreenshot();
  const image = document.createElement('canvas');
  image.width = width;
  image.height = height;
  const relative_height = Math.ceil(_image.height * width / _image.width);
  // crop top
  (_b = image.getContext('2d')) === null || _b === void 0 ? void 0 : _b.drawImage(_image, 0, 0, width, relative_height);
  const { engine, rows, columns } = createStackEngine(width, height);
  const slots = [];
  const { bodies } = engine.world.composites[0];
  for (let row = 0; row < rows; row++) {
    const slotRow = [];
    slots.push(slotRow);
    for (let column = 0; column < columns; column++) {
      slotRow.push(bodies[row * columns + column]);
    }
  }
  const renderer = new Renderer_1({
    slots,
    canvas,
    image,
    options: {},
  });
  renderer.run();
  // create runner
  const runner = matter_js_1.Runner.create();
  matter_js_1.Runner.run(runner, engine);
  // add mouse control
  const mouse = matter_js_1.Mouse.create(canvas);
  const mouseConstraint = matter_js_1.MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: true,
      },
    },
  });
  matter_js_1.Composite.add(engine.world, mouseConstraint);
};

export default easterBreaker;
