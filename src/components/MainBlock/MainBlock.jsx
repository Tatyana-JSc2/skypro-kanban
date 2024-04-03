import { cardList } from "../../data";
import { Cards } from "./Cards";
import { Columns } from "./Columns";


const statusList = [
	"Без статуса",
	"Нужно сделать",
	"В работе",
	"Тестирование",
	"Готово",
];



function MainBlock() {
	return (
		<main className="main">
			<div className="container">

				<div className="main__block">
					<div className="main__content">
						{
							statusList.map((status, index) =>
								<Columns status={status} key={index} cardList={cardList.filter((card) => card.status === status)} />
							)
						}
					</div>

				</div>
			</div>
		</main>
	)
}


export default MainBlock