import React, { useRef, useState, useEffect } from "react";
import { Table, Space, Popconfirm, Button } from "antd";
import "antd/dist/antd.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

//style
import "../../../components/Css/sass/AmenityList.scss";
import DataListTable from "../../../components/shared/DataListTable";

export default function AmenityList() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    amenitiesListData();
  }, []);

  const amenitiesListData = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/amemities/getAll`)
      .then(res => {
        setOriginalData(res.data);
        setFilteredData(res.data);
      })
      .catch(error => console.log(error));
  };

  const deleteAmenities = id => {
    axios
      .delete(
        `${process.env.REACT_APP_DEV_BASE_URL}/amemities/deleteAmenities/${id}`
      )
      .then(res => {
        if (res.status === 200 && res.data.status === "Success") {
          const newOne = filteredData.filter(item => item.AmenitiesId != id);
          setFilteredData(newOne);
        }
      });
  };

  const handleSearch = e => {
    const amenityName = e.target.value;
    const newData = filteredData.filter(list =>
      list.amenityName.toLowerCase().includes(amenityName.toLowerCase())
    );
    setFilteredData(newData);

    if (amenityName === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "Amenity List",
      dataIndex: "amenityName",
    },

    // {
    //   title: "Amenity Tag",
    //   dataIndex: "AmenitiesId",
    // },
    {
      title: "Activity",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <>
          <div>
            {record?.isMandatory == 0 ?
              <>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    console.log("Record", record);
                    const { AmenitiesId, amenityDescription, amenityName } = record;
                    navigate("/admin/amenitiesform", {
                      state: {
                        AmenitiesId,
                        amenityDescription,
                        amenityName,
                      },
                      // replace: true,
                    });
                  }}
                  className="me-4"
                />
                <Popconfirm
                  title="Sure to delete?"
                  onConfirm={() => deleteAmenities(record.AmenitiesId)}>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    style={{ cursor: "pointer" }}
                  />
                </Popconfirm>

              </>
              : <h6>These Fields can't be modified</h6>}
          </div>
        </>
      ),
    },
  ];
  const navigate = useNavigate();

  const handleAddNewBtn = () => {
    navigate("/admin/amenitiesform");
  };

  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={`Amenities List ( ${filteredData.length} )`}
      handleAddNewBtn={handleAddNewBtn}
    />
  );
}
