import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Popconfirm, Table } from "antd";
import "antd/dist/antd.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdAdd, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

export default function RelativesProfile() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [userFamilyList, setUserFamilyList] = useState([]);

  // const checking = [...filteredData, { ...userFamilyList }];
  const navigate = useNavigate();
  const { groupName } = useParams();

  useEffect(() => {
    getUsersList();
    getUsersListMembers();
  }, []);

  const getUsersList = () => {
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/getAllByGroupuser/${groupName}`,
        { withCredentials: true }
      )
      .then(res => {
        setFilteredData(res.data);
      })
      .catch(error => console.log(error));
  };

  const getUsersListMembers = () => {
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/getRelatedMembers`,
        { withCredentials: true }
      )
      .then(res => {
        setUserFamilyList(res.data.result);
      })
      .catch(error => console.log(error));
  };

  console.log("11111111111",userFamilyList)

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
      key: "x",
      editable: true,
    },
    {
      title: "Nick Name",
      dataIndex: "nickName",
      key: "x",
      editable: true,
    },
    {
      title: "Family Name",
      dataIndex: "familyName",
      key: "x",
      editable: true,
    }

  ];

  // const handleAddNewBtn = () => {
  //   // navigate("/kuladeivam/Adduser");
  //   navigate(`/community/${groupName}/addUser`);
  // };

  const expandedRowRender = index => {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Relationship",
        dataIndex: "relationship",
        key: "name",
      },
      {
        title: "Gender",
        dataIndex: "sex",
        key: "name",
      },
    ];

    return (
      <Table columns={columns} dataSource={userFamilyList} pagination={false} />
    );
  };

  return (
    <>
      {/* {dataList?.length ? ( */}
      <div className="table__container">
        <h2 className="table__container-title">Users List</h2>

        <div className="table__container-top">
          <input
            placeholder="Search..."
            className="blog-list-search ps-2"
            onChange={e => handleSearch(e)}
          />
          {/* <Button
            onClick={handleAddNewBtn}
            className="table__container-list-button">
            <MdAdd />
            Add New
          </Button> */}
        </div>

        <div className="table__container-list-table">
          <Table
            columns={columns}
            rowKey={(record, index) => index}
            expandable={{
              expandedRowRender: (record, index, indent, expaned) =>
                expaned && expandedRowRender(index),
              expandIcon: ({ expanded, onExpand, record }) =>
                expanded ? (
                  <MdKeyboardArrowUp
                    style={{ fontSize: 25 }}
                    onClick={e => onExpand(record, e)}
                  />
                ) : (
                  <MdKeyboardArrowDown
                    style={{ fontSize: 25 }}
                    onClick={e => onExpand(record, e)}
                  />
                ),
            }}
            dataSource={filteredData}
            pagination={{
              showSizeChanger: true,
              position: ["bottomCenter"],
            }}
            className="mt-2"
          />
        </div>
      </div>
    </>
  );
}
