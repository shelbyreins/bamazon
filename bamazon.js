var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    display();
});

function display() {
    connection.query("SELECT * FROM products", function (err, response) {
        if (err) throw err;
        var table = new Table({
            head: ['ID', 'PRODUCT', 'DEPARTMENT', 'PRICE', 'QUANTITY']
            , colWidths: [5, 20, 20, 10, 12]
        });
        for (var i = 0; i < response.length; i++) {
            table.push(
                [response[i].item_id, response[i].product_name, response[i].department_name, response[i].price, response[i].stock_quanity]
            );
        }

        console.log(table.toString());
        messages();

    });
}

function messages() {
    inquirer
        .prompt([
            {
                name: "ID",
                type: "input",
                message: "What is the ID of the item you would like to purchase?",
                filter: Number
            },
            {
                name: "Quanity",
                type: "input",
                message: "How many item(s) would you like to purchase?",
                filter: Number
            }
        ])
        .then(function (answers) {
            ordering();
        });
}

function ordering() {

    var ID = answers.ID;
    var quantity = answers.Quantity;
    connection.query("SELECT * FROM products WHERE ID=" + item_id, function (err, response) {
        if (err) throw err;
            if (response[0].stock_quanity - quantity == 0){
                console.log("Your order has been completed.")

                // connection.query("UPDATE products SET stock_quanity = ? WHERE id = ?",
                // [
                //     response[i].stock_quanity - quantity
                // ]
                // )
            }

    });

}