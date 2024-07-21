import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Layout from '../../../components/Layout';
import "./PriestPage.scss";
import { TbCurrencyRupee } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const PriestPage = () => {
    const [originalData, setOriginalData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const navigate = useNavigate();

    const getFunctions = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_DEV_BASE_URL}/functions/getAll`);
            if (res.data) {
                setOriginalData(res.data);
                setFilterData(res.data);
            }
        } catch (error) {
            console.log("Error", error);
        }
    };

    useEffect(() => {
        getFunctions();
    }, []);

    return (
        <Layout>
            <div className="priestPage">
                <Container>
                    <div className="priestPage__cards">
                        <Row className='gy-4'>
                            {filterData.length ? filterData.map(item =>
                                <Col md={6} lg={3}>
                                    <Card key={item?.FunctionID} onClick={() => navigate(`/priestfunctiondetails/${item?.FunctionID}`)}>
                                        <Card.Img variant="top" src={`${process.env.REACT_APP_DEV_BASE_URL}${item?.FunctionImage}`} />
                                        <Card.Body>
                                            <Card.Title>{item?.FunctionName}</Card.Title>

                                            <div className="my-3">
                                                <h6>
                                                    <span className='mb-1 d-block'>Price Range With Material</span>
                                                    <span className='d-block fw-bold'>{item?.MinPriceWithMaterial}<TbCurrencyRupee /> - {item?.MaxPriceWithMaterial}<TbCurrencyRupee /></span>
                                                </h6>
                                            </div>

                                            <div className="my-3">
                                                <h6>
                                                    <span className='mb-1 d-block'>Price Range Without Material</span>
                                                    <span className='d-block fw-bold'>{item?.MinPriceWithOutMaterial}<TbCurrencyRupee /> - {item?.MaxPriceWithOutMaterial}<TbCurrencyRupee /></span>
                                                </h6>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                                : <p>No Functions....</p>}
                        </Row>
                    </div>
                </Container>
            </div>
        </Layout>
    );
};

export default PriestPage;