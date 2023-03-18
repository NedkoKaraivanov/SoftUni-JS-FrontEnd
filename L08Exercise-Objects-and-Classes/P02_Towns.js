function townsParser(input) {
    
    for (const town of input) {
        let [name, latitude, longitude] = town.split(" | ");
        let townObj = { town: name, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2)};
        console.log(townObj);
    }

}

townsParser(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);