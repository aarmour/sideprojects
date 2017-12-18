// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  algolia: {
    appId: 'LTZYBZRN7J',
    searchApiKey: '365422edbcba4a229d4cd18e9604e022'
  },
  firebase: {
    apiKey: 'AIzaSyBAEnzMUL4HDvcfHu7DzrVkTUQ9nv8Zvnk',
    authDomain: 'trails-app-staging.firebaseapp.com',
    databaseURL: 'https://trails-app-staging.firebaseio.com',
    projectId: 'trails-app-staging',
    storageBucket: 'trails-app-staging.appspot.com',
    messagingSenderId: '967390497634'
  }
};
