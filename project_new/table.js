function createTable(table_attr, data){
    var table=document.createElement("table");
    addAttribute(table, table_attr);
    var thead=document.createElement("thead");
    var thead_row=createTableRow(data["head"], "th");
    thead.appendChild(thead_row);

    table.appendChild(thead);
    
    var tbody=document.createElement("tbody");
    var i=0;
    for(i=0; i<data["body"].length; i++){
        var tbody_row=createTableRow(data["body"][i], "td");
        tbody.appendChild(tbody_row);
    }//for

    table.appendChild(tbody);

    return table;
}//createTable()

function createTableRow(data, cell_type){
    var row=document.createElement("tr");
    var i=0;
    for(i=0; i<data.length; i++){
        if(cell_type=="td")
            var cell=document.createElement("td");
        else if(cell_type=="th")
            var cell=document.createElement("th");
        var datum=document.createTextNode(data[i]);
        cell.appendChild(datum);
        row.appendChild(cell);
    }//for

    return row;
    
}//createTableRow()