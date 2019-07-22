import React from 'react';

export const CHIP_STATES = {
    1: 'Pending',
    2: 'Approved',
    3: 'Denied',
};

const Chip = ({ state = 1 }) => {
    const chipState = CHIP_STATES[state] || CHIP_STATES[1];
    return (
        <span className={`chip chip-${chipState.toLowerCase()}`}>
            {chipState}
        </span>
    );
};

export default Chip;
