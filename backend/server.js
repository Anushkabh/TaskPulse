const app = require("./app");
const connectDataBase = require("./Database/DataBase");
const dotenv = require("dotenv").config({ path: "./.env" });

let myPort = process.env.PORT;

// connecting to database
connectDataBase();

app.listen(myPort || 8080, () => {
  console.log(`Server running at http://localhost:${myPort}`);
});
