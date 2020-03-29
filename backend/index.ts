import express from 'express';
import path from 'path';

const port = process.env.PORT || 5000
express()
  .use(express.static(path.join(__dirname, '../frontend/build')))
  .get('/', (req, res) => res.render('../frontend/build/index.html'))
  .listen(port, () => console.log(`Listening on ${port}`));
