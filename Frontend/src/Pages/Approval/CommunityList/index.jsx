import axios from "axios";
import React, { useEffect, useState } from "react";
import DataListTable from "../../../components/shared/DataListTable";
import CommunityListActions from "./CommunityListAction";

const CommunityApproveList = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/community/getCommunity`)
      .then(res => {
        setOriginalData(res.data);
        setFilteredData(res.data);
      })
      .catch(error => console.log(error));
  };

    const handleSearch = e => {
        const name = e.target.value;
        const newData = filteredData.filter(list => list.name.toLowerCase().includes(name.toLowerCase()));

        setFilteredData(newData);

        if (name === "") {
            setFilteredData(originalData);
        }
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title:"Group Name",
            dataIndex:"groupName"
        },
        {
            title: "Action",
            dataIndex: "",
            key: "x",
            render: (_, record) => (<CommunityListActions record={record} />),
        },
    ];

    return (
        <DataListTable
            showAddNewBtn={false}
            columns={columns}
            dataList={filteredData}
            handleSearch={handleSearch}
            title={`Community List ( ${filteredData.length} )`}
        />
    );  
};

export default CommunityApproveList;
