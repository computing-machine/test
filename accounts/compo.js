function showJournal(data){
    var journal = createJournal(data);
    document.getElementById("realContent").appendChild(journal);
}

function f0(){
    alert("Got alerted by f0.");
}

function f1(){
    alert("Got alerted by f1");
}