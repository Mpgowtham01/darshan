import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataListTable from '../../../components/shared/DataListTable';
import PriestListActions from './PriestListAction';

const PriestApprovalList = () => {
    const [originalData, setOriginalData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        getUserList();
    }, []);

    const getUserList = () => {
        axios
            .get(`${process.env.REACT_APP_DEV_BASE_URL}/approval/getIyerlist`)
            .then(res => {
                setOriginalData(res.data);
                setFilteredData(res.data);
            })
            .catch(error => console.log(error));
    };

    const handleSearch = e => {
        const name = e.target.value;
        const newData = filteredData.filter(list => list.name.toLowerCase().includes(name.toLowerCase()));

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
            title: "Action",
            dataIndex: "",
            key: "x",
            render: (_, record) => {
              return <PriestListActions record={record} />;
            },
          }
    ];

    return (
        <DataListTable
            showAddNewBtn={false}
            columns={columns}
            dataList={filteredData}
            handleSearch={handleSearch}
            title="Priest List"
        />
    );
};

export default PriestApprovalList;