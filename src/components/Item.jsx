import { Link } from "react-router-dom";
import { servicesInitState } from '../store/actions/actionCreators';

function Item({obj, dispatch}) {

    const handleInit = (e) => {
        dispatch(servicesInitState());
    }

    return(
        <li className="item">
            <Link className="link" to={`/${obj.id}/details`} onClick={handleInit}>
                <span className="name">{obj.name}</span>
                <span className="price">{obj.price}</span>
            </Link>
        </li>
    );
}

export default Item;