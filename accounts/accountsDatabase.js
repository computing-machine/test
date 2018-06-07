aData={
    "sidebar":{"header":[{"user":"Accountant", "image":"fas fa-money-bill"}],
                "menu":[{"Char of Accounts":["New Account", "View Accounts"]}, {"Journals":["General journal", "Special journal"]}, 
                        {"Cash":["Cash in", "Cash out"]}, {"Reports":["Income Statement","Financial Position"]},
                        {"Account":["Change password", "Log out"]}]
                }
}

function showJournal(){
        var journal=createJournal(tData);
        div=document.getElementById("realContent");
        div.innerHTML="";
        div.appendChild(journal);
}

aLinks=[[
        function(){
                var journal=createJournal(tData);
                div=document.getElementById("realContent");
                div.innerHTML="";
                div.appendChild(journal);
        }
]];

