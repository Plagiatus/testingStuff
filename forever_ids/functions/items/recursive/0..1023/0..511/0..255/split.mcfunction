execute if score #id forever_ids.tmp matches 0..127 run function forever_ids:items/recursive/0..1023/0..511/0..255/0..127/split
execute if score #id forever_ids.tmp matches 128..255 run function forever_ids:items/recursive/0..1023/0..511/0..255/128..255/split
