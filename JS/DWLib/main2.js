export default class Layer {
  constructor(f, clr_b) {
    // create new canvas element
    this.canvas = document.createElement("canvas");
    //this.canvas.style.background = clr_b;
    this.f = f;
    //this.canvas.tabindex = 1;

    // get acceess to 2d drawing tools
    this.ctx = this.canvas.getContext("2d");
    this.scale = 0; // Change to 1 on retina screens to see blurry canvas.

    this.w = 0;
    this.h = 0;
    this.mouse = { x: 100, y: 100, xc: 0, yc: 0, down: false, move: false };
    this.touch = { x: 100, y: 100, xc: 0, yc: 0, down: false, move: false };
    this.wheel = 0;
    this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.svg.id = "mysvg";
    this.svg.style.zIndex = 10;
    //this.svg.setAttributeNS(null,"viewBox", "0 0 100 100");
    this.svg.setAttributeNS(null, "width", "100%");
    this.svg.setAttributeNS(null, "height", "100%");

    document.body.appendChild(this.canvas);
    document.body.appendChild(this.svg);

    this.fitToContainer();

    window.addEventListener("resize", () => this.fitToContainer());
  }
  fitToContainer() {
    this.scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
    this.canvas.width = Math.floor(this.canvas.offsetWidth * this.scale);
    this.canvas.height = Math.floor(this.canvas.offsetHeight * this.scale);

    this.w = this.canvas.width;
    this.h = this.canvas.height;
    this.f();
  }
}
