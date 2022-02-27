import { Component } from "@angular/core";
import { SvgIconRegistryService } from "angular-svg-icon";
import { ICONS } from "./core/utils/icons";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Aconio';

    constructor(private iconReg: SvgIconRegistryService) {
        ICONS.forEach((icon) => {
            console.log(icon);
            this.iconReg.addSvg(icon.name, icon.data);
        });
    }
}
