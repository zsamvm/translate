// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDYEEjp_RDRLa40S5tpla4_LQYb37Sg08Q",
        authDomain: "zsam-translate.firebaseapp.com",
        databaseURL: "https://zsam-translate.firebaseio.com",
        projectId: "zsam-translate",
        storageBucket: "zsam-translate.appspot.com",
        messagingSenderId: "614794353278"
    }
};
