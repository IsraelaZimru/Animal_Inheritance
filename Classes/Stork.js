import Bird from './Bird.js'

export default function Stork(name, weight, location) {
    Bird.call(this, name, 40, weight, location, '/imges/stork.jpg', new Audio("/sounds/stork.aac"))
    this.fly = "Wandering"
}

Stork.prototype = Object.create(Bird.prototype);
Stork.prototype.constructor = Stork;

Stork.prototype.getFood = function () { return ["Sardine"] }

// export function setSpeciesSection(animalLst) {
//     const mainSection = document.getElementById("mainSection")
//     const cardSection = NewElementWithCssClass("div", ["mt-4", "pt-4", "align-middle", "d-flex", "align-content-around", "flex-wrap", "row"])
//     cardSection.id = "animalSection"
//     const leftCard = animalLst.map((species, i) => {
//         const newSpeciesSection = NewElementWithCssClass("section", ["col", "m-3"]);
//         newSpeciesSection.id = species
//         const newSpeciesH1 = NewElementWithCssClass("h1", ["text-center", "text-white", "fontStyle"]);
//         newSpeciesH1.textContent = species.name
//         // if (species.__proto__.constructor.name !== Animal) {
//             newSpeciesSection.appendChild(newSpeciesH1)
//             cardSection.append(newSpeciesSection)
//             mainSection.appendChild(cardSection)
//             // delete animalLst[i]
//         // }
//     })
//     console.log(leftCard);
// }


//original:
// export function setSpeciesSection(lst) {
//     const mainSection = document.getElementById("mainSection")
//     const cardSection = NewElementWithCssClass("div", ["mt-4", "pt-4", "align-middle", "d-flex", "align-content-around", "flex-wrap", "row"])
//     cardSection.id = "animalSection"
//     lst.map(species => {
//         const newSpeciesSection = NewElementWithCssClass("section", ["col", "m-3"]);
//         newSpeciesSection.id = species
//         const newSpeciesH1 = NewElementWithCssClass("h1", ["text-center", "text-white","fontStyle"]);
//         newSpeciesH1.textContent = species
//         newSpeciesSection.appendChild(newSpeciesH1)
//         cardSection.append(newSpeciesSection)
//         mainSection.appendChild(cardSection)
//     })
// }
