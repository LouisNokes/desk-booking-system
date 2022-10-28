CREATE TABLE users (
    usr_id INT PRIMARY KEY NOT NULL,
    name VARCHAR(50),
    email VARCHAR(70));

INSERT INTO users (usr_id, name, email) VALUES (1, 'Sam', 'Sam123@gmail.com');
INSERT INTO users (usr_id, name, email) VALUES (2, 'Mahir', 'Mahir123@gmail.com');
INSERT INTO users (usr_id, name, email) VALUES (3, 'Louis', 'Louis123@gmail.com');

SELECT * FROM users;

CREATE TABLE sites (
    site_id INT PRIMARY KEY,
    site VARCHAR(20),
    other_details VARCHAR(150));

INSERT INTO sites (site_id, site, other_details) VALUES (1, 'Manchester', 'May be one min late');
INSERT INTO sites (site_id, site, other_details) VALUES (2, 'Gloucester', 'May be two mins late');
INSERT INTO sites (site_id, site, other_details) VALUES (3, 'Manchester', 'May be three mins late');

SELECT * FROM sites;

CREATE TABLE desks (
    desk_id INT PRIMARY KEY,
    desk_number INT,
    site_idA INT,
    FOREIGN KEY (site_idA) REFERENCES sites(site_id),
    restrictions VARCHAR(10));

INSERT INTO desks (desk_id, desk_number, site_idA) VALUES (1, 2, 3);
INSERT INTO desks (desk_id, desk_number, site_idA) VALUES (4, 5, 6);
INSERT INTO desks (desk_id, desk_number, site_idA) VALUES (7, 8, 9);

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

INSERT INTO desk_bookings (booking_id, booking_desk, booking_site, booking_datefrom, booking_dateto, booking_userid) VALUES (1, 1, 1, 2022-10-01, 2022-10-03, 1);
INSERT INTO desk_bookings (booking_id, booking_desk, booking_site, booking_datefrom, booking_dateto, booking_userid) VALUES (2, 2, 2, 2022-10-04, 2022-10-06, 2);
INSERT INTO desk_bookings (booking_id, booking_desk, booking_site, booking_datefrom, booking_dateto, booking_userid) VALUES (3, 3, 3, 2022-10-07, 2022-10-09, 3);

SELECT * FROM desk_bookings;
    FOREIGN KEY (booking_userid) REFERENCES users(usr_id)
