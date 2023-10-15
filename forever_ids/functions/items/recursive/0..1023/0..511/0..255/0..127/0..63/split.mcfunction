execute if score #id forever_ids.tmp matches 0..31 run function forever_ids:items/recursive/0..1023/0..511/0..255/0..127/0..63/0..31/split
execute if score #id forever_ids.tmp matches 32..63 run function forever_ids:items/recursive/0..1023/0..511/0..255/0..127/0..63/32..63/split
