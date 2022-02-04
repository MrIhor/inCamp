create table todos(
    id serial primary key,
    title varchar(255),
    done boolean,
    due_date date,
    list_id int
)

create table lists(
    id serial primary key,
    title varchar(255)
)