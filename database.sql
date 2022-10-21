 
 --Database designed by Dylan and Einstein 
-- 

DROP TABLE IF EXISTS reply;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS stats;
DROP TABLE IF EXISTS userclass;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS class;

-- Create the schema.
CREATE TABLE class (
	ID integer PRIMARY KEY,
	name varchar(10),
	longname varchar(50),
    subject varchar(50)
	);

CREATE TABLE users (
	ID integer PRIMARY KEY, 
    emailAddress varchar(50) NOT NULL,
    teacher boolean
	);

CREATE TABLE userclass (
	ID integer PRIMARY KEY, 
    usersID integer references users(ID),
	classID integer references class(ID)
	);

CREATE TABLE  stats (
	 ID integer PRIMARY KEY,
     classID integer references class(ID)
     --need to finialze what stats we want 
	);

CREATE TABLE post(
    ID integer PRIMARY KEY, 
    classID integer references class(ID),
    question boolean,
    usersID integer references users(ID),
    date integer,
    text varchar(200)
);

create table reply(
ID integer PRIMARY KEY, 
postID integer references post(ID),
usersID integer references users(ID),
text varchar(200)
    );



-- Allow users to select data from the tables.
GRANT SELECT ON class TO PUBLIC;
GRANT SELECT ON users TO PUBLIC;
GRANT select ON userclass to PUBLIC;
GRANT SELECT ON stats TO PUBLIC;
GRANT SELECT ON post to PUBLIC; 
GRANT SELECT ON reply to PUBLIC; 


-- Add sample records.

 --classes
insert into class values (1, 'cs112', 'intro to data strutures and algorithm', 'cs');
insert into class values(2, 'cs262', 'app making', 'cs');
insert into class values(3, 'engr220', 'copmuter building','engr');

--users
insert into users values(1,'abc12', false);
insert into users values(2, 'def34', true);

--userclass 
insert into userclass values(1,1,1);
insert into userclass values(2,1,2);

--stats 
insert into stats values(1,1);

--post 
insert into post values(1,1,true,1,11212022, 'is the proffesore helpful');
insert into post values(2,2,false,1,11212022,'I really like working on the app');

--reply
insert into reply values(1,1,2,'yes');
