import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DashboardService }  from '../../dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../hero';
@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {

  @Input() data: Hero;
  public show = true;
  private userName: string;
  @Input() userupdate;
  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
  ) { }

  
  
 
  ngOnInit() {
    this.getHero();
  }
  
  update(user){
    this.show = false;
    this.userName = user.name;
    this.userupdate = user;
  }
  
  saveUpdate(user){

    let dataPost = {
      "data": [{
      "name": user.name,
      "surname": user.surname,
      "developer": user.developer
      }]
      };
    
   this.dashboardService.updateHero(this.userName, dataPost )
      .subscribe(hero => {
        this.show = true;
        this.getHero();   
      });
    
  }


  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dashboardService.getHero(id)
      .subscribe((hero) => this.data = hero);
  }
  
  search(term){
    this.dashboardService.searchHeroes(term)
      .subscribe((hero) => this.data = hero);
  }

  add(name: string, surname: string, developer: string): void {
    name = name.trim();
    surname = surname.trim();
    developer = developer.trim();
    let dataPost = {
      "data": [{
      "name": name,
      "surname": surname,
      "developer": developer
      }]
      };
    
    if (!name) { return; }
    this.dashboardService.addHero( dataPost )
      .subscribe(hero => {
        this.getHero();       
      });
   
  }

  delete(hero: Hero): void {
    this.dashboardService.deleteHero(hero).subscribe(hero => {
      this.getHero();       
    });
    
  }

}
