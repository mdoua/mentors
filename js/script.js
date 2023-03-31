window.onload = function () {
    initializeShifts();
    bindMentorsToDropDown();

}


class MShift {
    MentorName;
    MentorShifts = [];
}

let ShiftMentorList = [];


function initializeShifts() {

    let la1 = new MShift();
    la1.MentorName = "Mentor1";
    la1.MentorShifts = ["shift1", "shift2", "shift3"];

    let la2 = new MShift();
    la2.MentorName = "Mentor2";
    la2.MentorShifts = ["shift1", "shift2"];

    let la3 = new MShift();
    la3.MentorName = "Mentor3";
    la3.MentorShifts = ["shift1", "shift2", "shift3", "shift4", "shift5"];

    let la4 = new MShift();
    la4.MentorName = "Mentor4";
    la4.MentorShifts = ["shift1", "shift2", "shift3", "shift4", "shift5"];

    let la5 = new MShift();
    la5.MentorName = "Mentor5";
    la5.MentorShifts = ["shift1", "shift2", "shift3", "shift4"];

    let la6 = new MShift();
    la6.MentorName = "Mentor6";
    la6.MentorShifts = ["shift1", "shift2", "shift3", "shift4"];

    ShiftMentorList = [la1, la2, la3, la4, la5, la6];
}

function bindMentorsToDropDown() {
    let dropDown = document.getElementById("ments");
    let el = document.createElement("option");
    el.textContent = "Select a mentor...";
    dropDown.appendChild(el);

    for (let i = 0; i < ShiftMentorList.length; i++) {
        let la = ShiftMentorList[i];
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
    for (let i = 0; i < ShiftMentorList.length; i++) {
        if (ShiftMentorList[i]["MentorName"] === name) {
            return ShiftMentorList[i];
        }
    }
    return undefined;
}

function myFunction2() {
    let navbar1 = document.getElementById('navb');
    navbar1.classList.toggle('show');
}

function ValidateEmail(mail) {
  
    //validate that email is valid by matching it to the regular expression
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mail.match(mailformat);
}

function myFun(form) {


    let [mentorSc,  shiftSc, fname, lname, phone, email, message] = form ;

    const c1 = "Thank you ";
    const c2 = " for your appointment.";

    let correctmail = ValidateEmail(email);

    if (correctmail) {

        let msgConfirmation = c1 + fname + " " + lname + c2;
        let fileObj = {
            table: []
        };

        fileObj.table.push({
            mentorW: mentorSc,
            shiftW: shiftSc,
            fnameP: fname,
            lnameP: lname,
            phoneP: phone,
            emailP: email,
            messageP: message,
        });

        let json = JSON.stringify(fileObj);

        let fs = require('fs');
       
        fs.writeFile('file.json', json, 'utf8', callback);

        document.getElementById("confMsg").innerHTML = msgConfirmation;
    }

    else {
        document.getElementById("confMsg").innerHTML = "Please correct your email";
    }
}


 async function getRandomActivity() {
    var apiURL = "http://www.boredapi.com/api/activity/";
    var response = await fetch(apiURL);
    var data = await response.json();
    var {activity} = data;
    document.querySelector(".content").innerHTML = activity ;
}