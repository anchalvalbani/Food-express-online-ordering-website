let items = [];
let total = 0;

function addItem(name, price, id) {
    let qty = Number(document.getElementById(id).value);

    if (qty <= 0) {
        alert("Enter quantity first");
        return;
    }

    items.push({ name: name, price: price, qty: qty });
    total += price * qty;

    document.getElementById("total").innerText = total;
    alert(name + " added!");
}

function placeOrder() {
    let name = cname.value;
    let phone = cphone.value;

    if (name === "" || phone === "") {
        alert("Fill customer details");
        return;
    }

    if (items.length === 0) {
        alert("Add items first");
        return;
    }

    alert("Order placed successfully!\nTotal Rs " + total);
}

function printBill() {
    if (items.length === 0) {
        alert("No items to print");
        return;
    }

    let name = cname.value;
    let phone = cphone.value;

    if (name === "" || phone === "") {
        alert("Fill customer details");
        return;
    }

    let win = window.open("", "", "width=400,height=600");

    win.document.write("<h2>FoodExpress 🍴</h2>");
    win.document.write("<p><b>Customer:</b> " + name + "</p>");
    win.document.write("<p><b>Contact:</b> " + phone + "</p>");
    win.document.write("<hr>");

    items.forEach(function(i) {
        win.document.write(
            "<p>" + i.name + " x " + i.qty + " = Rs " + (i.price * i.qty) + "</p>"
        );
    });

    win.document.write("<hr>");
    win.document.write("<h3>Total Rs " + total + "</h3>");
    win.document.write("<p>Thank you for ordering from FoodExpress!</p>");

    win.print();
}
