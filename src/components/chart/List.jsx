import TrackItem from './TrackItem';

function List(props) {
    return (
        <>
            <div className="list">
                {props.itemList.map(el => (
                    <TrackItem key={el.id} {...el} {...props}/>
                ))}
            </div>
        </>
    )
}

export default List;