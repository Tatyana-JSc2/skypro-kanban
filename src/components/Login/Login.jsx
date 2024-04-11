import { useNavigate } from "react-router-dom"
import { Paths } from "../../lib/paths"

function Login({ setIsAuth }) {

    const navigate = useNavigate();
    function login() {
        //... проверить логин и пароль на сервере, если существуют, то реализуем дальнейшую логику, если нет, то пишем 'введите корректные данные' и перенаправляем зарегистрироваться.
        localStorage.setItem("user", "user");
        setIsAuth(true);
        navigate(Paths.MAIN);
    }

    return (
        <div>
            <h2>страница логина</h2>
            <button type="button" onClick={login}>Войти</button>
        </div>
    )
}

export default Login