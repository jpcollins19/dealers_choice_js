module.exports.actorInfo = (obj) => {
  return `
    <html>
    <head>
      <title>Actors</title>
      <link rel="stylesheet" href="../css/css.css" />
    </head>
    <body>
      <div id="header">
        <h1>Actors</h1>
        <div id="nav-bar">
          <a href="/">Home</a>
        </div>
        <div>
          <h1>${obj.name}</h1>
          <img src="../images/${obj.name}.jpg" />
          <h3>Date of Birth: ${obj["Date of Birth"]}</h3>
          <h3>Place of Birth: ${obj["Place of Birth"]}</h3>
          <h3>Known For: ${obj["Known For"]}</h3>
        </div>
      </div>
    </body>
  </html>`;
};
