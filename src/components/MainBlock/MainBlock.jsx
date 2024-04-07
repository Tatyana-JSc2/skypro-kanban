
import { Container } from "../../styles/shared";
import { Columns } from "../Columns/Columns";
import * as S from "./MainBlock.styled";


const statusList = [
	"Без статуса",
	"Нужно сделать",
	"В работе",
	"Тестирование",
	"Готово",
];



function MainBlock({ taskList, isLoading }) {

	return (
		<S.Main>
			<Container>

				<S.MainBlock>
					<S.MainContent>
						{isLoading ? "Данные загружаются" : statusList.map((status, index) =>
							<Columns status={status} key={index} cardList={taskList.filter((card) => card.status === status)} />
						)
						}
					</S.MainContent>
				</S.MainBlock>
			</Container>
		</S.Main>
	)
}


export default MainBlock