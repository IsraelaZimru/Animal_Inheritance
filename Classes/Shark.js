
// Fish.call(this, name, 36, weight, location, "/imges/shark.jpg", ["Sardine", "Crow"])

import Fish from "./fish.js";




export default function Shark(name, weight, location) {
    Fish.call(this, name, 26, weight, location, "/imges/shark.jpg", new Audio("/sounds/shark.aac"))
    this.Number_of_teeth = "300 teeth"
}

Shark.prototype = Object.create(Fish.prototype);
Shark.prototype.constructor = Shark;

Shark.prototype.getFood = function () { return ["Sardine", "Crow", "Deer"] };
