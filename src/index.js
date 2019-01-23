import p5 from 'p5';

let s = (sketch) => {
    //make p5 globally available
    window.sketch = sketch
    
    sketch.setup = () => {
        //setup canvas
        sketch.createCanvas(window.innerWidth, window.innerHeight);
        sketch.background(0);
    }
//ss www
    sketch.draw = () =>{
        //draw things
    }
}

const P5 = new p5(s);