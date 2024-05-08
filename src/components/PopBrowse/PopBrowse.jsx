import { Link, useNavigate, useParams } from "react-router-dom"
import { Paths } from "../../lib/paths"
import Calendar from "../Calendar/Calendar"
import * as S from "./PopBrouse.styled";
import '../../App.css'
import { useTasks } from "../../context/hooks/useTasks";
import { useEffect, useRef, useState } from "react";
import { changeTasks, deleteTask, } from "../../api";
import { useUser } from "../../context/hooks/useUser";



function PopBrowse() {
	const { setTaskList, taskList, statusList } = useTasks();
	const { user } = useUser();
	const [selected, setSelected] = useState();
	const navigate = useNavigate();
	const [error, setError] = useState(null);
	const { id } = useParams();
	const [changeTask, setChangeTask] = useState(someTask());
	const input = useRef();
	const [red, setRed] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const [style, setStyle] = useState({
		backgroundColor: ' #FFFFFF',
		color: '#94a6be',
	});

	function someTask() {
		try {
			const selectedTask = taskList.find((task) => task._id === id);
			//setSelected(selectedTask.date);
			return selectedTask;
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		setSelected(someTask().date);
	}, [someTask()]);

	console.log(someTask().topic);

	function Redaсt() {
		input.current.readOnly = false;
		setRed(!red);
	}

	const changeStatus = (e, Status) => {
		setChangeTask({ ...changeTask, status: Status });
		console.log(Status);
		setIsActive(!isActive);
		e.target.style = {
			backgroundColor: isActive ? '#94a6be' : ' #FFFFFF',
			color: isActive ? '#FFFFFF' : '#94a6be',
		};
		console.log(e.target.style);
		setStyle(e.target.style);
		//e.target.style.backgroundColor = '#94a6be';
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		const postChangeTask = { ...changeTask, date: selected };
		await changeTasks({ ...postChangeTask, id: id, token: user?.token }).then((data) => {
			//throw new Error("Ошибка сервера");
			setTaskList(data.tasks);
			console.log(data);
			navigate(Paths.MAIN);
			setRed(!red);
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
							<S.PopBrowseTtl>{someTask().title}</S.PopBrowseTtl>
							<S.PopBrowseContentAnd>
								<S.Orange>{someTask().topic}</S.Orange>
							</S.PopBrowseContentAnd>
						</S.PopBrowseTopBlock>
						<S.PopBrowseStatusStatus>
							<S.StatusPSubttl>Статус</S.StatusPSubttl>
							<S.StatusThemes>
								{!red && <S.StatusTheme $highlighted value={someTask().status}>
									<p >{someTask().status}</p>
								</S.StatusTheme>}

								{red && statusList.map((Status, index) => <S.StatusTheme onClick={(e) => changeStatus(e, Status)}>
									<p >{Status}</p></S.StatusTheme>)}
							</S.StatusThemes>
						</S.PopBrowseStatusStatus>
						<S.PopBrowseWrap>
							<S.PopBrowseFormFormBrowse id="formBrowseCard" action="#">
								<S.FormBrowseBlock>
									<S.Subttl htmlFor="textArea01">Описание задачи</S.Subttl>
									<S.FormBrowseArea name="text" id="textArea01" ref={input} readOnly placeholder="Введите описание задачи..." defaultValue={changeTask.description} onChange={(e) => setChangeTask({ ...changeTask, description: e.target.value })}></S.FormBrowseArea>
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
								{red && <button className="btn-browse__edit _btn-bor _hover03" onClick={handleSubmit}><a href="#">Сохранить</a></button>}
								{red && <button className="btn-browse__edit _btn-bor _hover03" ><a href="#" onClick={Redaсt}>Отменить</a></button>}
								{!red && <button className="btn-browse__edit _btn-bor _hover03" onClick={Redaсt}><a href="#">Редактировать задачу</a></button>}
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
		</S.PopBrowse >
	)
}


export default PopBrowse