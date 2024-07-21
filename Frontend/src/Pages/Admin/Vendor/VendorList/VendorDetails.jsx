import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popconfirm } from "antd";
import "antd/dist/antd.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DataListTable from "../../../../components/shared/DataListTable";
import { Togglecheckbox, ToggleSwitch } from "./ToggleSwitch";

const VendorDetails = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [, setupdateData] = useState([]);

  useEffect(() => {
    vendorListData();
  }, []);

  const vendorListData = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/vendor/getAll`)
      .then(res => {
        setOriginalData(res.data);
        setFilteredData(res.data);
        console.log(originalData, "datatata");
      })
      .catch(error => console.log(error));
  };

  const deleteArea = vendor_id => {
    axios
      .delete(`${process.env.REACT_APP_DEV_BASE_URL}vendor/delete/${vendor_id}`)
      .then(res => {
        if (res.status === 200) {
          const newOne = filteredData.filter(
            item => item.vendor_id != vendor_id
          );
          setFilteredData(newOne);
        }
      });
  };
  const updateApi = () => {
    axios
      .put(`${process.env.REACT_APP_DEV_BASE_URL}/vendor/changePost`)
      .then(res => {
        if (res.status === 200) {
          const update = filteredData.filter(item => item.vendor_id);
          setupdateData(update);
        }
        console.log(updateApi, "updatteteet");
      });
  };

  const handleSearch = e => {
    const vendor_name = e.target.value;
    const newData = filteredData.filter(list =>
      list.vendor_name.toLowerCase().includes(vendor_name.toLowerCase())
    );
    setFilteredData(newData);

    if (vendor_name === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "vendor_name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "business_name",
      key: "type",
    },
    {
      title: "Activity ",
      dataIndex: "is_active",
      key: "action",
      render: (_, record) => {
        // console.log(record, "reccccd");
        return <ToggleSwitch record={record} />;
      },
    },
    {
      title: "Post",
      dataIndex: "post",
      key: "posts",
      render: (_, record) => {
        console.log(record, "rrrrr");
        return (
          <Togglecheckbox
            record={record}
            updateApi={updateApi}
            style={{ marginLeft: "5%" }}
          />
        );
      },
    },

    {
      title: "Delete Vendor",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <>
          <>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => deleteArea(record.vendor_id)}
            >
              <FontAwesomeIcon
                icon={faTrashCan}
                style={{ cursor: "pointer", marginLeft: "18%" }}
              />
            </Popconfirm>
          </>
        </>
      ),
    },
  ];

  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={`Vendor Details ( ${filteredData.length} )`}
      showAddNewBtn={false}
    />
  );
};

export default VendorDetails;
