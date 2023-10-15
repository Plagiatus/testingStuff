const path = require("path");
const fs = require("fs");

/**
 * Generates all the functions that correspond to the block and item ids
 */
function functions(array, name){
    console.groupCollapsed("Generating functions for", name);
    let folderPath = path.join(__dirname, "../forever_ids/functions", name);
    idToNameSingle(array, name, folderPath);
    recursiveFunctions(array, name, folderPath);
    console.groupEnd();
}

function idToNameSingle(array, name, folderPath){
    let content = `
#> finds and returns the string name that corresponds with the given numerical id 
# automatically generated function for ${name}
# For a more performant solution use the binary lookup alternatives
#
# @input id     The numerical id to search for in the fakeplayer "#id" in the scoreboard "forever_ids.tmp"
#               Alternatively use "forever_ids:${name}/id_to_name_macro for a macro implementation.
# @output as string in storage "forever_ids:output result"

data remove storage forever_ids:output result

`;
    for(let element of array){
        content += `execute if score #id forever_ids.tmp matches ${element.id} run data modify storage forever_ids:output result set value "${element.name}"\n`;
    }

    content += `tellraw @s [{"score":{"objective":"forever_ids.tmp", "name":"#id"}}," of ${name}: ", {"nbt":"result", "storage": "forever_ids:output"}]`;

    fs.writeFileSync(path.join(folderPath, "id_to_name.mcfunction"), content);
    console.log("id_to_name.mcfunction ✔");
}

function recursiveFunctions(array, name, folderPath){
    const depth = Math.ceil(Math.log2(array.length + 1));
    folderPath = path.join(folderPath, "recursive");
    console.groupCollapsed("recursive depth", depth);
        console.log("removing old files");
        fs.rmSync(path.join(folderPath), {recursive: true, force: true});
        fs.mkdirSync(path.join(folderPath));
        console.log("creating new files");
        recursiveFunctionsRecursion(array, folderPath, [0, Math.pow(2, depth) - 1], `${name}/recursive`)
    console.groupEnd();
}

function recursiveFunctionsRecursion(array, folderPath, range, mcPath){
    let [min, max] = range;

    if(max - min == 1) {
        // time to make the final files
        let content = `execute if score #id forever_ids.tmp matches ${min} run data modify storage forever_ids:output result set value "${array.find(el => el.id == min).name}"\n`;
        if(array[max]) content += `execute if score #id forever_ids.tmp matches ${max} run data modify storage forever_ids:output result set value "${array.find(el => el.id == max).name}"`;
        fs.writeFileSync(path.join(folderPath, `${min}..${max}.mcfunction`), content);
        return;
    }

    let lowerRange = [min, Math.ceil((max - min) / 2) + min - 1];
    let higherRange = [Math.ceil((max - min) / 2) + min, max];

    let content = splitInto(lowerRange, mcPath);
    content += splitInto(higherRange, mcPath);

    fs.writeFileSync(path.join(folderPath, `split.mcfunction`), content);

    function splitInto(range, mcPath){
        let [min, max] = range;
        if(min > array.length) return "";
        let newPath = folderPath;
        let needsSplit = false;
        if(max - min > 1) {
            newPath = path.join(folderPath, `${range[0]}..${range[1]}`);
            fs.mkdirSync(newPath);
            needsSplit = true;
        }
        mcPath += `/${range[0]}..${range[1]}`;
        recursiveFunctionsRecursion(array, newPath, range, mcPath);

        return `execute if score #id forever_ids.tmp matches ${min}..${max} run function forever_ids:${mcPath}${needsSplit ? "/split": ""}\n`;
    }

}

module.exports = {functions}