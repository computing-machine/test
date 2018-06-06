function createJournal(data){
    var r=["dr", "cr"];
    var headings=["Number", "Type", "Sub-type", "GL Account", "Debit", "Credit"];
    var id=1;
    journal=document.createElement("table");
    addAtrribute(journal, {"id":"journal", "class":"table"});
    journal_head=document.createElement("thead");
    journal_head_row=document.createElement("tr");
    for(i=0; i<6; i++){
        journal_head_cell=document.createElement("th");
        t=document.createTextNode(headings[i]);
        journal_head_cell.appendChild(t);
        journal_head_row.appendChild(journal_head_cell);
    }//for
    journal_head.appendChild(journal_head_row);

    //table foot
    journal_foot=document.createElement("tfoot");
    journal_foot_row=document.createElement("tr");
    journal_foot_row_cell=document.createElement("td");
    add_row_button=create_button("More");
    add_row_button.addEventListener("click", function(){create_row(document.getElementById("journal"),data)});
    journal_foot_row_cell.appendChild(add_row_button);
    journal_foot_row.appendChild(journal_foot_row_cell);

    journal_foot_row_cell=document.createElement("td");
    post_button=create_button("Post");
    post_button.addEventListener("click", function(){post_entries()});
    journal_foot_row_cell.appendChild(post_button);
    journal_foot_row.appendChild(journal_foot_row_cell);

    journal_foot.appendChild(journal_foot_row);
    
    //table body
    journal_body=document.createElement("tbody");
    //account type
    acc_type_list=Object.keys(data);

    //create jounal body
    var i;
    for(i=0; i<2; i++){
        journal_body_row=document.createElement("tr");
        journal_body_row_cell=document.createElement("td");
        //account number input
        acc_num_input=document.createElement("input");
        addAtrribute(acc_num_input, {"id":id, "type":"text", "style":"width:80px"});
        acc_num_input.addEventListener("keypress", function(event){getAccOnKey(event, this, data)});
        acc_num_input.addEventListener("focusout", function(){getAccOnFocus(this, data)});
        id++;
        journal_body_row_cell.appendChild(acc_num_input);
        journal_body_row.appendChild(journal_body_row_cell);

        //account type
        journal_body_row_cell=document.createElement("td");
        //account type select
        acc_type_select=createSelect(acc_type_list);
        addAtrribute(acc_type_select, {"id":id, "style":"width:180px;"});
        acc_type_select.addEventListener("change", function(){getSubList(this, data)});
        id++;

        journal_body_row_cell.appendChild(acc_type_select);
        journal_body_row.appendChild(journal_body_row_cell);
        
        //account subtype
        journal_body_row_cell=document.createElement("td");
        //account subtype select
        acc_subtype_select=createSelect(null);
        addAtrribute(acc_subtype_select, {"id":id, "style":"width:180px;"});
        acc_subtype_select.addEventListener("change", function(){getAccList(this, data)});
        id++;
     
        journal_body_row_cell.appendChild(acc_subtype_select);
        journal_body_row.appendChild(journal_body_row_cell);

        //accounts
        journal_body_row_cell=document.createElement("td");
        //account subtype select
        acc_select=createSelect(null);
        addAtrribute(acc_select, {"id":id, "style":"width:180px;"});
        acc_select.addEventListener("change", function(){getAccNum(this, data)});
        id++;
    
        journal_body_row_cell.appendChild(acc_select);
        journal_body_row.appendChild(journal_body_row_cell);
        
        //debit credit
        var k;
        for(k=0;k<2;k++){
            journal_body_row_cell=document.createElement("td");
            input=document.createElement("input");
            addAtrribute(input, {"id":id, "class":r[k], "type":"text", "style":"width:80px;"});
            input.addEventListener("focusout", function(){clearOther(this)});
            id++;
            journal_body_row_cell.appendChild(input);
            journal_body_row.appendChild(journal_body_row_cell);
        }//for
        journal_body.appendChild(journal_body_row);
    }//for table body
    
    journal_body_row=document.createElement("tr");
    journal_body_row_cell=document.createElement("td");
    journal_label=document.createElement("label");
    journal_label.setAttribute("id", id);
    journal_label_text=document.createTextNode("Narrative");
    journal_label.appendChild(journal_label_text);
    journal_body_row_cell.appendChild(journal_label);
    journal_body_row.appendChild(journal_body_row_cell);

    journal_body_row_cell=document.createElement("td");
    journal_body_row_cell.setAttribute("colspan", "5");
    nar_input=document.createElement("input");
    addAtrribute(nar_input, {"id":id, "class":"nar", "type":"text", "style":"width:100%;"});
    journal_body_row_cell.appendChild(nar_input);

    journal_body_row.appendChild(journal_body_row_cell);
    journal_body.appendChild(journal_body_row);

    journal.appendChild(journal_head);
    journal.appendChild(journal_foot);
    journal.appendChild(journal_body)

    return journal;

}//createJournal

function clearOther(input){
    if(input.value!=""){
        input_id=input.getAttribute("id");
        if(input.getAttribute("class")=="dr"){
            cr_input=document.getElementById(parseInt(input_id)+1);
            cr_input.value="";
        }//if
        else{
            dr_input=document.getElementById(parseInt(input_id)-1);
            dr_input.value="";
        }//else
    }//if
}//clearOther()

function getAccOnFocus(input_acc, data) {
    input_acc_id=input_acc.getAttribute("id");
    val=input_acc.value;
    x=findObjectByKeyJSON(data, "id", val);
    select_type=document.getElementById(parseInt(input_acc_id)+1);
    select_type.value=x[0];
    
    select_subtype=document.getElementById(parseInt(input_acc_id)+2);
    clearSelect(select_subtype);
    list_type=Object.keys(data[select_type.value]);
    for(i=0;i<list_type.length;i++){
        option=document.createElement("option");
        option.text=list_type[i];
        select_subtype.add(option);
    }//for
    select_subtype.value=x[1];

    select_acc=document.getElementById(parseInt(input_acc_id)+3);
    clearSelect(select_acc);
    list_acc=data[select_type.value][select_subtype.value];
    //acc_num
    for(i=0;i<list_acc.length;i++){
        option=document.createElement("option");
        option.text=list_acc[i]["title"];
        select_acc.add(option);
    }//for*/
    select_acc.value=x[2].title;
}//function

function getAccOnKey(event,input_acc, data) {
    input_acc_id=input_acc.getAttribute("id");
    if (event.keyCode == '13' && input_acc.value!='') {
        val=input_acc.value;
        x=findObjectByKeyJSON(data, "id", val);
        select_type=document.getElementById(parseInt(input_acc_id)+1);
        select_type.value=x[0];
        
        select_subtype=document.getElementById(parseInt(input_acc_id)+2);
        clearSelect(select_subtype);
        list_type=Object.keys(data[select_type.value]);
        for(i=0;i<list_type.length;i++){
            option=document.createElement("option");
            option.text=list_type[i];
            select_subtype.add(option);
        }//for
        select_subtype.value=x[1];

        select_acc=document.getElementById(parseInt(input_acc_id)+3);
        clearSelect(select_acc);
        list_acc=data[select_type.value][select_subtype.value];
        //acc_num
        for(i=0;i<list_acc.length;i++){
            option=document.createElement("option");
            option.text=list_acc[i]["title"];
            select_acc.add(option);
        }//for*/
        select_acc.value=x[2].title;
    }//if
    return;
}//function

function findObjectByKeyJSON(data, key, value){
    type_list=Object.keys(data);
    for(i=0; i<type_list.length; i++){
        sub_list=Object.keys(data[type_list[i]]);
        for(j=0;j<sub_list.length;j++){
            acc_list=data[type_list[i]][sub_list[j]];
            for(k=0; k<acc_list.length; k++){
                if(data[type_list[i]][sub_list[j]][k][key]==value){
                    arr=[];
                    arr.push(type_list[i]);
                    arr.push(sub_list[j]);
                    arr.push(data[type_list[i]][sub_list[j]][k]);
                    return arr;
                }//if
            }//for
        }//for
    }//for
}//findObject

function findObjectByKey(array, key, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                return array[i];
            }
        }
        return null;
    }//find object from an array

function getAccNum(select_acc, data){
    select_acc_id=select_acc.getAttribute("id");
    select_acc_value=select_acc.value;

    select_subtype_value=document.getElementById(parseInt(select_acc_id)-1).value;
    select_type_value=document.getElementById(parseInt(select_acc_id)-2).value;
    input_acc_num=document.getElementById(parseInt(select_acc_id)-3);

    list_acc=data[select_type_value][select_subtype_value];
    acc=findObjectByKey(list_acc, "title", select_acc_value);
    input_acc_num.value=acc["id"];
}//getAccNum()

function getAccList(select_subtype, data){
    select_subtype_id=select_subtype.getAttribute("id");
    select_subtype_value=select_subtype.value;

    select_type=document.getElementById(parseInt(select_subtype_id)-1);
    select_type_value=select_type.value;

    select_acc=document.getElementById(parseInt(select_subtype_id)+1);
    input_acc_num=document.getElementById(parseInt(select_subtype_id)-2);
    clearSelect(select_acc);

    list=data[select_type_value][select_subtype_value];
    //acc_num
    option=document.createElement("option");
    option.text=list[0]["title"];
    select_acc.add(option);
    input_acc_num.value=list[0]["id"];
    for(i=1;i<list.length;i++){
        option=document.createElement("option");
        option.text=list[i]["title"];
        select_acc.add(option);
    }//for
}//getAccList

function getSubList(select_type, data){
    select_type_id=select_type.getAttribute("id");
    select_type_value=select_type.value;
    
    select_subtype=document.getElementById(parseInt(select_type_id)+1);
    clearSelect(select_subtype);
    list_type=Object.keys(data[select_type_value]);
    for(i=0;i<list_type.length;i++){
        option=document.createElement("option");
        option.text=list_type[i];
        select_subtype.add(option);
    }//for
    select_subtype_value=select_subtype.value;

    select_acc=document.getElementById(parseInt(select_type_id)+2);
    input_acc_num=document.getElementById(parseInt(select_type_id)-1);
    clearSelect(select_acc);
    list_acc=data[select_type_value][select_subtype_value];
    //acc_num
    option=document.createElement("option");
        option.text=list_acc[0]["title"];
        select_acc.add(option);
        input_acc_num.value=list_acc[0]["id"];
    for(i=1;i<list_acc.length;i++){
        option=document.createElement("option");
        option.text=list_acc[i]["title"];
        select_acc.add(option);
    }//for
}//getSubList

function clearSelect(select){
    for (i = select.length - 1; i >= 0; i--) {
        select.remove(i);
    }
}//clearSelect

function create_button(val){
    var button=document.createElement("button");
    button.setAttribute("class", "btn btn-primary");
    t=document.createTextNode(val);
    button.appendChild(t);
    return button;
}//create_button()

function create_row(journal, data) {
    var r=["dr", "cr"];
    //get the last input id
    cells=document.getElementsByTagName("td");
    id=cells[cells.length-3].childNodes[0].getAttribute("id");
    //insert new row
    var acc_type_list=Object.keys(data);
    journal_body_row=journal.insertRow(journal.rows.length-2);
        journal_body_row_cell=document.createElement("td");
        //account number input
        id++;
        acc_num_input=document.createElement("input");
        addAtrribute(acc_num_input, {"id":id, "type":"text", "style":"width:80px"});
        acc_num_input.addEventListener("keypress", function(event){getAccOnKey(event, this, data)});
        acc_num_input.addEventListener("focusout", function(){getAccOnFocus(this, data)});
        id++;
        journal_body_row_cell.appendChild(acc_num_input);
        journal_body_row.appendChild(journal_body_row_cell);

        //account type
        journal_body_row_cell=document.createElement("td");
        //account type select
        acc_type_select=createSelect(acc_type_list);
        addAtrribute(acc_type_select, {"id":id, "style":"width:180px;"});
        acc_type_select.addEventListener("change", function(){getSubList(this, data)});
        id++;
        
        journal_body_row_cell.appendChild(acc_type_select);
        journal_body_row.appendChild(journal_body_row_cell);
        
        //account subtype
        journal_body_row_cell=document.createElement("td");
        //account subtype select
        acc_subtype_select=createSelect(null);
        addAtrribute(acc_subtype_select, {"id":id, "style":"width:180px;"});
        acc_subtype_select.addEventListener("change", function(){getAccList(this, data)});
        id++;
        
        journal_body_row_cell.appendChild(acc_subtype_select);
        journal_body_row.appendChild(journal_body_row_cell);

        //accounts
        journal_body_row_cell=document.createElement("td");
        //account subtype select
        acc_select=createSelect(null);
        addAtrribute(acc_select, {"id":id, "style":"width:180px;"});
        acc_select.addEventListener("change", function(){getAccNum(this, data)});
        id++;
        
        journal_body_row_cell.appendChild(acc_select);
        journal_body_row.appendChild(journal_body_row_cell);
        
        //debit credit
        var k;
        for(k=0;k<2;k++){
            journal_body_row_cell=document.createElement("td");
            input=document.createElement("input");
            addAtrribute(input, {"id":id, "class":r[k], "type":"text", "style":"width:80px;"});
            input.addEventListener("focusout", function(){clearOther(this)});
            id++;
            journal_body_row_cell.appendChild(input);
            journal_body_row.appendChild(journal_body_row_cell);
        }//for
        cells=document.getElementsByTagName("td");
        cells[cells.length-2].childNodes[0].setAttribute("id", id);
        id++;
        cells[cells.length-1].childNodes[0].setAttribute("id", id);
}//create_row

function post_entries(){
    dr_arr=document.getElementsByClassName("dr");
    cr_arr=document.getElementsByClassName("cr");
    var dr_sum=0;
    var cr_sum=0;
    for(i=0; i<dr_arr.length; i++){
        dr_sum+=Number(dr_arr[i].value);
        cr_sum+=Number(cr_arr[i].value);
    }//for
    if((dr_sum!="" && cr_sum!="") && dr_sum==cr_sum){
        if(document.getElementsByClassName("nar")[0].value!=""){
            alert("cool!");
        }//if
        else{
            alert("You forgot the narrative.");
        }//else
    }//if
    else
        alert("wrong bro!");
}//post_entries()