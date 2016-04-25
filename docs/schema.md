# Schema Information

## stage_events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
image_url   | text      | not null
venue_id    | integer   | not null, foreign key (references venues), indexed

## performances
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
stage_event_id | integer   | not null, foreign key (references stage_events), indexed
date           | date      | not null

## ticketings
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
user_id           | integer   | not null, foreign key (references users), indexed
seat_id           | integer   | not null, foreign key (references seats), indexed with performance_id, unique
performance_id    | integer   | not null, foreign key (references performances), indexed with seat_id, unique

## venues
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## sections
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
venue_id    | integer   | not null, foreign key (references venues), indexed

## seat_blocks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
style       | string    | not null
section_id  | integer   | not null, foreign key (references sections), indexed

## seats
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
seat_block_id | integer   | not null, foreign key (references seat_blocks), indexed
name          | string    | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
name           | string    | not null
stage_event_id | integer   | not null, foreign key (references stage_events), indexed, unique [tag_id]
tag_id         | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
