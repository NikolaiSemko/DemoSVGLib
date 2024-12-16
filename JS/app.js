import Layer from "./DWLib/main2.js";
import WndArr from "./DWLib/wnd.js";
import SvgImage, { svg } from "./DWLib/svg.js";
import { SliderSvg } from "./DWLib/SliderSvg.js";
import { Switch } from "./DWLib/Switch.js";
import { CheckBox } from "./DWLib/Check.js";
import { TextLine } from "./DWLib/SvgText.js";

let total = 30;
let wa;
let sl = [];
let logo = [];
let sw = [];
let sw2 = [];
let ch = [];
let anm = [];
let txt = [];
let txt1, txt2, txt3, txt4, txt5, txt6;
//let sl;
export let win;
let clr_b = "#118";

// var for Radar chart
//let radar_names = ["Consistent\nViewership %", "View/Subscr %", "Like/Dislike %", "Like/View %", "Comm/View %"];

let img_logo = new Image();
img_logo.src = "IMG/logo.png";

// ******************************************************************************************
function InfoChannels(W, H, x, y, w) {
  wa.ReDrawAll();
}
// ******************************************************************************************
function reDrawWin() {
  //InfoChannels(win.w, win.h, 0.0, 0.06, 0.44);
  //win.mouse.move = false;
  //win.wheel = 0;
  if (ch[total] != undefined) {
  if (ch[total].val) for (let i = 0; i < total; i++) anm[i].play();
  else for (let i = 0; i < total; i++) {
    anm[i].pause();
    wa.win[i].drawSVG(true);
  }
  }
}
function Slw(i) {
  ch[i].newX(sl[i].val);
  txt[i].size = Math.sqrt(sl[i].val*5);
  txt[i].draw();
}

// ******************************************************************************************
onload = () => {
  win = new Layer(reDrawWin, clr_b);
  txt1 = new TextLine(win.svg, 50, 2, "Hello World!", 2); 
  txt2 = new TextLine(win.svg, 70, 2, "Width = " + win.w, 3); 
  txt3 = new TextLine(win.svg, 70, 7, "Height = " + win.h, 3); 
  txt4 = new TextLine(win.svg, 70, 12, "Scale = " + win.scale, 3);
  txt5 = new TextLine(win.svg, 70, 17, "H inner = " + window.innerHeight, 3);
  txt6 = new TextLine(win.svg, 70, 22, "H offset = " + win.canvas.offsetHeight, 3);
  wa = new WndArr();
  for (let i = 0; i < total; i++) {
    let h = 0.1 + Math.random() / 3;
    let w = h * (Math.random() + 1);
    let x = (1 - w) * Math.random();
    let y = (1 - h) * Math.random();
    let clr1 = "#" + Math.floor(256 + Math.random() * 3839).toString(16) + "C";
    let clr2 = "#" + Math.floor(256 + Math.random() * 3839).toString(16) + "C";
    let par = win.svg;
    //if (i > 0) par = wa.win[i - 1].svg;
    wa.newWin(par, "Some_Title_" + i, x, y, w, h, 0.5, clr1, "#FF0", clr2, "#FFF", true, true, false);

    //wa.newWin({title: ("Some Title " + i), x: x, y: y, w: w, h: h, r: 0.5, clr: clr1, clr_text: '#FF0', clr_title: clr2, clr_text_title: '#FFF', move: true, resize: true, svg: true, shadow: false});
    if (i==total-1) logo[i] = new SvgImage(wa.win[i].svg, "youtube_logo", svg.youtube_logo, i, 0, 5, 95);
    else logo[i] = new SvgImage(wa.win[i].svg, "youtube_logo1", svg.youtube_logo1, i, 70, 5, 50);
    sl[i] = new SliderSvg(wa.win[i].svg, 30, 60, 60, 1.5, 0, 100, 2, 5, Slw, i);
    sw[i] = new Switch(wa.win[i].svg, 5, 20, 2, 2.8, Math.random() < 0.5); //,"#58A","#777","#68C","#888");
    sw2[i] = new Switch(wa.win[i].svg, 4.5, 33, 2, 4.4, Math.random() < 0.5);
    ch[i] = new CheckBox(wa.win[i].svg, 5, 70, 5, Math.random() < 0.5, null, "Dislikes");
    txt[i] = new TextLine(wa.win[i].svg, 50, 10, "Hello World!", 5);
    //else sl[i] = new SliderSvg1(win, wa.win[i].svg.id, "slider0" + i, 30, 60, 60, 2, 0, 300, 2, 150);
  }
  ch[total] = new CheckBox(win.svg, 2, 2, 2, true, reDrawWin, "Animation", 5);
  for (let i = 0; i < total; i++) {
    let target = "#" + wa.win[i].svg.id;
    anm[i] = anime({
      targets: target,
      width: "50%",
      height: "30%",
      x: (100 * Math.random()).toFixed(1),
      y: (100 * Math.random()).toFixed(1),
      direction: "alternate",
      easing: "easeInOutElastic",
      duration: 6000 + Math.random() * 2000,
      loop: true,
    });
  }
};

/*function myFunc() {
    for (let i = 0; i < total; i++) {
      if (i % 2 == 0) sl[i].addVal((i + 1) / 20);
      else sl[i].addVal((-i - 1) / 20);
    }
    requestAnimationFrame(myFunc);
  };
  requestAnimationFrame(myFunc);*/
