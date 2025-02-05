import React from 'react';
import { SubscriptionChart } from './Charts';

const Subscription = () => {
    return (
        <React.Fragment>
            <div className="col-span-12 lg:col-span-6 order-[14] 2xl:order-1 card 2xl:col-span-3">
                <div className="card-body">
                    <h6 className="mb-3 text-15">Subscription Distribution</h6>
                    <SubscriptionChart chartId="subscriptionDistribution" />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Subscription;
