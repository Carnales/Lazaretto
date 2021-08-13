function deleteElement() {
    console.log("Deleted");
    
    //Finds the Comment-box (Must click on twice since it has attribute hidden (weird))
    var commentField = document.getElementById("comment-dialog");
    
    //console.log(testi)

    //This function calls the replace button once comment fields is clicked on (twice :/)
    commentField.addEventListener("click", function(event) {
        replaceSubmit();
        event.preventDefault();
    });

    //data.parentNode.removeChild(data);
    //document.getElementById("info").outerHTML = "farts";
    //document.getElementById("subscribe-button").outerHTML = "";
    //$("#labelAndInputContainer").after("<tp-yt-paper-button>Element was there</tp-yt-paper-button>").appendTo("body");
}

//Replaces th Submit Button for the fake submit
function replaceSubmit() {
    //console.log("SDASDS");

    //replaces the Button NEEDS CSS OR SMTH CAUSE IT'S DOGWATER
    $("#submit-button").after("<tp-yt-paper-button id='replaceButton'>Element was there</tp-yt-paper-button>").appendTo("body");
}        

//waits for comment box
waitForElementToDisplay("#comment-dialog",function(){deleteElement();},1000,9000);

function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) != null) {
      callback();
      return;
    }
    else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
          return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}

//:(
console.log("Farts52");