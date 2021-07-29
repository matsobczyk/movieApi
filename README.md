# MovieAPI

This project is a recruitment assignment. 

## Features
This API allows User to:
- authenticate (using provided dockerized auth service)
- publish Movies and information about them (using OMDB API)
- publish specified number of Movies per month based on user "subscription" (basic and premium)
- get list of all published Movies by other users
- check their "subscription" (additional)

# Endpoints
## AUTH
#### POST /auth
*  **URL Params**
   **Required:** N/A

* **Data Params**
    **Required:** 
    `username=[string]`
    `password=[string]`

* **Success Response:**
   **Code:** 200
    **Content:** 
    ```javascript
    {
        "token": JWTtoken
    }
    ```
## MOVIES
###  POST /movies
*  **URL Params**
   **Required:** N/A

* **Data Params**
    **Required:** 
    `title=[string]`

* **Success Response:**
   **Code:** 201
    **Content:** 
    ```javascript
    {
        "_id": "6102f6c769fecd001f83ae09",
        "title": "Matrix",
        "released": "1993-03-01T00:00:00.000Z",
        "genre": "Action, Drama, Fantasy",
        "director": "N/A",
        "__v": 0
    }
    ```
* **Error Response:**

  * **Code:** 429 TOO MANY REQUESTS
    **Content:** `"You have used 5 points. Number of your points left: 0"`

  OR
  * **Code:** 400 UNAUTHORIZED
    **Content:** `Acces Denied!`
---
### GET /movies
*  **URL Params**
   **Required:** N/A

* **Data Params**
    **Required:** N/A

* **Success Response:**
   **Code:** 200
    **Content:** 
    ```javascript
    {
        {
        "_id": "61019e008c32c570dca8797a",
        "title": "The Matrix",
        "released": "1999-03-30T22:00:00.000Z",
        "genre": "Action, Sci-Fi",
        "director": "Lana Wachowski, Lilly Wachowski",
        "__v": 0
        },
        {
        "_id": "610283f849a79d81e49dac9b",
        "title": "The Bourne Identity",
        "released": "2002-06-13T22:00:00.000Z",
        "genre": "Action, Mystery, Thriller",
        "director": "Doug Liman",
        "__v": 0
    },
    }
    ```
* **Error Response:**

  * **Code:** 400 UNAUTHORIZED
    **Content:** `Acces Denied!`
