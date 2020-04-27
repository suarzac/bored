const myContent = document.querySelector('#content');
const mkPara = document.createElement('p');
const participantInput = $(".participantSelect");
const pSelection = document.querySelector("#selectParticipants");
const submitBtn = $("#submitBtn");

submitBtn.css("display", "none");
participantInput.css("display", "none");

// If user clicks on not bored button
function notBored() {
    console.log("notBored() called");
    mkPara.innerHTML = "That seems like a lie, why don't you try again.";
    myContent.innerHTML = '';
    myContent.append(mkPara);
}
//

// 
function newContent(activity) {
    console.log("Whoa newContent() got called");
    const remo = document.querySelector('#remo');
    // add 'activity' to new paragraph element
    mkPara.innerHTML = activity;

    // remove other button if it hasnt been yet
    if(remo != null){
        remo.remove();
    }
    //

    // wipe previous content
    myContent.innerHTML = '';
    $("#boredBtn").css("display", "none");
    participantInput.css("display", "initial");
    submitBtn.css("display", "initial");
    // append new paragraph
    myContent.append(mkPara);
}
//

// ajax error Handler
function showError() {
    console.log("There was an error.. somewhere (in ajax request)");
}
//

// ajax success function
function onSuccess(fetched) {
    console.log("Yay a success youre not a complete failure ");
    newContent(fetched['activity']);
}
//

// ajax call for random activity
function loadRandom() {
    $.ajax({
        url: "https://www.boredapi.com/api/activity",
        type: "GET",
        dataType: "json",
        error: showError,
        success: onSuccess
    });
}
//

// ajax call for activity based on participants
function loadParticipant() {
    console.log("heyo loadParticipant() got called");
    $.ajax({
        url: "https://www.boredapi.com/api/activity?participants=" + pSelection.value,
        type: "GET",
        dataType: "json",
        error: showError,
        success: onSuccess
    });
}
//
