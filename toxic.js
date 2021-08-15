// DCP WORK FUNCTION
function workFn(ind, set) {
  return set[ind].results[0].probabilities[1] > 0.25;
}

async function getToxicityLevel(text) {
  // implement ML over here
  //await new Promise(r => setTimeout(r, 100));
  // return percentage of toxicity out of 100
  // The minimum prediction confidence.
  const threshold = 0.9; //ignore this measurement

  //tf.tensor([1, 2, 3, 4]).print();
  //const model = await tf.loadLayersModel($.get(chrome.runtime.getURL('/toxicity_1_default_1.tar.gz')));

  //console.log(model);
  // Load the model. Users optionally pass in a threshold and an array of
  // labels to include.
  return toxicity.load(threshold).then(model => {
    const sentences = [text];

    console.log(sentences);
    //model.summary()
    return model.classify(sentences).then(async(predictions) => {
      // `predictions` is an array of objects, one for each prediction head,
      // that contains the raw probabilities for each input along with the
      // final prediction in `match` (either `true` or `false`).
      // If neither prediction exceeds the threshold, `match` is `null`.
      let isToxic = false;
      console.log(predictions);

      const compute = dcp.compute;

      let job = compute.for(0, predictions.length-1, workFn, predictions);
      job.public.name = "Parsing through predictions";
      job.computeGroups = [{ joinKey: 'HIDDEN', joinSecret: 'HIDDEN' }];

      let resultSet = await job.exec();
      resultSet = Array.from(resultSet);
      // predictions.forEach(label => {
      //   if(label.results[0].probabilities[1] > 0.25) {
      //     console.log("SHOULD BE RETURNING TRUE");
      //     isToxic = true;
      //
      //   }
      // });
      return resultSet.includes(true);
    });
  });
}
