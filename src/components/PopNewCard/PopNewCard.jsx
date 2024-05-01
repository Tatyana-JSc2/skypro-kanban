import Calendar from "../Calendar/Calendar"
import '../../App.css'
import { useState } from "react";
import { postTasks } from "../../api";
import { useUser } from "../../context/hooks/useUser";
import { Link, useNavigate } from "react-router-dom";
import { useTasks } from "../../context/hooks/useTasks";
import { Paths } from "../../lib/paths";



function PopNewCard() {
	const { setTaskList } = useTasks();
	const { user } = useUser();
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	const [selected, setSelected] = useState();
	const [newTask, setNewTask] = useState({
		title: "",
		topic: "",
		status: "Без статуса",
		description: "",
		date: "",
	});

	//function addTask() {//перенесена из Header //onClick={addTask}
	//	const newTask = {
	//		//id: taskList.length + 1,
	//		topic: "Неизвестно",
	//		title: "Новая задача",
	//		date: "30.10.23",
	//		status: "Без статуса",
	//		description: "Описание задачи"
	//	};
	//	setTaskList([...taskList, newTask]);
	//}


	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		const postNewTask = { ...newTask, date: selected };
		await postTasks({ ...postNewTask, token: user?.token }).then((data) => {
			//throw new Error("Ошибка сервера");
			setTaskList(data.tasks);
			console.log(data);
			navigate(-1);
		}).catch((err) => {
			setError(err.message);
		});
	};


	return (
		<div className="pop-new-card" id="popNewCard">
			<div className="pop-new-card__container">
				<div className="pop-new-card__block">
					<div className="pop-new-card__content">
						<h3 className="pop-new-card__ttl">Создание задачи</h3>
						<Link to={Paths.MAIN}><a href="#" className="pop-new-card__close">&#10006;</a></Link>
						<div className="pop-new-card__wrap">
							<form className="pop-new-card__form form-new" id="formNewCard" action="#">
								<div className="form-new__block">
									<label htmlFor="formTitle" className="subttl">Название задачи</label>
									<input className="form-new__input" id="formTitle" onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} type="text" name="name" placeholder="Введите название задачи..." autoFocus />
								</div>
								<div className="form-new__block">
									<label htmlFor="textArea" className="subttl">Описание задачи</label>
									<textarea className="form-new__area" id="textArea" onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} name="text" placeholder="Введите описание задачи..."></textarea>
								</div>
							</form>
							<Calendar selected={selected} setSelected={setSelected} />
						</div>
						<div className="pop-new-card__categories categories">
							<p className="categories__p subttl">Категория</p>
							<div className="categories__themes">
								<label><input type="radio" value="Web Design" onChange={(e) => setNewTask({ ...newTask, topic: e.target.value })} />Web Design</label>
								<label><input type="radio" value="Research" onChange={(e) => setNewTask({ ...newTask, topic: e.target.value })} />Research</label>
								<label><input type="radio" value="Copywriting" onChange={(e) => setNewTask({ ...newTask, topic: e.target.value })} />Copywritin</label>
								{/*<div className="categories__theme _orange _active-category">
									<p className="_orange">Web Design</p>
								</div>
								<div className="categories__theme _green">
									<p className="_green">Research</p>
								</div>
								<div className="categories__theme _purple">
									<p className="_purple">Copywriting</p>
								</div>*/}
							</div>
						</div>
						{error && <p style={{ color: "red" }}>{error}</p>}
						<button className="form-new__create _hover01" id="btnCreate" onClick={handleSubmit}>Создать задачу</button>
					</div>
				</div>
			</div>
		</div>
	)
}


export default PopNewCard