async function getToxicityLevel(text) {
  // implement ML over here
  await new Promise(r => setTimeout(r, 100));
  // return percentage of toxicity out of 100

  return text.includes("bad") ? 100 : 0;
}
