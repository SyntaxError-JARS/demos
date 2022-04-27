-- Let's normalize our data

create schema pokenorm;

CREATE table pokemon (
	id serial primary key,
	pokemon_name varchar(50),
	atk int not null,
	abilities varchar(250),
	abilitiy_multiplier varchar(250),
	ability_total_dmg varchar(250)
	--constraint fk_abilities foreign key(ability_1) references abilities(ability_name)
);

drop table pokemon;

-- BAD NO NORMALIZAITON
create table users (
	email varchar(30) primary key,
	"password" varchar(30) not null,
	dob varchar(30) not null,
	age int not null,
	phone_numbers varchar(60) not null,
	phone_type varchar(20) not null
);

drop table users;

select * from users;

insert into users
values
('cj@revature.com', 'superPassword', '01/01/0001', 28, '2153555991,6091237418', 'home, work'),
('db@revature.com', 'superPassword1', '07/27/2019', 3,  '2153555992', 'home'),
('as@revature.com', 'superPassword', '08/20/2001', 21,'2153555993,6091237419', 'home, work'),
('ar@revature.com', 'superPassword2', '10/15/1970', 50, '6091237420', 'work');

-- 1NF
create table users_1nf (
	email varchar(30) primary key,
	"password" varchar(30) not null,
	dob varchar(30) not null,
	age int not null,
	phone1 varchar(10) not null unique,
	phone1_type varchar(10) not null,
	phone2 varchar(10) unique,
	phone2_type varchar(10) not null
);
drop table users_1nf;

select * from users_1nf;

insert into users_1nf
values
('cj@revature.com', 'superPassword', '01/01/0001', 28, '2153555991', 'mobile','6091237418', 'work'),
('db@revature.com', 'superPassword1', '07/27/2019', 3,  '2153555992', 'mobile', null, 'work'),
('as@revature.com', 'superPassword', '08/20/2001', 21,'2153555993', 'mobile', '6091237419', 'work'),
('ar@revature.com', 'superPassword2', '10/15/1970', 50, '6091237420', 'mobile', null, 'work');


-- 2NF fully functional dependent on the whole primary key
create table phone_2nf (
	id serial primary key,
	phone_number varchar(10)not null unique,
	phone_type varchar(10)
);

create table users_2nf(
	email varchar(30) primary key,
	"password" varchar(30) not null,
	dob varchar(30) not null,
	age int not null,
	phone1 int not null,
	phone2 int,
	constraint fk_phone_2nf_p1 foreign key (phone1) references phone_2nf(id),
	constraint fk_phone_2nf_p2 foreign key (phone2) references phone_2nf(id)
);

insert into users_2nf
values
('cj@revature.com', 'superPassword', '01/01/0001', 28, 1, 2 ),
('db@revature.com', 'superPassword1', '07/27/2019', 3, 3, null ),
('as@revature.com', 'superPassword', '08/20/2001', 21,4, 5),
('ar@revature.com', 'superPassword2', '10/15/1970', 50, 6, null);


insert into phone_2nf
values
(default, '2153555991', 'mobile'),
(default, '6091237418', 'work'),
(default, '2153555992', 'mobile'),
(default, '2153555993', 'mobile'),
(default, '6091237419', 'work'),
(default, '6091237420', 'mobile');

select * from phone_2nf;
select * from users_2nf;

-- 3NF (industry standard***) transitive dependency
-- *** there is a thing such as 2.5NF, that people generally okay with 
-- drop the age column bc that can be calculated with dob

-- CRUD
-- Create tables
-- Create Dummy data for each table

-- Read and filter the data 

-- Update that information for each table

-- Delete information from each (soft delete)