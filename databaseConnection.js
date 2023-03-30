const database = require("mongoose");
const is_qoddi = process.env.IS_QODDI || false;
const databaseName = "lab_example";
const qoddiURI =
  "mongodb+srv://spark359:Mselinasein7*B@clusters.72edveh.mongodb.net/" +
  databaseName +
  "?retryWrites=true&w=majority";
const localURI =
  "mongodb://localhost/" + databaseName + "?authSource=admin&retryWrites=true";
if (is_qoddi) {
  database.connect(qoddiURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} else {
  database.connect(localURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
