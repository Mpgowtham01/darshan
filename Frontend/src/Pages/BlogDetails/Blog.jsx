import React from "react";
import { Container } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentClickedTag } from "../../components/Redux_Toolkit/blogDetailsSlice";

const Blog = () => {
  const blog = useSelector(state => state.blogDetails.blog?.details);
  const currentClickedTag = useSelector(
    state => state.blogDetails?.currentClickedTag
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="blogDetailsPage__container--blog">
        <Container>
          <figure>
            <img
              src={`${process.env.REACT_APP_DEV_BASE_URL}${blog?.blog_image}`}
              alt="Blog Image"
            />
          </figure>

          
           
              {/* <div className="" > */}
           
            {/* </div> */}
         
        </Container>
        <div className="content">
         <div className="templeTags">
              {blog?.blog_tags &&
                blog.blog_tags.split(",").map((tag, index) => (
                  <span key={index} onClick={() => {
                    if (tag != currentClickedTag) {
                      dispatch(setCurrentClickedTag(tag));
                    }
                  }}>
                    {tag}
                  </span>
                ))}
               
            </div>
            </div>
        <h1 className="title">{blog?.blog_title}</h1>
            <p className="description">{blog?.blog_description}</p>
      </div>
    </>
  );
};

export default Blog;
