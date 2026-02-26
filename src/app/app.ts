import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./nav/nav";

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { Dashboard } from "./Components/dashboard/dashboard";

const matImports = [
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule
];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, ...matImports, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None
})
export class App {
}
