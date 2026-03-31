
# Gamebytes - A Fantasy Console for the Web

Welcome to Gamebytes, a fantasy console inspired by the Gameboy built with HTML, CSS, and JavaScript. Gamebytes aims to simulate the constraints of older handheld hardware, such as the low resolution, limited colors, and tile based rendering; to encourge users to develop games of their own.

## Features:
* 160x144 resolution canvas
* 4-color pallette
* Tileset and sprite editor
* blockbased coding (for the user in the develop page, we will be writing in JavaScript!)
* Runs entirely in the browser

## Libraries:
- CanvasJS -> rendering the screen with pixels
- IndexedDB -> allows the user to save / restore your project


## Install:
Clone the repository (make sure you have git installed)
'git clone https://github.com/ufosc/Gamebytes.git'


## Project Structure:

> - gamebytes/
>   - index.html
>   - style.css
>   - main.js -> main screen, open up engine or editor from here
>   - engine/
>       - runtime.js -> complies the block code
>       - graphics.js -> renders the screen
>   - editor/
>       - spriteEditor.js
>       - tilemapEditor.js
>       - blockEditor.js
>       - blockBase.js -> collection of all the code blocks
>   - assets/
>       - (saved sprites/maps)



## Description:

**What is a fantasy console?**
- It works similar to an emulator. An emulator creates a software version of a prexisiting orginal hardware, allow the code for that hardware to run independently of the device! 
- A fantasy console aims to recreate the retro gaming experience without the need of the physical console, and allows the developers to freely decide the techincal specifications.

**Why build it?**
- For fun! And also to give people an experience thats hard to come by in today's time, with scalpers and horders making older consoles very hard to come by, and with the rise of pc gaming, handheld consoles are slowing dying out.
- Specifically, for those wanting to contribute, a fantasy console is in simple terms, a game engine. The lack of orginal hardware also comes with a lack of pre-existing games and code to run! So, Gamebytes will serve as a way to run and design games on the web. To do this, one of the main features that we need to code is the game engine itself, with a sprite editor, tilemapping, and custom code blocks for the users.

