execute if score #id forever_ids.tmp matches 0..255 run function forever_ids:items/recursive/0..1023/0..511/0..255/split
execute if score #id forever_ids.tmp matches 256..511 run function forever_ids:items/recursive/0..1023/0..511/256..511/split
