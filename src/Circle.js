export default class Circle {
    constructor() {
        this.log = "Instantiated"
    }
    draw() {
        sketch.ellipse(sketch.width / 2, sketch.height / 2, sketch.height * 0.75, sketch.height * 0.75)
    }
    log() {
        console.log(this.log)
    }
}