# Đồ án cuối kỳ Công nghệ web

## Design by Coffee Lake team

- ### Trần Thị Tứ Linh - 4501104127

## Clone project

###

```bash
   $ git clone https://github.com/mni-linh/final-web-tech.git
```

## Install Xampp and Python

```bash
   $ winget install -e --id ApacheFriends.Xampp.8.1
```

```bash
   $ winget install -e --id Python.Python.3.10
```

## Start Apache and MySQL

![Start Apache and MySQL](./Demo/startXampp.png)

## Open phpMyAdmin

![Open phpMyAdmin](./Demo/startMySQL.png)

## Set up database

- ### Step 1: Create database name hama
  !["Create Database hama"](./Demo/create-database-step1.png)
- ### Step 2: Select database hama
  !["Select Database hama"](./Demo/create-database-step2.jpg)
- ### Step 3: Import file hama.sql from .\Backend\app\database\hama.sql
  !["Import file hama.sql"](./Demo/create-database-step3.png)

## Set up Backend

```
   $ cd Backend
   $ env\Scripts\activate
   $ pip install -r requirements.txt
```

## Start Backend

```
   $ python main.py
```

## follow link: http://localhost:8000/docs

## Set up project

```
   $ npm i
```

## Start project

```
   $ npm run start
```

## Build project

```
   $ npm run build
```

## Set up page admin

```
   $ cd admin
   $ npm i
```

## Start page admin

```
   $ npm start
```

## Demo

- ### Admin
  !["admin"](./Demo/demo-admin.png)
  !["admin"](./Demo/demo-admin-product.png)
- ### Customer
  !["customer"](./Demo/demo-customer.png)
  !["customer"](./Demo/demo-customer-course.png)
  !["customer"](./Demo/demo-customer-product.png)
  !["customer"](./Demo/demo-customer-contact.png)
  !["customer"](./Demo/demo-customer-card.png)
  !["customer"](./Demo/demo-customer-checkout.png)
