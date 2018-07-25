const personlity = {
    profile: {
            agree1: "Knowledgable",
            agree2: "Original",
            agree3: "Charismatic",
            dis1:"Very Argumentative",
            dis2:"Insensitive",
            dis3:"difficult to focuse"
    },
    why:["I agree with all these statements"],
    
    likeme: [
        { 
            name1: "Alfred 'Weird Al' Yankovic",
            name2: "Adam Savage",
            name3: "Mark Twain",
            name4: "Sarah Silverman"
       }, 
    ],
    comunication: [
        {
            lilsib: "",
            coach: "",
            team: ""
        }
    ]}
    
    function setData(nameTag, jsObject){
        let stringifiedObject = JSON.stringify(jsObject);
        localStorage.setItem(nameTag, stringifiedObject);
        }
        
        setData("Agree"&& "Disagree",personlity);
    