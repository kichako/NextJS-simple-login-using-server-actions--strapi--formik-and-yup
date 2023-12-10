'use client';

import { authAction } from '@/actions/authAction';
import { useState } from 'react';
import * as Yup from 'yup';

export function useAuth() {
    const [data, setData] = useState({});

    const initialValues = () => {
        return {
            email: '',
            password: ''
        };
    };

    const validationSchema = () => {
        return {
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(8, 'Must be 8 characters or more').required('Required')
        };
    };

    const handleSubmit = async (values) => {
        const result = await authAction(values);
        setData(result);
    };

    return {
        initialValues,
        validationSchema: Yup.object(validationSchema()),
        handleSubmit,
        data
    };
}
