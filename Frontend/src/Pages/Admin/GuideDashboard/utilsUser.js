import axios from "axios";

export const getGodList = (setGodList) => {
  axios
    .get(`${process.env.REACT_APP_DEV_BASE_URL}/main_god/getAll`)
    .then((res) => {
      setGodList(res.data);
    });
};

export const getCountryList = (setcountryList) => {
  axios
    .get(`${process.env.REACT_APP_DEV_BASE_URL}/country/getAll`)
    .then((res) => {
      setcountryList(res.data);
    });
};

export const getStateList = (countryId, setStateList) => {
  axios
    .get(`${process.env.REACT_APP_DEV_BASE_URL}/state/getState/${countryId}`)
    .then((res) => {
      setStateList(res.data);
    });
};

export const getDistrictList = (stateId, setDistrictList) => {
  axios
    .get(
      `${process.env.REACT_APP_DEV_BASE_URL}/district/getdistrict/${stateId}`
    )
    .then((res) => {
      setDistrictList(res.data);
    });
};

export const getCityList = (districtId, setCityList) => {
  axios
    .get(`${process.env.REACT_APP_DEV_BASE_URL}/city/getCity/${districtId}`)
    .then((res) => {
      setCityList(res.data);
    });
};

export const getAreaList = (cityId, setAreaList) => {
  axios
    .get(`${process.env.REACT_APP_DEV_BASE_URL}/area/getArea/${cityId}`)
    .then((res) => {
      setAreaList(res.data);
    });
};

export const getGroupTable = (setGroupTable) => {
  axios
    .get(`${process.env.REACT_APP_DEV_BASE_URL}/grouptable/getall`)
    .then((res) => {
      setGroupTable(res.data);
    });
};

export const getSpeciality = (setSpeciality) => {
  axios
    .get(`${process.env.REACT_APP_DEV_BASE_URL}/speciality/getAll`)
    .then((res) => {
      setSpeciality(res.data);
    });
};

export const getAmenities = (setAmenities) => {
  axios
    .get(`${process.env.REACT_APP_DEV_BASE_URL}/amemities/getAll`)
    .then((res) => {
      if (res.data.length) {
        console.log("Amenities Data", res.data);
        const modifiedData = res.data.map((item) => ({
          AmenitiesId: item?.AmenitiesId,
          amenityName: item?.amenityName,
          amenityDescription: "",
          amenityStatus: false,
          isMandatory: item?.isMandatory,
        }));
        console.log("Modified Data", modifiedData);
        setAmenities(modifiedData);
      }
    });
};

export const getPariharam = (setPariharm) => {
  axios
    .get(`${process.env.REACT_APP_DEV_BASE_URL}/Pariharams/getAll`)
    .then((res) => {
      setPariharm(res.data);
    });
};

export const getFestivalDetails = (setFestivalDetails) => {
  axios
    .get(`${process.env.REACT_APP_DEV_BASE_URL}/festival/getAll`)
    .then((res) => {
      setFestivalDetails(res.data);
    });
};

export const getFunctionDetails = (setFunctionsDetails) => {
  axios
    .get(`${process.env.REACT_APP_DEV_BASE_URL}/insidefunction/getall`)
    .then((res) => {
      setFunctionsDetails(res.data);
    });
};

export const getPriestFunctions = (setPriestFunction) => {
  axios
    .get(
      `${process.env.REACT_APP_DEV_BASE_URL}/priestFunction/getAll?searchBy=1`
    )
    .then((res) => {
      if (res.data.result) {
        setPriestFunction(res.data.result);
      }
    });
};

const joinArr = (inputData) => {
  return inputData && inputData.length ? inputData.join(",") : inputData;
};

// TEMPLE CREATE THROUGH TEMPLE FORM
export function createTempleFormData(
  data,
  id,
  templeBusRoute,
  amenities,
  main_image,
  subImages,
  bookingFields,
  poojaField
) {
  console.log("fromGroup", data);

  let formData = new FormData();
  // formData.append("user_id", JSON.parse(localStorage.getItem("data")).id);
  formData.append("role", "guide");
  formData.append("guide_id", id);
  formData.append("temple_name", data.temple_name);
  formData.append("main_god_id", data.main_god_id);
  formData.append("othergod_id", joinArr(data.othergod_id));
  formData.append("country_id", data.country_id);
  formData.append("state_id", data.state_id);
  formData.append("district_id", data.district_id);
  formData.append("city_id", data.city_id);
  formData.append("area_id", data.area_id);
  formData.append("temple_address", data.temple_address);
  formData.append("speciality_id", joinArr(data.speciality_id));
  formData.append("grouptable_id", data.grouptable_id);
  // formData.append("otherspec_id", data.otherspec_id);
  formData.append("temple_history", data.temple_history);
  formData.append("temple_year", data.temple_year);
  formData.append("temple_amotime", new Date(data.temple_amotime));
  formData.append("temple_amctime", new Date(data.temple_amctime));
  formData.append("temple_pmotime", new Date(data.temple_pmotime));
  formData.append("temple_pmctime", new Date(data.temple_pmctime));
  formData.append("temple_prasadam", data.temple_prasadam);
  formData.append("temple_tree", data.temple_tree);
  formData.append("pariharam", joinArr(data.pariharam));
  formData.append("festival_ids", joinArr(data.festival_ids));
  // formData.append("start_date", data.start_date);
  // formData.append("end_date", data.end_date);
  // formData.append("training_ids", data.training_ids);
  formData.append("incharge_name", data.incharge_name);
  formData.append("phone_number", data.phone_number);
  formData.append("temple_mailid", data.temple_mailid);
  formData.append("temple_website", data.temple_website);
  formData.append("Latitude", data.Latitude);
  formData.append("Longitude", data.Longitude);
  formData.append("main_video", data.main_video);
  // formData.append("isTicket", data.isTicket);
  // formData.append("ticket_id", data.ticket_id);
  // formData.append("isMarriage", data.isMarriage);
  // formData.append("marriage_fee", data.marriage_fee);
  // formData.append("isAnnadhanam", data.isAnnadhanam);
  // formData.append("ana_time", data.ana_time);
  formData.append("FunctionsInsideTemple", joinArr(data.functionsInsideTemple));
  formData.append("temple_bus_route", JSON.stringify(templeBusRoute)); //arr
  formData.append("ways_to_reach", data.ways_to_reach);
  formData.append("temple_map", data.temple_map);
  formData.append("pooja_timings", data.pooja_timings);
  formData.append("aminity", JSON.stringify({ amenity: amenities })); // arr
  //   formData.append("isPondAvailable", data.ispond_Description);
  formData.append("templeApproveStatus", "");
  formData.append("templeRejectionReason", "");
  //   formData.append("pondDescription", data.pond_Description);

  formData.append("temple_additional", data.temple_additional);
  formData.append("control_by", data.control_by);
  formData.append("bookingFields", JSON.stringify(bookingFields));
  formData.append("poojaFields", JSON.stringify(poojaField)); // arr

  //   formData.append("created_by", data.created_by);
  //   formData.append("is_active", data.is_active);

  formData.append("main_image", main_image);

  if (subImages?.images.length) {
    subImages.images.forEach((item) => {
      console.log("sub_images", item);
      formData.append("sub_images", item);
    });
  }

  return formData;
}

export const sendCreateTempleData = async (
  toasterHandle,
  formData,
  navigate,
  updateUrl = null
) => {
  const roleUser = localStorage.getItem("Role");
  await axios[updateUrl ? "put" : "post"](
    `${process.env.REACT_APP_DEV_BASE_URL}/temple/${
      updateUrl ? updateUrl : "create"
    }`,
    formData
  )
    .then((response) => {
      if (response.status === 200 && response.data.status === "Success") {
        toasterHandle();

        setTimeout(() => {
          navigate(`/${roleUser}`);
        }, 1000);
      } else {
        toasterHandle(
          "error",
          "Error",
          "Something went wrong, please try again after sometimes!!!"
        );
      }
    })
    .catch((err) => {
      toasterHandle(
        "error",
        "Error",
        "Failed to create Temple,please try again"
      );
      console.log("Error", err);
    });
};
