import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "antd/dist/antd.min.css";
import { Table, Button, Popconfirm } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import DataListTable from '../../../components/shared/DataListTable';

const YatraBookingPackages = () => {
  const [dataList, setDataList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_DEV_BASE_URL}/yatrabook/getTrips`);
        setDataList(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddNewBtn = () => {
    navigate("/admin/yatra-booking/yatraform");
  };

  // Define table columns
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'From',
      dataIndex: 'from_location',
      key: 'from_location',
    },
    {
      title: 'To',
      dataIndex: 'to_location',
      key: 'to_location',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Offer Price',
      dataIndex: 'offerPrice',
      key: 'offerPrice',
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
                  // const { id, code, country } = record;
                  navigate("/admin/yatra-booking/yatraform", {
                    state: {
                      ...record,
                    },
                    // replace: true,
                  });
                }}
                className="me-5"
              />
              {/* <Popconfirm
                title="Sure to delete?"
                onConfirm={() => {
                  deletegod(record.main_god_id);
                }}> 
                <FontAwesomeIcon
                  icon={faTrashCan}
                  style={{ cursor: "pointer" }}
                />
              </Popconfirm> */}
            </div>
          </>
        ),
      },
    // Add more columns as needed
  ];

  // Filter the data based on the search query
  const filteredData = dataList.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DataListTable      
    handleSearch={handleSearch}
    columns={columns}
    dataList={filteredData}
    handleAddNewBtn={handleAddNewBtn}/>
  
  );
};

export default YatraBookingPackages
