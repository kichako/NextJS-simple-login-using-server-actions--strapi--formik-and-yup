'use client';

import { useAuth } from '@/hooks/useAuth';
import { AuthForm } from './AuthForm';
import { ResponseBox } from './ResponseBox';

export function Auth() {
    const { data, initialValues, validationSchema, handleSubmit } = useAuth();

    return (
        <>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <AuthForm
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    handleSubmit={handleSubmit}
                />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-9">
                <ResponseBox
                    data={data}
                />
            </div>
        </>
    );
}
