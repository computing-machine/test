aData={
    "sidebar":{"header":[{"user":"Accountant", "image":"fas fa-money-bill"}],
                "menu":[{"Char of Accounts":["New Account", "View Account"]}, {"Journals":["General journal", "Sales journal"]}, 
                        {"Cash":["Cash in", "Cash out"]}, {"Reports":["Income Statement","Financial Position"]},
                        {"Account":["Change password", "Log out"]}]
                }
}

aLinks=[[function(){
        var table=createDataTable(dataSet);
        div=document.getElementById("realContent");
        div.innerHTML="";
        div.appendChild(table);
}],[]];

