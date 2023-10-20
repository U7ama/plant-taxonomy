const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const http = require("http")
const fs = require("fs")
const axios = require('axios'); // HTTP client
const FormData = require('form-data'); // Readable "multipart/form-data" 
const path = require("path");
const multer = require('multer')
const cors = require("cors");

let image_1 = path.join(__dirname,'images','image_1.jpeg')
let image_2 = path.join(__dirname,'images','image_2.jpeg')

const users = require("./routes/api/users");
const port = process.env.PORT || 5000;

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
// Upload Photo

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
    image_1 = path.join(__dirname,'images',file.originalname)
    image_2 = path.join(__dirname,'images',file.originalname)
  },
})

const upload = multer({ storage: storage })
app.use(cors());
app.post('/image', upload.single('file'), function (req, res) {
  res.json({})
})
// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db, process.env.MONGODB_CONNECTION_STRING,
    { useNewUrlParser: true,
      useUnifiedTopology: true, }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

//Calling API
app.get('/ident',(req, res) => {
  (async () => {
      let form = new FormData();
      
      form.append('organs', 'flower');pla
      form.append('images', fs.createReadStream(image_1));
      
      form.append('organs', 'leaf');
      form.append('images', fs.createReadStream(image_2));
      
      try {
          const { status, data } = await axios.post(
              'https://my-api.plantnet.org/v2/identify/all?include-related-images=true&lang=ur&api-key=PLANTNET_API',
              form, {
                  headers: form.getHeaders()
              }
          );
          console.log('status', status); // should be: 200
          console.log('data', require('util').inspect(data, false, null, true)); // should be: read "Step 6" below
          res.status(200).send({express: data});
          
        } catch (error) {
          console.error('error', error);
      }
      })();
}
)
//Build
// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
