import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataListTable from '../../../components/shared/DataListTable';
import UserListActions from './UserListActions';


const UserApprovalList = () => {
    const [originalData, setOriginalData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        getUserList();
    }, []);

    const getUserList = () => {
        axios
            .get(`${process.env.REACT_APP_DEV_BASE_URL}/approval/getuserlist`)
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
            title: "Name",
            dataIndex: "UserName",
        },

        {
            title: "Action",
            dataIndex: "",
            key: "x",
            render: (_, record) => (<UserListActions record={record} />),
        },
    ];

    return (
        <DataListTable
            showAddNewBtn={false}
            columns={columns}
            dataList={filteredData}
            handleSearch={handleSearch}
            title={`User List ( ${filteredData.length} )`}
        />
    );
};

export default UserApprovalList;