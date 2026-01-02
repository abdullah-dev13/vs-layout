import { Component } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  imports: [],
  templateUrl: './left-sidebar.html',
  styleUrl: './left-sidebar.css',
})
export class LeftSidebar {
  startItems = [
    { icon: 'fa-file', label: 'New File...' },
    { icon: 'fa-folder-open', label: 'Open File...' },
    { icon: 'fa-folder', label: 'Open Folder...' },
    { icon: 'fa-code-branch', label: 'Clone Git Repository...' },
    { icon: 'fa-plug', label: 'Connect to...' }
  ];

  recentProjects = [
    { name: 'silence-ng', path: 'D:\\Dev_Projects' },
    { name: 'xpay', path: 'D:\\Other_Dev_Projects' }
  ];

  walkthroughs = [
    { icon: 'fa-book', title: 'Learn the Funda...' },
    { icon: 'fa-forward', title: 'Next St...', badge: 'Updated' },
    { icon: 'fa-rocket', title: 'Get Started with ...' }
  ];
}
