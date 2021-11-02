const express = require(`express`);
const morgan = require(`morgan`);
const actorDetails = require(`./actorDetails`);
const path = require(`path`);
const home = require(`./html/home-page`);
const actorInfo = require(`./html/actor-info`);

const app = express();

app.use(require(`morgan`)(`dev`));
app.use(`/css`, express.static(path.join(__dirname, `css`)));
app.use(`/images`, express.static(path.join(__dirname, `images`)));

app.get(`/`, (req, res, next) => {
  const details = actorDetails.list();

  res.send(home.home(details));
});

app.get(`/details/:id`, (req, res, next) => {
  const detail = actorDetails.find(req.params.id);

  res.send(actorInfo.actorInfo(detail));
});

const port = 2000;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
