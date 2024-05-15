import { Link } from "react-router-dom"
import { Paths } from "../../lib/paths"
import { useUser } from "../../context/hooks/useUser";
import * as S from "./PopExit.styled";

function PopExit() {
	const { exit } = useUser();
	return (
		<S.PopExit id="popExit">
			<S.PopExitContainer>
				<S.PopExitBlock>
					<S.PopExitTtlH2>
						Выйти из аккаунта?
					</S.PopExitTtlH2>
					<S.PopExitForm id="formExit" action="#">
						<S.PopExitFormGroup>
							<S.PopExitExitYes id="exitYes" onClick={exit}><p>Да, выйти</p></S.PopExitExitYes>
							<S.PopExitExitNo id="exitNo"><Link to={Paths.MAIN}><p>Нет, остаться</p></Link></S.PopExitExitNo>
						</S.PopExitFormGroup>
					</S.PopExitForm>
				</S.PopExitBlock>
			</S.PopExitContainer>
		</S.PopExit>
	)
}

export default PopExit
