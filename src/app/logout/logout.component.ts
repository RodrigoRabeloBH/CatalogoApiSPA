import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private produto: ProductService) { }
  get() {
    this.produto.get().subscribe(res => {
      console.log(res);
    });
  }
  ngOnInit() {
  }

}
