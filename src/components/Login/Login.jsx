import { Link, useNavigate } from "react-router-dom"
import { Paths } from "../../lib/paths"
import { useState } from "react";
import { getAuth } from "../../api";
import * as S from "./Login.styled";
import { useUser } from "../../context/hooks/useUser";



function Login() {

    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { setUser } = useUser();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        await getAuth({ login: login, password: password }).then((data) => {
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


    return (
        <S.Wrapper>
            <S.ContainerSignin>
                <S.Modal>
                    <S.ModalBlock>
                        <S.ModalTtlH2>
                            <>Вход</>
                        </S.ModalTtlH2>
                        <S.ModalFormLogin >
                            <S.ModalInput type="email" placeholder="Эл. почта" value={login}
                                onChange={(e) => setLogin(e.target.value)} />
                            <S.ModalInput type="password" placeholder="Пароль" value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <S.ModalBtnEnter type="button" onClick={handleSubmit}>Войти</S.ModalBtnEnter>
                            {error && <p style={{ color: "red" }}>{error}</p>}
                            <S.ModalFormGroup>
                                <p>Нужно зарегистрироваться?</p>
                                <Link to={Paths.REGISTER}>Регистрируйтесь здесь</Link>
                            </S.ModalFormGroup>
                        </S.ModalFormLogin>

                    </S.ModalBlock>
                </S.Modal>
            </S.ContainerSignin>
        </S.Wrapper>
    )
}

export default Login;