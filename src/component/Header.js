import {useLocation} from 'react-router-dom';
import Button from './Button';


const Header = ({title, onAdd, showAdd}) => {
    
    const location = useLocation();
    return (
        
        <div className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (<Button
             color={showAdd ? 'red' : 'green'}
             text={showAdd ? 'Close' : 'Add'} 
             onClick={onAdd}/>
            )}
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker '
}

// propTypes sirven para declarar los tipos de datos que vamos a usar 
// ejemplo
// Header.propTypes = {
//     title: propTypes.string
// }
// recordar importar el propTypes


export default Header
