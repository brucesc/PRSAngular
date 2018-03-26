export class Menu {
    display: string;
    href: string;
    tooltip: string;
    visible: boolean;

    constructor(display: string, href: string, tooltip: string, visible: boolean = true) {
        this.display = display;
        this.href = href;
        this.tooltip = tooltip;
        this.visible = visible;
    }
}
