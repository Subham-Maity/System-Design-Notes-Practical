Table 1: Student
```
+----+--------+--------+
| id | name   | cityid |
+----+--------+--------+
| 101| karan  | 1      |
| 102| arjun  | 2      |
| 103| ram    | 1      |
| 104| shyam  | 3      |
+----+--------+--------+
```
- Primary Key: `id`
- Foreign Key: `cityid` (references `City` table's `id` column)
- Candidate Key: `id`, `name`
- Alternate Key: `name`

Table 2: City
```
+----+------------+
| id | city_name  |
+----+------------+
| 1  | Pune       |
| 2  | Mumbai     |
| 3  | Delhi      |
+----+------------+
```
- Primary Key: `id`
- Candidate Key: `id`, `city_name`
- Alternate Key: `city_name`

Explanation:

- Primary Key:
    - The `id` column in the "Student" table is the primary key, which uniquely identifies each student record.
    - The `id` column in the "City" table is the primary key, which uniquely identifies each city record.
    - A primary key must be unique and not null.

- Foreign Key:
    - The `cityid` column in the "Student" table is a foreign key that references the `id` column in the "City" table.
    - This establishes a relationship between the two tables, allowing us to associate each student with a particular city.

- Candidate Key:
    - A candidate key is a column or a set of columns that can uniquely identify each row in a table.
    - In the "Student" table, both `id` and `name` columns can be considered candidate keys because each student has a unique combination of `id` and `name`.
    - In the "City" table, both `id` and `city_name` columns can be considered candidate keys because each city has a unique combination of `id` and `city_name`.

- Alternate Key:
    - An alternate key is a candidate key that is not chosen as the primary key.
    - In the "Student" table, the `name` column can be considered an alternate key because it can uniquely identify each student record (assuming no two students have the same name).
    - In the "City" table, the `city_name` column can be considered an alternate key because it can uniquely identify each city record.

It's important to note that while alternate keys can uniquely identify rows, it is generally recommended to use a simple and stable column (or set of columns) as the primary key, such as an auto-incrementing integer column, to ensure efficient indexing and data retrieval.