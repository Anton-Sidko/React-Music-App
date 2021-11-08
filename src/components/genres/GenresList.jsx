import GenreItem from './GenreItem';

function GenresList(props) {
    return (
        <>
            <div className="genres-list">
                {props.itemList.map(el => (
                    <GenreItem key={el.id} {...el} {...props}/>
                ))}
            </div>
        </>
    )
}

export default GenresList;