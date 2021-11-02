//Not the most robust of dealer's choice submissions I've received, but it gets the job done
const express = require(`express`);
const morgan = require(`morgan`);
const actorDetails = require(`./actorDetails`);
const path = require(`path`);
const home = require(`./html/home-page`);
const actorInfo = require(`./html/actor-info`);

const app = express();

app.use(require(`morgan`)(`dev`));
//I think it's cleaner to deliver one static folder with css and images, but that's preference
app.use(`/css`, express.static(path.join(__dirname, `css`)));
app.use(`/images`, express.static(path.join(__dirname, `images`)));

app.get(`/`, (req, res, next) => {
  const details = actorDetails.list();

  res.send(home.home(details));
});

app.get(`/details/:id`, (req, res, next) => {
  const detail = actorDetails.find(req.params.id);

// I'd either export an anonymous function in your html file or change the require name in this file. This code is telling me that actorInfo has more properties
  res.send(actorInfo.actorInfo(detail));
});

//I would get into the habit of declaring the environment port so your apps can deploy with issue
const port = 2000;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
