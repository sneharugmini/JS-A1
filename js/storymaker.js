// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors

const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

// Constants for p tag to display query selectors

const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags

const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyDisplay = document.getElementById("story");

// Variables for pre-defined arrays

const nouns1 = ["Walter", "Jesse", "Skyler", "Hank", "Gustavo"];
const verbs = ["sat on", "ate", "danced with", "saw", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a fat"];
const nouns2 = ["needle", "toothpick", "shoe", "blanket", "door"];
const settings = ["on the beach", "in the forest", "on mars", "in the bermuda triangle", "on the bed"];

// Variables for count to grab array elements

let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;



/* Functions
-------------------------------------------------- */

// Function to add student ID and name
function addStudentInfo() {
    const studentInfoParagraph = document.getElementById("studentId");
    studentInfoParagraph.textContent = "Student ID: 200533731, Name: Sneha Rugmini";
}

const addInfoButton = document.getElementById("addInfoButton"); // Replace "addInfoButton" with the actual button ID
addInfoButton.addEventListener("click", addStudentInfo);



// Function to reset the story
function resetStory() {
    choosenNoun1.textContent = "";
    choosenVerb.textContent = "";
    choosenAdjective.textContent = "";
    choosenNoun2.textContent = "";
    choosenSetting.textContent = "";
    storyDisplay.textContent = "";
}

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetStory);



function noun1_on_click() {
    

    choosenNoun1.textContent = nouns1[noun1Count];

    

    if (noun1Count < nouns1.length - 1) {
        noun1Count++;
    } else {
        noun1Count = 0;
    }
}

function verb_on_click() {
    

    choosenVerb.textContent = verbs[verbCount];

    

    if (verbCount < verbs.length - 1) {
        verbCount++;
    } else {
        verbCount = 0;
    }
}

function adjective_on_click() {
    

    choosenAdjective.textContent = adjectives[adjectiveCount];

    

    if (adjectiveCount < adjectives.length - 1) {
        adjectiveCount++;
    } else {
        adjectiveCount = 0;
    }
}

function noun2_on_click() {
    

    choosenNoun2.textContent = nouns2[noun2Count];

    

    if (noun2Count < nouns2.length - 1) {
        noun2Count++;
    } else {
        noun2Count = 0;
    }
}

function setting_on_click() {
    

    choosenSetting.textContent = settings[settingCount];

    

    if (settingCount < settings.length - 1) {
        settingCount++;
    } else {
        settingCount = 0;
    }
}


// concatenate the user story and display

function playback_on_click() {
    const story = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}`;
    storyDisplay.textContent = story;
}


// grabbing random element from arrays, concatenate and display

function random_on_click() {
    const randomNoun1 = nouns1[Math.floor(Math.random() * nouns1.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    const randomSetting = settings[Math.floor(Math.random() * settings.length)];

    const randomStory = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}`;
    storyDisplay.textContent = randomStory;
}

/* Event Listeners
-------------------------------------------------- */

noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);

playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);



