
//Store imports
import { store } from '../store/store';

const Card = () => {

    const temperatura = store.getState().city.current.feelslike_c;
    const horario = store.getState().city.current.last_updated;

    return (
        <div className="card">
            <div className='city'>
                <span>{store.getState().city.location.name}</span>
            </div>

            <div className='location'>
                <span>{store.getState().city.location.region}</span>
                <span>{store.getState().city.location.country}</span>
            </div>

            <div className='temperatura'>
                <span className="number">{temperatura.toFixed()}</span>
                <span className="celcius">ºC</span>
            </div>

            <div className='status'>
                <img src={store.getState().city.current.condition.icon} />
                <span>{store.getState().city.current.condition.text}</span>
                <span className='dateSpan'>última data atualizada:</span>
                <span className='date'>{horario}</span>
            </div>
        </div>
    )
}

export default Card;