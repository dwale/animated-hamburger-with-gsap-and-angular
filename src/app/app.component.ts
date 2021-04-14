import { Component } from '@angular/core';
import { TimelineMax } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   menu = new TimelineMax({paused:true, reversed:true});

  ngOnInit(){
    this.createMenuAnim()
  }

  createMenuAnim(){
    this.menu.to("#topLine", .5, {rotation:'30', ease:"Expo.easeInOut"},0)
    this.menu.to("#midLine", .5, {opacity:'0', ease:"Expo.easeInOut"},0)
    this.menu.to("#botLine", .5, {rotation:'-30', ease:"Expo.easeInOut"},0)
  }
  
  menuClick() {
    this.menu.reversed() ? this.menu.play() : this.menu.reverse();	
    return console.log('clicked');
   }
}