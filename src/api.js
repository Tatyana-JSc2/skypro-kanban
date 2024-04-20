//const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

export async function getTasks({ token }) {
    const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "GET",
    });

    if (!response.ok) {
        throw new Error("Ошибка сервера");
    }

    const data = await response.json();

    return data;
}

export async function getReg({ name, login, password }) {
    const response = await fetch("https://wedev-api.sky.pro/api/user", {

        method: "POST",
        body: JSON.stringify({
            name,
            login,
            password,
        }),
    });
    if (response.status === 400) {
        throw new Error("Такой пользователь уже существует");
    } else
        if (!response.ok) {
            throw new Error("Ошибка сервера");
        } else {
            const data = await response.json();
            return data;
        }
}

export async function getAuth({ login, password, token }) {
    const response = await fetch("https://wedev-api.sky.pro/api/user/login", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        }),
    });
    if (response.status === 401) {
        throw new Error("Нет авторизации");
    };
    const data = await response.json();
    return data;
}