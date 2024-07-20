import React, { useState } from "react";

//style
import "../Css/sass/HeaderNavBar.scss";
import SearchModal from "./SearchModal";
import CustomNav from "./CustomNav";
import { useCallback } from "react";

const HeaderNavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = useCallback(() => setShow(true), [setShow]);

  return (
    <>
      <SearchModal show={show} handleClose={handleClose} />

      <>
        <CustomNav handleShow={handleShow} />
      </>
    </>
  );
};

export default HeaderNavBar;
