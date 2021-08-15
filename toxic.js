async function getToxicityLevel(text) {
  // implement ML over here
  // return percentage of toxicity out of 100
  // The minimum prediction confidence.
  const threshold = 0.9; //ignore this measurement

  // Load the model. Users optionally pass in a threshold and an array of
  // labels to include.
  return toxicity.load(threshold).then(model => {
    const sentences = [text];
    
    console.log(sentences);
    //model.summary()
    return model.classify(sentences).then(predictions => {
      // final prediction in `match` (either `true` or `false`).
      // If neither prediction exceeds the threshold, `match` is `null`.
      let isToxic = false;
      console.log(predictions);
      predictions.forEach(label => {
        if(label.results[0].probabilities[1] > 0.25) {
          console.log("SHOULD BE RETURNING TRUE");
          isToxic = true;
          
        }
      });
      return isToxic;
    });
  });
}
