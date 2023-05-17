"use strict";

let imageFiles = [
    {name: "images/alabama.jpg", description: "motorcycle"},
    {name: "images/atlanta.jpg", description: "stairs"},
    {name: "images/chicago.jpg", description: "stage"},
    {name: "images/florida.jpg", description: "flower"},
    {name: "images/ohio.jpg", description: "city"},
];

const stateImages = document.getElementById("stateImages");
stateImages.onchange = optionChanged;
const addBtn = document.getElementById("addBtn");
addBtn.onclick = addButtonClicked;
const clearBtn = document.getElementById("clearBtn");
clearBtn.onclick = clearBtnClicked;
const addImage = document.getElementById("addImage");

  for(let i=0; i<imageFiles.length; i++) {
    let theOption = document.createElement('option');
    theOption.textContent = imageFiles[i].description;
    stateImages.appendChild(theOption);
  }

  let img;
  function optionChanged() {
    if(stateImages.options[stateImages.selectedIndex].textContent === 'motorcycle') {
        img = document.createElement("img");
        img.src = "./images/alabama.jpg";
        img.alt = "picture of motorcycle";    
    }
    if(stateImages.options[stateImages.selectedIndex].textContent === 'stairs') {
        img = document.createElement("img");
        img.src = "./images/atlanta.jpg";
        img.alt = "picture of motorcycle";    
    }
    if(stateImages.options[stateImages.selectedIndex].textContent === 'stage') {
        img = document.createElement("img");
        img.src = "./images/chicago.jpg";
        img.alt = "picture of motorcycle";    
    }
    if(stateImages.options[stateImages.selectedIndex].textContent === 'flower') {
        img = document.createElement("img");
        img.src = "./images/florida.jpg";
        img.alt = "picture of motorcycle";    
    }
    if(stateImages.options[stateImages.selectedIndex].textContent === 'city') {
        img = document.createElement("img");
        img.src = "./images/ohio.jpg";
        img.alt = "picture of motorcycle";    
    }
  }

  function addButtonClicked() {
    addImage.appendChild(img);
  }

  function clearBtnClicked() {
    for(let i=0; i<5; i++) {
    let removeImages = document.getElementsByTagName("img");
    let addImage = document.getElementById("addImage");
    addImage.removeChild(removeImages[i]);
    }
  }

  


