import React, { useEffect, useState } from "react";
import axios from "axios";
import Helmet from "../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../components/Section";

import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";

const getProducts = (products, count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};

const Product = (props) => {
  const slug = props.match.params.slug;
  //   const product = productData.getProductBySlug(props.match.params.slug);

  // eslint-disable-next-line
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/products");
      setProducts(result.data.data);
      setProduct(result.data.data.find((product) => product.slug === slug));
      setRelatedProducts(getProducts(result.data.data, 8));
      setIsLoading(false);
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [slug]);
  return isLoading ? (
    <div className="loader">
      <p className="loader__text"></p>
    </div>
  ) : (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Discover more</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((item, index) => (
              <ProductCard
                key={index}
                title={item.title}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
