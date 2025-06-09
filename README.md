# Picdit Reddit-clone

Codecademy project where I created an application using Reddit API, React, Redux, and Unit testing (Vitest and React Testing Library), OAuth2 running on a backend server.

[live page](https://reddit-clone-ecru-pi.vercel.app/)

 <!--
## The project requrirements are:
The application allow users to view and search posts and comments provided by API.
  - Version control: Git and Github
  - Write unit tests
  - Write end-to-end tests
  - Responsive design
  - Deploy
  - Users see an initial view of the data when first visiting the app
  - Users can search the data using terms
  - Users can filter the data based on categories that are predefined
  - Users are shown a detailed view (modal or new page/route) when they select an item
  - Users are delighted with a cohesive design
  - Users are delighted with animations and transitions
  - Users are able to leave error state
-->

## An open-ended Reddit clone project using the Reddit API.
- Redux for state management
- React Router for routing
- My own responsive design
- OAuth2 running on a backend server


The app is **Picdit**, which displays only picture-based posts using the Reddit Official API.

The user can:
- View posts from Reddit
- Select post categories from the menu
- Search for custom terms
- See post details along with comments

 I designed the layout myself, including loading screens and error handling.

  The frontend is hosted on Vercel, and the backend Express server is hosted on Render:
  
  [backend-server-github](https://github.com/4balage4/reddit-clone-backend)
  
  I implemented OAuth2 with the implicit grant flow. Tokens expire in one hour, and the server handles refreshing them.


## Development journey
  I started the project using the Reddit Public API.
  Once deployed, I encountered CORS errors on iOS.
To bypass them, I introduced a backend server. However, I later discovered that search functionality doesn't work properly with the backend and public API combination.
So, I switched to using OAuth2, this was a great learning journey. 
Implementing it alongside an Express server was challenging, especially during deployment.

Deploying both the web app and the server on Vercel proved tricky, so I decided to self-host the server on Render.

This experience gave me a much better understanding of:
- The deployment process
- OAuth2 authorization flow
- Running and maintaining my backend server

It extended the time I spent on the project, but it was a valuable learning experience.


Reflection
This project showed me that I can and should step out of my comfort zone.
I learned to:
 - Explore new approaches
 - Handle errors more efficiently
 - Adapt and recover faster from setbacks
  
![Screenshot 2025-05-21 120009](https://github.com/user-attachments/assets/25abba05-6be8-4244-9535-5492552c5c51)

<img src="https://github.com/user-attachments/assets/5b8f5ee6-7e87-4466-a3f9-77f46d31e145" alt="pictid mobile view" width="200" />

