import React from 'react';

export const Headline = ({match}) => {
    console.log(match);
    const sourceKey = match.params.sourceKey;
    return (
        <div>
            {match.params.sourceKey}
        </div>
    );
};