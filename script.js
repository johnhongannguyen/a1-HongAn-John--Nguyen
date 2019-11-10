//HTML elements
const buttons = document.getElementById('buttons');
const details = document.getElementById('details');

//Animal data
const data = {
    animals: [{
            name: "bee",
            location: "backyard",
            numberOfLegs: 6
        },
        {
            name: "duck",
            location: "lake",
            numberOfLegs: 2
        },
        {
            name: "human",
            location: "city",
            numberOfLegs: 2
        },
        {
            name: "cat",
            location: "house",
            numberOfLegs: 4
        }
    ]

}

//Add another animals
data.animals.push({
    name: "dog",
    location: "park",
    numberOfLegs: 4
})

const renderButtons = nameArray => {
    nameArray.forEach((name, index) => {

        const newButton = document.createElement("button");
        const buttonText = document.createTextNode(name);
        newButton.appendChild(buttonText);

        if (index === nameArray.length - 1) {
            //Bind method B to the last button
            newButton.setAttribute('onclick', `showDetailsB('${name}')`);
        } else {
            newButton.setAttribute('onclick', `showDetails('${name}')`);
        }
        
        buttons.appendChild(newButton);
    });
}

//Put animal name to array
const names = data.animals.map(animal => animal.name);
renderButtons(names);

//Show animal detail
const showDetails = (animalName) => {

    const targetAnimal = data.animals.find(animal => animal.name === animalName ? true : false);

    //Print animal detail
    const printAnimalDetails = (name, location, numberOfLegs) => `The animal ${name} lives in the ${location} and has ${numberOfLegs} legs.`;

    const {
        name,
        location,
        numberOfLegs
    } = targetAnimal;

    //Output to page
    details.innerHTML = printAnimalDetails(name, location, numberOfLegs);

}


//Show animal detail ---- Method B
const showDetailsB = (animalName) => {
    console.log("This is from method B");
    const targetAnimal = data.animals.find(animal => animal.name === animalName ? true : false);

    //Print animal detail
    const printAnimalDetails =
        (...args) => `The animal ${args[0]} lives in the ${args[1]} and has ${args[2]} legs.`;

    const animalValues = Object.values(targetAnimal);

    //Output to page
    details.innerHTML = printAnimalDetails(...animalValues);

}
