import React from "react";
import { MdAdd } from "react-icons/md";
import { Table, Button } from "antd";

const DataListTable = ({
  title,
  handleSearch,
  columns,
  dataList,
  showAddNewBtn = true,
  handleAddNewBtn = () => {},
}) => {
  return (
    <>
      {/* {dataList?.length ? ( */}
      <div className="table__container">
        <h2 className="table__container-title">{title}</h2>

        <div className="table__container-top">
          <input
            placeholder="Search..."
            className="blog-list-search ps-2"
            onChange={(e) => handleSearch(e)}
          />
          {showAddNewBtn && (
            <Button
              onClick={handleAddNewBtn}
              className="table__container-list-button"
            >
              <MdAdd />
              Add New
            </Button>
          )}
        </div>

        <div className="table__container-list-table">
          <Table
            columns={columns}
            dataSource={dataList || []}
            pagination={{
              showSizeChanger: true,
              position: ["bottomCenter"],
            }}
            className="mt-2"
          />
        </div>
      </div>
      {/* // ) : (
      //   <div className="spinner__container text-center mx-auto my-5">
      //     <Spinner />
      //     jnuecfybr
      //   </div>
      // )} */}
    </>
  );
};

export default DataListTable;
