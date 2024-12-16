import WndArr from './wnd.js';
import SvgImage, { svg } from './svg.js';
import { SliderSvg } from './SliderSvg.js';
import { win } from '../app.js';

export default class Layer {
    constructor(f, clr_b) {
        this.f = f;
        //this.canvas = document.createElement("canvas");
        //this.ctx = this.canvas.getContext("2d");
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.id = "mysvg";
        this.svg.setAttributeNS(null, "width", "100%");
        this.svg.setAttributeNS(null, "height", "100%");
        //console.log(this.svg.width.baseVal.valueInSpecifiedUnits);
        this.scale = 0; // Change to 1 on retina screens to see blurry canvas.

        this.w = 0;
        this.h = 0;
        this.mouse = { x: 100, y: 100, xc: 0, yc: 0, down: false, move: false };
        this.touch = { x: 100, y: 100, xc: 0, yc: 0, down: false, move: false };
        this.wheel = 0;
        
        //document.body.appendChild(this.canvas);
        document.body.appendChild(this.svg);

        this.fitToContainer();

        window.addEventListener("resize", () => this.fitToContainer());
        
    }
    // fit Canvas size to container
    fitToContainer() {
        this.scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
        //this.canvas.width = Math.floor(this.canvas.offsetWidth * this.scale);
        //this.canvas.height = Math.floor(this.canvas.offsetHeight * this.scale);
        this.w = window.innerWidth*this.scale;
        this.h = window.innerHeight*this.scale;
        this.f();
    }
}