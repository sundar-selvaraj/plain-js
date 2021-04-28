import _includes from 'lodash/includes';
import _forEach from 'lodash/forEach';

export const getParentSection = (path = []) => {
    let parent = null;
    if (path.length) {
        _forEach(path, node => {
            if (_includes(node.id, 'section-wrapper')) {
                parent = node;
                return false;
            }
        });
    }
    return parent;
};