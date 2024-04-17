import { Link, useNavigate } from "react-router-dom"
import { Paths } from "../../lib/paths"
import '../../App.css'
import { getReg } from "../../api";
import * as S from "./Register.styled";



function Register({ setIsAuth, setToken }) {
	const [formData, setFormData] = useState(formFields);
	const navigate = useNavigate();

	const formFields = {
		firstName: "",
		email: "",
		password: "",
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target; // Извлекаем имя поля и его значение

		setFormData({
			...formData, // Копируем текущие данные из состояния
			[name]: value, // Обновляем нужное поле
		});
	};


	function reg() {
		getReg().then((data) => {
			//throw new Error("Ошибка сервера");
			setToken(data.token);
		}).catch((err) => {
			setError(err.message);
		}).finally(() => {
			setIsLoading(false);
			localStorage.setItem("user", "user");
			setIsAuth(true);
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
						<S.ModalFormLogin id="formLogUp" action="#">
							<S.ModalInput className="first-name" type="text" placeholder="Имя" name="first-name" label="Имя" value={formData.firstName} onChange={handleInputChange} />
							<S.ModalInput className="login" type="text" placeholder="Эл. почта" name="login" label="Эл. почта" value={formData.email} onChange={handleInputChange} />
							<S.ModalInput className="password-first" type="password" placeholder="Пароль" name="password" label="Пароль" value={formData.password} onChange={handleInputChange} />
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