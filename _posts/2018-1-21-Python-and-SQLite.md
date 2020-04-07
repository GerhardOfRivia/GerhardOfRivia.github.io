---
layout: posts
excerpt: Python and SQLight
---

**Environment**

Before you start with using SQLite with python

```python
$ python3
Python 3.5.2 (default, Nov 17 2016, 17:05:23)
[GCC 5.4.0 20160609] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import sqlite
>>> from sqlite import Error
```

**SQLite connection Functions**

| Function | Libraries |
|---|---|
| execute | Execute a query. |

**SQLite Error Handeling**

| Execption | Why |
|---|---|
| Error | In case any error occurs, we catch it within the try except block and printed out the error message. If everything is fine, we print out the SQLite database version. |

**Simple SQLite in Python**

*Python*

**Syntax**

```python3
#!/usr/bin/python

import sqlite3
from sqlite3 import Error


def create_connection(db_file):
    """ create a database connection to the SQLite database
        specified by the db_file
    :param db_file: database file
    :return: Connection object or None
    """
    try:
        conn = sqlite3.connect(db_file)
        return conn
    except Error as e:
        print(e)

    return None


def select_all_tasks(conn):
    """
    Query all rows in the tasks table
    :param conn: the Connection object
    :return:
    """
    cur = conn.cursor()
    cur.execute("SELECT * FROM tasks")

    rows = cur.fetchall()

    for row in rows:
        print(row)


def select_task_by_priority(conn, priority):
    """
    Query tasks by priority
    :param conn: the Connection object
    :param priority:
    :return:
    """
    cur = conn.cursor()
    cur.execute("SELECT * FROM tasks WHERE priority=?", (priority,))

    rows = cur.fetchall()

    for row in rows:
        print(row)


def main():
    database = "pythonsqlite.db"

    # create a database connection
    conn = create_connection(database)
    with conn:
        print("1. Query task by priority:")
        select_task_by_priority(conn, 1)

        print("2. Query all tasks")
        select_all_tasks(conn)


if __name__ == '__main__':
    main()
```

**SQL**

```
--
projects table
--
CREATE TABLE
IF NOT EXISTS projects (
 id integer PRIMARY KEY,
 name text NOT NULL,
 begin_date text,
 end_date text
);

--
tasks table
--
CREATE TABLE
IF NOT EXISTS tasks (
 id integer PRIMARY KEY,
 name text NOT NULL,
 priority integer,
 project_id integer NOT NULL,
 status_id integer NOT NULL,
 begin_date text NOT NULL,
 end_date text NOT NULL,
 FOREIGN KEY (project_id) REFERENCES projects (id)
);

--
insert project
--
INSERT INTO projects(name,begin_date,end_date) VALUES(?,?,?)

--
insert task
--
INSERT INTO tasks(name,priority,status_id,project_id,begin_date,end_date) VALUES(?,?,?,?,?,?)

--
update task
--
UPDATE tasks SET priority = ? , begin_date = ? , end_date = ? WHERE id = ?

--
delete task
--
DELETE FROM tasks WHERE id=?

--
delete all tasks
--
DELETE FROM tasks

--
select tasks
--
SELECT * FROM tasks WHERE priority=?

--
select all tasks
--
SELECT * FROM tasks
```

**Need a place to start, downlaod this sample database**

> http://www.sqlitetutorial.net/download/sqlite-sample-database/?wpdmdl=94

**Sample Diagram**

> http://www.sqlitetutorial.net/download/sqlite-sample-database-diagram/?wpdmdl=96
