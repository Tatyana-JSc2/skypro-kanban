import { Link, useNavigate } from "react-router-dom"
import { Paths } from "../../lib/paths"
import '../../App.css'
import { useState } from "react";



function Login({ setIsAuth, token }) {

    const navigate = useNavigate();
    //const [formData, setFormData] = useState(formFields);

    //const formFields = {
    //    login: "",
    //    password: "",
    //  };

      //const handleInputChange = (e) => {
      //  const { name, value } = e.target; // Извлекаем имя поля и его значение
      
      //  setFormData({
      //    ...formData, // Копируем текущие данные из состояния
      //    [name]: value, // Обновляем нужное поле
      //  });
     // };


    function login() {
        localStorage.setItem("user", JSON.stringify(newUser));
        setIsAuth(newUser);//newUser нужно получить из апи
        navigate(Paths.MAIN);
    }

    //{auth && <h2 style={{color:"red"}}>Введены неверные имя и пароль</h2>}

    return (
        <div className="wrapper">
            <div className="container-signin">
                <div className="modal">
                    <div className="modal__block">
                        <div className="modal__ttl">
                            <h2>Вход</h2>
                        </div>
                        <form className="modal__form-login" id="formLogIn" action="#">
                            <input className="modal__input" id="formlogin" type="text" name="login" placeholder="Эл. почта" />
                            <input className="modal__input" id="formpassword" type="password" name="password" placeholder="Пароль" />
                            
                            <button className="modal__btn-enter _hover01" id="btnEnter" type="button" onClick={login}>Войти</button>
                            <div className="modal__form-group">
                                <p>Нужно зарегистрироваться?</p>
                                <Link to={Paths.REGISTER}>Регистрируйтесь здесь</Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;