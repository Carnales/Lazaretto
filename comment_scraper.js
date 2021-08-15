var KEY = "AIzaSyDR3_sdjrt-MNmfNKTXxHZefSAHI1sIF2I";
var ID = window.location.href.split("?v=")[1];
var url = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=50&moderationStatus=published&textFormat=plainText&videoId=" + ID + "&key=" + KEY;

function getComments() {
  return $.getJSON(url).then(function(data) {
      var items = data.items;

      var comments = [];
      for (var i = 0; i < items.length; i++) {
        comments.push(items[i].snippet.topLevelComment.snippet.textDisplay);
      }
      return comments;
  });
}

getComments().then(async function(results) {
    // DO STUFF WITH THE RESULTS
    console.log(results);

    var total = 0;
    for (var i = 0; i < results.length; i++) {
      console.log("[+] progressing at " + Math.round((i+1)*100/results.length) + "%");
      var isToxic = await getToxicityLevel(results[i]);
      console.log("[?] returning --> " + isToxic);
      if (isToxic)
        total++;
    }

    lvl = total*100 / results.length;

    console.log("Avg toxicity level is " + Math.round(lvl) + "%");

    // save to local storage
    chrome.storage.local.set({t_lvl: Math.round(lvl)+"%"});
    console.log("ITS BEEN SAVED TO LOCAL");
});
