create database if not exists exam_cell;

use exam_cell;

create table user(
    username varchar(64) primary key,
    password varchar(64),
    first_name varchar(64),
    last_name varchar(64),
    type enum('student','staff','admin')
);

insert into user(username, password, first_name, last_name, type)
values
('HeptaDecane','OCEycBxHM8NAJwbP3TyPx/QfgKiNzlQo0UUlmkHF8S8=','Hepta','Decane','admin'),
('C2K18105823','E9JJ8stBJ7QM+nV4ZoUCeHk/gU3tPFh/5YieiJp6n2w=','Lorem','Ipsum','student'),
('S2K05127938','E9JJ8stBJ7QM+nV4ZoUCeHk/gU3tPFh/5YieiJp6n2w=','Etiam','Libero','staff');

