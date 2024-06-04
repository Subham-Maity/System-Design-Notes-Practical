> Download - https://dev.mysql.com/downloads/file/?id=528488
### 1. Create, Use and make table in the DB
- Create the team Database
- The USE statement switches the current database context to the team database. This means that any subsequent SQL queries will operate within this database.
- This SQL statement creates a table named member within the team database.
- The member table has three columns:
  - id: An integer column representing a unique identifier for each member.
  - name: A variable-length string (up to 50 characters) to store the member’s name.
  - age: An integer column to store the age of the member. The NOT NULL constraint ensures that an age value must be provided.

```sql
CREATE DATABASE team;

USE team;

CREATE TABLE member (
id INT PRIMARY KEY,
name VARCHAR(50),
age INT NOT NULL
)


```
### 2. Drop Database 

```sql
CREATE DATABASE team;
DROP DATABASE team; //use this
USE ....

```

### 3. Insert Data into the table

```sql
CREATE DATABASE te...

USE t....
INSERT INTO member VALUES(1, "Subham", 26);//use this
CREATE TABLE member ....
```
### 4. View the data

```sql
SELECT * FROM member;
```
### 5. Total Datatype in SQL

| **Data Type** | **Description**                                                                | **Example**                                              |
|---------------|--------------------------------------------------------------------------------|----------------------------------------------------------|
| CHAR          | Fixed-length string (0-255 characters)                                         | CHAR(50) - Stores 50 characters                          |
| VARCHAR       | Variable-length string (0-65535 characters)                                    | VARCHAR(500) - Stores up to 500 characters               |
| BLOB          | Binary large object (e.g., images, documents)                                  | BLOB(10000) - Stores binary data up to 10,000 bytes      |
| INT           | Integer (range: -2,147,483,648 to 2,147,483,647)                               | INT - Stores whole numbers                               |
| TINYINT       | Tiny integer (range: -128 to 127)                                              | TINYINT - Smaller integer values                         |
| BIGINT        | Big integer (range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)   | BIGINT - Larger integer values                           |
| BIT           | Binary digit (values 0 or 1)                                                   | BIT(8) - Stores 8 binary digits                          |
| FLOAT         | Approximate number with 23 digits precision                                    | FLOAT(4.5) - Stores decimal numbers                      |
| DOUBLE        | Decimal number with up to 53 digits precision                                  | DOUBLE(3.14) - Stores more precise decimal numbers       |
| BOOLEAN       | Boolean value (true or false)                                                  | BOOLEAN - Represents true or false                       |
| DATE          | Date in format YYYY-MM-DD                                                      | DATE - Stores dates (e.g., '2024-06-04')                 |


- Signed & Unsigned
> - TINYINT UNSIGNED(0 to 255) - Can store only positive values
> - TINYINT (-128 to 127) - Can store negative and positive both numbers


### 6. Types of SQL Commands

- **DDL (Data Definition Language)**:
  - DDL deals with defining and managing the structure of the database schema. It includes commands to create, modify, and delete database objects (tables, indexes, views, etc.).
  - Some essential DDL commands:
    - **CREATE**: Creates a new database object (e.g., a table).
      ```sql
      CREATE TABLE employees (
          id INT,
          name VARCHAR(50)
      );
      ```
    - **DROP**: Deletes an existing database object.
      ```sql
      DROP TABLE employees;
      ```
    - **ALTER**: Modifies the structure of an existing table.
      ```sql
      ALTER TABLE employees ADD COLUMN salary DECIMAL(10, 2);
      ```

- **DQL (Data Query Language)**:
  - DQL is used for querying data within schema objects (usually tables).
  - The primary DQL command is **SELECT**, which retrieves data based on specified conditions.
    ```sql
    SELECT name FROM customers;
    ```

- **DML (Data Manipulation Language)**:
  - DML commands manipulate data within the database.
  - Examples of DML commands:
    - **INSERT**: Adds new records to a table.
      ```sql
      INSERT INTO customers (name, email) VALUES ('John Doe', 'john@example.com');
      ```
    - **UPDATE**: Modifies existing records.
      ```sql
      UPDATE customers SET email = 'new@example.com' WHERE name = 'John Doe';
      ```
    - **DELETE**: Removes records.
      ```sql
      DELETE FROM customers WHERE name = 'John Doe';
      ```

- **DCL (Data Control Language)**:
  - DCL commands manage user access and permissions.
  - Examples:
    - **GRANT**: Provides specific privileges to users.
      ```sql
      GRANT SELECT, INSERT ON employees TO user1;
      ```
    - **REVOKE**: Removes privileges from users.
      ```sql
      REVOKE SELECT ON employees FROM user1;
      ```

- **TCL (Transaction Control Language)**:
  - TCL commands manage transactions (groups of SQL statements).
  - Examples:
    - **COMMIT**: Saves changes made during a transaction.
    - **ROLLBACK**: Undoes changes made during a transaction.
    - **SAVEPOINT**: Sets a point within a transaction to which you can later roll back.
    - **SET TRANSACTION**: Configures properties for a transaction.

### 7. Database Related Queries
> Better approach is always use IF NOT EXISTS
```sql
CREATE DATABASE db_name;

CREATE DATABASE IF NOT EXISTS db_name;//always add this

DROP DATABASE db_name;
DROP DATABASE IF EXISTS db_name; //always add this


SHOW DATABASES;
SHOW TABLES;
```
### 8. Table Related Queries
```sql

[//]: # (CREATE TABLE table_name &#40;)

[//]: # (column_name1 datatype constraint,)

[//]: # (column_name2 datatype constraint,)

[//]: # (&#41;;)


CREATE DATABASE IF NOT EXISTS team;

use team;

CREATE TABLE member(
id INT primary key,
name varchar(50)
)
```
### 9. Table related Queries
- Select Table
```sql
SELECT * FROM table_name;
```
- Insert Data
```sql
INSERT INTO table_name VALUES (column1, column2)

```
- Example 
```sql
CREATE DATABASE IF NOT EXISTS team;

use team;

CREATE TABLE member( //do this 
id INT primary key,
name varchar(50)
)


insert into member (id , name) VALUES  //do this
(1, "subham"),
(2, "raju")


select * from member
```
### 10. Keys

[more details](./key.md)

- Primary Key

> It is a column (or set of columns) in a table that uniquely identifies each row. (a unique id)
There is only 1 PK & it should be NOT null.

- Foreign Key
> A foreign key is a column (or set of columns) in a table that refers to the primary key in another table.

- Candidate Key: 
> Any set of columns that can uniquely identify rows in a table. A table can have multiple candidate keys, but only one is chosen as the primary key.
- Alternate Key: 
> Any candidate key that is not chosen as the primary key. It can also uniquely identify rows in the table.

### 10. Constraints 

> SQL constraints are used to specify rules for data in a table


Constraints in SQL are used to specify rules for data in a table. Here are the three main types of constraints explained with examples:

- NOT NULL Constraint:
   The NOT NULL constraint ensures that a column cannot have a null value. It enforces that every row in the column must have a non-null value.

Example:
```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT NOT NULL
);
```
In this example, the `name` and `age` columns have the NOT NULL constraint applied, meaning that these columns cannot have null values when inserting or updating data.

- UNIQUE Constraint:
   The UNIQUE constraint ensures that all values in a column or a combination of columns are different. It enforces uniqueness of data in the specified column(s).

Example:
```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(50) UNIQUE,
    password VARCHAR(20)
);
```
In this example, the `email` column has the UNIQUE constraint applied, ensuring that each email value in the table is unique.

- PRIMARY KEY Constraint:
   The PRIMARY KEY constraint is a combination of the UNIQUE and NOT NULL constraints. It ensures that a column or a combination of columns uniquely identifies each row in the table and does not allow null values in the primary key column(s).

Example:
```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_name VARCHAR(50) NOT NULL,
    order_date DATE
);
```
In this example, the `order_id` column is set as the PRIMARY KEY, ensuring that each order has a unique `order_id` value and that the `order_id` column cannot have null values.

These constraints are essential for maintaining data integrity and consistency in a database. They help prevent duplicate or invalid data from being inserted or updated in the tables.