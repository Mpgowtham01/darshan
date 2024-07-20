import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataListTable from '../../../components/shared/DataListTable';
import VendorListActions from './VendorListActions';

const VendorApproveList = () => {
    const [originalData, setOriginalData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        getVendorList();
    }, []);

    const getVendorList = () => {
        axios
            .get(`${process.env.REACT_APP_DEV_BASE_URL}/approval/getvendorlist`)
            .then(res => {
                setOriginalData(res.data);
                setFilteredData(res.data);
            })
            .catch(error => console.log(error));
    };

    const handleSearch = e => {
        const vendor_name = e.target.value;
        const newData = filteredData.filter(list => list.vendor_name.toLowerCase().includes(vendor_name.toLowerCase()));

        setFilteredData(newData);

        if (vendor_name === "") {
            setFilteredData(originalData);
        }
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "vendor_name",
        },

        {
            title: "Action",
            dataIndex: "",
            key: "x",
            render: (_, record) => (<VendorListActions record={record} />),
        },
    ];

    return (
        <DataListTable
            showAddNewBtn={false}
            columns={columns}
            dataList={filteredData}
            handleSearch={handleSearch}
            title={`Vendor List ( ${filteredData.length} )`}
        />
    );
};

export default VendorApproveList;