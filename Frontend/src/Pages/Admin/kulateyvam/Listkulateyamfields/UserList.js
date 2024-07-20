import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Popconfirm, Table } from "antd";
import "antd/dist/antd.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdAdd, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

export default function UserList() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [allData, setAllData] = useState([]);
console.log('allData',allData )
  const [userFamilyList, setUserFamilyList] = useState([]);

  const navigate = useNavigate();
  const { groupName } = useParams();

  useEffect(() => {
    getUsersList();
    getUsersListMembers();
    getAll();
  }, []);

  const getUsersList = () => {
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/getAllByGroupuser/${groupName}`,
        { withCredentials: true }
      )
      .then((res) => {
        setFilteredData(res.data);
        setAllData(res.data);

      })
      .catch((error) => console.log(error));
  };
  const getAll = (family_name) => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/community/checking`, {
        withCredentials: true,
      })
      .then((res) => {
      })
      .catch((error) => console.log(error));
  };

  const getUsersListMembers = () => {
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/getRelatedMembers`,
        { withCredentials: true }
      )
      .then((res) => {
        setUserFamilyList(res.data.result);
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

  const deleteUser = (id) => {
    axios
      .delete(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/deletecommunityuser/${id}`
      )
      .then((res) => {
        getUsersList();
        console.log("res :", res);
      })
      .catch((error) => console.log(error));
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
    },
    {
      title: "Activity",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <>
          {console.log(record, "sdasdasd")}
          <div>
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(`/community/${groupName}/editUser/${record.id}`, {
                  state: {
                    ...record,
                  },
                });
              }}
              className="me-5"
            />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => {
                deleteUser(record.id);
              }}
            >
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

  const handleAddNewBtn = () => {
    navigate(`/community/${groupName}/addUser`);
  };

  const expandedRowRender = (index) => {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        // render: (_, record) =>
        // record.familyName === results.familyName ? record.name : "",
      },
      {
        title: "Relationship",
        dataIndex: "relationship",
        key: "relationship",
      },
      {
        title: "Gender",
        dataIndex: "sex",
        key: "sex",
      },
    ];
    // const arr = userFamilyList.map(ele => ele.family_name);
    // const finall = allData.family_list.map(ele => ele);
    return (
      <Table
        columns={columns}
        dataSource={allData[index].family_list}
        pagination={false}
      />
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
            onChange={(e) => handleSearch(e)}
          />
          <Button
            onClick={handleAddNewBtn}
            className="table__container-list-button"
          >
            <MdAdd />
            Add New
          </Button>
        </div>

        <div className="table__container-list-table">
          <Table
            columns={columns}
            rowKey={(record, index) => index}
            expandable={{
              expandedRowRender: (record, index, indent, expaned) =>
                // console.log(record.familyName, index),
                expaned && expandedRowRender(index),

              expandIcon: ({ expanded, onExpand, record }) =>
                expanded ? (
                  <MdKeyboardArrowUp
                    style={{ fontSize: 25 }}
                    onClick={(e) => onExpand(record, e)}
                  />
                ) : (
                  <MdKeyboardArrowDown
                    style={{ fontSize: 25 }}
                    onClick={(e) =>
                      onExpand(
                        record,

                        e
                      )
                    }
                  />
                ),
            }}
            dataSource={allData}
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
