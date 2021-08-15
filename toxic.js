async function getToxicityLevel(text) {
  

  // implement ML over here
  //await new Promise(r => setTimeout(r, 100));
  // return percentage of toxicity out of 100
  // The minimum prediction confidence.
  const threshold = 0.9; //ignore this measurement


  // load the model
  return toxicity.load(threshold).then(model => {
    const sentences = [text];
    
    console.log(sentences);

    return model.classify(sentences).then(predictions => {
      //predictions is an array of objects, one for each prediction
      let isToxic = false;
      console.log(predictions);
      //finds probabilities
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
