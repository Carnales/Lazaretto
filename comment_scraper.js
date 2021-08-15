var KEY = "AIzaSyDR3_sdjrt-MNmfNKTXxHZefSAHI1sIF2I";
var ID = window.location.href.split("?v=")[1];
var url = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=50&moderationStatus=published&order=relevance&textFormat=plainText&videoId=" + ID + "&key=" + KEY;

// WORK FUNCTION FOR DCP
function workFn(value, set) {
  return set[value].snippet.topLevelComment.snippet.textDisplay;
}

function getComments() {
  return $.getJSON(url).then(async function(data) {
// IMPLEMENTING DCP TO SCRAPE COMMENTS FASTER (IMPORT FOR LARGE DATASETS OF THOUSANDS OF COMMENTS)
      var compute = dcp.compute;

      var items = data.items;

      // LOADING IN DCP JOB
      let job = compute.for(0, items.length-1, workFn, items);

      job.public.name = "Comment Scraping";
      job.computeGroups = [{ joinKey: 'HIDDEN FOR GITHUB', joinSecret: 'HIDDEN FOR GITHUB' }];

      let resultSet = await job.exec();
      resultSet = Array.from(resultSet);
      return resultSet;
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
