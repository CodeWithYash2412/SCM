import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { SiHomebridge } from "react-icons/si";
import { CreateAccount } from "../../Auth/Auth";
import { useAuth } from "../../Auth/Contexts/AuhContexts";

const RegisterComponent = (props) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confPassword: "",
      firstName: "",
      lastName: "",
      phone: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      confPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
        .required("Phone number is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await CreateAccount(values.email, values.password);
        alert("Account Created Successfully");
        resetForm();
        navigate("/contact_manager");
      } catch (err) {
        formik.setFieldError("email", err.message);
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-700 to-gray-900 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg mx-auto">
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-blue-600">Register</h2>
            <NavLink to="/" className="text-blue-600 text-xl">
              <SiHomebridge />
            </NavLink>
          </div>
          {formik.errors.email && (
            <div className="text-red-500 text-sm mb-4">{formik.errors.email}</div>
          )}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              {...formik.getFieldProps("email")}
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...formik.getFieldProps("password")}
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="confPassword" className="block text-gray-700 font-semibold">
              Confirm Password
            </label>
            <input
              id="confPassword"
              type="password"
              {...formik.getFieldProps("confPassword")}
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.confPassword && formik.errors.confPassword ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.confPassword}</div>
            ) : null}
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-6 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 font-semibold">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                {...formik.getFieldProps("firstName")}
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 font-semibold">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                {...formik.getFieldProps("lastName")}
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.lastName}</div>
              ) : null}
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-semibold">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              {...formik.getFieldProps("phone")}
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
            ) : null}
          </div>
          <div className="flex flex-col md:flex-row md:gap-4 gap-2">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full md:w-auto"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={formik.handleReset}
              className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full md:w-auto"
            >
              Clear
            </button>
          </div>
          <button
            onClick={() => props.onClick(true)}
            type="button"
            className="w-full mt-4 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
