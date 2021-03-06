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

ActiveRecord::Schema.define(version: 20140527224451) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: true do |t|
    t.string   "title"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "entries", force: true do |t|
    t.string   "url",          null: false
    t.string   "title",        null: false
    t.datetime "published_at", null: false
    t.integer  "feed_id",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image"
    t.text     "summary"
  end

  add_index "entries", ["feed_id"], name: "index_entries_on_feed_id", using: :btree
  add_index "entries", ["url"], name: "index_entries_on_url", unique: true, using: :btree

  create_table "feeds", force: true do |t|
    t.string   "url",         null: false
    t.string   "title",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "category_id"
    t.string   "image"
  end

  add_index "feeds", ["category_id"], name: "index_feeds_on_category_id", using: :btree
  add_index "feeds", ["url"], name: "index_feeds_on_url", unique: true, using: :btree

  create_table "user_entries", force: true do |t|
    t.integer  "user_id"
    t.integer  "entry_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "user_entries", ["entry_id"], name: "index_user_entries_on_entry_id", using: :btree
  add_index "user_entries", ["user_id"], name: "index_user_entries_on_user_id", using: :btree

  create_table "user_feeds", force: true do |t|
    t.integer  "user_id"
    t.integer  "feed_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

end
