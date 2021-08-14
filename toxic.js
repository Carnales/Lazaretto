async function getToxicityLevel(text) {
  // implement ML over here
  await new Promise(r => setTimeout(r, 100));
  // return percentage of toxicity out of 100
  // The minimum prediction confidence.
  const threshold = 0.9;

  tf.tensor([1, 2, 3, 4]).print();
  const model = await tf.loadLayersModel($.get(chrome.runtime.getURL('/toxicity_1_default_1.tar.gz')));

  console.log(model);
  // Load the model. Users optionally pass in a threshold and an array of
  // labels to include.
  toxicity.load(threshold).then(model => {
    const sentences = ['you suck'];

  model.classify(sentences).then(predictions => {
    // `predictions` is an array of objects, one for each prediction head,
    // that contains the raw probabilities for each input along with the
    // final prediction in `match` (either `true` or `false`).
    // If neither prediction exceeds the threshold, `match` is `null`.

    console.log(predictions);
    /*
    prints:
    {
      "label": "identity_attack",
      "results": [{
        "probabilities": [0.9659664034843445, 0.03403361141681671],
        "match": false
      }]
    },
    {
      "label": "insult",
      "results": [{
        "probabilities": [0.08124706149101257, 0.9187529683113098],
        "match": true
      }]
    },
    ...
     */
  });
});

  return text.includes("bad") ? 100 : 0;
}
