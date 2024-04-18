import { Link, useNavigate } from "react-router-dom"
import { Paths } from "../../lib/paths"
import '../../App.css'
import { getReg } from "../../api";
import * as S from "./Register.styled";
import { useState } from "react";



function Register({ setIsAuth, setToken }) {

	const formFields = {
		firstName: "",
		email: "",
		password: "",
	};

	const [formData, setFormData] = useState(formFields);
	const navigate = useNavigate();


	const handleSubmit = (event) => {
		event.preventDefault();
	};


	const handleInputChange = (e) => {
		const { name, value } = e.target; // Извлекаем имя поля и его значение

		setFormData({
			...formData, // Копируем текущие данные из состояния
			[name]: value, // Обновляем нужное поле
		});
	};

	let name = formData.firstName;
	let email = formData.email;
	let password = formData.password;


	const reg = async () => {
		await getReg(name, email, password).then((data) => {
			//throw new Error("Ошибка сервера");
			console.log(data);
			setToken(data.user.token);
		}).catch((err) => {
			setError(err.message);
		}).finally(() => {
			console.log(3);
			setIsLoading(false);
			localStorage.setItem("user", JSON.stringify(data.user));
			setIsAuth(data.user);
			navigate(Paths.MAIN);
		});
	};


	//function Try() {
	//	localStorage.setItem("user", "user");
	//	setIsAuth(true);
	//	navigate(Paths.MAIN);
	//}

	//value={formData.firstName} onChange={handleInputChange} 
	//value={formData.email} onChange={handleInputChange} 
	//value={formData.password} onChange={handleInputChange}

	return (
		<S.Wrapper>
			<S.ContainerSignup>
				<S.Modal>
					<S.ModalBlock>
						<S.ModalTtl>
							<h2>Регистрация</h2>
						</S.ModalTtl>
						<S.ModalFormLogin onSubmit={handleSubmit} id="formLogUp" action="#">
							<S.ModalInput className="first-name" id="first-name" type="text" name="first-name" placeholder="Имя" value={formData.firstName} onChange={handleInputChange} />
							<S.ModalInput className="login" type="text" placeholder="Эл. почта" name="login" label="Эл. почта" value={formData.email} onChange={handleInputChange} />
							<S.ModalInput className="password-first" type="password" placeholder="Пароль" name="password" label="Пароль" value={formData.password} onChange={handleInputChange} />
							<S.ModalBtn id="SignUpEnter" type="submit" onClick={reg}>Зарегистрироваться</S.ModalBtn>
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