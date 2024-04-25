
import { Container } from "../../styles/shared";
import { Columns } from "../Columns/Columns";
import Header from "../Header/Header";
import * as S from "./MainBlock.styled";


const statusList = [
	"Без статуса",
	"Нужно сделать",
	"В работе",
	"Тестирование",
	"Готово",
];

//<Header/>
function MainBlock({ setTaskList, taskList, isLoading, error, user }) {
	return (
		<>
			<S.Main>
				<Header setTaskList={setTaskList} taskList={taskList} user={user}/>
				{isLoading ? "Данные загружаются" : (error && "Произошла ошибка, попробуйте позже...") || <>
					<Container>
						<S.MainBlock>
							<S.MainContent>
								{statusList.map((status, index) =>
									<Columns status={status} key={index} newCardList={taskList.filter((card) => card.status === status)} />)
								}
							</S.MainContent>
						</S.MainBlock>
					</Container></>
				}
			</S.Main>
		</>
	)
}


export default MainBlock