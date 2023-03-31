let shiftMentorList = [];
let iM = 0;

class MShift {
    MentorName;
    MentorShifts = [];
}

window.onload = function () {
    
    initialisation ();
    
}

function initialisation (){
    fetch('./js/mShifts.json')
    .then(res => res.json())
    .then(data => initializeShifts(data))
    
}

function initializeShifts(jData) {
    console.log("LIST 1");
    console.log(jData);
    console.log(jData.length);

    jData.forEach(element => {
        console.log("element")
        console.log(element["mentorName"]);
        shiftMentorList[iM] = new MShift();
        shiftMentorList[iM].MentorName = element["mentorName"];
        console.log(shiftMentorList[iM]);
        shiftMentorList[iM].MentorShifts = element["mentorShifts"];
        iM++;
    });
   
    console.log("LIST LIST");
    console.log(shiftMentorList[--iM]);
    bindMentorsToDropDown();
    

}


function bindMentorsToDropDown() {
    let dropDown = document.getElementById("ments");
    let el = document.createElement("option");
    el.textContent = "Select a mentor...";
    dropDown.appendChild(el);

    console.log("bindMentorsToDropDown ", shiftMentorList.length);
    for (let i = 0; i < shiftMentorList.length; i++) {
        let la = shiftMentorList[i];
        let el = document.createElement("option");
        el.textContent = la.MentorName;
        el.value = la.MentorName;
        dropDown.appendChild(el);
    }
}

function loadShift() {

    let dropDown = document.getElementById("ments").value;

    let la = findShiftByMentor(dropDown);

    if (la != undefined) {

        let dropDown2 = document.getElementById("shifts");
        dropDown2.options.length = 0;

        let el = document.createElement("option");
        el.textContent = "Select a shift...";
        dropDown2.appendChild(el);

        for (let i = 0; i < la.MentorShifts.length; i++) {
            let el = document.createElement("option");
            el.textContent = la.MentorShifts[i];
            el.value = la.MentorShifts[i];
            dropDown2.appendChild(el);
        }
    }
}

function findShiftByMentor(name) {
    for (let i = 0; i < shiftMentorList.length; i++) {
        if (shiftMentorList[i]["MentorName"] === name) {
            return shiftMentorList[i];
        }
    }
    return undefined;
}

function ValidateEmail(mail) {
  
    //validate that email is valid by matching it to the regular expression
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mail.match(mailformat);
}

function submitForm1(form) {

    let [mentorSc,  shiftSc, fname, lname, phone, email, message] = form ;
    console.log("Om           ar")
    const c1 = "Thank you ";
    const c2 = " for your appointment.";

    let correctmail = ValidateEmail(email);
    console.log("Omar ooooooo")
    if (correctmail) {

        let msgConfirmation = c1 + fname + " " + lname + c2;
        let fileObj = {
            table: []
        };
        console.log("Omar")
        fileObj.table.push({
            "mentorW": mentorSc,
            "shiftW": shiftSc,
            "fnameP": fname,
            "lnameP": lname,
            "phoneP": phone,
            "emailP": email,
            "messageP": message,
        });
        console.log("Omar 1")
        let json = JSON.stringify(fileObj);
        console.log("Omar 2")
        let fs = require('fs');
        console.log("Omar 3")
        fs.writeFile('./js/file.json', json, 'utf8', callback);
        console.log("Omar 3")
        document.getElementById("confMsg").innerHTML = msgConfirmation;
    }

    else {
        document.getElementById("confMsg").innerHTML = "Please correct your email";
    }
}

function myFunction2() {
    let navbar1 = document.getElementById('navb');
    navbar1.classList.toggle('show');
}

//function to call API for random activity
 async function getRandomActivity() {
    var apiURL = "http://www.boredapi.com/api/activity/";
    var response = await fetch(apiURL);
    var data = await response.json();
    var {activity} = data;
    document.querySelector(".content").innerHTML = activity ;
}