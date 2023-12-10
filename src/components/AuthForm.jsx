'use client';

import { Field, Form, Formik } from 'formik';

export function AuthForm({ initialValues, validationSchema, handleSubmit }) {
    return (
        <section>
            <Formik
                initialValues={initialValues()}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="email" className="uppercase font-bold text-sm">E-mail:</label>
                        <Field id="email" name="email" type="email" placeholder="E-mail" className="border border-gray-200 p-2 w-full rounded-lg" />
                    </div>
                    <div>
                        <label htmlFor="password" className="uppercase font-bold text-sm">Password:</label>
                        <Field id="password" name="password" type="password" placeholder="Password" className="border border-gray-200 p-2 w-full rounded-lg" />
                    </div>
                    <div>
                        <button type="submit" className="p-3 w-full rounded-lg bg-[#0F1020] text-[#F9FCFB] font-bold uppercase">Sign In</button>
                    </div>
                </Form>
            </Formik>
        </section>
    );
}
