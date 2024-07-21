import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataListTable from '../../../components/shared/DataListTable';
import TempleListActions from './TempleListActions';

const TempleApproveList = () => {
    const [originalData, setOriginalData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        getUserList();
    }, []);

    const getUserList = () => {
        axios
            .get(`${process.env.REACT_APP_DEV_BASE_URL}/temple/getAll/user`)
            .then(res => {
                setOriginalData(res.data);
                setFilteredData(res.data);
            })
            .catch(error => console.log(error));
    };

    const handleSearch = e => {
        const temple_name = e.target.value;
        const newData = filteredData.filter(list => list.temple_name.toLowerCase().includes(temple_name.toLowerCase()));

        setFilteredData(newData);

        if (temple_name === "") {
            setFilteredData(originalData);
        }
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "temple_name",
        },

        {
            title: "Action",
            dataIndex: "",
            key: "x",
            render: (_, record) => (<TempleListActions record={record} />),
        },
    ];

    return (
        <DataListTable
            showAddNewBtn={false}
            columns={columns}
            dataList={filteredData}
            handleSearch={handleSearch}
            title={`Temple List ( ${filteredData.length} )`}
        />
    );
};

export default TempleApproveList;