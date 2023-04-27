import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProductDetailsAction } from "../Redux/Actions/ProductAction";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import Navbars from "../Components/Navbars";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const [qty,setQty]=useState('')




  const { loading, Error, ProductDetails } = useSelector(
    (state) => state.productDetails
  );

  if (ProductDetails) {
    var { productDetails } = ProductDetails;

    console.log("123", productDetails);
  }

  useEffect(() => {
    dispatch(ProductDetailsAction(id));
  }, []);

const addtocarthandler=()=>{

    console.log(('234'));

    navigate(`/cart/${id}?qty=${qty}`)

}




  return (
    <div>
      <Navbars />

      <Container>
        <Row className="mt-8">
          <Col md={5}>
            <img src={productDetails?.image}></img>
          </Col>

          <Col md={4}>
            <h1 className="mt-10 font-bold text-4xl">{productDetails?.name}</h1>

            <h3 className="mt-8 ms-10 font-bold text-2xl underline-offset-1 text-yellow-300">
              Price : ${productDetails?.price}
            </h3>

            <h4 className="mt-7 ms-4 me-4  text-lg">
              {productDetails?.description}
            </h4>
          </Col>

          <Col md={3} className="mt-32">
            <ListGroup className="p-10">
              <ListGroup.Item>
                Price:{" "}
                <span className="ms-8  font-bold">
                  ${productDetails?.price}
                </span>{" "}
              </ListGroup.Item>
              <ListGroup.Item className="flex">
                Qty:{" "}
                <span className="ms-8 font-bold">
                  
                <Form.Control as="select" value={qty} onChange={(e)=>setQty(e.target.value)}>

                <option>Open this select menu</option>

                    {
                        [...Array(productDetails?.countInStock).keys()].map((x)=>{

                            return(

                                
                            <option value={x+1} key={x+1}>{x+1}</option>

                            )
                             
                           })
                        
                    }

                
                </Form.Control>

                </span>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="bg-black text-white ms-4 mt-2 mb-2 text-center" onClick={()=>addtocarthandler()}>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
