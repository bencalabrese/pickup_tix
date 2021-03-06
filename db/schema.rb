# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160502041910) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "categories", ["name"], name: "index_categories_on_name", using: :btree

  create_table "performances", force: :cascade do |t|
    t.datetime "datetime",     null: false
    t.integer  "spectacle_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "performances", ["spectacle_id", "datetime"], name: "index_performances_on_spectacle_id_and_datetime", unique: true, using: :btree
  add_index "performances", ["spectacle_id"], name: "index_performances_on_spectacle_id", using: :btree

  create_table "seat_blocks", force: :cascade do |t|
    t.string   "style",      null: false
    t.integer  "section_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "seat_blocks", ["section_id"], name: "index_seat_blocks_on_section_id", using: :btree

  create_table "seats", force: :cascade do |t|
    t.string   "name",          null: false
    t.integer  "seat_block_id", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "row",           null: false
    t.integer  "col",           null: false
  end

  add_index "seats", ["seat_block_id"], name: "index_seats_on_seat_block_id", using: :btree

  create_table "sections", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "venue_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "sections", ["venue_id"], name: "index_sections_on_venue_id", using: :btree

  create_table "spectacles", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description", null: false
    t.string   "image_url",   null: false
    t.integer  "venue_id",    null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "category_id", null: false
  end

  add_index "spectacles", ["title"], name: "index_spectacles_on_title", using: :btree
  add_index "spectacles", ["venue_id"], name: "index_spectacles_on_venue_id", using: :btree

  create_table "taggings", force: :cascade do |t|
    t.integer  "tag_id",       null: false
    t.integer  "spectacle_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "taggings", ["spectacle_id"], name: "index_taggings_on_spectacle_id", using: :btree
  add_index "taggings", ["tag_id", "spectacle_id"], name: "index_taggings_on_tag_id_and_spectacle_id", unique: true, using: :btree
  add_index "taggings", ["tag_id"], name: "index_taggings_on_tag_id", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "tags", ["name"], name: "index_tags_on_name", using: :btree

  create_table "tickets", force: :cascade do |t|
    t.integer  "performance_id", null: false
    t.integer  "seat_id",        null: false
    t.integer  "user_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "tickets", ["seat_id", "performance_id"], name: "index_tickets_on_seat_id_and_performance_id", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

  create_table "venues", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "venues", ["name"], name: "index_venues_on_name", using: :btree

end
