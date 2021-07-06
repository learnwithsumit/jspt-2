// 3. destructuring aliases

const language = {
  name: "JavaScript",
  founded: 1995,
  founder: "Brendan Eich",
};

const { name: languageName, founder: createrName } = language;

console.log(languageName, createrName);
