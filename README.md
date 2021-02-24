# Certificates Application

This is a simple application to take IPFS documents and submit them to the Ethereum blockchain.

There is also code available to create documents on IPFS as well.

## Running the application

### For Development

This is a simple React JS application. Simply run `npm i` and `npm start` to run the application.

### For Docker

There is a `dockerfile` at the root of this repository. Run `docker build .` to create the images required for this application. Once the image is created you can run the image in a container with `docker run -p 80:80 <IMAGE_TAG_HERE>`. Once the command is run, you can access you the application at `localhost:80`.