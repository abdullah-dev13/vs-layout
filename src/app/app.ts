import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftSmallSidebar } from './left-small-sidebar/left-small-sidebar';
import { LeftSidebar } from './left-sidebar/left-sidebar';
import { MainComponent } from './main-component/main-component';
import { RightSidebar } from './right-sidebar/right-sidebar';

@Component({
  selector: 'app-root',
  imports: [LeftSmallSidebar, LeftSidebar, MainComponent, RightSidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('vs-layout');
}
