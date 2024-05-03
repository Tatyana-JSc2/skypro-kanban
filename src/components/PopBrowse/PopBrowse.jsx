import { Link, useNavigate, useParams } from "react-router-dom"
import { Paths } from "../../lib/paths"
import Calendar from "../Calendar/Calendar"
import * as S from "./PopBrouse.styled";
import '../../App.css'
import { useTasks } from "../../context/hooks/useTasks";
import { useRef, useState } from "react";
import { changeTasks, deleteTask, } from "../../api";
import { useUser } from "../../context/hooks/useUser";



function PopBrowse() {
	const { setTaskList, taskList } = useTasks();
	const { user } = useUser();
	const [selected, setSelected] = useState();
	const navigate = useNavigate();
	const [error, setError] = useState(null);
	const { id } = useParams();
	//const [text, setText] = useState('');
	const [changeTask, setChangeTask] = useState(someTask());
	const input = useRef();

	function someTask() {
		try {
			//someFunction()
			const selectedTask = taskList.find((task) => task._id === id);
			return selectedTask;
		} catch (err) {
			console.log(err.message);
		}
	};

	console.log(someTask().topic);

	function Redaсt() {
		input.current.readOnly = false;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		const postChangeTask = { ...changeTask, date: selected };
		await changeTasks({ ...postChangeTask, id: id, token: user?.token }).then((data) => {
			//throw new Error("Ошибка сервера");
			setTaskList(data.tasks);
			console.log(data);
			navigate(-1);
		}).catch((err) => {
			setError(err.message);
		});
	};

	const buttonDeleteTask = async (e) => {
		//e.preventDefault();
		setError(null);
		await deleteTask({ id: id, token: user?.token }).then((data) => {
			//throw new Error("Ошибка сервера");
			setTaskList(data.tasks);
			console.log(data);
			navigate(Paths.MAIN);
		}).catch((err) => {
			setError(err.message);
			console.log(err.message);
		});
	};



	return (
		<S.PopBrowse>
			<S.PopBrowseContainer>
				<S.PopBrowseBblock>
					<S.PopBrowseContent>
						<S.PopBrowseTopBlock>
							<S.PopBrowseTtl>Задача {id}</S.PopBrowseTtl>
							<S.PopBrowseContentAnd>
								<S.Orange>{someTask().topic}</S.Orange>
							</S.PopBrowseContentAnd>
						</S.PopBrowseTopBlock>
						<S.PopBrowseStatusStatus>
							<S.StatusPSubttl>Статус</S.StatusPSubttl>
							<S.StatusThemes>
								<S.StatusTheme className="_hide">
									<p>Без статуса</p>
								</S.StatusTheme>
								<S.StatusTheme className="_gray">
									<p className="_gray">{someTask().status}</p>
								</S.StatusTheme>
								<S.StatusTheme className="_hide">
									<p>В работе</p>
								</S.StatusTheme>
								<S.StatusTheme className="_hide">
									<p>Тестирование</p>
								</S.StatusTheme>
								<S.StatusTheme className="_hide">
									<p>Готово</p>
								</S.StatusTheme>
							</S.StatusThemes>
						</S.PopBrowseStatusStatus>
						<S.PopBrowseWrap>
							<S.PopBrowseFormFormBrowse id="formBrowseCard" action="#">
								<S.FormBrowseBlock>
									<S.Subttl htmlFor="textArea01">Описание задачи</S.Subttl>
									<S.FormBrowseArea name="text" id="textArea01" ref={input} readOnly placeholder="Введите описание задачи..." value={changeTask.description} onChange={(e) => setChangeTask({ ...changeTask, description: e.target.value })}></S.FormBrowseArea>
								</S.FormBrowseBlock>
							</S.PopBrowseFormFormBrowse>
							<Calendar selected={selected} setSelected={setSelected} />
						</S.PopBrowseWrap>
						<div className="theme-down__categories theme-down">
							<S.CategoriesPSubttl>Категория</S.CategoriesPSubttl>
							<S.CategoriesThemeOrangeActiveCategory>
								<S.Orange>{someTask().topic}</S.Orange>
							</S.CategoriesThemeOrangeActiveCategory>
						</div>
						<div className="pop-browse__btn-browse ">
							<div className="btn-group">
								<button className="btn-browse__edit _btn-bor _hover03" onClick={Redaсt}><a href="#">Редактировать задачу</a></button>
								<button className="btn-browse__delete _btn-bor _hover03" onClick={buttonDeleteTask}><a href="#">Удалить задачу</a></button>
							</div>
							<button className="btn-browse__close _btn-bg _hover01"><Link to={Paths.MAIN}>Закрыть</Link></button>
						</div>
						<div className="pop-browse__btn-edit _hide">
							<div className="btn-group">
								<button className="btn-edit__edit _btn-bg _hover01"><a href="#">Сохранить</a></button>
								<button className="btn-edit__edit _btn-bor _hover03"><a href="#">Отменить</a></button>
								<button className="btn-edit__delete _btn-bor _hover03" id="btnDelete"><a href="#">Удалить задачу</a></button>
							</div>
							<button className="btn-edit__close _btn-bg _hover01"><a href="#">Закрыть</a></button>
						</div>

					</S.PopBrowseContent>
				</S.PopBrowseBblock>
			</S.PopBrowseContainer>
		</S.PopBrowse>
	)
}


export default PopBrowse