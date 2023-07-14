import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { servicesDownloadRequest } from '../store/actions/actionCreators';
import Item from './Item';

function ListServices() {
    const {items, loading, error} = useSelector(state => state.services);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(servicesDownloadRequest(''));
    }, []);

    const handleRetry = (e) => {
        dispatch(servicesDownloadRequest(''));
    }

    return (
        <>
            {loading && <progress />}
            {!loading && !error &&
                <ul className="list">
                    {items.map((o) => 
                        <Item key={o.id} obj={o} dispatch={dispatch} />
                    )}
                </ul>
            }
            {error &&
            <div className="error">
                <span className="error-text">Произошла ошибка</span>
                <button type="button" className="button-retry" onClick={handleRetry}>Повторить запрос</button>
            </div>
            }
        </>
    );
}

export default ListServices;