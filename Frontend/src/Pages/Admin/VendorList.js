import { Table } from 'antd';
import '../../components/Css/sass/VendorList.scss'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <div className='d-flex flex-direction-row'>
            <button className='vendor-view-button' onClick={() => console.log(record)}>
                View
            </button>
            {record.status==="Approved"?
            ( <p className='ms-3'>Approved</p>):
             record.status==="Rejected" ?
            ( <p>Rejected</p>):record.status !=="Rejected" &&record.status !=="Approved"&&
            (
                <>
            <button className='ms-2 vendor-approved-button' onClick={() => console.log(record)}>
                {"Approved"}
            </button>
            <button className='ms-2 vendor-reject-button' onClick={() => console.log(record)}>
                {"Reject"}
            </button>
            </>
            )
    }
            </div>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'Mukesh',
        status: 'Approved'
    },
    {
        key: '2',
        name: 'Suman',
        status: 'Approved'

    },
    {
        key: '3',
        name: 'Suresh',
        status: 'Approved'
    },
    {
        key: '4',
        name: 'Durga',
        status: 'Approved'

    },
    {
        key: '5',
        name: 'Preethi',
        status: 'Approved'

    },
    {
        key: '6',
        name: 'Priya',
        status: 'Approved'

    },
    {
        key: '7',
        name: 'Kiki',
    },
    {
        key: '8',
        name: 'Priya',
    },
];
const VendorList = () =>
<div className="vendor-list-main">
<h3 className="vendor-list-header">Vendor List</h3>
<div className="vendor-list-top mt-4 py-4 px-3">
  <input placeholder="Search..." className="vendor-list-search ps-2" />
</div>
<div className="vendor-list-table">
  <Table
    columns={columns}
    dataSource={data}
    pagination={false}
    className="mt-2"
  />
</div>
</div>
export default VendorList;
