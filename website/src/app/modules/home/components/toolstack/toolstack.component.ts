import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {SwiperComponent} from 'swiper/angular';
// import Swiper core and required modules
import SwiperCore, {Swiper, Virtual} from 'swiper';

// install Swiper modules
SwiperCore.use([Virtual]);

@Component({
    selector: 'aconio-toolstack',
    templateUrl: './toolstack.component.html',
    styleUrls: ['./toolstack.component.css']
})
export class ToolstackComponent implements AfterViewInit {
    @ViewChild('swiper', {static: false}) swiper?: SwiperComponent;
    swiperConfig = {};
    activeSlideIndex = 0;

    constructor() {
    }

    ngAfterViewInit(): void {
    }

    updateIndex(event): void {
        const [swiper] = event;
        this.activeSlideIndex = swiper.activeIndex;
    }

    slideNext(): void {
        this.swiper.swiperRef.slideNext(500);
    }

    slidePrev(): void {
        this.swiper.swiperRef.slidePrev(500);
    }

    slideTo(idx: number): void {
        this.swiper.swiperRef.slideTo(idx, 500);
    }
}
