import Animal from '/Classes/Animal.js'

export default function Mammal(name, avgLive, weight, location, img, sound) {
    Animal.call(this, name, avgLive, weight, location, img, sound)
}

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;
