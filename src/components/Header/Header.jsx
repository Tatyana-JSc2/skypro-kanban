import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../../styles/shared";
import { Link } from "react-router-dom";
import { Paths } from "../../lib/paths";

function Header({ setTaskList, taskList, user }) {

	const [isOpen, setIsOpen] = useState(false);
	const popUserSetName = () => {
		setIsOpen(!isOpen);
	};

	function addTask() {
		const newTask = {
			id: taskList.length + 1,
			theme: "Неизвестно",
			title: "Новая задача",
			date: "30.10.23",
			status: "Без статуса"
		};
		setTaskList([...taskList, newTask]);
	}

	//onClick={addTask}
	//className="header__user _hover02"
	return (
		<S.Header >
			<Container>
				<S.HeaderBlock>
					<S.HeaderLogo className=" _show _light">
						<Link to={Paths.MAIN}><img src="images/logo.png" alt="logo" /></Link>
					</S.HeaderLogo>
					<S.HeaderLogo className=" _dark">
						<Link to={Paths.MAIN}><img src="images/logo_dark.png" alt="logo" /></Link>
					</S.HeaderLogo>
					<S.HeaderNav className="header__nav">
						<S.HeaderBtn id="btnMainNew" type="button"><Link to={Paths.NEWCARD}>Создать новую задачу</Link></S.HeaderBtn>
						<S.HeaderUser onClick={popUserSetName} href="#user-set-target">{user.name}</S.HeaderUser>
						{isOpen &&
							<S.HeaderPopUserSet id="user-set-target">
								{/*<a href="">x</a> */}
								<S.PopUserSetName>{user.name}</S.PopUserSetName>
								<S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
								<S.PopUserSetTheme className="pop-user-set__theme">
									<p>Темная тема</p>
									<input type="checkbox" name="checkbox" />
								</S.PopUserSetTheme>
								<S.PopUserSetButton type="button"><Link to={Paths.EXIT}>Выйти</Link></S.PopUserSetButton>
							</S.HeaderPopUserSet>
						}
					</S.HeaderNav>
				</S.HeaderBlock>
			</Container>
		</S.Header>
	)
}


export default Header

//<a href="#popNewCard">Создать новую задачу</a>