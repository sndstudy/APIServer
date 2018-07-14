let express = require('express');
let cors = require('cors');
let app = express();

//クロスオリジン
app.use(cors());

app.get('/', (req, res) => {
  res.json({msg: 'This is CORS-enabled for all origins!'});
});

//静的ファイルの提供
app.use(express.static('src'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
