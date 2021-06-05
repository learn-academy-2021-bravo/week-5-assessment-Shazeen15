# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?

   - SQL stands for Structured Query Language · SQL lets you access and manipulate databases.

2. What the PostgreSQL query that would return all the content in a particular table?

   - select (\* every column) from (table name)

3. What is the command to create a new Rails application with a PostgreSQL database?

   - $ rails new app_name -d postgresql -T

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?

   - $ rails generate model Meal breakfast:string lunch:string dinner:integer

5. What is a migration? Why would you use one?

   - Migrations are used to modify the shape of an existing database.
   - Changing the shape of the database can include adding or deleting columns, changing the name of the column, or changing the data type of a column.

6. What is the command to generate a migration file?

   - $ rails generate migration action_name_here
   - $ rails db:migrate

7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
   - To generate a rails model PascalCasing is the convention. ex: ModelName. - the name of the table becomes plural. ex: ModelNames
8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?

   - the schema file in a Rails application is a file that is created when Rails db:migrate is initially ran. it containls the shape of the data. You should not modify it. rails does not want you to do that. Run rails db: mirgrate when you want to change the shape of your data.

9. What is the Rails console?

   - Rails console helps interact directly with Active Record.

10. What is the Rails console command to see all the content in a particular table?
    - Table_name.all
