const path = require('path');
const algoliasearch = require('algoliasearch');
const getStdin = require('get-stdin');

interface Settings {
  appId: string;
  adminApiKey: string;
}

function main() {
  let env: Settings = { appId: null, adminApiKey: null };
  try { env = require('../.local/environment.local').environment.algolia; } catch (e) { }

  const ALGOLIA_APP_ID = env.appId || process.env.ALGOLIA_APP_ID;
  const ALGOLIA_ADMIN_API_KEY = env.adminApiKey || process.env.ALGOLIA_ADMIN_API_KEY;

  const ALGOLIA_INDEX_NAME = 'trails';
  const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY);
  const index = client.initIndex(ALGOLIA_INDEX_NAME);

  getStdin()
    .then((data: string) => JSON.parse(data).trails)
    .then((trails: object) => Object.keys(trails)
        .map((key: string) => {
          const item = trails[key];
          return { objectID: key, id: key, ...item };
        }))
    .then((objects) => {
      index.addObjects(objects, function (err) {
        if (err) {
          console.error('Failed to index objects:');
          console.error(err.stack);
          process.exit(1);
        }
      });
    });
}

main();
