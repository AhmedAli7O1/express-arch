'use strict';

function start ({ app, port }) {
  return new Promise((resolve, reject) => {

    const listener = app.listen(port, () => {
      resolve(`server started on port ${port}`);
    });

    listener.on('error', (err) => {
      reject(err);
    });

  });
}

module.exports = { start };
