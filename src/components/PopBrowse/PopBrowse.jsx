import { Link, useParams } from "react-router-dom"
import { Paths } from "../../lib/paths"
import Calendar from "../Calendar/Calendar"
import * as S from "./PopBrouse.styled";
import '../../App.css'
import { useTasks } from "../../context/hooks/useTasks";
import { useState } from "react";



function PopBrowse() {
	const [selected, setSelected] = useState();
	const { taskList } = useTasks();
	const { id } = useParams();
	const [text, setText] = useState('');

	const selectedTask = taskList.find((task) => task._id === id);
	console.log(selectedTask);
	setSelected(selectedTask.date);
	setText(selectedTask.description);
	//Web Design
	return (
		<S.PopBrowse>
			<S.PopBrowseContainer>
				<S.PopBrowseBblock>
					<S.PopBrowseContent>
						<S.PopBrowseTopBlock>
							<S.PopBrowseTtl>Задача {id}</S.PopBrowseTtl>
							<S.PopBrowseContentAnd>
								<S.Orange>{selectedTask.topic}</S.Orange>
							</S.PopBrowseContentAnd>
						</S.PopBrowseTopBlock>
						<S.PopBrowseStatusStatus>
							<S.StatusPSubttl>Статус</S.StatusPSubttl>
							<S.StatusThemes>
								<div className="status__theme _hide">
									<p>Без статуса</p>
								</div>
								<div className="status__theme _gray">
									<p className="_gray">Нужно сделать</p>
								</div>
								<div className="status__theme _hide">
									<p>В работе</p>
								</div>
								<div className="status__theme _hide">
									<p>Тестирование</p>
								</div>
								<div className="status__theme _hide">
									<p>Готово</p>
								</div>
							</S.StatusThemes>
						</S.PopBrowseStatusStatus>
						<div className="pop-browse__wrap">
							<form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
								<div className="form-browse__block">
									<label htmlFor="textArea01" className="subttl">Описание задачи</label>
									<textarea className="form-browse__area" name="text" id="textArea01" readOnly placeholder="Введите описание задачи..." value={text} onChange={event => setText(event.target.value)}></textarea>
								</div>
							</form>
							<Calendar selected={selected} setSelected={setSelected} />
						</div>
						<div className="theme-down__categories theme-down">
							<p className="categories__p subttl">Категория</p>
							<div className="categories__theme _orange _active-category">
								<p className="_orange">{selectedTask.topic}</p>
							</div>
						</div>
						<div className="pop-browse__btn-browse ">
							<div className="btn-group">
								<button className="btn-browse__edit _btn-bor _hover03"><a href="#">Редактировать задачу</a></button>
								<button className="btn-browse__delete _btn-bor _hover03"><a href="#">Удалить задачу</a></button>
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