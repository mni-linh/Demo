from typing import List
from pydantic import BaseModel

#from Backend.app.database.Database import Base


class admin(BaseModel):
    username: str
    password: str
    displayname: str


class customer(BaseModel):
    name: str
    phone: str
    email: str
    order_quantity: int
    total_money: int


class products(BaseModel):
    title: str
    price: float
    image01: str
    image02: str
    categorySlug: str
    color: list
    slug: str
    size: list
    description: str


class order(BaseModel):
    name: str
    phone: str
    address: str
    email: str
    order: list
    total_money: int
    status: str


# class order_item(BaseModel):
# class shopping_session(BaseModel):
# class cart_item(BaseModel):
