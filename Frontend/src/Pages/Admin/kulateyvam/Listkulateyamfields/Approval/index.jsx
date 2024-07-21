import axios from "axios";
import React, { useEffect, useState } from "react";
import DataListTable from "../../../../../components/shared/DataListTable";
import CommunityListActions from "./CommunityListAction";
import { useNavigate, useParams } from "react-router-dom";

const CommunityApproveList = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const { groupName } = useParams();

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = () => {
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/getAllByGroupuser/${groupName}`,
        { withCredentials: true }
      )
      .then(res => {
        setOriginalData(res.data);
        setFilteredData(res.data);
      })
      .catch(error => console.log(error));
  };

  const handleSearch = e => {
    const name = e.target.value;
    const newData = filteredData.filter(list =>
      list.name.toLowerCase().includes(name.toLowerCase())
    );

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
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => <CommunityListActions record={record} />,
    },
  ];

  return (
    <DataListTable
      showAddNewBtn={false}
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title="Community List"
    />
  );
};

export default CommunityApproveList;
