#> finds and returns the string name that corresponds with the given numerical id (macro version)
# 
# For a less performant but less function files needed solution use the non-recursive alternative
#
# @input id     The numerical id to search for
# @output as string in storage "forever_ids:output result"

scoreboard objectives add forever_ids.tmp dummy
$scoreboard players set #id forever_ids.tmp $(id)
function forever_ids:blocks/id_to_name_recursive