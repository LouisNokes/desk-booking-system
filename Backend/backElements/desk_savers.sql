CREATE TABLE users (
    usr_id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(70));

INSERT INTO users (usr_id, name, email) VALUES (3, 'David', 'david123@gmail.com');

SELECT * FROM users;

CREATE TABLE sites (
    site_id INT PRIMARY KEY,
    site VARCHAR(20),
    other_details VARCHAR(150));

SELECT * FROM sites;

CREATE TABLE desks (
    desk_id INT PRIMARY KEY,
    desk_number INT,
    FOREIGN KEY (desk_id) REFERENCES sites(site_id),
    restrictions VARCHAR(10));

SELECT * FROM desks;

CREATE TABLE desk_bookings (
    booking_id INT PRIMARY KEY,
    booking_number INT,
    date INT);

SELECT * FROM desks_bookings;