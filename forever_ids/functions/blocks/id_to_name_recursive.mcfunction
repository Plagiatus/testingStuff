#> finds and returns the string name that corresponds with the given numerical id (macro version)
# 
# For a less performant but less function files needed solution use the non-recursive alternative
#
# @input id     The numerical id to search for in the fakeplayer "#id" in the scoreboard "forever_ids.tmp"
#               Alternatively use "forever_ids:blocks/id_to_name_macro for a macro implementation.
# @output as string in storage "forever_ids:output result"

data remove storage forever_ids:output result

function forever_ids:blocks/recursive/split

tellraw @s [{"score":{"objective":"forever_ids.tmp", "name":"#id"}}," of blocks: ", {"nbt":"result", "storage": "forever_ids:output"}]