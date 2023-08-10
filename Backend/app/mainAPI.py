from os import name
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from fastapi import FastAPI, File, UploadFile
from fastapi.datastructures import UploadFile
from pydantic import BaseModel
from pydantic.types import Json
from sqlalchemy.sql.expression import update
from .database import Schema
from .database.Database import engine, MySession
from .Models import MyModels
import json
from sqlalchemy import update

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000",
    "http://localhost:3030",
    "localhost:3030"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


Schema.Base.metadata.create_all(bind=engine)


def format_string(str1):
    tmp = str(str1)
    str2 = ''
    for i in tmp:
        if i == "'":
            str2 += '\"'
        else:
            str2 += i
    return str2


@app.get('/')
async def get():
    return "Welcome to Hà Mã Corner"


@app.get("/admin")
async def get_admin():
    session = MySession()
    admins = session.query(Schema.Admin).all()
    items = []
    for item in admins:
        items.append({
            "name": item.username,
            "password": item.password,
            "displayname": item.displayname
        })
    session.close()
    return{"data": items}


@app.get("/products")
async def get_products():
    session = MySession()
    products = session.query(Schema.Products).all()
    items = []
    for item in products:
        items.append({
            "id": item.id,
            "title": item.title,
            "price": item.price,
            "image01": item.image01,
            "image02": item.image02,
            "categorySlug": item.categorySlug,
            "colors": json.loads(item.color),
            "slug": item.slug,
            "size": json.loads(item.size),
            "description": item.description
        })
    session.close()
    return{"data": items}


@app.get("/order")
async def get_order():
    session = MySession()
    orders = session.query(Schema.orders).all()
    items = []
    for item in orders:
        items.append({
            "id": item.id,
            "name": item.name,
            "phone": item.phone,
            "address": item.address,
            "email": item.email,
            "order": json.loads(item.order),
            "total_money": item.total_money,
            "status": item.status,
            "date": str(item.create_at).replace("T", " ")
        })
    session.close()
    return{"data": items}


@app.get("/order/{id}")
async def get_order(id: int):
    session = MySession()
    order = session.query(Schema.orders).filter(Schema.orders.id == id).first()
    if order is None:
        session.close()
        return {"data": "Đơn hàng không tồn tại"}
    session.close()
    order.order = json.loads(order.order)
    return {"data": order}


@app.get("/products/{id}")
async def get_products(id: int):
    session = MySession()
    products = session.query(Schema.Products).filter(
        Schema.Products.id == id).first()
    if products is None:
        session.close()
        return {"data": "Sản phẩm không tồn tại"}
    session.close()
    products.color = json.loads(products.color)
    products.size = json.loads(products.size)
    return {"data": products}


@app.get("/customers")
async def get_customers():
    session = MySession()
    orders = session.query(Schema.Customers).all()
    items = []
    for item in orders:
        items.append({
            "id": item.id,
            "name": item.name,
            "phone": item.phone,
            "email": item.email,
            "order_quantity": item.order_quantity,
            "total_money": item.total_money
        })
    session.close()
    return{"data": items}


@app.post("/admins")
def create_admin(model: MyModels.admin):
    myadmin = Schema.Admin(
        username=model.username,
        password=model.password,
        displayname=model.displayname
    )
    session = MySession()
    session.add(myadmin)
    session.commit()
    session.refresh(myadmin)
    session.close()
    return {"data": myadmin}


@app.post("/products")
def create_products(model: MyModels.products):
    product = Schema.Products(
        title=model.title,
        price=model.price,
        image01=model.image01,
        image02=model.image02,
        categorySlug=model.categorySlug,
        color=format_string(model.color),
        slug=model.slug,
        size=format_string(model.size),
        description=model.description
    )
    session = MySession()
    session.add(product)
    session.commit()
    session.refresh(product)
    session.close()
    return {"data": product}


@app.post("/order")
def create_order(model: MyModels.order):
    order = Schema.orders(
        name=model.name,
        phone=model.phone,
        address=model.address,
        email=model.email,
        order=format_string(model.order),
        total_money=model.total_money,
        status=model.status,
    )
    session = MySession()
    session.add(order)
    session.commit()
    session.refresh(order)
    session.close()
    customer = session.query(Schema.Customers).filter(
        Schema.Customers.name == order.name and Schema.Customers.phone == order.phone).first()
    if customer is None:
        session.commit()
        customer_new = Schema.Customers(
            name=order.name,
            phone=order.phone,
            email=order.email,
            order_quantity=1,
            total_money=order.total_money
        )
        session.add(customer_new)
        session.commit()
        session.close()
        return {"data": f"Đã thêm khách hàng {name}"}
    customer.order_quantity += 1
    customer.total_money = customer.total_money + order.total_money
    session.commit()
    session.close()
    return {"data": order, "aler": f"Đã cập nhật khách hàng {order.name}"}


@app.put("/order/{id}")
def update_order(id: int, status: str):
    session = MySession()
    order = session.query(Schema.orders).filter(Schema.orders.id == id).first()
    if order is None:
        session.commit()
        session.close()
        return {"data": "Đơn hàng không tồn tại"}
    order.status = status
    name = order.name
    session.commit()
    session.close()
    return {"data": f"Đã cập nhật đơn hàng của {name}"}


@app.put("/products/{id}")
def update_product(id: int, model: MyModels.products):
    products = Schema.Products(
        title=model.title,
        price=model.price,
        image01=model.image01,
        image02=model.image02,
        categorySlug=model.categorySlug,
        color=format_string(model.color),
        slug=model.slug,
        size=format_string(model.size),
        description=model.description,
    )
    session = MySession()
    product = session.query(Schema.Products).filter(
        Schema.Products.id == id).first()
    if product is None:
        session.commit()
        session.close()
        return {"data": "Sản phẩm không tồn tại"}
    product.title = products.title
    product.price = products.price
    product.image01 = products.image01
    product.image02 = products.image02
    product.categorySlug = products.categorySlug
    product.color = products.color
    product.slug = products.slug
    product.size = products.size
    product.description = products.description
    session.commit()
    session.close()
    return {"data": f"Đã chỉnh sửa sản phẩm có tên {products.title}"}


@app.delete("/order/{id}")
def delete_order(id: int):
    session = MySession()
    order = session.query(Schema.orders).filter(Schema.orders.id == id).first()
    if order is None:
        session.commit()
        session.close()
        return {"data": "Đơn hàng không tồn tại"}
    name = order.name
    session.delete(order)
    session.commit()
    session.close()
    customer = session.query(Schema.Customers).filter(
        Schema.Customers.name == order.name and Schema.Customers.phone == order.phone).first()
    customer.order_quantity -= 1
    customer.total_money = customer.total_money - order.total_money
    session.commit()
    session.close()
    return {"data": f"Đã xóa đơn hàng của {name}"}


@app.delete("/products/{id}")
def delete_products(id: int):
    session = MySession()
    products = session.query(Schema.Products).filter(
        Schema.Products.id == id).first()
    if products is None:
        session.commit()
        session.close()
        return {"data": "Sản phẩm không tồn tại"}
    name = products.title
    session.delete(products)
    session.commit()
    session.close()
    return f"Đã xóa sản phẩm có tên {name}"
