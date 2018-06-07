createLogInPage();

function createLogInPage() {
    container_div = document.createElement("div");
    container_div.setAttribute("class", "container");
    row_div = document.createElement("div");
    row_div.setAttribute("class", "row");
    col_div = document.createElement("div");
    col_div.setAttribute("id", "loginbox");
    col_div.setAttribute("class", "col-md-6 col-md-offset-3");
    panel_div = document.createElement("div");
    panel_div.setAttribute("class", "panel panel-default");
    panel_head_div = document.createElement("div");
    panel_head_div.setAttribute("class", "panel-heading");
    panel_title_div = document.createElement("div");
    panel_title_div.setAttribute("class", "panel-title text-center");
    panel_text_node = document.createTextNode("Welcome to AS");
    panel_title_div.appendChild(panel_text_node);
    panel_head_div.appendChild(panel_title_div);
    panel_body_div = document.createElement("div");
    panel_body_div.setAttribute("class", "panel-body");
    form_ele = document.createElement("form");//form creation
    form_ele.setAttribute("id", "form");
    form_ele.setAttribute("name", "form");
    form_ele.setAttribute("class", "form-horizontal");

    for (i = 0; i < 2; i++) {
        input_group_div = document.createElement("div");
        input_group_div.setAttribute("class", "input-group");
        span_ele = document.createElement("span");
        span_ele.setAttribute("class", "input-group-addon");
        i_ele = document.createElement("i");
        i_ele.setAttribute("class", "glyphicon glyphicon-user");
        span_ele.appendChild(i_ele);
        input_group_div.appendChild(span_ele);

        input_ele = document.createElement("input");
        input_ele.setAttribute("id", data["input"][i]["id"]);
        input_ele.setAttribute("type", data["input"][i]["type"]);
        input_ele.setAttribute("class", "form-control");
        input_ele.setAttribute("name", data["input"][i]["name"]);
        input_ele.setAttribute("value", "");
        input_ele.setAttribute("placeholder", data["input"][i]["placeholder"]);

        input_group_div.appendChild(input_ele);

        form_ele.appendChild(input_group_div);
    }//for

    form_group_div = document.createElement("div");
    form_group_div.setAttribute("class", "form-group");
    button_ele = document.createElement("button");
    button_ele.setAttribute("id", "login");
    button_ele.setAttribute("type", "button");
    button_ele.setAttribute("class", "btn btn-primary pull-right");
    button_ele.addEventListener("click", logIn);
    i_ele = document.createElement("i");
    i_ele.setAttribute("class", "glyphicon glyphicon-log-in");
    t = document.createTextNode("Log in");
    i_ele.appendChild(t);
    button_ele.appendChild(i_ele);
    form_group_div.appendChild(button_ele);
    form_ele.appendChild(form_group_div);
    panel_body_div.appendChild(form_ele);
    panel_div.appendChild(panel_head_div);
    panel_div.appendChild(panel_body_div);
    col_div.appendChild(panel_div);
    row_div.appendChild(col_div);
    container_div.appendChild(row_div);

    document.body.insertBefore(container_div, document.body.childNodes[0]);
}//createLogInPage()

function logIn(){
    username=document.getElementById("username").value;
    password=document.getElementById("password").value;
    if(username=="a" && password=="a"){
        b=document.body;
        for(i=0; i<b.children.length;i++){
            if(b.childNodes[i].tagName!="SCRIPT")
                b.removeChild(b.childNodes[i]);
        }//for
        createPage(aData);
    }//if
    else if(username=="p" && password=="p"){
        b=document.body;
        for(i=0; i<b.children.length;i++){
            if(b.childNodes[i].tagName!="SCRIPT")
                b.removeChild(b.childNodes[i]);
        }//for
        createPage(pData);
    }//if
    else if(username=="s" && password=="s"){
        b=document.body;
        for(i=0; i<b.children.length;i++){
            if(b.childNodes[i].tagName!="SCRIPT")
                b.removeChild(b.childNodes[i]);
        }//for
        createPage(sData);
    }//if
}//logIn