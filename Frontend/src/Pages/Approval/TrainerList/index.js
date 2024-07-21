// import React from 'react'

// export default function TrainerList() {
//   return (
//     <div>TrainerList</div>
//   )
// }

import axios from "axios";
import React, { useEffect, useState } from "react";
import DataListTable from "../../../components/shared/DataListTable";
import TrainerListActions from "./TrainerListAction";

const TrainerList = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/approval/gettrainerlist`)
      .then((res) => {
        setOriginalData(res.data);
        setFilteredData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const handleSearch = (e) => {
    const UserName = e.target.value;
    const newData = filteredData.filter((list) =>
      list.UserName.toLowerCase().includes(UserName.toLowerCase())
    );

    setFilteredData(newData);

    if (UserName === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "trainerName",
    },

    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => <TrainerListActions record={record} />,
    },
  ];

  return (
    <DataListTable
      showAddNewBtn={false}
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={`Trainer List ( ${filteredData.length} )`}
    />
  );
};

export default TrainerList;
