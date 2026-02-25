import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  imports: [MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  companys = [
    { name: 'Barberia El Estilo', location: 'Montevideo', description: 'Barberia de calidad con servicios premium.', rating: 4.5, img: 'https://tse2.mm.bing.net/th/id/OIP.pRAkPVoy6UAse_44qlc70AHaE8?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'Dentista Dr. García', location: 'Maldonado', description: 'Clínica dental con atención personalizada.', rating: 4.8, img: '' },
    { name: 'Gimnasio Fitness', location: 'Lavalleja', description: 'Gimnasio con equipos modernos y entrenadores certificados.', rating: 4.2, img: 'https://tse2.mm.bing.net/th/id/OIP.pRAkPVoy6UAse_44qlc70AHaE8?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
  ]
}
