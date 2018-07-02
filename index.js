let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//静的ファイルの提供
app.use(express.static('src'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
