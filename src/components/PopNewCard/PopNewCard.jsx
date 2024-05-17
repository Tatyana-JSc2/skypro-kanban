import Calendar from "../Calendar/Calendar"
import { useState } from "react";
import { postTasks } from "../../api";
import { useUser } from "../../context/hooks/useUser";
import { Link, useNavigate } from "react-router-dom";
import { useTasks } from "../../context/hooks/useTasks";
import { Paths } from "../../lib/paths";
import * as S from "./PopNewCard.styled";


function PopNewCard() {
	const { setTaskList } = useTasks();
	const { user } = useUser();
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	const [selected, setSelected] = useState();
	const [isActiv, setisActiv] = useState(false);
	const [newTask, setNewTask] = useState({
		title: "",
		topic: "",
		status: "Без статуса",
		description: "",
		date: "",
	});


	const changeTopic = (value) => {
		setNewTask({ ...newTask, topic: value });
		setisActiv(value);
	};

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
		<S.PopNewCard>
			<S.PopNewCardContainer>
				<S.PopNewCardBlock>
					<S.PopNewCardContent>
						<S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
						<Link to={Paths.MAIN}><S.PopNewCardClose>&#10006;</S.PopNewCardClose></Link>
						<S.PopNewCardWrap>
							<S.PopNewCardFormFormNew id="formNewCard" action="#">
								<S.FormNewBlock>
									<S.Subttl htmlFor="formTitle" >Название задачи</S.Subttl>
									<S.FormNewInput id="formTitle" onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} type="text" name="name" placeholder="Введите название задачи..." autoFocus />
								</S.FormNewBlock>
								<S.FormNewBlock>
									<S.Subttl htmlFor="textArea" >Описание задачи</S.Subttl>
									<S.FormNewArea id="textArea" onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} name="text" placeholder="Введите описание задачи..."></S.FormNewArea>
								</S.FormNewBlock>
							</S.PopNewCardFormFormNew>
							<Calendar selected={selected} setSelected={setSelected} />
						</S.PopNewCardWrap>
						<S.PopNewCardCategoriesCategories>
							<S.CategoriesPSubttl>Категория</S.CategoriesPSubttl>
							<S.CategoriesThemes>
								<S.CategoriesThemeOrange type="button" $isActiv={isActiv === "Web Design"} onClick={() => changeTopic('Web Design')}>
									Web Design
								</S.CategoriesThemeOrange>
								<S.CategoriesThemeGreen type="button" $isActiv={isActiv === "Research"} value="Research" onClick={() => changeTopic('Research')}>
									Research
								</S.CategoriesThemeGreen>
								<S.CategoriesThemePurple type="button" $isActiv={isActiv === "Copywriting"} value="Copywriting" onClick={() => changeTopic('Copywriting')}>
									Copywriting
								</S.CategoriesThemePurple>
							</S.CategoriesThemes>
						</S.PopNewCardCategoriesCategories>
						{error && <p style={{ color: "red" }}>{error}</p>}
						<S.FormNewCreate id="btnCreate" onClick={handleSubmit}>Создать задачу</S.FormNewCreate>
					</S.PopNewCardContent>
				</S.PopNewCardBlock>
			</S.PopNewCardContainer >
		</S.PopNewCard >
	)
}


export default PopNewCard