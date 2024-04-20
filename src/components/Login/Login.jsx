import { Link, useNavigate } from "react-router-dom"
import { Paths } from "../../lib/paths"
import '../../App.css'
import { useState } from "react";
import { getAuth } from "../../api";
import * as S from "./Login.styled";



function Login({ setIsAuth, token}) {

    const navigate = useNavigate();
    const [login, setName] = useState('');
    const [password, setEmail] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        getAuth({login, password, token}).then((data) => {
            setIsAuth(true);
            navigate(Paths.MAIN);
        }).catch((err) => {
            setError(err.message);
            console.log(err.message);
        });
    };

    // localStorage.setItem("user", JSON.stringify(newUser));
    //    setIsAuth(newUser);//newUser нужно получить из апи
    //    navigate(Paths.MAIN);
    //{auth && <h2 style={{color:"red"}}>"Пользователя с такими данными не существует. Введите корректный логин и пароль или зарегистрируйтесь."</h2>}

    return (
        <div className="wrapper">
            <div className="container-signin">
                <div className="modal">
                    <div className="modal__block">
                        <div className="modal__ttl">
                            <h2>Вход</h2>
                        </div>
                        <S.ModalFormLogin onSubmit={handleSubmit} id="formLogIn" action="#">
                            <S.ModalInput type="text" name="login" placeholder="Эл. почта" value={login}
                                onChange={(e) => setName(e.target.value)} />
                            <S.ModalInput type="password" name="password" placeholder="Пароль" value={password}
                                onChange={(e) => setEmail(e.target.value)} />
                            <S.ModalBtnEnter type="submit">Войти</S.ModalBtnEnter>
                            {error && "Пользователя с такими данными не существует. Введите корректный логин и пароль или зарегистрируйтесь."}
                            <S.ModalFormGroup>
                                <p>Нужно зарегистрироваться?</p>
                                <Link to={Paths.REGISTER}>Регистрируйтесь здесь</Link>
                            </S.ModalFormGroup>
                        </S.ModalFormLogin>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;