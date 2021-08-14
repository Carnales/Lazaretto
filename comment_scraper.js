var KEY = "AIzaSyDR3_sdjrt-MNmfNKTXxHZefSAHI1sIF2I";

var url = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=50&moderationStatus=published&order=relevance&textFormat=plainText&videoId=0S7vC6RzHq0&key=" + KEY;

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

getComments().then(function(results) {
  // DO STUFF WITH THE RESULTS
  console.log(results);
});
