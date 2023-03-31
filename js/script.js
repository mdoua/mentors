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

function initializeShifts(jData , message1="") {

    jData.forEach(element => {

        shiftMentorList[iM] = new MShift();
        shiftMentorList[iM].MentorName = element["mentorName"];
        shiftMentorList[iM].MentorShifts = element["mentorShifts"];
        iM++;
    });
   
    bindMentorsToDropDown();
}

//display mentor list
function bindMentorsToDropDown() {
    let dropDown = document.getElementById("ments");
    let el = document.createElement("option");
    el.textContent = "Select a mentor...";
    dropDown.appendChild(el);

    for (let i = 0; i < shiftMentorList.length; i++) {
        let la = shiftMentorList[i];
        let el = document.createElement("option");
        el.textContent = la.MentorName;
        el.value = la.MentorName;
        dropDown.appendChild(el);
    }
}

// display shifts for a mentor
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
    
    let mentorSc = form[0].value;
    let shiftSc = form[1].value;
    let fname = form[2].value;
    let lname = form[3].value;
    let phone = form[4].value;
    let email = form[5].value;
    let message = form[6].value;

    const c1 = "Thank you ";
    const c2 = " for your appointment.";

    let correctmail = ValidateEmail(email);
 
    if (correctmail) {

        const infoForm = {
            'mentorW' : mentorSc,
            'shiftW' : shiftSc,
            'fnameP' : fname,
            'lnameP' : lname,
            'phoneP' : phone,
            'emailP' : email,
            'messageP' : message,
        };
  
        const fs = require('fs');
        const saveData = (dataForm, file) => {
            const finished = (error) => { 
                if(error){
                    return ;
                }
            }
        
            const jsonData = JSON.stringify(dataForm, null,2);
            
            fs.writeFile(file, jsonData, finished);
        }

        saveData(infoForm,'file.json')
        
        let msgConfirmation = c1 + fname + " " + lname + c2; 
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
    const apiURL = "http://www.boredapi.com/api/activity/";
    const response = await fetch(apiURL);
    const data = await response.json();
    let {activity} = data;
    document.querySelector(".content").innerHTML = activity ;
}