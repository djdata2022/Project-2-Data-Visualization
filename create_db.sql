--Create a table schema for the school characteristics CSV files, specifying the data types
CREATE TABLE schools_chars (
	NUM INT,
	SCH_NAME VARCHAR, 
	LSTREET1 VARCHAR, 
	LCITY VARCHAR, 
	LSTATE VARCHAR, 
	LZIP INT, 
	VIRTUAL VARCHAR, 
	TOTFRL DEC, 
	TOTAL DEC, 
	WH DEC, 
	FTE DEC, 
	LATCOD DEC, 
	LONCOD DEC, 
	ULOCALE VARCHAR, 
	STUTERATIO DEC,
	SCHOOL_TYPE_TEXT VARCHAR, 
	SY_STATUS_TEXT VARCHAR, 
	SCHOOL_LEVEL VARCHAR
);

--Confirm the table is created
SELECT * FROM schools_chars;

--Then import the CSV file into the corresponding SQL table.