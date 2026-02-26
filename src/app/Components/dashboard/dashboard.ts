import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Search } from './search/search';
import { TwoImage } from './two-image/two-image';

@Component({
  selector: 'app-dashboard',
  imports: [MatInputModule, MatButtonModule, MatIconModule, Search, TwoImage],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
