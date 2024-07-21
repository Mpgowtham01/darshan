import React from "react";
import { Col, Row } from "react-bootstrap";
import Spinner from "./Spinner";
import TempleCard from "./TempleCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemplesList, filterTempleByText, resetFilterQueries } from "../../components/Redux_Toolkit/allTempleSlice";
// { Data, lastTemplesCardRef, error, loading }

const RightSection = () => {
  const dispatch = useDispatch();

  const filteredData = useSelector(state => state.allTemples.filteredData);
  const loadingTemples = useSelector(state => state.allTemples.loadingTemples);
  const hasMore = useSelector(state => state.allTemples.hasMore);
  const start = useSelector(state => state.allTemples.start);
  const end = useSelector(state => state.allTemples.end);


  const handleViewMore = () => {
    dispatch(fetchTemplesList({ start, end, type: "PUSH DATA" }));
  };

  const handleViewAllTempleBtn = () => {
    dispatch(filterTempleByText(""));
    dispatch(fetchTemplesList({ start, end, type: "PUSH DATA" }));
    dispatch(resetFilterQueries());
  };

  if (loadingTemples) {
    return (<div className="d-flex justify-content-center"><Spinner /></div>);
  }


  return (
    <>
      <Row className="gy-3">
        {filteredData?.length ? (filteredData.map((data) => {
          const Key = `key${data.id}`;

          return (<Col md={6} xl={4} key={Key}><TempleCard item={data} /></Col>);
        })
        ) : (
          <div className="text-center noTemples">
            <h3 className="title">There is no temples based on your filter's</h3>
            <button className="customBtn dark-text" onClick={handleViewAllTempleBtn}>Show All Temples</button>
          </div>
        )}
      </Row>

      {
        hasMore &&
        <div className="text-center mx-auto my-5 pt-3">
          <button className="customBtn bg" disabled={!hasMore} onClick={handleViewMore}>View More</button>
        </div>
      }
    </>
  );
};

export default React.memo(RightSection);
