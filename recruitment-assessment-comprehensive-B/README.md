# Recruitment Assessment

## Summary
Show your skills! Here are some skills that all Codesmith graduates should have before moving on. There are 4 parts, each in their own directory. Follow the directions in this README for instructions on each part.

##Get Started

````
npm install
````

## How do I know if my answer is correct?
At this point, you should be able to determine this without tests being provided to you. It is your responsibility to assess this. Using the console, node, or any other tools you like, confirm your solutions.

### Part 1 - JS Fundamentals

In `main.js`, complete the three functions in the file.
- [ ] `functionLocker`
- [ ] `keywordCount`
- [ ] `closestToTarget`


### Part 2 - Data structures and algorithms

- [ ] Implement a `Stack` class. That uses an object to store a collection of values, and knows its length it should have the `push` and `pop` methods.<br>
Remember that the Stack follows a last-in-first-out (LIFO) pattern. Pushing 1, 2, and then 3 means that popping will return 3, 2, then 1. **Pushing and popping should both be O(1) constant time complexity**.
- [ ] Implement a `forEach` method that will empty the stack in the correct order and pass each value to a callback. Don't forget to update the length.
- [ ] Using two stacks, implement a Queue. Do not use anything but these stack to store the collection of values.<br>
The queue is first-in-first-out (FIFO). How can you achieve this pattern using two stacks? This does **not** need to be O(1) time.


### Part 3 - Node

You'll be creating a server that listens on port 9393. When this server receives a `POST` request to `/file`, it takes the request body and saves it to a file.

- [ ] Create a Node.js server that listens on port 9393. Express is optional.
- [ ] Have your server accept GET requests to '/' and serve the index.html file.
- [ ] Look at the HTML, on clicking submit the page will send a post request to '/login' with a json object of the password value. There is also a link to a '/secret' route. If a password is sent to 'login' that matches the string '123', set a cookie named 'role' with the value of 'admin'.
- [ ] Create a GET route for '/secret' that responds with the string 'secret page' if there is a cookie named 'role' with the value of 'admin'. Otherwise, respond with the string 'denied'.
- [ ] Have your server accept POST requests to `/file`. The request body should be JSON.
- [ ] On each of these requests, save the request body to a file called `data.json`. **This file should be created in the part-3 folder.** Each request should overwrite the previous file.
- [ ] The file should be somewhat readable and have the JSON on mutiple lines indented properly by 2 spaces (don't overthink this, its something the JSON.stringify method is built to do for you. Look up the other arguments it takes [in the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify))


### Part 4 - Databases

You'll create another server. This one will utilize a DBMS. Feel free to copy over any code from part 3 or start over. You will be creating a database of movies. The Movie model will have the following attributes:

| attribute      | type    |
|----------------|---------|
| title          | string  |
| rating         | integer |
| category       | string  |
| awarded        | boolean |
| released       | date    |

Use either PostgreSQL or MongoDB. Remember that "strings" in SQL are "varchar". Help desk if the database setup is giving your problems.

**IMPORTANT: For testing purposes, use the `uri` variable provided to define and connect to your database.**

- [ ] Create a Node.js server that listens on port 9494. Frameworks and ORMs are optional.
- [ ] Have it accept POST requests to `/movies`. Request body should be JSON representation of a movie.
- [ ] Save the movie to the database and make sure the data types save in the database correctly.
- [ ] Create another route on the server for a GET request to `/movies`. This should respond with a JSON array of all the movies in the database.
