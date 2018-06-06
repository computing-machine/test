aData={
    "sidebar":{"header":[{"user":"Accountant", "image":"fas fa-money-bill"}],
                "menu":[{"Char of Accounts":["New Account", "View Account"]}, {"Journals":["General journal", "Sales journal"]}, 
                        {"Cash":["Cash in", "Cash out"]}, {"Reports":["Income Statement","Financial Position"]},
                        {"Account":["Change password", "Log out"]}]
                }
}

aLinks=[[function(){
        var journal=createDataTable();
        div=document.getElementById("realContent");
        div.innerHTML="";
        div.appendChild(journal);
        
        $('#example').DataTable( {
                data: dataSet,
                columns: [
                    { title: "Name" },
                    { title: "Position" },
                    { title: "Office" },
                    { title: "Extn." },
                    { title: "Start date" },
                    { title: "Salary" }
                ]
            } );
}],[]];

