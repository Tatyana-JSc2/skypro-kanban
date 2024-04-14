
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
function MainBlock({ taskList, isLoading }) {
	return (
		<>
		<S.Main>
			<Container>

				<S.MainBlock>
					<S.MainContent>
						{isLoading ? "Данные загружаются" : statusList.map((status, index) =>
							<Columns status={status} key={index} newCardList={taskList.filter((card) => card.status === status)} />
						)
						}
					</S.MainContent>
				</S.MainBlock>
			</Container>
		</S.Main>
		</>
	)
}


export default MainBlock