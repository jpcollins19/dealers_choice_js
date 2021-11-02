module.exports.home = (arr) => {
  return `
  <html>
  <head>
    <title>Actors</title>
    <link rel="stylesheet" href="/css/css.css" />
  </head>
  <body>
    <div id="header">
      <h1>Actors</h1>
      <div id="nav-bar">
      ${arr
        .map((obj) => `<a href="/details/${obj.id}">${obj.name}</a>`)
        .join("")}
      </div>
    </div>
  </body>
</html>`;
};
