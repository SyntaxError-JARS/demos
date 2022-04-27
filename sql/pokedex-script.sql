-- Create ourselves a schema	
create schema pokedex;

create table abilities (
	ability_name varchar(25) primary key,
	atk_multiplier int,
	dmg_type varchar(30)
);

insert into abilities
values
('Scratch', 2, 'normal');

insert into abilities
values
('Tackle', 3, 'normal');

CREATE table pokemon (
	id serial primary key,
	pokemon_name varchar(50),
	hp int not null,
	atk int not null,
	element_type varchar(50) not null,
	ability_1 varchar(25),
	constraint fk_abilities foreign key(ability_1) references abilities(ability_name)
);

drop table pokemon;

-- BAD PRACTICE to have two values in a single element
insert into pokemon 
values
(default, 'charmander', '25', '5', 'fire', 'Scratch,Fire Breath');
insert into pokemon 
values
(default, 'squirtle', '30', '3', 'water', 'Scratch,Water Gun');

-- Now references foreign key ability name scratch
insert into pokemon 
values
(default, 'squirtle', '30', '3', 'water', 'Scratch');

-- Now references a non-existent ability
insert into pokemon 
values
(default, 'bulbasaur', '22', '6', 'grass', 'Tackle');

insert into pokemon 
values
(default, 'squirtle', '30', '3', 'water', 'Scratch');

select pokemon_name, abilities from pokemon p ;



select * from pokemon p ;
