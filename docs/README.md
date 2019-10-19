## Description

A simple Twitch clone created for the Udemy course: Modern React and Redux [2019].

## Client Setup

1. create a client/src/credentials folder
2. add an index.js file with the following format:

```
const credentials = {
  googleClientId:
    'YOUR-GOOGLE-OAUTH-CLIENT-ID-HERE'
};

export default credentials;
```

## API Setup

1. create an api/db.json file
2. File should contain the following code:

```
{
  "streams": []
}

```

## Running the App

1. change to api directory and type in console: `npm run start`
2. change to rtmpserver directory and type i console: `npm run start`
3. change to a new console and switch to client directory and type: `npm run start`
