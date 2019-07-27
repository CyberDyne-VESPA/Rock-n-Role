# Setup

## Installing Node.js

The preferred way to install Node.js is with a package manager - especially on Linux.

Instructions for how to do that [here][node-pac-man]

But if you're on MacOS or Windows and you don't have [Homebrew] or [Scoop],
you can just download it from [Nodejs.org]

## Git and npm

Navigate (`cd`) somewhere you like, and run

```
git clone https://github.com/mfdorst/Rock-n-Role
```

This will clone this project into a folder called `Rock-n-Role`. If you would like to name the folder something else, just add your desired folder name at the end of the command, or rename it yourself afterward.

Then, move into the directory:

```
cd Rock-n-Role
```

And run:

```
npm install
```

(or `npm i` for short).
This command will automatically install all of the dependencies listed in `package.json`.

To run the bot, do

```
npm start
```

and press `Ctrl+C` to stop the server.

## Nodemon

During development, you may find yourself running `npm start` over and over again, every time you change the code. [Nodemon] to the rescue - `nodemon` will run the server for you, and restart it every time you save a file.

To install:

```
npm i -g nodemon
```

(The `-g` option installs `nodemon` globally, meaning it will _not_ be added as a dependency for this project, and you can use it on other node projects as well.)

To run, simply:

```
nodemon
```

## Discord Setup

I made instructions [here][setup-discord-bot] for setting up a discord bot. It's not hard, but it's a little bit confusing.

Don't forget the `.env` part at the very bottom, or your bot will not be able to log in.

_If you get stuck, feel free to ask `@white_jeezus#7233` on Discord for help._

## VS Code

[Visual Studio Code][VSCode] is my preferred editor. It is a hackable editor heavily inspired by [Atom], which is a creation of GitHub.

Certainly your own editor will work fine, but if you chose VS Code I recommend you install the [ESLint][ESLint-extension] extension. This repository has some stricly enforced code style rules, and you will not be able to commit changes if you break those rules. The ESLint extension will help you fix any problems you may have.

## ESLint

If you chose not to run VSCode, you may want to run [ESLint] manually to check your code for errors, as well as conform to this project's code style.

Note that you do not need to install ESLint yourself, it will be installed automatically for you when you run `npm install`.

[node-pac-man]: https://nodejs.org/en/download/package-manager/
[Homebrew]: https://brew.sh/
[Scoop]: https://scoop.sh/
[Nodejs.org]: https://nodejs.org/en/
[VSCode]: https://code.visualstudio.com/
[Atom]: https://atom.io/
[ESLint-extension]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[ESLint]: https://eslint.org/
[Nodemon]: https://www.npmjs.com/package/nodemon
