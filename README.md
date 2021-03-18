# MERN: Full-stack Chat Application

#### Introduction

This repo consists of a **Chat Application** built with the MERN stack. 
I had this code sometimes back when I was learning MERN Stack. I  tried to modify the code to suit a job interview instructions
<br/><br/>
This is a full-stack chat application that can be up and running with just a few steps. 
Its frontend is built with [Material UI](https://material-ui.com/) running on top of React.
The backend is built with Express.js and Node.js.
Real-time message broadcasting is developed using [Socket.IO](https://socket.io/).

### Features
<b>Two preset Application Users</b>
*user1:*<br/>
username: kaff<br/>
password: kaffui<br/>

*user2:*<br/>
username: Kofi<br/>
password: Etb6W7i63XnTezB<br/>
This application provides users with the following features
<br/>
* At first Authentication using **JWT Tokens** : but I was asked not to use my own auth. So i tried to integrate auth0
* A **Global Chat** to broadcast messages to everyone else.
* A **Private Chat** functionality where users can chat with other users privately.
* Real-time updates to the user list, conversation list, and conversation messages

### How to use

You can have this application up and running with just a few steps because it has both the frontend and the backend in a single repository. Follow the steps below to do so.

1. Clone this repo
2. Once you have the repo, you need to install its dependencies. So using a terminal, move into the root directory of the project and execute `npm install` to install the dependencies of the Node.js server and then run `npm run client-install` to install the dependencies of the frontend. The second command is a custom command that I wrote to simplify the installation process.
3. This application uses MongoDB as its Database. So make sure you have it installed. You can find detailed guides on how to do so [here](https://docs.mongodb.com/manual/administration/install-community/). Once installed, make sure that your local MongoDB server is not protected by any kind of authentication. If there is authentication involved, make sure you edit the `mongoURI` in the `config/keys.js` file.
4. Finally, all you have to do is simply run `npm run dev`. If this command fails, try installing the package [concurrently](https://www.npmjs.com/package/concurrently) globally by running `npm install -g concurrently` and then running the `dev` command.
5. The frontend of the application will be automatically opened in your web browser and you can test it away.


### Things to note

* The frontend is created using [create-react-app](https://github.com/facebook/create-react-app)
* Database connections in the backend are handled using the [Mongoose ORM](https://mongoosejs.com/)
* Code quality is ensured using (ESLint)[https://eslint.org/]

Thank you