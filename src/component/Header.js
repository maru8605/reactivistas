import React from 'react'; 
import Button from './Button';


const Header = (props) => {
    const onClick = () =>{
        console.log('click')
    }

    return (
        
        <div className='header'>
            <h1>{props.title}</h1>
            <Button color='green' text='ADD' onClick={onClick}/>
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
