### Follow these instructions to restore the dumped database

- The folder `my-portal\database_dump` present in `map_prototype` branch contains the dumped database.
- First create a database where you will dump these tables.
	- `psql -U postgres`
	- Type the password for user `postgres`
	- `CREATE DATABASE mydb;`
- Exit the psql terminal by `\q` and come to normal terminal
- Use the command: `pg_restore -U postgres --dbname=mydb filepath` to restore database. Put `filepath` without quotes.
- Use: `\l` to checkout all databases.
- `\connect mydb`
- `\d bills` for the description of bill table.
- There are two tables: `items` and `bills`, same as the ones I sent you for finding insights. 
