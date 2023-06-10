---Minjun Kim  1007705146
---Adam Badar  1007965338
---Mustafa Musitapa  1008011973

--for some reason, SQLite often has foreign key constraints off by default, so we're goign to turn them back on
PRAGMA foreign_keys = ON;

--drop all the tables, so we get a fresh database each
--time we run this code (careful, this will delete
--your data)
DROP TABLE IF EXISTS Author;
DROP TABLE IF EXISTS Book;
DROP TABLE IF EXISTS Wrote;
DROP TABLE IF EXISTS Reader;
DROP TABLE IF EXISTS Rating;

CREATE TABLE Author(
    id INTEGER PRIMARY KEY,
    given_name TEXT NOT NULL,
    family_name TEXT NOT NULL,
    nationality TEXT NOT NULL,
    date_of_birth DATE NOT NULL CHECK(date_of_birth <= current_date)
  );

  CREATE TABLE Book(
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    subtitle TEXT,
    date_of_publication DATE NOT NULL CHECK(date_of_publication <= current_date),
    publisher TEXT,
    num_pages INTEGER NOT NULL CHECK(num_pages >= 0)
);

CREATE TABLE Reader(
    user_name TEXT PRIMARY KEY,
    e_mail TEXT NOT NULL UNIQUE,
    reading_goal INTEGER NOT NULL CHECK(reading_goal >= 0)
);

CREATE TABLE Rating(
    user_name TEXT NOT NULL,
    book_id INTEGER NOT NULL,
    score INTEGER NOT NULL CHECK(score >= 0 AND score<=10),
    PRIMARY KEY(user_name, book_id, score),
    FOREIGN KEY(user_name) REFERENCES Reader(user_name) ON DELETE CASCADE,
    FOREIGN KEY(book_id) REFERENCES Book(id) ON DELETE CASCADE
);

CREATE TABLE Wrote(
    book_id INTEGER NOT NULL,
    author_id INTEGER NOT NULL,
    PRIMARY KEY(book_id, author_id),
    FOREIGN KEY(book_id) REFERENCES Book(id) ON DELETE CASCADE,
    FOREIGN KEY(author_id) REFERENCES Author(id) ON DELETE CASCADE
);

---insert your data here
INSERT INTO Author VALUES 
(1, 'Leo', 'Tolstoy', 'Russian', '1828-09-09'), 
(2, 'Charles', 'Dickens', 'English', '1812-02-07'),
(3, 'William', 'Shakespeare', 'English', '1564-04-26'),
(4, 'J.K.', 'Rowling', 'British', '1965-07-31'),
(5, 'Giannis', 'Antetokounmpo', 'Greek','1996-12-06'),
(6, 'Ernest', 'Hemingway', 'American', '1899-07-21'),
(7, 'Edgar Allan', 'Poe', 'American', '1809-01-19'),
(8, 'Conan', 'Doyle', 'British', '1859-05-22'),
(9, 'Octavia', 'Butler', 'American', '1947-06-22'),
(10, 'Dr.', 'Seuss', 'American', '1904-03-02'),
(11, 'Neil', 'Gaiman', 'British', '1960-11-10'),
(12, 'Terry', 'Pratchett', 'British', '1948-04-28');;

INSERT INTO Book VALUES
(1, 'War and Peace', 'Napoleon''s invasion of Russia', '1867-09-09', 'The Russian Messenger', 1225),
(2, 'Oliver Twist', 'The Parish Boy''s Progress', '1812-02-07', 'Bentley''s Miscellany', 373),
(3, 'Romeo and Juliet', 'A true love story', '1564-04-26', 'Shakespeare', 156),
(4, 'Harry Potter', 'A fun book', '2013-08-27', 'Scholastic', 336),
(5, 'Greatness', 'The Improbable Rise of an NBA MVP', '2021-08-23', 'NBA', 134),
(6, 'The old man and the sea', 'The battle by an old Cuban fisherman', '1952-07-21', 'Charles Scribner''s Sons', 204),
(7, 'The Raven', 'A distraught lover and a raven', '1809-01-19', 'Book House', 201),
(8, 'Sherlock Holmes', 'A fictional detective', '1809-01-19', 'Doyle Company', 203),
(9, 'Good Omens', 'The Nice and Accurate Prophecies of Agnes Nutter', '1990-05-01', 'Workman Publishing Company', 288),
(10, 'Kindred', 'A tall anthropomorphic cat', '1987-02-14', 'Seuss Publisher', 19),
(11, 'American Gods', 'The mysterious and taciturn Shadow', '2001-06-19', 'William Morrow', 635),
(12, 'Good Omens', 'The Nice and Accurate Prophecies of Agnes Nutter', '1990-05-01', 'Workman Publishing Company', 288);

---Reader(user_name, e_mail, reading_goal)
INSERT INTO Reader VALUES
  ('Minjun', 'minjun1@gmail.com', 5),
  ('Adam', 'adam1@gmail.com', 3),
  ('Mustafa', 'mustafa1@gmail.com', 2),
  ('Kyle', 'kyle1@gmail.com', 2),
  ('Kody', 'kody1@gmail.com', 3),
  ('Ji', 'ji1@gmail.com', 7),
  ('Andrew', 'andrew1@gmail.com', 7);

---Rating(user_name, book_id, score)
INSERT INTO Rating VALUES 
  ('Minjun', 1, 10), ('Minjun', 1, 9), ('Minjun', 2, 10), ('Minjun', 2, 9), ('Minjun', 2, 8), ('Minjun', 3, 7), ('Minjun', 10, 8),('Minjun', 9, 7),
  ('Adam', 1, 6), ('Adam', 4, 10), ('Adam', 12, 10), ('Adam', 7, 10), ('Adam', 8, 10),
  ('Mustafa', 4, 6), ('Mustafa', 5, 10), ('Mustafa', 6, 6),
  ('Kody', 6, 3),('Kody', 6, 8), ('Kody', 7, 3), ('Kody', 10, 8),
  ('Ji', 8, 6), ('Ji', 10, 7), ('Ji', 11, 6),
  ('Andrew', 9, 8), ('Andrew', 10, 9), ('Andrew', 11, 8), ('Andrew', 4, 10),
  ('Kyle', 9, 7), ('Kyle', 11, 7), ('Kyle', 2, 10);

--Wrote(book_id, author_id)
INSERT INTO Wrote VALUES 
  (1,1),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(3,9),(10,10),(10,9), (11,11), (11, 12), (12,12), (12, 9);
  
---add your queries here
SELECT('');
SELECT "Query a: The titles of all books that have more than 500 pages";

SELECT title FROM Book WHERE num_pages>500; 

SELECT('');
SELECT "Query b: The full name of all authors of the book “Good Omens”";

SELECT DISTINCT Author.given_name, Author.family_name
FROM Author
INNER JOIN Wrote ON Author.id = Wrote.author_id
INNER JOIN Book ON Wrote.book_id = Book.id
WHERE Book.title = 'Good Omens';

SELECT('');
SELECT "Query c: Titles of all books that have at least one review with a score of 10 (duplicates allowed)";

SELECT Book.title
FROM Book
INNER JOIN Rating ON Book.id = Rating.book_id
WHERE Rating.score = 10;

SELECT('');
SELECT "Query d: Titles of all books that have at least one review with a score of 10 (without duplicates)";

SELECT DISTINCT Book.title
FROM Book
INNER JOIN Rating ON Book.id = Rating.book_id
WHERE Rating.score = 10;

SELECT('');
SELECT "Query e: The e-mails of all users who rated books by “Octavia Butler”";

SELECT DISTINCT Reader.e_mail
FROM Reader
JOIN Rating ON Reader.user_name = Rating.user_name
JOIN Wrote ON Rating.book_id = Wrote.book_id
JOIN Author ON Wrote.author_id = Author.id
WHERE Author.given_name = 'Octavia' AND Author.family_name = 'Butler';

SELECT('');
SELECT "Query f: The e-mails of all users who rated books by “Octavia Butler” other than her book “Kindred”";

SELECT DISTINCT Reader.e_mail
FROM Reader 
JOIN Rating ON Reader.user_name = Rating.user_name 
JOIN Book ON Rating.book_id = Book.id 
JOIN Wrote ON Book.id = Wrote.book_id 
JOIN Author ON Wrote.author_id = Author.id 
WHERE Author.given_name = 'Octavia' AND Author.family_name = 'Butler' 
AND Book.title != 'Kindred';

SELECT('');
SELECT "Query g: The titles of all books published by authors older than “Octavia Butler”";

    
SELECT Book.title
FROM Book
INNER JOIN Wrote ON Book.id = Wrote.book_id
INNER JOIN Author ON Wrote.author_id = Author.id
WHERE Author.date_of_birth < (SELECT date_of_birth FROM Author WHERE given_name = 'Octavia' AND family_name = 'Butler');

SELECT('');
SELECT "Query h: The user names of all users who rated “Kindred” higher than “Good Omens”";

CREATE VIEW r_k AS
  SELECT id FROM Book WHERE title='Kindred';

CREATE VIEW r_g AS
  SELECT id FROM Book WHERE title='Good Omens';

CREATE VIEW k_Ratings AS
  SELECT * FROM
    Rating JOIN r_k ON Rating.book_id = r_k.id;

CREATE VIEW g_Ratings AS
  SELECT * FROM
    Rating JOIN r_g ON Rating.book_id = r_g.id;
  
SELECT DISTINCT final.user_name 
FROM 
(k_Ratings INNER JOIN g_Ratings 
  ON k_Ratings.user_name = g_Ratings.user_name) AS final
WHERE k_Ratings.score > g_Ratings.score;

DROP VIEW IF EXISTS r_k;
DROP VIEW IF EXISTS r_g;
DROP VIEW IF EXISTS k_Ratings;
DROP VIEW IF EXISTS g_Ratings;

SELECT('');
SELECT "Query i: The user names of all users whose number of reviews is greater than their reading goal";
--Your answer here

CREATE VIEW count_reviews AS
  SELECT Rating.user_name, COUNT(*) AS num_reviews
    FROM Rating
    GROUP BY Rating.user_name;
  
SELECT Reader.user_name FROM 
  count_reviews JOIN Reader 
  ON count_reviews.user_name = Reader.user_name
  WHERE count_reviews.num_reviews > Reader.reading_goal;

DROP VIEW IF EXISTS count_reviews;

SELECT('');
SELECT "Query j: The user names of anyone who has given 2 different ratings to the same book, and the title
of the book(s) in question";
--Your answer here

SELECT DISTINCT r1.user_name, book.title
  FROM Rating r1, Rating r2, Book book
  WHERE r1.user_name = r2.user_name 
  AND r1.book_id = r2.book_id
  AND r1.score != r2.score 
  AND r1.book_id = book.id;

SELECT('');
SELECT "Query k: The e-mails of all users along with the title of their highest rated book";
--Your answer here

SELECT Reader.e_mail, Book.title
FROM 
  (Reader JOIN Rating
  ON Reader.user_name = Rating.user_name)
  JOIN Book ON Rating.book_id = Book.id
  WHERE Rating.score = (
    SELECT MAX(score) 
    FROM Rating 
    WHERE user_name = Reader.user_name
  );

SELECT('');


