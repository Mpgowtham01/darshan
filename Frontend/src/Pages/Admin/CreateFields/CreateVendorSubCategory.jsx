import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "../../../components/Css/sass/StateForm.scss";
import { Toast } from "primereact/toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { Container } from "react-bootstrap";

import { Dropdown } from "primereact/dropdown";

export default function CreateVendorSubCategory() {
  const [categoryList, setCategoryList] = useState([]);
  console.log(categoryList, "Subbb");
  const navigate = useNavigate();
  const { state: locationState } = useLocation();
  const toast = useRef(null);

  useEffect(() => {
    getCategoryList();
  }, []);
  const {
    register,
    handleSubmit,
    reset,
    control,

    formState: { errors },
  } = useForm({ defaultValues: locationState ? locationState : {} });

  console.log("Location", locationState);

  const params = useParams();

  const displayToaster = () => {
    toast.current.show({
      severity: "success",
      summary: "Done",
      detail: `Vendor ${locationState ? "is Updated" : "Created"}`,
      life: 3000,
    });

    setTimeout(() => {
      navigate("/admin/sub-Categories");
    }, 1000);
  };

  const getCategoryList = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/categoriesList/getCategories`)
      .then(res => {
        setCategoryList(res.data);
        console.log(res.data,"subbbb");
      });
  };
  const onSubmit = async (data, e) => {
    try {
      if (locationState) {
        //update
        await axios.put(
          `${process.env.REACT_APP_DEV_BASE_URL}/subCategoriesList/update/${locationState.subCategoryId}`,
          {...data,SubCategoryName:data.subCategoryName,CategoryId:data.categoryId}
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

  return (
    <div className="createListForm">
      <Toast ref={toast} />

      <Container>
        <h1 className="createListForm__title"> Sub-Category Form</h1>
        <section>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label className="font-title">Select Categories</Form.Label>
              <div className="field-style-2">
                {/* <Select
                                    options={countryList.map((list) => ({
                                        label: list.country,
                                        value: list.id,
                                    }))}
                                /> */}

                <Controller
                  name="categoryId"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => {
                    return (
                      <Dropdown
                        id={field.name}
                        {...field}
                        options={categoryList}
                        optionLabel="categoryName"
                        optionValue="categoryId"
                        // placeholder={`Select ${name ? name : ""} `}
                        className="primeSelect"
                        filter
                        showClear
                      />
                    );
                  }}
                />

                <Form.Text style={{ color: "red" }}>
                  {errors.categoryName && <span>This field is required</span>}
                </Form.Text>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="font-title">Sub-Category</Form.Label>
              <div className="field-style-2">
                <Form.Control
                  type="text"
                  name="subCategoryName"
                  {...register("subCategoryName", { required: true })}
                  className="field-style-2"
                  placeholder=""
                />
                <Form.Text style={{ color: "red" }}>
                  {errors.subCategoryName && <span>This field is required</span>}
                </Form.Text>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="font-title">Tag</Form.Label>
              <div className="field-style-2">
                <Form.Control
                  type="text"
                  name="Tag"
                  {...register("Tag", { required: true })}
                  className="field-style-2"
                  placeholder=""
                />
                <Form.Text style={{ color: "red" }}>
                  {errors.Tag && <span>This field is required</span>}
                </Form.Text>
              </div>
            </Form.Group>
            <div className="d-flex justify-content-end py-3">
              <button
                type="submit"
                className="me-4 customBtn dark-text small"
                variant="primary">
                Submit
              </button>
              <button className="customBtn small bg" type="reset" onClick={() => { navigate("/admin/sub-Categories"); }}>
                Cancel
              </button>
            </div>
          </Form>
        </section>
      </Container>
    </div>
  );
}
