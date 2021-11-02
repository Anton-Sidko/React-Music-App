import React, {useState, useEffect} from 'react';

import {getTopTracks} from '../../../services/api';
import Spinner from '../../spinner/Spinner';
import ChartItem from '../../../components/chart/ChartItem';

import './Chart.sass';

function Chart() {
    const [topTrack, setTopTrack] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTopTracks().then(data => {
            if (data.tracks) {
                setTopTrack(data.tracks);
            }
            setLoading(false);
        })
    }, [])

    return (
        <>
        {loading ? <Spinner /> : (
            topTrack.length > 0 ? (
                <div className="chart-list">
                    {topTrack.map(el => (
                        <ChartItem key={el.id} {...el} />
                    ))}
                </div>
            ) : (
                <h2>Something wrong. Data was not loaded</h2>
            )
        )}
        </>
    )
}

export default Chart;