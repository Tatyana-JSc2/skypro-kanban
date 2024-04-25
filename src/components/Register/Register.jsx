import { Link, useNavigate } from "react-router-dom"
import { Paths } from "../../lib/paths"
import '../../App.css'
import { getReg } from "../../api";
import * as S from "./Register.styled";
import { useState } from "react";


function Register({ userReg }) {

	//const navigate = useNavigate();
	const [name, setName] = useState('');
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);


	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		await getReg({ name: name, login: login, password: password }).then((data) => {
			//throw new Error("Ошибка сервера");
			console.log(data);
			userReg(data.user);

		}).catch((err) => {
			setError(err.message);
			console.log(err.message);
		});
	};


	//function Try() {
	//	localStorage.setItem("user", "user");
	//	setIsAuth(true);
	//	navigate(Paths.LOGIN);
	//}
	//{error && "Такой пользователь уже существует"}

	return (
		<S.Wrapper>
			<S.ContainerSignup>
				<S.Modal>
					<S.ModalBlock>
						<S.ModalTtl>
							<h2>Регистрация</h2>
						</S.ModalTtl>
						<S.ModalFormLogin >
							<S.ModalInput type="text" placeholder="Имя" label="Имя" value={name} onChange={(e) => setName(e.target.value)} />
							<S.ModalInput type="email" placeholder="Эл. почта" label="Эл. почта" value={login} onChange={(e) => setLogin(e.target.value)} />
							<S.ModalInput type="password" placeholder="Пароль" label="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
							{error && <p>{error}</p>}
							<S.ModalBtn id="SignUpEnter" type="button" onClick={handleSubmit}>Зарегистрироваться</S.ModalBtn>
							<S.ModalFormGroup>
								<p>Уже есть аккаунт?  <Link to={Paths.LOGIN}>Войдите здесь</Link>
								</p>
							</S.ModalFormGroup>
						</S.ModalFormLogin>
					</S.ModalBlock>
				</S.Modal>
			</S.ContainerSignup>
		</S.Wrapper>
	)
}

export default Register;