import React from 'react';

import Wrapper from './Wrapper';

const defaultProps = {
    padding: ['0', '0', '0', '0'],
    margin: ['10', '10', '10', '10'],
    color: { r: 0, g: 0, b: 0, a: 1 },
    fontSize: 16,
    bold: 600,
};

const Text = (props) => {
    const mainProps = {
        ...defaultProps,
        ...props,
    };
    const {
        text,
        fontSize,
        bold,
        margin
    } = mainProps;
    return (
        <Wrapper>
            <p
                style={{
                    fontSize,
                    bold,
                    textTransform: 'capitalize',
                    margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`
                }}
                className="node-content"
            >
                {text}
            </p>
        </Wrapper>
    );
}

export default Text;
