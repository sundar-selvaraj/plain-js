import React from 'react';
import ReactDOMServer from 'react-dom/server';
import _uniqueId from 'lodash/uniqueId';
import _includes from 'lodash/includes';

import { Image, Text } from '../Components';
import Button from '../Components/Elements/Button';
import Video from '../Components/Elements/Video';

export const getSectionId = (nodeId = '') => {
    const section = nodeId.split('-')
        ? nodeId.split('-')[0]
        : '';
    return section ? `${section}-section-wrapper` : '';
};

export const getRelatedElement = (elementID) => {
    switch (elementID) {
        case "general-image":
        case "listing-image":
        case "rental-image":
        case "sales-image":
            return <Image />;
        case "general-text":
            return <Text text="sample" />;
        case "general-heading":
        case "listing-heading":
        case "rental-heading":
        case "sales-heading":
            return <Text text="sample" fontSize={32} />;
        case "general-button":
            return <Button text="sample" />
        case "general-video":
        case "listing-video":
        case "rental-video":
        case "sales-video":
            return <Video />
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

// const handleDelete = (event, element) => {
//     event.target.removeChild(element)
// }

const handleEdit = (elementID, element, cb) => {
    let data = {
        selectedItemId: elementID,
        showEditSection: true,
        targetStyle: element.firstChild.style
    }
    cb(data)
}

export const appendNode = (target, elementID, cb) => {
    const element = getRelatedElement(elementID);
    if (element) {
        var div = document.createElement('div');
        div.id = _uniqueId('node_');
        div.draggable = true;
        div.innerHTML = ReactDOMServer.renderToString(element);
        div.ondragstart = onDragStart;
        div.ondragover = onDragOver;
        div.firstChild.firstChild.childNodes[0].onclick = () => handleEdit(elementID, div, cb)
        // div.firstChild.firstChild.childNodes[1].onclick= () => handleCopy(event, div)
        // div.firstChild.firstChild.childNodes[2].onclick= () => handleDelete(event, div)
        target.appendChild(div);
    }
};

export const onDrop = (event, cb) => {
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
            const currentSectionId = getSectionId(elementID);
            const currentSectionElement = document.getElementById(currentSectionId);
            if (currentSectionId && currentSectionElement) {
                appendNode(currentSectionElement, elementID, cb);
            } else {
                const sectionParent = document.createElement('div');
                sectionParent.id = currentSectionId;
                sectionParent.draggable = true;
                // sectionParent.innerHTML = ReactDOMServer.renderToString(element);
                sectionParent.ondragstart = onDragStart;
                sectionParent.ondragover = onDragOver;
                appendNode(sectionParent, elementID, cb);
                event.target.appendChild(sectionParent);
            }
        }
    }
};