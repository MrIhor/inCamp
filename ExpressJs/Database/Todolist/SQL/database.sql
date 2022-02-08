create table todos(
    id serial,
    title varchar(255) not null,
    done boolean not null,
    due_date date,
    list_id int not null,
    primary key (id)
);

create table lists(
    id serial,
    title varchar(255) not null,
    primary key(id)
);