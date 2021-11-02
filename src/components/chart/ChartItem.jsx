import {Link} from 'react-router-dom';

import './ChartItem.sass';

function ChartItem(props) {
    const {
        name,
        artistName,
        albumName,
        albumId
    } = props;

    return (
        <div className="chart-item">
            <div className="album-img">
                <img src={`http://direct.rhapsody.com/imageserver/v2/albums/${albumId}/images/150x150.jpg`} alt={albumName} />
            </div>

            <div className="track-info-wrap">
                <div className="track-info">
                    <p>{name}</p>
                    <p>{artistName}</p>
                </div>
                <div className="track-action">
                    <Link
                        to={{
                            pathname: `/player/${name}`,
                            propsPlayer: props
                        }}
                    >
                        Play
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ChartItem;

