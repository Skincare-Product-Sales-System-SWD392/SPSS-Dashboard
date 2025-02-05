import React from 'react';
import { AudienceChart } from './Charts';

const Audience = () => {
    return (
        <React.Fragment>
            <div className="col-span-12 card lg:col-span-6 2xl:col-span-3">
                <div className="card-body">
                    <h6 className="relative mb-3 grow text-15">Audience</h6>
                    <AudienceChart chartId="audienceChart" />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Audience;
