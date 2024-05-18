import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import ru from "date-fns/locale/ru";

export default function Calendar({selected, setSelected}) {

    let footer = <p>Выберете срок исполнения.</p>;
    if (selected) {
        footer = <p>Вы выбрали {format(selected, 'PP', { locale: ru })}.</p>;
    }
    return (
        <DayPicker 
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
        />
    );
}
