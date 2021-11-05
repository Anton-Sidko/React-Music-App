import ArtistItem from './ArtistItem';

import './ArtistList.sass';

function ArtistList(props) {
    return (
        <>
            <div className="artists-list">
                {props.itemList.map(el => (
                    <ArtistItem key={el.id} {...el} {...props}/>
                ))}
            </div>
        </>
    )
}

export default ArtistList;