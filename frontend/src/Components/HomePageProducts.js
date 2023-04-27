import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductListAction } from "../Redux/Actions/ProductAction";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import Shimmer from "./Shimmer";
import ErrorComponent from "./ErrorComponent";
import {Link} from 'react-router-dom'

const HomePageProducts = () => {
  const dispatch = useDispatch();


  const { loading, productz, error } = useSelector(
    (state) => state.productList
  );

  if (productz) {
  
 

   var { products } = productz;
 

}




  useEffect(() => {
    dispatch(ProductListAction());
  }, []);

  return (
    <div className="ms-16">
      <Container>
        <Row>
         
         {loading && <Shimmer/>}
         { error && <ErrorComponent error={error}/>}

          {  products && products.length>0 && products.map((item)=>{

            return(

                <Col md={4} className="text-center h-96 mb-24">
                <Card className=" w-72 mt-5">
                  <Card.Img variant="top" src={item.image} className="h-48" />
                  <Card.Body>
                    <Link to={`/productDetails/${item.id}`}><Card.Title className="pb-2">{item.name}</Card.Title></Link>
                    <Card.Text  className="pb-2">
                     {item.category}
                    </Card.Text>
                    <Card.Text  className="pb-2">
                     $ {item.price}
                    </Card.Text>
                    <Button className="bg-blue-800 text-white font-bold">
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

            )
          })

           
          }
        </Row>
      </Container>
    </div>
  );
};

export default HomePageProducts;
