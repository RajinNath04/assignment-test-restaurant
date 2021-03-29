import React from "react";
import { Formik, Form } from "formik";
import InputText from "../Form/InputText";
import InputTextArea from '../Form/InputTextArea';
import RadioInput from "../Form/RadioInput";
import './FilterSearchRestaurant.scss';

const FilterSearchRestaurant = (props) => {
    return (
        <div>
            <div>
                <div className="row justify-content-center">
                    <div className="col-xl-11 col-lg-11 col-md-12 col-sm-12">
                        <div className="card o-hidden border-0 shadow-lg my-3">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="p-3">
                                            <div>
                                                <h1 className="h4 text-gray-900 mb-4">Search Restaurant</h1>
                                            </div>
                                            <Formik
                                                initialValues={{
                                                    name: "",
                                                    phone: "",
                                                    website: "",
                                                    address: "",
                                                    state: "",
                                                    zip: "",
                                                    fullMenu: ""
                                                }}
                                                onSubmit={(values, actions) => {
                                                    props.handleSubmit(values, actions);
                                                }}
                                                onReset={(values, actions) => {


                                                }}

                                            >
                                                {({
                                                    values,
                                                    errors,
                                                    actions,
                                                    touched,
                                                    handleChange,
                                                    handleBlur,
                                                    handleSubmit,
                                                    isSubmitting,
                                                    /* and other goodies */
                                                }) => (
                                                    <Form className="user">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <InputText
                                                                    name="name"
                                                                    type="text"
                                                                    err={errors.name}
                                                                    label={"Name"}
                                                                    placeholder={"Enter Name..."}
                                                                    value={values.name}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <InputText
                                                                    name="phone"
                                                                    type="text"
                                                                    err={errors.phone}
                                                                    label={"Phone No"}
                                                                    placeholder={"Enter Phone No..."}
                                                                    value={values.phone}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <InputText
                                                                    name="website"
                                                                    type="text"
                                                                    err={errors.website}
                                                                    label={"Website"}
                                                                    placeholder={"Enter Website..."}
                                                                    value={values.website}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <InputTextArea
                                                                    name="address"
                                                                    type="text"
                                                                    err={errors.address}
                                                                    label={"Address"}
                                                                    placeholder={"Enter address..."}
                                                                    value={values.address}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <InputText
                                                                    name="state"
                                                                    type="text"
                                                                    err={errors.state}
                                                                    label={"State"}
                                                                    placeholder={"Enter Your state..."}
                                                                    value={values.state}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <InputText
                                                                    name="zip"
                                                                    type="zip"
                                                                    err={errors.zip}
                                                                    label={"Zip"}
                                                                    placeholder={"Enter zip..."}
                                                                    value={values.zip}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row justify-content-end pt-1">
                                                            <button
                                                                className="btn btn-primary btn-user btn-block"
                                                                type="submit"
                                                            >
                                                                Search Restaurant
                                                         </button>
                                                            <button className="btn btn-secondary btn-user btn-block p-3 ml-3" type="reset" onClick={props.handleReset}>
                                                                Reset
                                                         </button>
                                                        </div>

                                                    </Form>
                                                )}
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSearchRestaurant;
