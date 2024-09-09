import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';

const ContactEdit = () => {

    const { id } = useParams();

    const initialValues = {
        name: '',
        number: '',
        email: '',
        jobTitle: '',
        streetAddress: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        dateOfBirth: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        number: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        jobTitle: Yup.string().required('Required'),
        streetAddress: Yup.string(),
        city: Yup.string(),
        state: Yup.string(),
        postalCode: Yup.string(),
        country: Yup.string(),
        dateOfBirth: Yup.date().nullable(),
    });

    const onSubmit = (values, { resetForm }) => {
        console.log('Form data', values);
        resetForm();
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="w-full max-w-4xl p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800">Edit Contact with ID {id} </h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Contact Name</label>
                                    <Field
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                                </div>

                                <div>
                                    <label htmlFor="number" className="block text-sm font-medium text-gray-700">Contact Number</label>
                                    <Field
                                        type="text"
                                        id="number"
                                        name="number"
                                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <ErrorMessage name="number" component="div" className="text-red-500 text-sm" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                                </div>

                                <div>
                                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title</label>
                                    <Field
                                        type="text"
                                        id="jobTitle"
                                        name="jobTitle"
                                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <ErrorMessage name="jobTitle" component="div" className="text-red-500 text-sm" />
                                </div>

                                <div>
                                    <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">Street Address</label>
                                    <Field
                                        type="text"
                                        id="streetAddress"
                                        name="streetAddress"
                                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <ErrorMessage name="streetAddress" component="div" className="text-red-500 text-sm" />
                                </div>

                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                    <Field
                                        type="text"
                                        id="city"
                                        name="city"
                                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
                                </div>

                                <div>
                                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">State/Province</label>
                                    <Field
                                        type="text"
                                        id="state"
                                        name="state"
                                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <ErrorMessage name="state" component="div" className="text-red-500 text-sm" />
                                </div>

                                <div>
                                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
                                    <Field
                                        type="text"
                                        id="postalCode"
                                        name="postalCode"
                                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <ErrorMessage name="postalCode" component="div" className="text-red-500 text-sm" />
                                </div>

                                <div>
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                                    <Field
                                        type="text"
                                        id="country"
                                        name="country"
                                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
                                </div>

                                <div>
                                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                                    <Field
                                        type="date"
                                        id="dateOfBirth"
                                        name="dateOfBirth"
                                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <ErrorMessage name="dateOfBirth" component="div" className="text-red-500 text-sm" />
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="px-6 py-3 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Updating...' : 'Update Contact'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default ContactEdit;
