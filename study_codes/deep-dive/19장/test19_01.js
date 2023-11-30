function Circle(radius) {
    this.radius = radius;

    this.hasOwnProperty = function hasOwnProperty() {
        console.log("넌 못 지나간다.");
        return "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ";
    }
}

let c1 = new Circle(4);

let f = function Circle(raidus) {

}