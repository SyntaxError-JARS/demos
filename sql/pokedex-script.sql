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
	ability_1 varchar(25)
	ability_dmg int 
	--constraint fk_abilities foreign key(ability_1) references abilities(ability_name)
);

-- The best and most useful case for alter
alter table pokemon
add constraint fk_abilities 
foreign key(ability_1) references abilities(ability_name);

drop table pokemon;
drop table abilities;

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
(default, 'charmander', '25', '5', 'fire', 'Scratch');

-- Now references a non-existent ability
insert into pokemon 
values
(default, 'bulbasaur', '22', '6', 'grass', 'Tackle');

insert into pokemon 
values
(default, 'squirtle', '30', '3', 'water', 'Scratch');

insert into pokemon 
values
(default, 'pikachu', '15', '10', 'lightning', 'Tackle');

select pokemon_name, abilities from pokemon p ;

-- multi-insert 
insert into pokemon 
values
(default, 'rattata', '12', '2', 'normal', 'Scratch'),
(default, 'pidgey', '10', '1', 'normal', 'Tackle');

-- bad
insert into pokemon (pokemon_name, hp, atk, ability_1, element_type )
values
('rattata', '12', '2', 'normal', 'Scratch'),
('pidgey', '10', '1', 'normal', 'Tackle');

insert into pokemon (pokemon_name, hp, atk, element_type, ability_1 )
values
('rattata', '12', '2', 'normal', 'Scratch'),
('pidgey', '10', '1', 'normal', 'Tackle');



select * from pokemon p ;
select * from abilities a ;

-- joins

select pokemon.pokemon_name, pokemon.ability_1, pokemon.atk, abilities.atk_multiplier, abilities.dmg_type 
from pokemon 
join abilities ON pokemon.ability_1 = abilities.ability_name;


-- Same exact results as above, but we used the alias instead (pokemon p and ablities a)
-- If something is aliased, you have to use that
select p.pokemon_name, p.ability_1, p.atk, a.atk_multiplier, a.dmg_type 
from pokemon p
join abilities a ON p.ability_1 = a.ability_name;


-- views

create view pokemon_abilities as
select p.pokemon_name, p.ability_1, p.atk, a.atk_multiplier, a.dmg_type 
from pokemon p
join abilities a ON p.ability_1 = a.ability_name;

select * from pokemon_abilities;

-- fun things to do on your own with this. Figure out how you might find their attack dmg total
-- mess with some more views 
-- add a second ability
-- think is there any other redundant info
