'use strict';

import { Contact } from "./Contact.js?v=1.1"

const btnAdd = document.querySelector(".form-submit");
const contactInfo = document.querySelector(".form-name");
const grid = document.querySelector(".container");
const msg = document.querySelector(".msg");
const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;
 
let contactArr = [];
btnAdd.onclick = function () {
    let info = contactInfo.value.trim().split(",");

    if (info.length !== 3) {
        alert("Need to enter name,city,email and separated through comma!")
        return;
    }
    if (!emailRegex.test(info[2])) {
        alert("email is incorrect!");
        return;
    }

    const div = createDiv(info);
    grid.insertBefore(div, grid.childNodes[0]);
    itemCount();
    return false;
}

function createDiv(info) {
   
    const div = document.createElement("div"); //Create div
    div.className = "grid-item";  
    const contactDiv = new Contact(div);
    div.id = contactArr.length;
    contactDiv.name = info[0];
    contactDiv.city = info[1];
    contactDiv.email = info[2];
    contactDiv.addInfoToDiv();
    contactArr.push(contactDiv);

    div.addEventListener("click", function () {    
       
        grid.removeChild(this);
        contactArr = deleteItem(this.id);
        itemCount();
    });

    return div;
}
function deleteItem(index) {
   
    const new_arr = [];

    for (let i = 0; i < contactArr.length; i++) {
        contactArr[i].div.id != index && new_arr.push(contactArr[i]);
    }
    return new_arr;
}
function itemCount() {
    
    msg.innerHTML = `Saved: ${contactArr.length}`;
}