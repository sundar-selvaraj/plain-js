import React from 'react';

const defaultProps = {
    padding: ['0', '0', '0', '0'],
    margin: ['10', '10', '10', '10'],
    color: { r: 0, g: 0, b: 0, a: 1 },
    fontSize: 32,
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
        <div className="node-content">
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
        </div>
    );
}

export default Text;
