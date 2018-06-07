function createSelect(data=null){
    if(data){
        var select = document.createElement( 'select' );
        var option;
        var inputdata = data;

        option=document.createElement("option");
        addAtrribute(option, {"disabled":true, "selected":true, "value":true});
        option_text=document.createTextNode(" -- select an option -- ");
        option.appendChild(option_text);
        select.appendChild(option);

        inputdata.forEach(function( item ) {

            option = document.createElement( 'option' );
            option.setAttribute("value", item);
            option_text=document.createTextNode(item);
            option.appendChild(option_text);
            select.appendChild( option );
        });}//if
    else{
        var select = document.createElement( 'select' );
        var option;

        option=document.createElement("option");
        addAtrribute(option, {"disabled":true, "selected":true, "value":true});
        option_text=document.createTextNode(" -- select an option -- ");
        option.appendChild(option_text);
        select.appendChild(option);
    }//else
    return select;
}

function createForm(data){//data has two attributes : form and rows
    var form= document.createElement("form");
    var form_attri=data["attri"]; //get class of the form
    if(Object.keys(form_attri).length!=0)
        addAtrribute(form, form_attri);
    
    var form_rows=data["rows"]; //get rows property of form
    form_rows.forEach(form_row => { //take rows one by one
        var row=document.createElement("div");
        row.setAttribute("class", form_row["row_type"]);
        var row_columns=form_row["columns"]; //get columns of a row
        row_columns.forEach(row_column => { //take columns one by one of a row
            var col=document.createElement("div");
            col.setAttribute("class",row_column["size"]);
            var elements=Object.keys(row_column);
            var i=1;
            for(i=1; i<elements.length; i++){
                if(elements[i]=="label"){
                    var element=document.createElement(elements[i]);
                    var label_obj=row_column[elements[i]];
                    var text=document.createTextNode(label_obj["text"]);
                    addAtrribute(element, label_obj["attri"]);
                    element.appendChild(text);
                    col.appendChild(element);
                }//if
                else{
                    var element=document.createElement(elements[i]);
                    addAtrribute(element, row_column[elements[i]]);
                    col.appendChild(element);
                }//else
            }//for
            row.appendChild(col);
        });//form_columns
        form.appendChild(row);
    });//form_rows

    return form;
}//createForm()