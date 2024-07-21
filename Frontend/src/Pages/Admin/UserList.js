import { Table } from "antd";

//style
import "../../components/Css/sass/UserList.scss";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <div className="d-flex flex-direction-row">
        <button className="user-list-view-button p-2">{"View"}</button>
        {record.status === "Approved" ? (
          <p className="ms-3">Approved</p>
        ) : record.status === "Rejected" ? (
          <p>Rejected</p>
        ) : (
          record.status !== "Rejected" &&
          record.status !== "Approved" && (
            <>
              <button className="user-list-approved-button p-2 ms-2">
                {"Approved"}
              </button>
              <button className="user-list-reject-button p-2 ms-2">
                {"Reject"}
              </button>
            </>
          )
        )}
      </div>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "Mukesh",
    status: "Approved",
  },
  {
    key: "2",
    name: "Suman",
    status: "Approved",
  },
  {
    key: "3",
    name: "Suresh",
  },
  {
    key: "4",
    name: "Durga",
  },
  {
    key: "5",
    name: "Preethi",
  },
  {
    key: "6",
    name: "Priya",
  },
];

const UserList = () => (
  <div className="user-list-main">
    <h3 className="user-list-header">User List</h3>
    <div className="user-list-top mt-4 py-4 px-3">
      <input placeholder="Search..." className="user-list-search ps-2" />
    </div>
    <div className="user-list-table">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="mt-2"
      />
    </div>
  </div>
);
export default UserList;
