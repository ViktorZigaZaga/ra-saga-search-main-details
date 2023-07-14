import Search from './Search';
import ListServices from './ListServices';

function HomePage() {
    return (
        <>
            <div className='headerTask'>Поиск</div>
            <Search />
            <div className='headerTask'>Список и подробности</div>
            <ListServices />
        </>
  );
}

export default HomePage