// Create web server using express
// Run server using node
// Make a GET request to /comments
// Send back some JSON (use an array of objects)

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  const comments = [
    { username: 'Tammy', comment: 'lololol' },
    { username: 'FishBoi', comment: 'I like fish' },
    { username: 'Tammy', comment: 'plz delete your account, FishBoi' },
    { username: 'FishBoi', comment: 'no waiy' },
    { username: 'Tammy', comment: 'I have a bf' },
    { username: 'FishBoi', comment: 'dats cool' }
  ];
  res.json(comments);
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});