import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import axios from "axios";
import YatraActions from "./yatraAction";
import DataListTable from "../../../../src/components/shared/DataListTable";


export default function IyerBookingList() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getIyerList();
  }, []);

  const getIyerList = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/yatraBooking/getAllYatraBooking`)
      .then(res => {
        setOriginalData(res.data);
        setFilteredData(res.data);
      })
      .catch(error => console.log(error));
  };

  const handleSearch = e => {
    const UserName = e.target.value;
    const newData = filteredData.filter(list => list.UserName.toLowerCase().includes(UserName.toLowerCase()));

    setFilteredData(newData);

    if (UserName === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
        title: "Contact Number",
        dataIndex: "contactNumber",
      },
      {
        title: "Action",
        dataIndex: "",
        key: "x",
        render: (_, record) => (<YatraActions record={record} />),
      },
  
  ];

  return (
    <DataListTable
      showAddNewBtn={false}
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title="Yatra Booking Details"
    />
  );
}
