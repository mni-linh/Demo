from pydantic.errors import ColorError
from sqlalchemy import Integer, String, Float, Column, engine, func, TIMESTAMP
from sqlalchemy.sql.elements import Null
from sqlalchemy.sql.expression import false
from sqlalchemy.sql.functions import user
from sqlalchemy.sql.schema import ForeignKey
#from Backend.app.Models.MyModels import products
from .Database import Base


class Admin(Base):
    __tablename__ = "admins"
    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(50), nullable=False)
    password = Column(String(18), nullable=False)
    displayname = Column(String(30), default="Admin", nullable=False)
    create_at = Column(TIMESTAMP, nullable=False, server_default=func.now())


class Customers(Base):
    __tablename__ = "customers"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    phone = Column(String(50), nullable=False)
    email = Column(String(100), nullable=False)
    order_quantity = Column(Integer, nullable=False)
    total_money = Column(Integer, nullable=False)
    create_at = Column(TIMESTAMP, nullable=False, server_default=func.now())


class Products(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(100), nullable=False)
    price = Column(Float, default=0, nullable=False)
    image01 = Column(String(300), nullable=False)
    image02 = Column(String(300), nullable=False)
    categorySlug = Column(String(100), nullable=False)
    color = Column(String(100), nullable=False)
    slug = Column(String(100), nullable=False)
    size = Column(String(100), nullable=False)
    description = Column(String(300), nullable=False)
    create_at = Column(TIMESTAMP, nullable=False, server_default=func.now())


class orders(Base):
    __tablename__ = "orders"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    phone = Column(String(50), nullable=False)
    address = Column(String(300), nullable=False)
    email = Column(String(100), nullable=False)
    order = Column(String(1000), nullable=False)
    total_money = Column(Integer, nullable=False)
    status = Column(String(100), default = "Khởi tạo", nullable=False)
    create_at = Column(TIMESTAMP, nullable=False, server_default=func.now())



