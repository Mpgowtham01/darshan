import React, { useRef, useState, useEffect } from "react";
import { Table, Button, Popconfirm } from "antd";
import { Modal } from "react-bootstrap";
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

const CountryList = () => {
  const [data, setData] = useState("");
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    countryListData();
  }, []);

  const countryListData = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/country/getAll`)
      .then(res => {
        setOriginalData(res.data);
        setFilteredData(res.data);
      })
      .catch(error => console.log(error));
  };

  const deleteCountry = id => {
    axios
      .delete(`${process.env.REACT_APP_DEV_BASE_URL}/country/delete/${id}`)
      .then(res => {
        if (res.status === 200) {
          const newOne = filteredData.filter(item => item.id != id);
          setFilteredData(newOne);
        }
      });
  };

  const handleSearch = e => {
    const country = e.target.value;
    const newData = filteredData.filter(list =>
      list.country.toLowerCase().includes(country.toLowerCase())
    );
    console.log(newData);
    setFilteredData(newData);

    if (country === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "Country Code",
      dataIndex: "code",
      key: "x",
    },
    {
      title: "Country Name",
      dataIndex: "country",
      key: "x",
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
                console.log("Record", record);
                const { id, code, country } = record;
                navigate("/admin/CountryForm", {
                  state: {
                    id,
                    code,
                    country,
                  },
                  // replace: true,
                });
              }}
              className="me-4"
            />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => deleteCountry(record.id)}>
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
    navigate("/admin/countryForm");
  };
  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={`Country List ( ${filteredData.length} )`}
      handleAddNewBtn={handleAddNewBtn}
    />
  );
};

export default CountryList;
