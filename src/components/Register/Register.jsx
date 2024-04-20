import { Link, useNavigate } from "react-router-dom"
import { Paths } from "../../lib/paths"
import '../../App.css'
import { getReg } from "../../api";
import * as S from "./Register.styled";
import { useState } from "react";


function Register({ setToken }) {

	const formFields = {
		firstName: "",
		email: "",
		password: "",
	};

	const [formData, setFormData] = useState(formFields);
	const navigate = useNavigate();
	const [error, setError] = useState(null);


	//const handleSubmit = (event) => {
	//	event.preventDefault();
	//};


	const handleInputChange = (e) => {
		const { name, value } = e.target; // Извлекаем имя поля и его значение

		setFormData({
			...formData, // Копируем текущие данные из состояния
			[name]: value, // Обновляем нужное поле
		});
	};

	const reg = async () => {
		await getReg({ name: formData.firstName, login: formData.email, password: formData.password }).then((data) => {
			//throw new Error("Ошибка сервера");
			console.log(data);
			setToken(data.user.token);
			navigate(Paths.LOGIN);
		}).catch((err) => {
			setError(err.message);
			console.log(err.message);
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
	//Произошла ошибка, попробуйте позже...
	return (
		<S.Wrapper>
			<S.ContainerSignup>
				<S.Modal>
					<S.ModalBlock>
						<S.ModalTtl>
							<h2>Регистрация</h2>
						</S.ModalTtl>
						<S.ModalFormLogin id="formLogUp" action="#">
							<S.ModalInput type="text" placeholder="Имя" name="firstName" label="Имя" value={formData.firstName} onChange={handleInputChange} />
							<S.ModalInput type="text" placeholder="Эл. почта" name="email" label="Эл. почта" value={formData.email} onChange={handleInputChange} />
							<S.ModalInput type="password" placeholder="Пароль" name="password" label="Пароль" value={formData.password} onChange={handleInputChange} />
							{error && "Такой пользователь уже существует"}
							<S.ModalBtn id="SignUpEnter" onClick={reg}>Зарегистрироваться</S.ModalBtn>
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