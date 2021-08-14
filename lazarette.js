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
        event.preventDefault();
    });
}

function commentAnalysis() {
    var commentText = document.getElementById("input-container");
    alert(commentText.textContent);

    //Locks the Scroll Wheel
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';


    wrapperDiv = document.createElement("div");
    wrapperDiv.setAttribute("style","position: absolute; left: 0px; top: 0px; background-color: rgb(255, 255, 255); opacity: 0.5; z-index: 2000; height: 100%; width: 100%;");

    iframeElement = document.createElement("iframe");
    iframeElement.setAttribute("style","width: 100%; height: 100%;");

    wrapperDiv.appendChild(iframeElement);

    modalDialogParentDiv = document.createElement("div");
    modalDialogParentDiv.setAttribute("style","position: absolute; width: 350px; border: 1px solid rgb(51, 102, 153); padding: 10px; background-color: rgb(255, 255, 255); z-index: 2001; overflow: auto; text-align: center; top: 149px; left: 497px;");

    modalDialogSiblingDiv = document.createElement("div");

    modalDialogTextDiv = document.createElement("div");
    modalDialogTextDiv.setAttribute("style" , "text-align:center");

    modalDialogTextSpan = document.createElement("span");
    modalDialogText = document.createElement("strong");
    modalDialogText.innerHTML = "Processing...  Please Wait.";

    modalDialogTextSpan.appendChild(modalDialogText);
    modalDialogTextDiv.appendChild(modalDialogTextSpan);

    modalDialogSiblingDiv.appendChild(modalDialogTextDiv);
    modalDialogParentDiv.appendChild(modalDialogSiblingDiv);

    document.getElementById("body").appendChild(wrapperDiv);
    document.getElementById("body").appendChild(modalDialogParentDiv);
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
console.log("Farts68");
