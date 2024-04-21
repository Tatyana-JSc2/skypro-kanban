import { Link, useNavigate } from "react-router-dom"
import { Paths } from "../../lib/paths"
import '../../App.css'
import { getReg } from "../../api";
import * as S from "./Register.styled";
import { useState } from "react";


function Register({ setToken }) {

	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		setError(null);
		getReg({ name: name, login: login, password: password }).then((user) => {
			//throw new Error("Ошибка сервера");
			console.log(user);
			setToken(user.token);
			navigate(Paths.LOGIN);
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


	return (
		<S.Wrapper>
			<S.ContainerSignup>
				<S.Modal>
					<S.ModalBlock>
						<S.ModalTtl>
							<h2>Регистрация</h2>
						</S.ModalTtl>
						<S.ModalFormLogin onSubmit={handleSubmit}>
							<S.ModalInput type="text" placeholder="Имя" label="Имя" value={name} onChange={(e) => setName(e.target.value)} />
							<S.ModalInput type="email" placeholder="Эл. почта" label="Эл. почта" value={login} onChange={(e) => setLogin(e.target.value)} />
							<S.ModalInput type="password" placeholder="Пароль" label="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
							{error && "Такой пользователь уже существует"}
							<S.ModalBtn id="SignUpEnter" type="submit">Зарегистрироваться</S.ModalBtn>
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