execute if score #id forever_ids.tmp matches 0..63 run function forever_ids:items/recursive/0..1023/0..511/0..255/0..127/0..63/split
execute if score #id forever_ids.tmp matches 64..127 run function forever_ids:items/recursive/0..1023/0..511/0..255/0..127/64..127/split
