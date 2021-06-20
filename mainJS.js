import { getSortedAnimelList } from "./JS/binary_searsh_tree.js";
import SetModalAndFooter from "./JS/modalMessege.js";
import { baba, birdi1, dagi, levi, mimi, pandi, sirko } from "./JS/instances.js";
import { setSectionHeader, setSpeciesSection, set_Sub_Species_Section } from "./JS/setHTMLSections.js";
import { showCardsInHTML } from "./JS/setCard.js"


//list with instances of different animals:
export const myAnimalsList = [mimi, dagi, levi, sirko, birdi1, pandi, baba, dagi]
// console.log(levi);

//creating a Dynamic list of the instances species and subspecies:
const species = [...new Set(myAnimalsList.map(animal => animal.__proto__.__proto__.constructor.name))]
const subSpecies = [...new Set(myAnimalsList.map(animal => animal.__proto__.constructor))]


//Dynamically sorting the animals list (by weight) and assign to the a new variable - using Binart Seach Tree: 
const sorted = getSortedAnimelList(myAnimalsList)

//function that set the Footer tag, bottun and The modal message in HTML:
SetModalAndFooter(sorted)

//adding New Section (- Main header-) with Title (= h1 tag) and img to HTML file:
setSectionHeader()

//adding the animal species divs(-sections) inside the HTML file:

setSpeciesSection(species)

set_Sub_Species_Section(subSpecies)


//adding the animal cards in the HTML file gradually:
showCardsInHTML(myAnimalsList)

