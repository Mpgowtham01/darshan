import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import IyerLayout from "../../Iyer/Components/Layout";
// import GuideLayout from "../../Guide/Components/Layout"
import BlogsCard from "./BlogsCard";
import { AiOutlineSearch } from "react-icons/ai";
import "./BlogsPage.scss";
import { useLocation } from "react-router-dom";

const BlogsPage = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const router = useLocation();

  const handleFilterBlogByText = (e) => {
    const re = RegExp(
      `.*${e.target.value
        .toLowerCase()
        .split("")
        .join(".*")}.*`
    );

    const newData = filteredBlogs.filter((list) =>
      list.blog_title.toLowerCase().match(re)
    );

    setFilteredBlogs(newData);

    if (e.target.value == "") {
      setFilteredBlogs(blogs);
    }
  };

  const getBlogs = async () => {
    try {
      const Url = `${process.env.REACT_APP_DEV_BASE_URL}/blog/getAll?show_blogs_in=temple`;
      const res = await axios.get(Url);

      if (res.data) {
        setBlogs(res.data);
        setFilteredBlogs(res.data);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return router.pathname == "/bookmyiyer/blog" ? (
    <IyerLayout>
      <div className="blogsPage" >
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Row>
                <Col sm={8} lg={6} xl={5} className="ms-auto">
                  <div className="blogsPage__searchField">
                    <InputGroup>
                      <Form.Control placeholder="Search blog..." />
                      <InputGroup.Text>
                        <AiOutlineSearch />
                      </InputGroup.Text>
                    </InputGroup>
                  </div>
                </Col>
              </Row>

              <div className="blogsPage__container">
                {filteredBlogs.length ? (
                  filteredBlogs.map((item, index) => (
                    <BlogsCard {...item} index={index} key={item.id} />
                  ))
                ) : (
                  <h2 className="text-center">No Blogs to show...</h2>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </IyerLayout>
  ) : (
    <Layout >
      <div className="blogsPage">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Row>
                <Col sm={8} lg={6} xl={5} className="ms-auto">
                  <div className="blogsPage__searchField">
                    <InputGroup>
                      <Form.Control
                        onChange={handleFilterBlogByText}
                        placeholder="Search blog..."
                      />
                      <InputGroup.Text>
                        <AiOutlineSearch />
                      </InputGroup.Text>
                    </InputGroup>
                  </div>
                </Col>
              </Row>

              <div className="blogsPage__container">
                {filteredBlogs.length ? (
                  filteredBlogs.map((item, index) => (
                    <BlogsCard {...item} index={index} key={item.id} />
                  ))
                ) : (
                  <h2 className="text-center">No Blogs to show...</h2>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default BlogsPage;
