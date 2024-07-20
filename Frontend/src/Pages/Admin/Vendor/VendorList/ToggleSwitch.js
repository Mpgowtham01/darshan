import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";
import { Checkbox } from "antd";
import axios from "axios";

export const ToggleSwitch = ({ record }) => {
  const [value, setValue] = useState(record?.is_active === 1 || false);
  console.log(value, "valueee");
  const toggleHandler = async () => {
    axios
      .put(`${process.env.REACT_APP_DEV_BASE_URL}/vendor/changeStatus`, {
        status: value ? 1 : 0,
        vendor_id: record?.vendor_id,
      })
      .then(res => {
        if (res.status === 200) {
          setValue(prev => !prev);
        }
        console.log("updatteteet");
      });
  };
  return (
    <>
      <InputSwitch checked={value} onChange={toggleHandler} />
    </>
  );
};
export const Togglecheckbox = ({ record }) => {
  const [checkbox, setCheckbox] = useState(record.post || false);
  console.log(record, "chrckkkkk");

  const toggleHandler = async () => {
    axios
      .put(`${process.env.REACT_APP_DEV_BASE_URL}/vendor/changePostStatus`, {
        postStatus: checkbox ? 1 : 0,
        vendor_id: record?.vendor_id,
      })
      .then(res => {
        if (res.status === 200) {
          setCheckbox(prev => !prev);
        }
        console.log("updatteteet");
      });
  };

  return (
    <>
      <Checkbox checked={checkbox} onChange={toggleHandler} />
    </>
  );
};
export const TogglecheckboxForTemple = ({ record }) => {
  const [checkbox, setCheckbox] = useState(
    (record.showTemple === 1 && true) || (record.showTemple === 0 && false)
  );
  console.log(record, "chrckkkkk");

  const toggleHandler = async () => {
    axios
      .put(
        `${process.env.REACT_APP_DEV_BASE_URL}/temple/showfamoustemple/${record.id}`,
        {
          showTemple: checkbox ? 0 : 1,
          // vendor_id: record?.vendor_id,
        }
      )
      .then(res => {
        if (res.status === 200) {
          setCheckbox(prev => !prev);
        }
        console.log("updatteteet");
      });
  };

  return (
    <>
      <Checkbox checked={checkbox} onChange={toggleHandler} />
    </>
  );
};

// export default { ToggleSwitch,Togglecheckbox};
