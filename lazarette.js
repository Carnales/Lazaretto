function deleteElement() {
    console.log("Deleted");

    //Finds the Comment-box (Must click on twice since it has attribute hidden (weird))
    var commentField = document.getElementById("simple-box");

    //console.log(testi)

    //This function calls the replace button once comment fields is clicked on (twice :/)
    commentField.addEventListener("click", function() {
        replaceSubmit();
    });

    //data.parentNode.removeChild(data);
    //document.getElementById("info").outerHTML = "farts";
    //document.getElementById("subscribe-button").outerHTML = "";
    //$("#labelAndInputContainer").after("<tp-yt-paper-button>Element was there</tp-yt-paper-button>").appendTo("body");
}

//Replaces the Submit Button for the fake submit
async function replaceSubmit() {
    await new Promise(r => setTimeout(r, 100));
    //replaces the Button NEEDS CSS OR SMTH CAUSE IT'S DOGWATER
    $("#submit-button").after("<tp-yt-paper-button id='replaceButton' style='background: green; font-size: 15px; color: white'>Lazaretto!</tp-yt-paper-button>").appendTo("body");

    replaceButton = document.getElementById("replaceButton");
    replaceButton.addEventListener("click", function(event) {
        commentAnalysis();
        replaceButton.innerHTML = "AI is Processing...";
        event.preventDefault();
    });
}

async function commentAnalysis() {
    var comment = document.getElementById("input-container");

    // retreive comment text and trim it of all surrounding whitespace
    var text = comment.textContent.trim();

    // Locks the Scroll Wheel
    // document.getElementsByTagName('body')[0].style.overflow = 'hidden';

    // has to await since ML might take time to get results
    var lvl = await getToxicityLevel(text);
    var message = "";

    // assign a warning message
    if (lvl < 50)
      message = "Comment looks good! Go ahead and post it.";
    else
      message = "Woah! This comment might be offensive, so be sure to edit it before you post.";


    // inject the warning modal
    $.get(chrome.runtime.getURL('/modal.html'), function(data) {
      $($.parseHTML(data)).appendTo('body');

      // replace the warning message
      document.getElementById("warning-message").innerHTML = message;

      // move the OG comment button here
       $("#place-for-button").append($("#submit-button"));

       // listen to go back
       var modal = document.getElementById("myModal");

       document.getElementById("reviewButton").addEventListener("click", goBack);

    });
}
function goBack() {
    var modal = document.getElementById("myModal");
    modal.remove();

    replaceButton = document.getElementById("replaceButton");
    replaceButton.innerHTML = "Be nicer this time!";
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
console.log("Farts7000");
