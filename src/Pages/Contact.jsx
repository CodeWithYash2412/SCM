import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TitleBar from "../Components/TitleBar";
import img from "../assets/scm-contact.png"
import Footer from "../Components/Footer"

const ContactUsSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
  phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone is required'),
});

const Contact = () => {
  return (
    <>
      <TitleBar title="Contact" />
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8 mb-8">
          <img src={img} alt="" width={200} className=' mx-auto ' />
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Smart Contact Manager</h1>
          <p className="text-gray-700 text-center mb-8">
            Manage your contacts efficiently with Smart Contact Manager. Create groups, favorite contacts, send bulk emails, and assign tasks—all in one place. If you have any questions, feel free to reach out using the form below or the contact details provided.
          </p>

          <Formik
            initialValues={{
              name: '',
              email: '',
              subject: '',
              message: '',
              phone: '',
            }}

            validationSchema={ContactUsSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-semibold">
                    Name
                  </label>
                  <Field
                    name="name"
                    type="text"
                    className="mt-2 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-semibold">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="mt-2 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-semibold">
                    Phone
                  </label>
                  <Field
                    name="phone"
                    type="text"
                    className="mt-2 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                </div>


                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-semibold">
                    Subject
                  </label>
                  <Field
                    name="subject"
                    type="text"
                    className="mt-2 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-semibold">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    rows="5"
                    className="mt-2 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Contact Details</h2>
          <p className="text-gray-700 mb-2">
            <strong>Address:</strong> 123 Address Line1, Address Line2
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> (+91) 99999 99999
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> support@smartcontactmanager.com
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
