import Animal from '/Classes/Animal.js'

export default function Bird(name, avgLive, weight, location, img, sound) {
    Animal.call(this, name, avgLive, weight, location, img, sound)
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
