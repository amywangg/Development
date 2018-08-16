SHOW DATABASES
SHOW TABLES


SHOW COLUMNS FROM tableName

SELECT column_list FROM tableName

SELECT FirstName FROM customers
SELECT City FROM customers;

SELECT FirstName, LastName, City FROM customers;

SELECT * FROM customers; 

SELECT DISTINCT column_name1, column_name2 FROM table_name;

SELECT ID, FirstName, LastName, City FROM customers LIMIT 5;

SELECT ID, FirstName, LastName, City FROM customers LIMIT 3, 4;

SELECT City FROM customers;
SELECT customers.City FROM customers;

SELECT * FROM customers ORDER BY FirstName
SELECT * FROM customers ORDER BY LastName, Age;

SELECT column_list FROM table_name WHERE condition;

SELECT column_name(s) FROM table_name WHERE column_name BETWEEN value1 AND value2;

SELECT ID, FirstName, LastName, City FROM customers WHERE City = 'New York';

SELECT ID, FirstName, LastName, Age FROM customers WHERE Age >= 30 AND Age <= 40;


SELECT * FROM customers WHERE City IN ('New York', 'Los Angeles', 'Chicago');
-- As Opposed to 
SELECT * FROM customers WHERE City = 'New York' OR City = 'Los Angeles'OR City = 'Chicago';

SELECT * FROM customers WHERE City NOT IN ('New York', 'Los Angeles', 'Chicago');

SELECT CONCAT(FirstName, ', ' , City) FROM customers;

SELECT CONCAT(FirstName,', ', City) AS new_column FROM customers;

SELECT ID, FirstName, LastName, Salary+500 AS Salary FROM employees;

SELECT FirstName, UPPER(LastName) AS LastName FROM employees;
SELECT FirstName, LOWER(LastName) AS LastName FROM employees;

SELECT AVG(Salary) FROM employees;
SELECT Salary, SQRT(Salary) FROM employees;

SELECT SUM(Salary) FROM employees;

SELECT FirstName, Salary FROM employees WHERE  Salary > 3100 ORDER BY Salary DESC;

SELECT FirstName, Salary FROM employees 
WHERE  Salary > (SELECT AVG(Salary) FROM employees) ORDER BY Salary DESC;

SELECT column_name(s)FROM table_name WHERE column_name LIKE pattern;

SELECT * FROM employees WHERE FirstName LIKE 'A%';










