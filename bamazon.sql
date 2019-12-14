DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(200) NOT NULL,
    department_name VARCHAR(200) NOT NULL,
    price DECIMAL(10,4) NULL,
    stock_quanity INT NOT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES 
    ("Beanie", "Clothing", 8, 700),
    ("Shampoo", "Beauty", 10, 100),
    ("Ice Trays", "Household", 10.99, 500),
    ("Protein Powder", "Food", 30, 40),
    ("Scissors", "Household", 5, 5000),
    ("Microwave", "Household", 5, 9),
    ("CD", "Entertainment", 15.99, 1000),
    ("Headphones", "Electronic", 55.99, 15),
    ("Fan", "Household", 29, 19),
    ("Eyeshadow", "Beauty", 45, 600)


-- item_id (unique id for each product)
-- product_name (Name of product)
-- department_name
-- price (cost to customer)
-- stock_quantity (how much of the product is available in stores)