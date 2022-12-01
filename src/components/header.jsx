import {Navigate} from 'react-router-dom'

const Header = (props) => {
    return(
        <div>
            head
            { props.isAuth && <h1>{props.email}</h1> }
            { props.isAuth && <button>logout</button> }
            { !props.isAuth && <Navigate replace to="/login"/> }

        </div>
    )
}

export default Header