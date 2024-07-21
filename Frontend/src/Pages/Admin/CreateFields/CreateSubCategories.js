import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import axios from "axios";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Toast } from "primereact/toast";
import { Container } from "react-bootstrap";
import PrimeDropdown from "../AddTempleList/TempleForm/TempleFormComponents/PrimeDropdown";
export default function CreateSubCategories() {
  useEffect(() => {
    vendorCategroyGet();
  }, []);
  const [details, setDetails] = useState([]);
  const [Catergories, setCatergories] = useState();
  const navigate = useNavigate();
  const { state: locationState } = useLocation();
  const toast = useRef(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: locationState ? locationState : {} });

  const params = useParams();
  console.log("Params", locationState);

  const displayToaster = () => {
    toast.current.show({
      severity: "success",
      summary: "Done",
      detail: `Main God ${locationState ? "is Updated" : "Created"}`,
      life: 3000,
    });
    setTimeout(() => {
      navigate("/admin/sub-categories");
    }, 1000);
  };
  const onSubmit = async (data, e) => {
    console.log("data@", data);
    try {
      if (locationState) {
        //update
        await axios.put(
          `${process.env.REACT_APP_DEV_BASE_URL}/subCategoriesList/update/${locationState.subCategoryId}`,
          data
        );
        displayToaster();
      } else {
        //create
        await axios.post(
          `${process.env.REACT_APP_DEV_BASE_URL}/subCategoriesList/create`,
          data
        );
        displayToaster();
      }
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Something went wrong,please try again!!!",
        life: 3000,
      });
    }
  };

  const vendorCategroyGet = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/categoriesList/getCategories`)
      .then((resp) => {
        setDetails(resp.data);
        console.log("resp.data", resp.data);
      });
  };

  // const vendorSubCategroyGet = (categoryId) => {
  //   axios
  //     .get(
  //       `${process.env.REACT_APP_DEV_BASE_URL}/subCategoriesList/getSubCategories/${categoryId}`
  //     )
  //     .then((res) => setSubDetails(res.data));
  // };

  return (
    <div className="createListForm">
      <Toast ref={toast} />

      <Container>
        <h5 className="createListForm__title">Create SubCategories</h5>

        <section>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <PrimeDropdown
                controlKey="categoryId"
                name="Catergories"
                optionLabel="categoryName"
                optionValue="categoryId"
                onChangeHandler={(e) => {
                  setCatergories(e.target.value);
                }}
                list={details}
                errors={errors}
                control={control}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="font-title">SubCategories Name</Form.Label>
              <div className="field-style-2">
                <Form.Control
                  type="text"
                  name="name"
                  {...register("subCategoryName", { required: true })}
                  placeholder=""
                />
                <Form.Text style={{ color: "red" }}>
                  {errors.subCategoryName && "This field is required"}
                </Form.Text>
              </div>
            </Form.Group>
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
                  navigate("/admin/sub-categories");
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
