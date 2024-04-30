export const register_user = async (formData) => {
    try {
        const res = await fetch('https://leaf-log-4kpa.vercel.app/api/Auth/register', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in register_user (service) => ', error);
        return { success: false, message: error.message };
    }
};

export const login_user = async (formData) => {
    try {
        const res = await fetch('https://leaf-log-4kpa.vercel.app/api/Auth/login', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in login_user (service) => ', error);
        return { success: false, message: error.message };
    }
};

