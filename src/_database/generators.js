const fs = require("fs");
const _ = require("lodash");
const faker = require("faker");

//Schemas
const decksSchema = () => ({
  key: "decks",
  id: faker.unique(faker.random.uuid),
  title: _.upperFirst(faker.hacker.ingverb()),
  imgUrl: faker.image.technics(720, 1440, true),
  cards: [
    {
      question: `How to ${faker.hacker.verb()}?`,
      answer: faker.hacker.phrase()
    },
    {
      question: `How to ${faker.hacker.verb()}?`,
      answer: faker.hacker.phrase()
    },
    {
      question: `How to ${faker.hacker.verb()}?`,
      answer: faker.hacker.phrase()
    }
  ],
  timestamp: faker.date.recent(60)
});

/**
 *
 * @param data
 */
function writeDataToFile(data) {
  fs.mkdir(__dirname + "/static", { recursive: true }, err => {
    if (err && err.code != "EEXIST") {
      console.error("There was an error creating the db directory: ", err);
    } else {
      fs.writeFile(
        __dirname + "/static/db.json",
        JSON.stringify(data),
        function(err) {
          if (err) {
            console.error(err.message);
          } else {
            console.log("db data generated successfully!");
          }
        }
      );
    }
  });
}

/**
 *
 * @param schema
 * @param count
 * @return {{}}
 */
function generateData(schema, count = 10) {
  const key = schema().key;
  const newSchema = () => _.omit(schema(), "key");

  // generate data
  let data = { [key]: [] };

  for (let i = count; i >= 0; i--) {
    data[key].push(newSchema());
  }

  return data;
}

/**
 *
 * @param schemas
 */
function compileDbData(schemas) {
  let data = {};

  schemas.forEach(schema => {
    _.merge(data, generateData(schema));
  });

  writeDataToFile(data);
}

compileDbData([decksSchema]);
