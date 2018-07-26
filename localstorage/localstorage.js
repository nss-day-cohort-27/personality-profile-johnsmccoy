// It's time to make your own site that describes your personality type that you discovered from 16personalities.com. Your site should have a single HTML page, with the following sections.

// General Profile Section: Three statements that you agree with. Three statements that you don't agree with, and why.
// People Like Me Section: 4 people that share your personality type.
// Comunication Section:
// How would I communicate best with my little sib.
// How would I like my instructors to communicate with me.
// How would I like my teammates to communicate with me


// Requirements
// You must create an object with three keys, each representing one of the sections. Store that object in local storage.
// Then when you write your application, read from local storage and use the data to build the three sections in your HTML.
// document.createElement()
// localStorage.getItem()
// You must use Flexbox to layout your page structure.
// You must push to Github and notify your lead instructor when you are done.

// Setting up Object
const personality = {}
personality.general = []
personality.likeMe = []
personality.communication = []

stateAgree = {
    state1: "Knowledgable",
    state2: "Original",
    state3: "Charismatic",
    why: "Why not?"
}
stateDisagree = {
    state1: "Very Argumentative",
    state2: "Insensitive",
    state3: "difficult to focuse",
    why: "Why not?"
}
people = {
    person1: "Alfred 'Weird Al' Yankovic",
    person2: "Adam Savage",
    person3: "Mark Twain",
    person4: "Sarah Silverman",
}

Communicate = {
    sib: "Meet and speak in person.",
    instructor: "The way that they have! They have all been wonderful!",
    team: "How everyone has been acting is amamzing and if you need help your neighbor will."
}


personality.general.push(stateAgree)
personality.general.push(stateDisagree)
personality.likeMe.push(people)
personality.communication.push(Communicate)


const saveDatabase = function (databaseObject, localStorageKey) {
    const stringifiedDatabase = JSON.stringify(databaseObject)
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}
saveDatabase(personality, "personality")