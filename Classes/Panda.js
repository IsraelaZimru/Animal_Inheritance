import Mammal from './Mammal.js';

export default function Panda(name, weight, location) {
    // Mammal.call(this, name, 70, weight, location, "", new Audio("/sounds/panda.aac"))
    Mammal.call(this, name, 92, weight, location, "/imges/panda.jpg", new Audio("/sounds/panda.aac"))

    this.Winter_Sleep = "4 month"
}

Panda.prototype = Object.create(Mammal.prototype);
Panda.prototype.constructor = Panda;

Panda.prototype.getFood = function () { return ["Sardine", "Crow"] }
