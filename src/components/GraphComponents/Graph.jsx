import React from "react";

import BarTextContent from "./BarTextContent";
import Line from "./Line";
import Bar from "./Bar";

const Graph = ({ song }) => {

    const renderLines = () => {
        return Array(10).fill(null).map((item, idx) => <Line key={idx} left={idx * 10} />)
    }

    return (
        <div className="graph-wrapper">

            <div className="graph">
                <BarTextContent />
                
                <div className="bar-lines-container">
                    { renderLines() }
                    <Bar percent={song.danceability * 100} />
                    <Bar percent={song.energy * 100} />
                    <Bar percent={song.instrumentalness * 100} />
                    <Bar percent={song.acousticness * 100} />
                    <Bar percent={song.liveness * 100} />
                    <Bar percent={song.speechiness * 100} />
                </div>
            </div>

        </div>
    );
};

export default Graph;