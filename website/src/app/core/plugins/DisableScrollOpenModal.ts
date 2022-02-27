import {ScrollbarPlugin} from 'smooth-scrollbar';

export class DisableScrollWhenModalOpenPlugin extends ScrollbarPlugin {
    static pluginName = 'disableScrollWhenModal';

    static defaultOptions = {
        checkClass: 'dialog-open',
    };

    transformDelta(delta) {
        if (document.body.classList.contains(this.options.checkClass)) {
            return {
                x: 0,
                y: 0,
            };
        }

        return {...delta};
    }
}
