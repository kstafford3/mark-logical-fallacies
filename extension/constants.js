var FALLACIES = {
  "strawman": "Strawman",
  "false-cause": "False Cause",
  "appeal-to-emotion": "Appeal to Emotion",
  "the-fallacy-fallacy": "The Fallacy Fallacy",
  "slippery-slope": "Slippery Slope",
  "ad-hominem": "Ad Hominem",
  "tu-quoque": "Tu Quoque",
  "personal-incredulity": "Personal Incredulity",
  "special-pleading": "Special Pleading",
  "loaded-question": "Loaded Question",
  "burden-of-proof": "Burden of Proof",
  "ambiguity": "Ambiguity",
  "the-gamblers-fallacy": "The Gamblers Fallacy",
  "bandwagon": "Bandwagon",
  "appeal-to-authority": "Appeal to Authority",
  "composition-division": "Composition Division",
  "no-true-scotsman": "No True Scotsman",
  "genetic": "Genetic",
  "black-or-white": "Black or White",
  "begging-the-question": "Begging the Question",
  "appeal-to-nature": "Appeal to Nature",
  "anecdotal": "Anecdotal",
  "the-texas-sharpshooter": "The Texas Sharpshooter",
  "middle-ground": "Middle Ground"
};

var HOME_BASE_URL = "http://localhost:8080/";
var BASE_QUERY_URL = HOME_BASE_URL+"get-fallacies";
var BASE_POST_URL = HOME_BASE_URL+"add-fallacy";

var BASE_FALLACY_URL = "https://yourlogicalfallacyis.com/";

var MESSAGES = {
    GET_CONTEXT: "getContext",
    REFRESH_FALLACIES: "refreshFallacies"
};