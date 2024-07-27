// import React, { useEffect, useRef, useState } from "react";
// import Form from "react-bootstrap/Form";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import "primeicons/primeicons.css";
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// import "primereact/resources/primereact.css";
// import { Toast } from "primereact/toast";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Container } from "react-bootstrap";
// import { Dropdown } from "primereact/dropdown";
// import { Col, Row } from "antd";

// export default function CreateGroup() {
//   const { state: locationState } = useLocation();
//   console.log(" locationState",  locationState);

//   const navigate = useNavigate();
//   const toast = useRef(null);

//   const {
//     register,
//     handleSubmit,
//     control,

//     formState: { errors },
//   } = useForm({ defaultValues: locationState ? locationState : {} });
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [groupTable, setGroupTable] = useState([]);

//   const displayToaster = () => {
//     toast.current.show({
//       severity: "success",
//       summary: "Done",
//       detail: `Sub Group ${locationState ? "is Updated" : "Created"}`,
//       life: 3000,
//     });
//     // setTimeout(() => {
//     //   navigate("/admin/group");
//     // }, 1000);
//   };
//   const subGroupist = async () => {
//     axios
//       .get(`${process.env.REACT_APP_DEV_BASE_URL}/grouptable/getAll`)
//       .then((res) => {
//         console.log("heeeee", res.data);
//         setGroupTable(res.data);
//       });
//   };
//   useEffect(() => {
//     subGroupist();
//   }, []);
//   const onSubmit = async (data) => {
//     console.log('datadata', data)
//     const datas = {
//       groupName: selectedCity?.group_name,
//       subgroupName: data.subgroupName,
//     };
//     try {
//       if (locationState) {

//         //update
//         await axios.put(
//           `${process.env.REACT_APP_DEV_BASE_URL}/subGrroup/editSubGroup/${locationState.id}`,
//           datas
//         );
//         displayToaster();
//       } else {
//         //create
//         await axios.post(
//           `${process.env.REACT_APP_DEV_BASE_URL}/subGrroup/CreatesubGroup`,
//           datas
//         );
//         displayToaster();
//       }
//     } catch (error) {
//       toast.current.show({
//         severity: "error",
//         summary: "Error",
//         detail: "Something went wrong,please try again!!!",
//         life: 3000,
//       });
//     }
//   };

//   return (
//     <div className="createListForm">
//       <Toast ref={toast} />

//       <Container>
//         <h1 className="createListForm__title">Create sub Group</h1>

//         <section>
//           <Form onSubmit={handleSubmit(onSubmit)}>
//             <Row>
//               <Col xs={24} md={12} lg={12}>
//                 <Form.Group className="mb-3">
//                   <Form.Label className="font-title">Group Name</Form.Label>

//                   <Dropdown
//                     value={selectedCity}
//                     onChange={(e) => {
//                       setSelectedCity(e.value);
//                     }}
//                     options={groupTable}
//                     optionLabel="group_name"
//                     placeholder="Select a Group Name"
//                     className="primeSelect"
//                     style={{ width: "70%" }}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col xs={24} md={12} lg={12}>
//                 <Form.Group className="mb-3">
//                   <Form.Label className="font-title">
//                     {" "}
//                     Sub Group Name
//                   </Form.Label>

//                   <div className="field-style-2">
//                     <Form.Control
//                       type="text"
//                       name="subgroupName"
//                       {...register("subgroupName", { required: true })}
//                       placeholder=""
//                       style={{ width: "70%" }}
//                     />
//                     <Form.Text style={{ color: "red" }}>
//                       {errors.subgroupName && "This field is required"}
//                     </Form.Text>
//                   </div>
//                 </Form.Group>
//               </Col>
//             </Row>

//             <div className="d-flex justify-content-end py-3">
//               <button
//                 type="submit"
//                 className="me-4 customBtn dark-text small"
//                 variant="primary"
//               >
//                 Submit
//               </button>
//               <button
//                 className="customBtn small bg"
//                 type="reset"
//                 onClick={() => {
//                   navigate("/admin/group");
//                 }}
//               >
//                 Cancel
//               </button>
//             </div>
//           </Form>
//         </section>
//       </Container>
//     </div>
//   );
// }



import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import axios from "axios";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import { Toast } from "primereact/toast";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Dropdown } from "primereact/dropdown";
import { Col, Row } from "antd";

export default function CreateGroup() {
  const { state: locationState } = useLocation();
  console.log("locationState", locationState);

  const navigate = useNavigate();
  const toast = useRef(null);

  const {
    register,
    handleSubmit,
    control,

    formState: { errors },
  } = useForm({ defaultValues: locationState ? locationState : {} });
  const [selectedCity, setSelectedCity] = useState(null);
  const [groupTable, setGroupTable] = useState([]);

  const displayToaster = () => {
    toast.current.show({
      severity: "success",
      summary: "Done",
      detail: `Sub Group ${locationState ? "is Updated" : "Created"}`,
      life: 3000,
    });
    setTimeout(() => {
      navigate("/admin/subGroupList");
    }, 1000);
  };

  const subGroupist = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_DEV_BASE_URL}/grouptable/getAll`);
      setGroupTable(res.data);

      // Prefill selectedCity if locationState exists
      if (locationState) {
        const selectedGroup = res.data.find(group => group.group_name === locationState.groupName);
        if (selectedGroup) {
          setSelectedCity(selectedGroup);
        }
      }
    } catch (error) {
      console.log("Error fetching group table:", error);
    }
  };

  useEffect(() => {
    subGroupist();
  }, []);

  const onSubmit = async (data) => {
    console.log('datadata', data)
    const datas = {
      groupName: selectedCity?.group_name,
      subgroupName: data.subgroupName,
    };
    try {
      if (locationState) {
        // Update
        await axios.put(
          `${process.env.REACT_APP_DEV_BASE_URL}/subGrroup/editSubGroup/${locationState.id}`,
          datas
        );
        displayToaster();
      } else {
        // Create
        await axios.post(
          `${process.env.REACT_APP_DEV_BASE_URL}/subGrroup/CreatesubGroup`,
          datas
        );
        displayToaster();
      }
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Something went wrong, please try again!!!",
        life: 3000,
      });
    }
  };

  return (
    <div className="createListForm">
      <Toast ref={toast} />

      <Container>
        <h1 className="createListForm__title">Create sub Group</h1>

        <section>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col xs={24} md={12} lg={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="font-title">Group Name</Form.Label>

                  <Dropdown
                    value={selectedCity}
                    onChange={(e) => {
                      setSelectedCity(e.value);
                    }}
                    options={groupTable}
                    optionLabel="group_name"
                    placeholder="Select a Group Name"
                    className="primeSelect"
                    style={{ width: "70%" }}
                  />
                </Form.Group>
              </Col>
              <Col xs={24} md={12} lg={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="font-title">
                    {" "}
                    Sub Group Name
                  </Form.Label>

                  <div className="field-style-2">
                    <Form.Control
                      type="text"
                      name="subgroupName"
                      {...register("subgroupName", { required: true })}
                      placeholder=""
                      style={{ width: "70%" }}
                    />
                    <Form.Text style={{ color: "red" }}>
                      {errors.subgroupName && "This field is required"}
                    </Form.Text>
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex justify-content-end py-3">
              <button
                type="submit"
                className="me-4 customBtn dark-text small"
                variant="primary"
              >
                Submit
              </button>
              <button
                className="customBtn small bg"
                type="reset"
                onClick={() => {
                  navigate("/admin/subGroupList");
                }}
              >
                Cancel
              </button>
            </div>
          </Form>
        </section>
      </Container>
    </div>
  );
}
