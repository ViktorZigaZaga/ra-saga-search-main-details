import React, { useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { servicesDownloadRequest,servicesInitState } from '../store/actions/actionCreators'

function ServiceDetails () {
    const { id } = useParams();
    const dispatch = useDispatch();
    const {items, loading, error} = useSelector(state => state.services);
  
    useEffect(() => {
      dispatch(servicesDownloadRequest(`${id}`));
    }, []);
  
    const handleRetry = (e) =>  {
        dispatch(servicesDownloadRequest(`${id}`));
    }

    const handleInit = (e) =>  {
        dispatch(servicesInitState());
    }
  
    return(
        <>
            {loading && <progress />}
            {!loading && !error ?
                <div className="box_item">
                    <span className="item_name">Наименование услуги: {items.name}</span>
                    <span className="item_price">Стоимость услуги: {items.price}</span>
                    <span className="item_content">Подробно: {items.content}</span>
                </div>
            : undefined}
            {error ?
                <div className="error">
                    <span className="error-text">Произошла ошибка</span>
                    <button type="button" className="button-retry" onClick={handleRetry}>Повторить запрос</button>
                </div>
            : undefined}
            <Link className="link" to="/" onClick={handleInit} >На главную</Link>
        </>
    );
}

export default ServiceDetails