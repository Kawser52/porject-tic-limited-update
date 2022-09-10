import Flicking from '@egjs/react-flicking';
import React from 'react';

const Flickings = () => {
    return (
        <div>
            <Flicking moveType="freeScroll" bound={true}>
            <span className="button mr-2 is-white">🍎 Apple</span>
            </Flicking>;
        </div>
    );
};

export default Flickings;
