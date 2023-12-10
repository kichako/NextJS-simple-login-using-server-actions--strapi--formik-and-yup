'use server';

const ENDPOINT = process.env.STRAPI_ENPOINT;

export async function authAction(formData) {
    const rawFormData = {
        identifier: formData.email,
        password: formData.password
    };

    const response = await fetch(`${ENDPOINT}/auth/local`, {
        method: 'POST',
        body: JSON.stringify(rawFormData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();

    if (response.status === 400) {
        return {
            type: 'AUTH_ERROR',
            error: {
                status: data.error.status,
                message: data.error.message
            }
        };
    }

    return {
        type: 'AUTH_SUCCESS',
        data: {
            jwt: data.jwt,
            user: {
                id: data.user.id,
                username: data.user.username,
                email: data.user.email,
                confirm: data.user.confirmed,
                blocked: data.user.blocked
            }
        }
    };
}
