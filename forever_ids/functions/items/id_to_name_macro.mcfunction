#> finds and returns the string name that corresponds with the given numerical id (macro version)
# 
# For a more performant solution use the binary lookup alternatives
#
# @input id     The numerical id to search for
# @output as string in storage "forever_ids:output result"

scoreboard objectives add forever_ids.tmp dummy
$scoreboard players set #id forever_ids.tmp $(id)
function forever_ids:items/id_to_name