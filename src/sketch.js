export default function sketch(p) {
  let rotation = 0;

  p.setup = function () {
    p.createCanvas(600, 400, p.WEBGL);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation !== null) {
      rotation = props.rotation * Math.PI / 180;
    }

    if (props.paused) {
      p.noLoop()
    } else {
      p.loop()
    }
  };

  p.draw = function () {
    rotation += 0.05
    p.background(100);
    p.normalMaterial();
    p.noStroke();
    p.push();
    p.rotateY(rotation);
    p.box(100);
    p.pop();
  };
};