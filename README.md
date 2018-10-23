# Github analytics light 

A minimal starter project to practice with [Github REST API](https://developer.github.com/v3/). 

![start project](docs/cover.png)

## Running the app

### 1. Install project dependencies
```sh
$ npm install
```

### 2. Add Environment Variables
Copy the `.env.default` file and rename it to `.env`.
```sh
$ cp .env.default .env
```

then edit the `OAUTH_TOKEN` environment variable. You can use your github personal access token which you can find in [Github developer settings](https://github.com/settings/tokens)


### 3. Run the app

You can start the server by running
```$
$ npm start
```

or you can start the server in development mode. This command uses [nodemon](https://github.com/remy/nodemon) to watch changes in your code and automatically restart the server.
```sh
$ npm run dev
```

Finally, use `npm test` to run tests.

