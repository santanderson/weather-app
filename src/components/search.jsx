import { useRef } from 'react'
import Card from './card';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const ipt = useRef();
    const navigate = useNavigate();
    let data;

    const handleChange = () => {
        localStorage.removeItem('city');
        localStorage.setItem('city', ipt.current.value);
        navigate("/", {replace:true});
    }

    return (
        <>
            <Card/>
            <form onSubmit={handleChange}>
                <input ref={ipt} type="text" placeholder='city' />
                <button type='submit'>Search</button>
            </form>
        </>
    )
}

export default Search;