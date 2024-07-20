import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFestivalList,
  fetchGroupList,
  fetchPariharam,
  fetchSpecialitiesList,
  fetchTemplesList,
  filterByKey,
  filterTempleByText,
  NUMBER_BLOGS_SHOW,
  resetFilterQueries,
} from "../../components/Redux_Toolkit/allTempleSlice";
import { Select, Switch } from "antd";
import {
  getAreaList,
  getCityList,
  getDistrictList,
  getStateList,
} from "../Admin/AddTempleList/utils";
import { AiOutlineClose } from "react-icons/ai";

const { Option } = Select;

const FilterBar = () => {
  const [district, setDistrict] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [areas, setAreas] = useState([]);

  const countries = useSelector((state) => state.allTemples.countryList);
  const mainGodList = useSelector((state) => state.allTemples.mainGodList);
  const specialities = useSelector((state) => state.allTemples.specialities);
  const groupList = useSelector((state) => state.allTemples.groupList);
  const festivalList = useSelector((state) => state.allTemples.festivalList);
  const pariharamList = useSelector((state) => state.allTemples.pariharamList);
  const filterQueries = useSelector((state) => state.allTemples.filterQueries);
  const isSearchModal = useSelector((state) => state.allTemples.isSearchModal);

  const {
    country_id,
    state_id,
    district_id,
    city_id,
    area_id,
    speciality_id,
    main_god_id,
    isMarriage,
    isAnnadhanam,
    isTraining,
    isHospital,
    group_id,
    pariharam_id,
    festival_id,
  } = filterQueries;

  useEffect(() => {
    dispatch(fetchGroupList());
    dispatch(fetchSpecialitiesList());
    dispatch(fetchPariharam());
    dispatch(fetchFestivalList());

    if (isSearchModal) {
      if (country_id) {
        getStateList(country_id, setStates);
      }

      if (state_id) {
        getDistrictList(state_id, setDistrict);
      }

      if (district_id) {
        getCityList(district_id, setCities);
      }

      if (city_id) {
        getAreaList(city_id, setAreas);
      }
    }
  }, []);

  const showBooleanInNumber = (value) => (value ? 1 : 0);

  const countryOnChangeHandler = (value) => {
    getStateList(value, setStates);
    dispatch(filterByKey({ key: "country_id", value }));
    dispatch(fetchTemplesList({ ...filterQueries, country_id: value }));
  };

  const statesOnChangeHandler = (value) => {
    getDistrictList(value, setDistrict);
    dispatch(filterByKey({ key: "state_id", value }));
    dispatch(fetchTemplesList({ ...filterQueries, state_id: value }));
  };

  const districtOnChangeHandler = (value) => {
    getCityList(value, setCities);
    dispatch(filterByKey({ key: "district_id", value }));
    dispatch(fetchTemplesList({ ...filterQueries, district_id: value }));
  };

  const cityOnChangeHandler = (value) => {
    getAreaList(value, setAreas);
    dispatch(filterByKey({ key: "city_id", value }));
    dispatch(fetchTemplesList({ ...filterQueries, city_id: value }));
  };

  const areaOnChangeHandler = (value) => {
    dispatch(filterByKey({ key: "area_id", value }));
    dispatch(fetchTemplesList({ ...filterQueries, area_id: value }));
  };

  const groupListOnChangeHandler = (value) => {
    dispatch(filterByKey({ key: "group_id", value }));
    dispatch(fetchTemplesList({ ...filterQueries, group_id: value }));
  };

  const specialityOnChangeHandler = (value) => {
    dispatch(filterByKey({ key: "speciality_id", value }));
    dispatch(fetchTemplesList({ ...filterQueries, speciality_id: value }));
  };

  const pariharamOnChangeHandler = (value) => {
    dispatch(filterByKey({ key: "pariharam_id", value }));
    dispatch(fetchTemplesList({ ...filterQueries, pariharam_id: value }));
  };

  const festivalOnChangeHandler = (value) => {
    dispatch(filterByKey({ key: "festival_id", value }));
    dispatch(fetchTemplesList({ ...filterQueries, festival_id: value }));
  };

  const mainGodOnChangeHandler = (value) => {
    dispatch(filterByKey({ key: "main_god_id", value }));
    dispatch(fetchTemplesList({ ...filterQueries, main_god_id: value }));
  };

  const switchHandler = (key) => {
    return (value) => {
      dispatch(filterByKey({ key, value: showBooleanInNumber(value) }));
      dispatch(
        fetchTemplesList({
          ...filterQueries,
          [key]: showBooleanInNumber(value),
        })
      );
    };
  };

  const handleClearFilters = () => {
    dispatch(
      fetchTemplesList({ type: "ADD DATA", start: 0, end: NUMBER_BLOGS_SHOW })
    );
    dispatch(filterTempleByText(""));
    dispatch(resetFilterQueries());
  };

  const dispatch = useDispatch();

  return (
    <div className="allTemplePage__leftSection--container">
      <h2 className="title">Advance Search</h2>

      <div className="filters">
        <div className="text-end clearFilter">
          <p onClick={handleClearFilters}>
            <AiOutlineClose /> <span>Clear Filters</span>
          </p>
        </div>

        <div className="form-group">
          <h6>Country</h6>
          <Select showSearch
            allowClear

            placeholder="Select Country"
            className="selectMenu"
            optionFilterProp="children"
            value={country_id}
            onChange={countryOnChangeHandler}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }>
            {countries.length &&
              countries.map((item) => (
                <Option key={item?.id} value={item.id}>
                  {item.country}
                </Option>
              ))}
          </Select>
        </div>

        <div className="form-group">
          <h6>State</h6>
          <Select showSearch
            allowClear

            placeholder="Select State"
            className="selectMenu"
            optionFilterProp="children"
            value={state_id}
            onChange={statesOnChangeHandler}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }>
            {states.length &&
              states.map((item) => (
                <Option key={item?.id} value={item.id}>
                  {item.state}
                </Option>
              ))}
          </Select>
        </div>

        <div className="form-group">
          <h6>District</h6>
          <Select showSearch
            allowClear

            placeholder="Select District"
            className="selectMenu"
            optionFilterProp="children"
            value={district_id}
            onChange={districtOnChangeHandler}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }>
            {district.length &&
              district.map((item) => (
                <Option key={item?.id} value={item.id}>
                  {item.district}
                </Option>
              ))}
          </Select>
        </div>

        <div className="form-group">
          <h6>City</h6>
          <Select showSearch
            allowClear

            placeholder="Select City"
            className="selectMenu"
            optionFilterProp="children"
            value={city_id}
            onChange={cityOnChangeHandler}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }>
            {cities.length &&
              cities.map((item) => (
                <Option key={item?.id} value={item.id}>
                  {item.city}
                </Option>
              ))}
          </Select>
        </div>

        <div className="form-group">
          <h6>Area</h6>
          <Select showSearch
            showSearch
            allowClear
            placeholder="Select Area"
            className="selectMenu"
            optionFilterProp="children"
            value={area_id}
            onChange={areaOnChangeHandler}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }>
            {areas.length &&
              areas.map((item) => (
                <Option key={item?.area_id} value={item.area_id}>
                  {item.area_name}
                </Option>
              ))}
          </Select>
        </div>

        <div className="form-group">
          <h6>Main God</h6>
          <Select showSearch
            allowClear

            placeholder="Select Main God"
            className="selectMenu"
            optionFilterProp="children"
            value={main_god_id}
            onChange={mainGodOnChangeHandler}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }>
            {mainGodList.length &&
              mainGodList.map((item) => (
                <Option key={item?.main_god_id} value={item.main_god_id}>
                  {item.god_name}
                </Option>
              ))}
          </Select>
        </div>

        <div className="form-group">
          <h6>Speciality</h6>
          <Select showSearch

            allowClear
            placeholder="Select Speciality"
            className="selectMenu"
            optionFilterProp="children"
            value={speciality_id}
            onChange={specialityOnChangeHandler}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }>
            {specialities.length &&
              specialities.map((item) => (
                <Option key={item?.id} value={item?.id}>
                  {item?.speciality_name}
                </Option>
              ))}
          </Select>
        </div>

        <div className="form-group">
          <h6>Group</h6>
          <Select showSearch

            allowClear
            placeholder="Select Group"
            className="selectMenu"
            optionFilterProp="children"
            value={group_id}
            onChange={groupListOnChangeHandler}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }>
            {groupList.length &&
              groupList.map((item) => (
                <Option key={item?.id} value={item?.id}>
                  {item?.group_name}
                </Option>
              ))}
          </Select>
        </div>

        <div className="form-group">
          <h6>Pariharam</h6>
          <Select showSearch
            allowClear
            placeholder="Select Group"
            className="selectMenu"
            optionFilterProp="children"
            value={pariharam_id}
            onChange={pariharamOnChangeHandler}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }>
            {pariharamList.length &&
              pariharamList.map((item) => (
                <Option key={item?.pariharam_id} value={item?.pariharam_id}>
                  {item?.pariharam_name}
                </Option>
              ))}
          </Select>
        </div>

        <div className="form-group">
          <h6>Festivals</h6>
          <Select showSearch
            allowClear
            placeholder="Select Group"
            className="selectMenu"
            optionFilterProp="children"
            value={festival_id}
            onChange={festivalOnChangeHandler}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }>
            {festivalList.length &&
              festivalList.map((item) => (
                <Option key={item?.festival_id} value={item?.festival_id}>
                  {item?.festival_name}
                </Option>
              ))}
          </Select>
        </div>

        <div className="form-group">
          <h6>Annadhanam</h6>

          <div>
            <span className="me-1">No</span>
            <Switch
              checked={isAnnadhanam}
              onChange={switchHandler("isAnnadhanam")}
            />
            <span className="ms-1">Yes</span>
          </div>
        </div>

        <div className="form-group mt-2">
          <h6>Tranining</h6>

          <div>
            <span className="me-1">No</span>
            <Switch
              checked={isTraining}
              onChange={switchHandler("isTraining")}
            />
            <span className="ms-1">Yes</span>
          </div>
        </div>

        <div className="form-group mt-2">
          <h6>Marriage</h6>

          <div>
            <span className="me-1">No</span>
            <Switch
              checked={isMarriage}
              onChange={switchHandler("isMarriage")}
            />
            <span className="ms-1">Yes</span>
          </div>
        </div>

        <div className="form-group mt-2">
          <h6>Hospital / Emergency</h6>

          <div>
            <span className="me-1">No</span>
            <Switch
              checked={isHospital}
              onChange={switchHandler("isHospital")}
            />
            <span className="ms-1">Yes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(FilterBar);
