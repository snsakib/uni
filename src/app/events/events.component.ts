import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  @ViewChild('upcomingBtn') upcomingBtn: ElementRef;
  @ViewChild('ongoingBtn') ongoingBtn: ElementRef;
  upcomingEvents = true;

  showUpcomingEvents() {
    this.upcomingEvents = true;
    this.renderer.removeClass(this.upcomingBtn.nativeElement, 'btn-light');
    this.renderer.addClass(this.upcomingBtn.nativeElement, 'btn-dark');
    this.renderer.removeClass(this.ongoingBtn.nativeElement, 'btn-dark');
    this.renderer.addClass(this.ongoingBtn.nativeElement, 'btn-light');
  }
  showOngoingEvents() {
    this.upcomingEvents = false;
    this.renderer.removeClass(this.ongoingBtn.nativeElement, 'btn-light');
    this.renderer.addClass(this.ongoingBtn.nativeElement, 'btn-dark');
    this.renderer.removeClass(this.upcomingBtn.nativeElement, 'btn-dark');
    this.renderer.addClass(this.upcomingBtn.nativeElement, 'btn-light');
  }
  constructor(private renderer: Renderer2) {}

  ngOnInit() {}
}
