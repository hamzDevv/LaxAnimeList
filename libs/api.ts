export const apiFetch = async route => {
    try {
        const jikanApi = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${route}`;
        const res = await fetch(jikanApi)
        const data = await res.json();

        if (!res.ok) {
            console.log(`Anu Njir: ${res.status}`);
        }

        return data;
    } catch (error) {
        console.log(`Error Jir: ${error}`);
    }
};
