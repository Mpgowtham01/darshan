import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataListTable from '../../../components/shared/DataListTable';
import GuideListActions from './GuideListActions';


const GuideApprovalList = () => {
    const [originalData, setOriginalData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        getGuideList();
    }, []);

    const getGuideList = () => {
        axios
            .get(`${process.env.REACT_APP_DEV_BASE_URL}/approval/getguidelist`)
            .then(res => {
                setOriginalData(res.data);
                setFilteredData(res.data);
            })
            .catch(error => console.log(error));
    };

    const handleSearch = e => {
        const guideName = e.target.value;
        const newData = filteredData.filter(list => list.guideName.toLowerCase().includes(guideName.toLowerCase()));

        setFilteredData(newData);

        if (guideName === "") {
            setFilteredData(originalData);
        }
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "guideName",
        },

        {
            title: "Action",
            dataIndex: "",
            key: "x",
            render: (_, record) => (<GuideListActions record={record} />),
        },
    ];

    return (
        <DataListTable
            showAddNewBtn={false}
            columns={columns}
            dataList={filteredData}
            handleSearch={handleSearch}
            title={`Guide List ( ${filteredData.length} )`}
        />
    );
};

export default GuideApprovalList;