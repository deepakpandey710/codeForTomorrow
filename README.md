There are many things I can improve in the code. Such as,
1. I should have encrypted the password before storing it in db.
2. For the past six months, I've been working with the MongoDB database, so I haven't been in touch with PostgreSQL. There are a few areas where improvements can be made, but it won't take me long to refresh my understanding of all the postgres concepts.
3. I should have declared the secret key in the environment variables, but since I'm treating this as temporary, I've used it directly within the code.



for adding new schema: npx sequelize migration:create --name createUser
for data migration: npx sequelize db:migrate --env test
