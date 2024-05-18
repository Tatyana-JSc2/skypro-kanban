import { Link, useNavigate, useParams } from "react-router-dom"
import { Paths } from "../../lib/paths"
import Calendar from "../Calendar/Calendar"
import * as S from "./PopBrouse.styled";
import { useTasks } from "../../context/hooks/useTasks";
import { useEffect, useRef, useState } from "react";
import { changeTasks, deleteTask, } from "../../api";
import { useUser } from "../../context/hooks/useUser";



function PopBrowse() {
	const { setTaskList, taskList, statusList, GetColor } = useTasks();
	const { user } = useUser();
	const [selected, setSelected] = useState();
	const navigate = useNavigate();
	const [error, setError] = useState(null);
	const { id } = useParams();
	const [changeTask, setChangeTask] = useState(someTask());
	const input = useRef();
	const [red, setRed] = useState(false);
	const [isStatus, setisStatus] = useState(false);


	function someTask() {
		try {
			const selectedTask = taskList.find((task) => task._id === id);
			return selectedTask;
		} catch (err) {
			console.log(err.message);
		}
	}

	useEffect(() => {
		setSelected(someTask().date);
	}, [someTask()]);

	//console.log(someTask().topic);

	function Redaсt() {
		input.current.readOnly = false;
		setRed(!red);
	}

	function unRedaсt() {
		input.current.readOnly = true;
		setRed(!red);
	}


	const changeStatus = (Status) => {
		setChangeTask({ ...changeTask, status: Status });
		//console.log(Status);
		setisStatus(Status);
	};

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

	const buttonDeleteTask = async () => {
		//e.preventDefault();
		setError(null);
		await deleteTask({ id: id, token: user?.token }).then((data) => {
			//throw new Error("Ошибка сервера");
			setTaskList(data.tasks);
			console.log(data);
			navigate(Paths.MAIN);
		}).catch((err) => {
			setError(err.message);
			console.log(error);
		});
	};


	return (
		<S.PopBrowse>
			<S.PopBrowseContainer>
				<S.PopBrowseBblock>
					<S.PopBrowseContent>
						<S.PopBrowseTopBlock>
							<S.PopBrowseTtl>{someTask().title}</S.PopBrowseTtl>
							<S.CategoriesThemeAnd $topicColor={GetColor(someTask().topic)}>
								<p>{someTask().topic}</p>
							</S.CategoriesThemeAnd>
						</S.PopBrowseTopBlock>
						<S.PopBrowseStatusStatus>
							<S.StatusPSubttl>Статус</S.StatusPSubttl>
							<S.StatusThemes>
								{!red && <S.StatusTheme $highlighted value={someTask().status}>
									<p >{someTask().status}</p>
								</S.StatusTheme>}

								{red && statusList.map((Status) => <S.StatusTheme key={Status} $isChecked={Status === isStatus} onClick={() => changeStatus(Status)}>
									<p >{Status}</p></S.StatusTheme>)}

							</S.StatusThemes>
						</S.PopBrowseStatusStatus>
						<S.PopBrowseWrap>
							<S.PopBrowseFormFormBrowse>
								<S.FormBrowseBlock>
									<S.Subttl htmlFor="textArea01">Описание задачи</S.Subttl>
									<S.FormBrowseArea name="text" id="textArea01" ref={input} readOnly placeholder="Введите описание задачи..." defaultValue={changeTask.description} onChange={(e) => setChangeTask({ ...changeTask, description: e.target.value })}></S.FormBrowseArea>
								</S.FormBrowseBlock>
							</S.PopBrowseFormFormBrowse>
							<S.DivCalendar $divv={!red === true}>
								<Calendar selected={selected} setSelected={setSelected} />
							</S.DivCalendar>
						</S.PopBrowseWrap>
						<S.PopBrowseBtnBrowse>
							<S.BtnGroup>
								{red && <S.BtnBrowseButton onClick={handleSubmit}>Сохранить</S.BtnBrowseButton>}
								{red && <S.BtnBrowseButton onClick={unRedaсt}>Отменить</S.BtnBrowseButton>}
								{!red && <S.BtnBrowseButton onClick={Redaсt}>Редактировать задачу</S.BtnBrowseButton>}
								<S.BtnBrowseButton id="btnDelete" onClick={buttonDeleteTask}>Удалить задачу</S.BtnBrowseButton>
							</S.BtnGroup>
							<S.BtnBrowseButtonclose><Link to={Paths.MAIN}><p>Закрыть</p></Link></S.BtnBrowseButtonclose>
						</S.PopBrowseBtnBrowse>
					</S.PopBrowseContent>
				</S.PopBrowseBblock>
			</S.PopBrowseContainer>
		</S.PopBrowse >
	)
}


export default PopBrowse