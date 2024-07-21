import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import TempleCard from "../AllTemplesPage/TempleCard";

// const getAllRelatedTemple = async (
//   grouptable_id,
//   speciality_id,
//   city_id,
//   id
// ) => {
//   try {
//     console.log('grouptable_id', grouptable_id)
//     console.log('speciality_id', speciality_id)
//     console.log('city_id', city_id)
//     console.log('Homeid', id)

//     const data = await axios.get(
//       `${process.env.REACT_APP_DEV_BASE_URL}/temple/getAllRelatedTemple?grouptable_id=${grouptable_id}&speciality_id=${speciality_id}&city_id=${city_id}&id=${id}`
//     );
//     return data.data;
//   } catch (error) {
//     return error;
//   }
// };
const getAllRelatedTemple = async (
  grouptable_id,
  speciality_id,
  city_id,
  id
) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_DEV_BASE_URL}/temple/getAllRelatedTemple?grouptable_id=${grouptable_id}&speciality_id=${speciality_id}&city_id=${city_id}&id=${id}`
    );

    const temples = response.data.data;
    return temples;
  } catch (error) {
    return error;
  }
};

const RightSection = () => {
  const [relatedTemple, setRelatedTemple] = useState([]);
  const { state: location } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTemples = async () => {
      try {
        const filteredTemples = await getAllRelatedTemple(
          location?.grouptable_id,
          location?.speciality_id,
          location?.city_id,
          location?.id
        );
        setRelatedTemple(filteredTemples);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchTemples();
  }, [
    location?.grouptable_id,
    location?.speciality_id,
    location?.city_id,
    location?.id,
  ]);

  return (
    <>
      <div className="templeDetails__right">
        <div className="templeDetails__right--header">
          <h1 className="title">Related Temple</h1>
        </div>

        <div className="templeDetails__right--container">
          {relatedTemple?.length ? (
            relatedTemple
              .slice(0, 5)
              .map((item) => <TempleCard item={item} key={item.id} />)
          ) : (
            <h2>No Temple to show</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default RightSection;
