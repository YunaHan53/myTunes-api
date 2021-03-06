# myTunes-api

This is the backend of my myTunes application.

## **Backstory**
I have always been facinated with music and how much music streaming platforms have changed so drastically in the past 2 decades. I remember listening to music on the vinyl when I was very young, and then on tape cassettes and CD players. I also remember clearly when portable players such as ipods came out like it was yesterday. When the internet became popular, I also jumped on the digital bandwagon and later on, when I was 17, I also became interested in building my own websites and have always looked for ways to add a music player to my page. This was no exception. I know this is what I'm passionate about and that's why I'm building my very own music app.

**Templates**
- [React Template](https://git.generalassemb.ly/ga-wdi-boston/react-auth-template)
- [API Template](https://git.generalassemb.ly/ga-wdi-boston/express-api-template)

**ERD**

---
  ![](app/images/ERD.png)


## **Planning**
Day 1: I started by setting up the Express API template and the React Auth Template. After the initial commit is done and both server and client are deployed, I proceeded to the API template and added model & routes for my song resource, and also completed CRUD on the api using Postman.
Day 2: On the client side, I began adding Component & routes to Song with these files: Songs, Song, CreateSong & EditSong. Also wrote all the necessary axios calls to the API. I was able to complete most of the CRUD by the end of the day but with EditSong & Delete still in progress.
Day 3: I continued to work on EditSong and Delete and finished CRUD on the client side by midday. I then added a new Song component called SongPlayer where I can stream the song when a user clicks on the song link.
Day 4: I had a bit of a setback because getting a song to play on clicking the song link proves to be a bit of a challenge. With some help though, I was able to complete the task. I then started doing some CSS styling and updating the README. Finishing up the project.

**User Stories**
- A user will be able to sign up if a new user.
- A user will be able to sign in if an existing user.
- A user will be able to change password.
- A user will be able to sign out.
- A user will be able to create a list of songs with the song title, artist & the song URL from any source of their choice.
- A user will be able to display all their songs on their Song List.
- A user will be able to view the song info upon clicking on the song link.
- A user will be able to edit their song via a form-field.
- A user will be able to delete songs.
- A user will be able to play the uploaded songs on a web music player when the link is clicked.


**Technologies Used**
- HTML5
- CSS3
- JavaScript
- React.js
- Express.js
- Handlebars
- Bootstrap
- MongoDB
- Heroku
- Github


**Unsolved Problems**
- I would like to have user be able to create a playlist with their created songs.
- I would like to have the player to play the playlist with or without loop options.
- I would like to have the player to play music continuously when you navigate the site.


## Repos & Deployed Sites

[Client Repo](https://github.com/YunaHan53/myTunes-client)
[Deployed Client](https://yunahan53.github.io/myTunes-client/)
[API Repo](https://github.com/YunaHan53/myTunes-api)
[Deployed API](https://aqueous-temple-54494.herokuapp.com/)


## Task Commands

| Command                | Effect                                                                                                      |
|------------------------|-------------------------------------------------------------------------------------------------------------|
| `npm run server`       | Starts a development server with `nodemon` that automatically refreshes when you change something.                                                                                         |
| `npm test`             | Runs automated tests.                                                                                       |
| `npm run debug-server` | Starts the server in debug mode, which will print lots of extra info about what's happening inside the app. |


### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |


## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
