import React from 'react';
import ReactDOMServer from 'react-dom/server';
import _uniqueId from 'lodash/uniqueId';
import _includes from 'lodash/includes';

import { Image, Text } from '../Components';
import Button from '../Components/Elements/Button';
import Video from '../Components/Elements/Video';
import { getParentSection } from './element';

const sectionDragMonitor = {};

export const getSection = (nodeId) => (
    nodeId.split('-')
        ? nodeId.split('-')[0]
        : ''
);

export const getSectionId = (nodeId = '') => {
    const section = getSection(nodeId);
    return section ? `${section}-section-wrapper` : '';
};

const resetMonitor = () => {
    Object.keys(sectionDragMonitor).forEach((key) => {
        sectionDragMonitor[key] = 0;
    });
};

export const getRelatedElement = (elementID) => {
    switch (elementID) {
        case "general-image":
        case "listing-image":
        case "rental-image":
        case "sales-image":
            return <Image />;
        case "general-text":
            return <Text />;
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
    localStorage.setItem('current_dragging_element', event.target.id);
    resetMonitor();
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
        // event.target.style.boxShadow = "1px 1px 3px green";
    }
};

export const onSectionEnter = (event) => {
    const draggingItemId = localStorage.getItem('current_dragging_element');
    const sectionId = getSectionId(draggingItemId);
    const draggingItem = document.getElementById(sectionId);
    const parentEl = getParentSection(event.path);
    if (!sectionDragMonitor[sectionId]) {
        sectionDragMonitor[sectionId] = 0;
    }
    if (!sectionDragMonitor[parentEl.id]) {
        sectionDragMonitor[parentEl.id] = 0;
    }

    if (parentEl === draggingItem) {
        sectionDragMonitor[sectionId]++;
        parentEl.style.boxShadow = "green 0px 0px 4px 1px";
    } else {
        sectionDragMonitor[parentEl.id]++;
        parentEl.style.boxShadow = "red 0px 0px 4px 1px";
    }
    event.preventDefault();
};

export const onDragLeave = (event) => {
    const draggingItemId = localStorage.getItem('current_dragging_element');
    const sectionId = getSectionId(draggingItemId);
    const draggingItem = document.getElementById(sectionId);
    const parentEl = getParentSection(event.path);
    if (parentEl === draggingItem) {
        sectionDragMonitor[sectionId]--;
        if (sectionDragMonitor[sectionId] === 0) {
            parentEl.style.boxShadow = "none";
        }
    } else if (parentEl) {
        sectionDragMonitor[parentEl.id]--;
        if (sectionDragMonitor[parentEl.id] === 0) {
            parentEl.style.boxShadow = "none";
        }
    }
};

// const handleDelete = (event, element) => {
//     event.target.removeChild(element)
// }

export const onDropContent = (event) => {
    const elementID = event.dataTransfer.getData("drag-element");
    const currentSectionId = getSectionId(elementID);
    const currentSectionElement = document.getElementById(currentSectionId);
    if (currentSectionId && currentSectionElement) {
        const parentEl = getParentSection(event.path);
        if (parentEl === currentSectionElement) {
            appendNode(currentSectionElement, elementID);
        }
        currentSectionElement.style.boxShadow = 'none';
        parentEl.style.boxShadow = 'none';
    }
};

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
    const section = getSection(elementID);
    if (element) {
        var div = document.createElement('div');
        div.id = _uniqueId(`${section}-node_`);
        div.draggable = true;
        div.innerHTML = ReactDOMServer.renderToString(element);
        div.ondragstart = onDragStart;
        div.ondragover = onDragOver;
        div.ondrop = onDropContent;
        // div.firstChild.firstChild.childNodes[0].onclick= () => handleEdit(event, div)
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
                // event.target.parentNode.contains(currentSectionElement);
                currentSectionElement.style.boxShadow = 'none';
                // appendNode(currentSectionElement, elementID);
                // appendNode(currentSectionElement, elementID, cb);
            } else {
                const sectionParent = document.createElement('div');
                sectionParent.id = currentSectionId;
                sectionParent.draggable = true;
                sectionParent.style.padding = '3px';
                sectionParent.style.margin = '3px';
                sectionParent.ondragstart = onDragStart;
                sectionParent.ondragover = onDragOver;
                sectionParent.ondragenter = onSectionEnter;
                sectionParent.ondragleave = onDragLeave;
                appendNode(sectionParent, elementID, cb);
                event.target.appendChild(sectionParent);
            }
        }
    }
};