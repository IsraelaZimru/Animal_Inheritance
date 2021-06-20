import { addAttributesToElement, NewElementWithCssClass } from "./helperFunctions.js";


export function setSectionHeader(params) {
    const hederSec = NewElementWithCssClass("div", ["container-fluid", "text-center"])
    //adding h1 tag - Main header- to HTML file:
    const h1 = NewElementWithCssClass("h1", ["text-center", "fontStyle"]);
    h1.textContent = "Animal Planet"
    h1.id = "Animal_h1"

    //adding Header img:
    const headerImg = NewElementWithCssClass("img", ["m-auto"])
    addAttributesToElement(headerImg, [["src", "/imges/img2.jpg"], ["width", "90%"], ["height", "500.25"]])

    const line_Hr = document.createElement("hr")

    //Insert in HTML
    hederSec.append(h1, headerImg, line_Hr)
    document.body.insertAdjacentElement("afterbegin", hederSec)


}

// original:
export function setSpeciesSection(lst) {
    const mainSection = document.getElementById("mainSection")
    const cardSection = NewElementWithCssClass("div", ["mt-4", "pt-4", "align-middle", "d-flex", "align-content-around", "flex-wrap", "row"])
    cardSection.id = "animalSection"
    lst.map(species => {
        const newSpeciesSection = NewElementWithCssClass("section", ["col", "m-3"]);
        newSpeciesSection.id = species
        const newSpeciesH1 = NewElementWithCssClass("h1", ["text-center", "text-white","fontStyle","sizeFont"]);
        newSpeciesH1.textContent = species
        newSpeciesSection.appendChild(newSpeciesH1)
        cardSection.append(newSpeciesSection)
        mainSection.appendChild(cardSection)
    })
}

export function set_Sub_Species_Section(lst) {
    lst.map(species => {
        const hisSection = document.getElementById(species.prototype.__proto__.constructor.name)
        const newSpeciesSection = NewElementWithCssClass("section", ["subDiv", "p-3"]);
        newSpeciesSection.id = species.name
        const newH1 = NewElementWithCssClass("h1", ["text-center", "text-white","fontStyle"]);
        newH1.textContent = species.name
        newSpeciesSection.appendChild(newH1)
        hisSection.append(newSpeciesSection)
    })
}
