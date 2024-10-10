import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { ActionsComponent } from "../../components/actions/actions.component";

@Component({
  selector: 'app-remesas',
  standalone: true,
  imports: [BannerComponent, ActionsComponent],
  templateUrl: './remesas.component.html',
  styleUrl: './remesas.component.scss',
  providers: []
})

export class RemesasComponent {

  constructor(){

  }

  ngOnInit(): void{
  }
}