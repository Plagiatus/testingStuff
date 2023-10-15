execute if score #id forever_ids.tmp matches 0..511 run function forever_ids:items/recursive/0..1023/0..511/split
execute if score #id forever_ids.tmp matches 512..1023 run function forever_ids:items/recursive/0..1023/512..1023/split
