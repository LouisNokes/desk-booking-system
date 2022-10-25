CREATE TABLE users (
    usr_id INT PRIMARY KEY NOT NULL,
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
    site_idA INT,
    FOREIGN KEY (site_idA) REFERENCES sites(site_id),
    restrictions VARCHAR(10));

SELECT * FROM desks;

CREATE TABLE desk_bookings (
    booking_id INT PRIMARY KEY AUTO_INCREMENT,
    booking_desk INT,
    booking_site INT,
    booking_datefrom DATE,
    booking_dateto DATE,
    booking_userid INT,
    FOREIGN KEY (booking_site) REFERENCES sites(site_id),
    FOREIGN KEY (booking_desk) REFERENCES desks(desk_id)

    );

SELECT * FROM desk_bookings;
    FOREIGN KEY (booking_userid) REFERENCES users(usr_id)
