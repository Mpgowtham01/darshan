import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { fetchBlogById } from "../../components/Redux_Toolkit/blogDetailsSlice";
import Spinner from "../AllTemplesPage/Spinner";
import Blog from "./Blog";
import "./BlogDetailsPage.scss";
import BlogSidebar from "./BlogSidebar";

const BlogDetailsPage = () => {
  const blog = useSelector(state => state.blogDetails.blog?.details);
  const dispatch = useDispatch();
  const params = useParams();
  const currentClickedTag = useSelector(
    state => state.blogDetails?.currentClickedTag
  );

  useEffect(() => {
    dispatch(fetchBlogById({ id: params.id }));
  }, [params.id]);

  useEffect(() => {
    if (currentClickedTag) {
      dispatch(fetchBlogById({ tag: currentClickedTag }));
    }
  }, [currentClickedTag]);


  return (
    <Layout>
      <div className="blogDetailsPage">
        {blog ? (
          <div className={`blogDetailsPage__container`}>
            <BlogSidebar />
            <Blog />
          </div>
        ) : (
          <div className="spinnerContainer">
            <Spinner />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BlogDetailsPage;
