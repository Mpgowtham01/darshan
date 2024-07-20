import React, { useState, useEffect } from "react";
import { Table, Button, Popconfirm } from "antd";
import { Modal, Form } from "react-bootstrap";
import Select from "react-select";
import "antd/dist/antd.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import DataListTable from "../../../components/shared/DataListTable";

//style
import axios from "axios";

const CityList = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    districtListData();
  }, []);

  const districtListData = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/city/getAll`)
      .then(res => {
        setOriginalData(res.data);
        setFilteredData(res.data);
      })
      .catch(error => console.log(error));
  };

  const deleteCity = id => {
    axios
      .delete(`${process.env.REACT_APP_DEV_BASE_URL}/city/delete/${id}`)
      .then(res => {
        if (res.status === 200) {
          const newOne = filteredData.filter(item => item.id != id);
          setFilteredData(newOne);
        }
      });
  };

  const handleSearch = e => {
    const city = e.target.value;
    const newData = filteredData.filter(list =>
      list.city.toLowerCase().includes(city.toLowerCase())
    );
    console.log(newData);
    setFilteredData(newData);

    if (city === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "Country",
      dataIndex: "country",
      key: "Country",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "State",
    },
    {
      title: "District ",
      dataIndex: "district",
      key: "District",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "City",
    },

    {
      title: "Activity",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <>
          {console.log(record, "ADF")}
          <div>
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{ cursor: "pointer" }}
              onClick={() => {
                console.log("Recordssssss", record);
                // const { id, code, country } = record;
                navigate("/admin/cityForm", {
                  state: {
                    ...record,
                  },
                });
              }}
              className="me-4"
            />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => deleteCity(record.id)}>
              <FontAwesomeIcon
                icon={faTrashCan}
                style={{ cursor: "pointer" }}
              />
            </Popconfirm>
          </div>
        </>
      ),
    },
  ];
  const navigate = useNavigate();
  const handleAddNewBtn = () => {
    navigate("/admin/cityForm");
  };
  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={`City List ( ${filteredData.length} )`}
      handleAddNewBtn={handleAddNewBtn}
    />
  );
};

export default CityList;
