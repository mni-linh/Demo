import React, {useEffect, useState} from 'react'

import Table from '../components/table/Table'

import axios from 'axios'

const formatter = new Intl.NumberFormat("vi-VI", {
    style: "currency",
    currency: "VND",
});

const productTableHead = [
    '',
    'name',
    'categorySlug',
    'price',
    'color',
    'size',
    'option'
    // 'linkpic',
    // 'description',
    // 'picture',
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{index+1}</td>
        <td>{item.title}</td>
        <td>{item.categorySlug}</td>
        <td>{formatter.format(item.price)}</td>
        {/* <td><img src={item.image01} alt={item.description}/></td> */}
        {/* <td>{item.description}</td>
         */}
        
    </tr>
)

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        const result = await axios("http://localhost:8000/products");
        setProducts(result.data.data);
        setIsLoading(false);
        };

        fetchData();
    }, []);
    return isloading ? (
        <div>
            <h2 className="page-header">
                Products
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={productTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                               bodyData={products}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ): (
        <div className="loader">
          <p className="loader__text">Loading...</p>
        </div>
      )
}

export default Products
