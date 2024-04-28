
import { Cards } from "../Cards/Cards";
import * as S from "./Columns.styled";
import * as S1 from "../Cards/Cards.styled"



export function Columns({ status, newCardList }) {
    return (
        <S.MainColumn>
            <S.ColumnTitle>
                <p>{status}</p>
            </S.ColumnTitle>
            <S1.Cards>
                {
                    newCardList.map((card) =>
                        <Cards key={card._id}{...card} />)
                }

            </S1.Cards>

        </S.MainColumn>
    )
}
