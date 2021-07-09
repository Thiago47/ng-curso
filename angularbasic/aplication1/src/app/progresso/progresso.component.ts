import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {
  //@input - é uma função decoradora
  @Input() public progresso: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
