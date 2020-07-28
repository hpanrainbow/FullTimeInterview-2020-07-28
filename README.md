
# Technical Interview
### Introduction
You've been selected from the applicants to be interviewed for the Software Developer position at the University of Ottawa's Faculty of Engineering Outreach Office.

To test your technical knowledge you will be tasked with developing a small web application using the following API: [An API of Fire And Ice](https://anapioficeandfire.com/). 

The documentation of the API describes to you how to get books, characters and other information about the books & TV series Game of Thrones. We would like you to build an application using these APIs to get information about the books and their main characters (see povCharacters under the documentation for books).

### Work to be done
You'll be given an Angular7 project as a boilerplate with a few things already built into it. 
- A service to help you make HTTP requests (so you don't have to build one). 
- A splash page for the application
- An empty page in which to start adding the book's information & POV characters

We **expect** the following features implemented using the Ice & Fire API:
- Information about the books
	- Name
	- Author(s)
	- Release year
	- isbn
	- List of main characters
- Information about the main characters of each book
	- Name
	- Culture
	- Birth information
	- Some titles
	- Some aliases
	- List of books they appear in
- An interface displaying this information
	- Compartmentalized data for the sake of usability & readability
- We also expect your code to be documented & tested

## Setup

Make sure you have the following installed:
```
latest chrome version
NodeJS 10.x, x > 10
NPM
```
Open the project in your favourite TypeScript editor. I recommend that you use [Visual Studio Code](https://code.visualstudio.com/download) in order to start working on the project

## Building the project
Go to the root of the project (folder with the package.json) folder and run the following commands: 
```
npm install
ng serve
```

To run the unit test, run the following commands:
``` 
npm install
ng test
```

To run the user acceptance test, run the following commands while the app is not running:
``` 
npm install
ng e2e
```
*requires latest chrome version*