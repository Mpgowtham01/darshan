import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Popconfirm, Table } from "antd";
import "antd/dist/antd.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdAdd, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { Switch } from "antd";

export default function UserList() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [active, setActive] = useState(false);

  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const { groupName } = useParams();
  const id = sessionStorage.getItem("id");
  const sessionFamily_Name = sessionStorage.getItem("Family_Name");

  useEffect(() => {
    getUsersList();
  }, []);

  let filterAccToFamilyName = [];

  if (filteredData) {
    filteredData.filter((ele, i, arr) => {
      return ele.family_name === sessionFamily_Name
        ? filterAccToFamilyName.push(ele)
        : [];
    });
  }
  const getUsersList = () => {
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/communityAbstract`,
        { withCredentials: true }
      )
      .then((res) => {
        setFilteredData(res.data.result);
      })
      .catch((error) => console.log(error));
  };

  const handleSearch = (e) => {
    // const name = e.target.value;
    // const newData = filteredData.filter(list =>
    //   list.name.toLowerCase().includes(name.toLowerCase())
    // );
    // setFilteredData(newData);
    // if (name === "") {
    //   setFilteredData(originalData);
    // }
  };

  const deleteUser = (id) => {
    axios
      .delete(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/communityAbstract/del/${id}`
      )
      .then((res) => {
        getUsersList();
        console.log("res :", res);
      })
      .catch((error) => console.log(error));
  };

  const activatUser = (e, id) => {
    console.log(e, "check");
    setActive(!active);
    let actValue = e ? "1" : "0";
    axios
      .put(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/updatestatusmember/${id}`,
        {
          isActive: actValue,
        }
      )
      .then((res) => {
        // getUsersList();
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
      title: "Family Name",
      dataIndex: "family_name",
      key: "x",
      editable: true,
    },
    {
      title: "Account Status",
      dataIndex: "isActive",
      key: "x",
      editable: true,

      render: (_, record) => (
        <>
          <div>
            <Switch
              onChange={(e) => activatUser(e, record?.id)}
              defaultChecked={record?.isActive}
            />
          </div>
        </>
      ),
    },

    {
      title: "Activity",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <>
          <div>
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(`/communityUser/${groupName}/familyadduser`, {
                  state: {
                    ...record,
                  },
                });
              }}
              className="me-5"
            />
          </div>
        </>
      ),
    },
  ];
  const handleAddNewBtn = () => {
    // navigate("/kuladeivam/Adduser");
    navigate(`/communityUser/${groupName}/familyadduser`);
  };

  const expandedRowRender = (index) => {
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
        dataIndex: "gender",
        key: "name",
      },
    ];

    return (
      <Table
        columns={columns}
        dataSource={JSON.parse(filteredData[index].family_list)}
        pagination={false}
      />
    );
  };

  return (
    <>
      {/* {dataList?.length ? ( */}
      <div className="table__container">
        <h2 className="table__container-title">Family Members</h2>

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
            // expandable={{
            //   expandedRowRender: (record, index, indent, expaned) =>
            //     expaned && expandedRowRender(index),
            //   expandIcon: ({ expanded, onExpand, record }) =>
            //     expanded ? (
            //       <MdKeyboardArrowUp
            //         style={{ fontSize: 25 }}
            //         onClick={e => onExpand(record, e)}
            //       />
            //     ) : (
            //       <MdKeyboardArrowDown
            //         style={{ fontSize: 25 }}
            //         onClick={e => onExpand(record, e)}
            //       />
            //     ),
            // }}
            dataSource={filterAccToFamilyName && filterAccToFamilyName}
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
