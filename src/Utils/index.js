import React from 'react';
import ReactDOMServer from 'react-dom/server';
import _uniqueId from 'lodash/uniqueId';
import _includes from 'lodash/includes';

import { Image, Text } from '../Components';
import Button from '../Components/Elements/Button';
import Video from '../Components/Elements/Video';

export const getRelatedElement = (elementID) => {
    switch (elementID) {
        case "drag-image":
            return <Image />;
        case "drag-text":
            return <Text text="sample" />;
        case "drag-heading":
            return <Text text="sample" fontSize={32} />;
        case "drag-button":
            return <Button text="sample" />
        case "drag-video":
            return <Video/>
        default:
            return null;
    };
};

export const onDragStart = (event) => {
    event.dataTransfer.setData("drag-element", event.target.id);
};

export const onDragOver = (event) => {
    event.preventDefault();
};

export const onDragOverTarget = (event) => {
    if (!event.target.classList.contains('target-container')) {
        return false;
    }
    event.preventDefault();
};

export const onDragEnter = (event) => {
    if (!event.target.classList.contains('node-content')) {
        event.target.style.boxShadow = "1px 1px 3px green";
    }
};

export const onDragLeave = (event) => {
    event.target.style.boxShadow = "none";
};

export const onDrop = (event) => {
    event.preventDefault();
    const elementID = event.dataTransfer.getData("drag-element");
    event.target.style.boxShadow = "none";
    if (!event.target.classList.contains('node-content')) {
        if (_includes(elementID, 'node_')) {
            const element = document.getElementById(elementID);
            if (element) {
                event.target.appendChild(element);
            }
        } else {
            const element = getRelatedElement(elementID);
            if (element) {
                var div = document.createElement('div');
                div.id = _uniqueId('node_');
                div.draggable = true;
                div.innerHTML = ReactDOMServer.renderToString(element);
                div.ondragstart = onDragStart;
                div.ondragover = onDragOver;
                event.target.appendChild(div);
            }
        }
    }
};