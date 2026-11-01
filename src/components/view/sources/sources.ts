import type { INewsSource } from '../../../types/index';
import './sources.css';

class Sources {
    public draw(data: INewsSource[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement | null;
        if (!sourceItemTemp) return;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const itemName = sourceClone.querySelector('.source__item-name');
            if (itemName) {
                itemName.textContent = item.name;
            }

            const itemElement = sourceClone.querySelector('.source__item');
            if (itemElement) {
                itemElement.setAttribute('data-source-id', item.id || '');
            }

            fragment.append(sourceClone);
        });

        const sourcesContainer = document.querySelector('.sources');
        if (sourcesContainer) {
            sourcesContainer.append(fragment);
        }
    }
}

export default Sources;
