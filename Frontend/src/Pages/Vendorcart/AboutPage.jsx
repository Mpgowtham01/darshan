import React from "react";
import { Footer, Navbar } from "../../components/Vendorcart";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Templ.online is a one-stop solution for all your divine needsregarding
          temples. We are more than happy to render the servicethrough our
          website and our mobile application.
          <br />
          In our website, we provide all the details about the temples of India,
          provide contact details of the priests of the temples, provide a
          marketplace for the vendors and divine needs, list of auspicious days
          & Festivals, provide contact details of astrologers and many more.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPO9DzT6niP5HJgQgoz5Vh0g6640CQmo9YIQ&s "
                alt=""
                style={{ height: "40vh" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Prasadam</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdZIponU8nunWKsPE2plZv9OoChtUKdQOl_XafEjYGfv0WKhLq9VzIIWPAvKsxcuy6y_ThzjDFOMbUVB5Qmu96DbEVh4OZBm5uSxDj-XUQs-5KpKRqjEHOTLHyv9Bjnpt7MCE0FoWmfYXZ/s1600/img_Pooja_Items.JPG"
                alt=""
                style={{ height: "40vh" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Archana Items</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="data:image/jpeg;base64,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"
                alt=""
                style={{ height: "40vh" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Temple Photos</h5>
              </div>
            </div>
          </div>
          {/* <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;