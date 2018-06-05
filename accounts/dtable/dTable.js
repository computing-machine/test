function createDataTable(dataSet){
    table=document.createElement("table");
    table.setAttribute("id", "example");
    table.setAttribute("class", "display");
    table.setAttribute("width", "100%");

    table.DataTable({
        data:dataSet,
        columns:[
            { title: "Name" },
            { title: "Position" },
            { title: "Office" },
            { title: "Extn." },
            { title: "Start date" },
            { title: "Salary" }
        ]
    });

    return table;
}//createDataTable