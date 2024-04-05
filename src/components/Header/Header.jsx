import { useState } from "react";
import * as S from "./Header.styled";

function Header({ setTaskList, taskList }) {

	const [isOpen, setIsOpen] = useState(false);
	const popUserSetName = () => {
		setIsOpen(!isOpen);
	};

	function addTask() {
		const newTask = {
			id: taskList.length + 1,
			theme: "Research",
			title: "Новая задача",
			date: "30.10.23",
			status: "Без статуса"
		};
		setTaskList([...taskList, newTask]);
	}


	return (
		<S.Header >
			<div className="container">
				<div className="header__block">
					<div className="header__logo _show _light">
						<a href="" target="_self"><img src="images/logo.png" alt="logo" /></a>
					</div>
					<div className="header__logo _dark">
						<a href="" target="_self"><img src="images/logo_dark.png" alt="logo" /></a>
					</div>
					<nav className="header__nav">
						<S.HeaderBtn onClick={addTask} id="btnMainNew">Создать новую задачу</S.HeaderBtn>
						<a onClick={popUserSetName} href="#user-set-target" className="header__user _hover02">Ivan Ivanov</a>
						{isOpen &&
							<div className="header__pop-user-set pop-user-set" id="user-set-target">
								{/*<a href="">x</a> */}
								<p className="pop-user-set__name">Ivan Ivanov</p>
								<p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
								<div className="pop-user-set__theme">
									<p>Темная тема</p>
									<input type="checkbox" className="checkbox" name="checkbox" />
								</div>
								<button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
							</div>
						}
					</nav>
				</div>
			</div>
		</S.Header>
	)
}


export default Header

//<a href="#popNewCard">Создать новую задачу</a>