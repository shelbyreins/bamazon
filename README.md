# bamazon

# Overview


Bamazon is a command line interface (CLI) application, an Amazon-like virtual storefront that takes in orders from customers and depletes stock from the store's inventory using MYSQL database. 



# Installation


[Download](https://nodejs.org/en/download/) and install node.js

[Download](https://www.mysql.com/downloads/) and install MYSQL

1. Clone the GitHub Repository
2. Create a database in MYSQL using bamazon.sql
3. Use node package manager to install the required packages for this application. Run:

    `npm install MYSQL`

    `npm install inquirer`

    `npm install cli-table`



### **Step-by-step Instructions**

1. Open your terminal/Gitbash
2. Navigate to the bamazon directory
3. Run this command:

    ### **Customer** 
    `node customerBamazon.js`

    After running the above command, a table will appear with the current inventory. Two questions will be prompted. To answer the first question, type in the ID number from the table matching the item you would like to purchase. The following question asks for the quantity you are looking for (reference the quantity available in the table. Finally your order will either be completed or if we do not have sufficient inventory, the order will not be completed and a second prompt will ask if you want to modify the order. 

    #### See the customer side of Bamazon in action

     <img src = "images/customerBamazon.gif" width="400px"/>


## Technologies Used

* Javascript
* node.js 
* MYSQL
* Node Package Managers (NPM)
    * MYSQL
    * inquirer
    * cli-table
* Git
* Github

### Future development

Create a manager view that can View Products for Sale, View Low Inventory, Add to Inventory, Add New Product.

