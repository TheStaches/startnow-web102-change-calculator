document.getElementById("calculate-change").addEventListener("click", clicked);

function clicked() {
    var due = parseFloat(document.getElementById("amount-due").value);
    var received = parseFloat(document.getElementById("amount-received").value);

    if (received >= due) {
        var change = Math.round((received - due) * 100);
        var cents = change % 100;
        
        var dollar = Math.floor(change / 100);
        document.getElementById("dollars-output").innerHTML = dollar;

        var quarter = Math.floor(cents / 25);
        cents -= quarter * 25;
        document.getElementById("quarters-output").innerHTML = quarter;

        var dime = Math.floor(cents / 10);
        cents -= dime * 10;
        document.getElementById("dimes-output").innerHTML = dime;

        var nickel = Math.floor(cents / 5);
        cents -= nickel * 5;
        document.getElementById("nickels-output").innerHTML = nickel;

        var pennie = cents;
        document.getElementById("pennies-output").innerHTML = pennie;

    } else {console.log("You owe more money");}
}