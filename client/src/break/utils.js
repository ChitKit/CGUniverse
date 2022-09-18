/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-return-await */
import * as html2canvas_1 from 'html2canvas';
import matter_js_1 from 'matter-js';

export const getScreenshot = async () => await (0, html2canvas_1.default)(document.body, {
  allowTaint: true,
  y: window.scrollY,
  x: window.scrollX,
  height: window.innerHeight,
  width: window.innerWidth,
});

export const createStackEngine = (width, height) => {
  const engine = matter_js_1.Engine.create();
  engine.gravity.y = 0.05;
  const { world } = engine;
  const WALL_THICKNESS = 20;
  const UNIT_SIZE = 70;
  const columns = Math.ceil(width / UNIT_SIZE);
  const rows = Math.ceil(height / UNIT_SIZE);
  const stack = matter_js_1.Composites.stack(0, 0, columns, rows, 0, 0, (x, y) => {
    const rectangle = matter_js_1.Bodies.rectangle(x, y, UNIT_SIZE, UNIT_SIZE);
    rectangle.restitution = 0;
    rectangle.density = 0;
    return rectangle;
  });
  matter_js_1.Composite.add(world, [
    stack,
    matter_js_1.Bodies.rectangle(width / 2, height + WALL_THICKNESS / 2, width, WALL_THICKNESS, { isStatic: true }),
  ]);
  return {
    rows,
    engine,
    columns,
  };
};

