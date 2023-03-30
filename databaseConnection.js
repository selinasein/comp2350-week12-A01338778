const database = require("mongoose");
const is_qoddi = process.env.IS_QODDI || false;
const databaseName = "lab_example";
const qoddiURI =
  "mongodb+srv://spark359:Mselinasein7*B@clusters.72edveh.mongodb.net/lab_example?retryWrites=true&w=majority";
const localURI =
  "mongodb://127.0.0.1:27017/lab_example?retryWrites=true&serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&3t.uriVersion=3&3t.connection.name=Local+-+imported+on+Mar+28%2C+2023&3t.alwaysShowAuthDB=true&3t.alwaysShowDBFromUserRole=true";
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
