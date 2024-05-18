
import { useTasks } from "../../context/hooks/useTasks";
import { Container } from "../../styles/shared";
import { Columns } from "../Columns/Columns";
import Header from "../Header/Header";
import * as S from "./MainBlock.styled";


//<Header/>
function MainBlock({ isLoading, error }) {
	const { taskList, statusList } = useTasks();

	return (
		<>
			<S.Main>
				<Header />
				{isLoading ? "Данные загружаются" : (error && "Произошла ошибка, попробуйте позже...") || <>
					<Container>
						<S.MainBlock>
							<S.MainContent>
								{statusList.map((Status, index) =>
									<Columns status={Status} key={index} newCardList={taskList.filter((card) => card.status === Status)} />)
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