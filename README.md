# Musify
A music app to add songs in favourite and playlist; created using React, TypeScript and Authentication. 

## Features
* Search your favourite song
* Add song to your favourite or create playlist

## Prerequisites

Before running this app, you must have the following:

* Node.js 17.0 or later installed on your computer
* An auth0 account
* Sahazam api from [rapidapi](https://rapidapi.com/apidojo/api/shazam)

## Getting Started

To get started with this app, follow these steps:

1. Clone this repo using the following command:

```bash
git clone https://github.com/builtbysuraj/musify.git
```

2. Move to the project directory using the following command:

```bash
cd musify
```

3. Install the required dependencies using the following command:

```bash
npm install
```

4. Create a .env file in the root directory of the project and add your secret api credentials, like this:
```
VITE_API_KEY=rapidapi-apikey-goes-here
VITE_API_HOST=rapiapi-host-goes-here
VITE_AUTH_DOMAIN=auth0-domain-url-goes-here
VITE_AUTH_CLIENTID=auth0-client-id-goes-here
```

5. Start the development server using the following command:

```bash
npm run dev
```

6. Congratulations ✨, you have successfully started the development server!
