/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
export default class Renderer {
  constructor(config) {
    this.config = config;
    this.imageSliceBank = {};
    this.slotSize = config.canvas.width / config.slots[0].length;
  }

  run() {
    this.render();
    window.requestAnimationFrame(this.run.bind(this));
  }

  getImageSlice(row, column) {
    const serialize = (row, column) => `${row}_${column}`;
    if (this.imageSliceBank[serialize(row, column)]) { return this.imageSliceBank[serialize(row, column)]; }
    const canvas = document.createElement('canvas');
    canvas.width = this.slotSize;
    canvas.height = this.slotSize;
    const ctx = canvas.getContext('2d');
    if (!ctx) { throw new Error('2d Context not supported'); }
    ctx.drawImage(this.config.image, column * this.slotSize, row * this.slotSize, this.slotSize, this.slotSize, 0, 0, this.slotSize, this.slotSize);
    this.imageSliceBank[serialize(row, column)] = canvas;
    return canvas;
  }

  forEverySlot(callback) {
    const { slots } = this.config;
    for (let row = 0; row < slots.length; row++) {
      for (let column = 0; column < slots[0].length; column++) {
        callback(slots[row][column], { row, column });
      }
    }
  }

  render() {
    const ctx = this.config.canvas.getContext('2d');
    const img = new Image();
    img.src = '/command.jpg';
    const pattern = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, this.config.canvas.width, this.config.canvas.height);
    ctx.beginPath();
    this.forEverySlot((slot, { row, column }) => {
      const imageSlice = this.getImageSlice(row, column);
      const { x, y } = slot.position;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(slot.angle);
      ctx.drawImage(imageSlice, -this.slotSize / 2, -this.slotSize / 2);
      ctx.restore();
    });
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#999';
    ctx.stroke();
  }
}
