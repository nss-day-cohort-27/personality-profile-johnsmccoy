 // Requirements
// You must create an object with three keys, each representing one of the sections. Store that object in local storage.
// Then when you write your application, read from local storage and use the data to build the three sections in your HTML.
// document.createElement()
// localStorage.getItem()
// You must use Flexbox to layout your page structure.
// You must push to Github and notify your lead instructor when you are done.

const loadData = JSON.parse(localStorage.getItem("personality"))
const stateAgreed = loadData.general[0]
const stateDisagreed = loadData.general[1]
const peopleLike = loadData.likeMe[0]
const communicationStyles = loadData.communication[0]


const general = document.querySelector("#general")
const people = document.querySelector("#likeme")
const communication = document.querySelector("#communication")

general.innerHTML = `<h2>Statements That I Agree With</h2>
<ul>
<li>${stateAgreed.state1}</li>
<li>${stateAgreed.state3}</li>
<li>${stateAgreed.state3}</li>
<li>Why:${stateAgreed.why}</li>
</ul>
<h2>Statements I Disagree With</h2>
<ul>
<li>${stateDisagreed.state1}</li>
<li>${stateDisagreed.state2}</li>
<li>${stateDisagreed.state3}</li>
<li>Why:${stateDisagreed.why}</li>
</ul>`

people.innerHTML = `<h2>People Like Me</h2>
<ul>
<li>${peopleLike.person1}</li>
<li>${peopleLike.person2}</li>
<li>${peopleLike.person3}</li>
<li>${peopleLike.person4}</li>
</ul>`

communication.innerHTML = `<h2>Communication Styles/Types</h2>
<h3>Little Sib:</h3>
<p>${communicationStyles.sib}</p>
<h3>Instructor:</h3>
<p>${communicationStyles.instructor}</p>
<h3>Team:</h3>
<p>${communicationStyles.team}</p>
`


console.log(loadData)