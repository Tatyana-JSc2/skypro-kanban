
//const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

export async function getTasks({ token }) {
    const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "GET",
    });

    if (response.status === 401) {
        throw new Error("Нет авторизации");
    } else
        if (!response.ok) {
            throw new Error("Ошибка сервера");
        } else {
            const data = await response.json();
            return data;
        }
}

export async function postTasks({ title, topic, status, description, date, token }) {
    const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({
            title,
            topic,
            status,
            description,
            date,
        }),
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
    } else {
        const data = await response.json();
        return data;
    }
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
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);

        // if (response.status === 400) {
        //     throw new Error("Пользователь с таким логином уже сущетсвует");
        // } else
        //    if (!response.ok) {
        //        throw new Error("Ошибка сервера");
    } else {
        const data = await response.json();
        return data;
    }
}

export async function getAuth({ login, password }) {
    const response = await fetch("https://wedev-api.sky.pro/api/user/login", {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
        // if (response.status === 400) {
        //     throw new Error("Передан неправильный логин или пароль");
        // } else
        //     if (!response.ok) {
        //        throw new Error("Ошибка сервера");
    } else {
        const data = await response.json();
        return data;
    }
}