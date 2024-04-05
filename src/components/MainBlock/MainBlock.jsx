
import { Columns } from "../Columns/Columns";


const statusList = [
	"Без статуса",
	"Нужно сделать",
	"В работе",
	"Тестирование",
	"Готово",
];



function MainBlock({ taskList, isLoading }) {

	return (
		<main className="main">
			<div className="container">

				<div className="main__block">
					<div className="main__content">
						{isLoading ? "Данные загружаются" : statusList.map((status, index) =>
							<Columns status={status} key={index} cardList={taskList.filter((card) => card.status === status)} />
						)
						}

					</div>

				</div>
			</div>
		</main>
	)
}


export default MainBlock