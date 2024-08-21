const express = require('express');
const app = express();

app.use(express.json());



const games = [
  {
    id: 1,
    name: 'The Legend of Zelda: Breath of the Wild',
    genre: 'Action-adventure',
    releaseDate: '2017-03-03',
    platform: 'Nintendo Switch',
    rating: 9.5
  },
  {
    id: 2,
    name: 'The Witcher 3: Wild Hunt',
    genre: 'Action RPG',
    releaseDate: '2015-05-19',
    platform: 'PlayStation 4',
    rating: 9.8
  },
  {
    id: 3,
    name: 'Red Dead Redemption 2',
    genre: 'Action-adventure',
    releaseDate: '2018-10-26',
    platform: 'PlayStation 4',
    rating: 9.5
  }
];

app.get('/games', (req, res) => {
  res.json(games);
});

app.post('/games', (req, res) => {
  const { id, name, genre, releaseDate, platform, rating } = req.body;
  const game = { id, name, genre, releaseDate, platform, rating };
  games.push(game);
  res.status(201).json(game);
});

app.put('/games/:id', (req, res) => {
  const { id } = req.params;
  const { name, genre, releaseDate, platform, rating } = req.body;
  const game = games.find((game) => game.id === parseInt(id));
  if (!game) return res.status(404).json({ message: 'Game not found' });
  game.name = name;
  game.genre = genre;
  game.releaseDate = releaseDate;
  game.platform = platform;
  game.rating = rating;
  res.json(game);
});

app.delete('/games/:id', (req, res) => {
  const { id } = req.params;
  const index = games.findIndex((game) => game.id === parseInt(id));
  if (index === -1) return res.status(404).json({ message: 'Game not found' });
  games.splice(index, 1);
  res.json({ message: 'Game removed' });
});


app.listen(3000, () => { 
  console.log('Server is running on http://localhost:3000');
})