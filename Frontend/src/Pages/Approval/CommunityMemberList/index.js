import axios from "axios";
import React, { useEffect, useState } from "react";
import DataListTable from "../../../components/shared/DataListTable";
import { useParams } from "react-router-dom";
export default function CommunityMemberList() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const params= useParams()
  const {groupName} = params

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = () => {
    axios
    .get(
      `${process.env.REACT_APP_DEV_BASE_URL}/community/getCommunityuser`,
      // { withCredentials: true }
    )
      .then((res) => {
        console.log('res.data :>> ', res.data.result);
        setOriginalData(res.data.result);
        setFilteredData(res.data.result);
      })
      .catch((error) => console.log(error));
  };

  const handleSearch = (e) => {
    const name = e.target.value;
    const newData = filteredData.filter((list) =>
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
      title: "Group Name",
      dataIndex: "groupName",
    },
    {
      title: "Family Name",
      dataIndex: "familyName",
    }
  ];

  return (
    <DataListTable
      showAddNewBtn={false}
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={`Community Header List ( ${filteredData.length} )`}
    />
  );
}
