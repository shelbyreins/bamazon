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
                name: "item_id",
                type: "input",
                message: "What is the ID of the item you would like to purchase?",
                filter: Number
            },
            {
                name: "stock_quanity",
                type: "input",
                message: "How many item(s) would you like to purchase?",
                filter: Number
            }
        ])
        .then(function (answers) {
            var inputId = answers.item_id;
            var quantity = answers.stock_quanity;
            // if(answers === "Q"){
            //     quit();
            // }
            connection.query("SELECT * FROM products WHERE item_id = " + inputId, function (err, response) {
                if (err) throw err;

                if (response[0].stock_quanity >= quantity) {
                    console.log("------------------------------")
                    console.log("Your order has been completed.")
                    console.log("------------------------------")

                    connection.query("UPDATE products SET stock_quanity =" + (response[0].stock_quanity - quantity) + " WHERE item_id =" + inputId, function (error, response) {
                        if (error) throw error;
                        console.log("------------------------------")
                        console.log("Your order has been placed!")
                        console.log("------------------------------")                        
                        restart();
                    })

                } else {
                    console.log("------------------------------")                    console.log("Please modify your order.")
                    console.log("Sorry, there is not enough product in stock.")
                    console.log("------------------------------")
                    modifyOrder();
                }

            });
        });
}

function restart() {
    inquirer
        .prompt([
            {
                name: "restart",
                type: "list",
                message: "Do you want to shop more?",
                choices: ["Yes", "No"]
            },
        ])
        .then(function (answer) {
            if (answer.modifyOrder === "Yes") {
                display()
            } else {
                quit()
            }
        });

}

function modifyOrder() {
    inquirer
        .prompt([
            {
                name: "modifyOrder",
                type: "list",
                message: "Would you like to modify your order?",
                choices: ["Yes", "No"]
            },
        ])
        .then(function (answer) {
            if (answer.modifyOrder === "Yes") {
                display();
            } else {
                quit();
            }
        });

}
function quit() {
    console.log("||||||||||||||||||||||||||||||||||||");
    console.log("Thanks for visiting, see you soon!");
    console.log("||||||||||||||||||||||||||||||||||||");
    connection.end();
}