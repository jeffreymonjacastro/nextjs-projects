/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ng7icw04m1dekx4")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ng7icw04m1dekx4")

  collection.name = "posts"

  return dao.saveCollection(collection)
})
