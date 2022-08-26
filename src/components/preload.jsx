import { store } from "../store/store";
import { changeCity } from "../store/reducer";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

const Preload = () => {
    let navigate = useNavigate();
    let data;

    if (!localStorage.getItem('city')) {
        localStorage.setItem('city', 'barauna');
    } 
        fetch(`https://api.weatherapi.com/v1/current.json?key=9e9793bdeb4e4aa4acd151546222408&q=${localStorage.getItem('city')}&aqi=yes`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('digite o nome de uma cidade');
                    navigate("search", { replace: true });
                    return;
                }
                else { return response.json(); }
            }).then(resJson => {
                if (resJson) {
                    data = resJson;
                    store.dispatch(changeCity(data));
                    if (store.getState()) {
                        navigate("search", { replace: true });
                    }
                }
            });

    return (
        <div className="preload">
            <CircularProgress color="success" />
        </div>
    )
}

export default Preload;