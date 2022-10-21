--Database designed by Dylan and Einstein 
-- 

DROP TABLE IF EXISTS reply;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS stats;
DROP TABLE IF EXISTS userclass;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS class;

-- Create the schema.
CREATE TABLE class (
	ID integer PRIMARY KEY,
	name varchar(50),
    subject varchar(50), 
	);

CREATE TABLE user (
	ID integer PRIMARY KEY, 
    emailAddress varchar(50) NOT NULL,
    teacher boolean
	);

CREATE TABLE userclass (
	ID integer PRIMARY KEY, 
    userID references user(ID),
	classID  references class(ID)
	);

CREATE TABLE  stats (
	 ID integer PRIMARY KEY,
     classID references class(ID),
     --need to finialze what stats we want 
	);

CREATE TABLE post(
    ID integer PRIMARY KEY, 
    classID references clsss(ID),
    question boolean,
    user references user(ID),
    date integer,
    text varchar(200),
);

create table reply(
ID integer PRIMARY KEY, 
postID references post(ID),
userID references user(ID),
text varchar(200),
    );



-- Allow users to select data from the tables.
GRANT SELECT ON class TO PUBLIC;
GRANT SELECT ON user TO PUBLIC;
GRANT select ON userclass to PUBLIC;
GRANT SELECT ON stats TO PUBLIC;
GRANT SELECT ON post to PUBLIC; 
GRANT SELECT ON reply to PUBLIC; 


-- Add sample records.

 --classes
insert into class values (1, 'cs112', 'cs');
insert into class values(2, 'cs262', 'cs');
insert into class values(3, 'engr220','cs');

--users
insert into user values(1,abc12, false);
insert into user values(2, def34, true);

--userclass 
insert into userclass values(1,1,1);
insert into userclass values(2,1,2);

--stats 
insert into stats values(1,1);

--post 
insert into post values(1,1,true,1,11202222, 'is the proffesore helpful');
insert into post values(2,2,false,1,'I really like working on the app');

--reply
insert into relpy values(1,1,2,'yes');