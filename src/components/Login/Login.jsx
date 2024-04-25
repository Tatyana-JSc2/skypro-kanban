import { Link, useNavigate } from "react-router-dom"
import { Paths } from "../../lib/paths"
import '../../App.css'
import { useState } from "react";
import { getAuth } from "../../api";
import * as S from "./Login.styled";



function Login({setUser}) {

    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        await getAuth({login:login, password:password}).then((data) => {
            console.log(data.user);
            //userLogin(data.user);
            localStorage.setItem("user", JSON.stringify(data.user));
            setUser(data.user);
            navigate(Paths.MAIN);
        }).catch((err) => {
            setError(err.message);
            console.log(err.message);
        });
    };

    //function Try() {
    //	localStorage.setItem("user", "user");
    //	setIsAuth(true);
    //navigate(Paths.MAIN);
    //}


    // localStorage.setItem("user", JSON.stringify(newUser));
    //    setIsAuth(newUser);//newUser нужно получить из апи
    //    navigate(Paths.MAIN);
    //{auth && <h2 style={{color:"red"}}>"Пользователя с такими данными не существует. Введите корректный логин и пароль или зарегистрируйтесь."</h2>}
    //{error && "Пользователя с такими данными не существует. Введите корректный логин и пароль или зарегистрируйтесь."}
    return (
        <div className="wrapper">
            <div className="container-signin">
                <div className="modal">
                    <div className="modal__block">
                        <div className="modal__ttl">
                            <h2>Вход</h2>
                        </div>
                        <S.ModalFormLogin >
                            <S.ModalInput type="email" placeholder="Эл. почта" value={login}
                                onChange={(e) => setLogin(e.target.value)} />
                            <S.ModalInput type="password" placeholder="Пароль" value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <S.ModalBtnEnter type="button" onClick={handleSubmit}>Войти</S.ModalBtnEnter>
                            {error && <p>{error}</p>}
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