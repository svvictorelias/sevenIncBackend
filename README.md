## Documentation

Link to API documentation with endpoints will be at the end, *after following all steps.*

## Configuring and initializing the project

First, you must clone the application on your machine:

```
    git clone https://github.com/svvictorelias/sevenIncBackend.git
```

through ssh

```
    git clone git@github.com:svvictorelias/sevenIncBackend.git
```

Use the file `.env` to communicate with the database. I used postgres database.

## Configuring local postgres

You can see how to get postgres and run it in your machine by [this link](https://www.postgresql.org/download/)<br>
After downloading postgres, use the `.envExample` to configurate your `.env`

```
DATABASE_URL = "postgresql://<username>:<password>@localhost:<portServer>/employee?schema=public"
```

Use this command to install all project dependencies.

```
    npm install
```

Use this command to create the database in your local machine.

```
    npx prisma migrate dev
```

And finally, use this command to start the server in development mode in this path: [http://localhost:3333](http://localhost:3333)

```
    npm run dev
```

## Endpoints

<h3>
    Employee
</h3>

| Action            | Request  | endpoint       |
| ----------------- | -------- | -------------- |
| List all employee | `GET`    | /employee      |
| List a employee   | `GET`    | /employee/{id} |
| Create a employee | `POST`   | /employee      |
| Update a employee | `PUT`    | /employee/{id} |
| Delete a employee | `DELETE` | /employee/{id} |

<br/>

## With more details, acess the http://localhost:3333/api-docs/

## Contact https://www.linkedin.com/in/svvictorelias/
