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