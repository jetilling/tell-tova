//--------Angular Imports---------//
import { Component } from '@angular/core';
import { Router } from '@angular/router';

//--------Other Imports----------//
import { AlertService, AuthService} from '../services/index';
import { DashboardService }         from '../services/dashboard.service';
import { IStyles }                   from '../interfaces';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent 
{
  boldDecorator: string;
  sizeRegex: any = /(@Size\(.+\))+/g;
  fontRegex: any = /(@Font\(.+\))+/g;
  paragraph: any = /(@P)/g;
  cleanse: any = /(<script>)/g;
  newPost: string;
  title: string;
  bodyStyles: IStyles = {
    'font-size': '20px',
    'font-family': 'Cutive Mono'
  }
  titleStyles: IStyles = {
    'font-size': '35px',
    'font-family': 'Cutive Mono'
  }


  constructor(
      private router: Router,
      private auth: AuthService,
      private alertService: AlertService,
      private dashboardService: DashboardService) { }

  /**
  * Funtion that checks for @Size() and @Font() in post and changes styles accordingly
  * @param {string} text - content of title or post
  * @param {boolean} body - trigger that states whether text is from the title or the body
  */
  editStyles(text: string, body: boolean) 
  {
    let resultString: string;
    let finalString: string;

    if (this.sizeRegex.test(text))
    {
      resultString = text.match(this.sizeRegex)[0].slice(6)
      finalString = resultString.slice(0, resultString.length-1)
      if (+finalString > 14 && +finalString < 31) 
      {
        if (body) 
        {
          this.newPost = text.replace(this.sizeRegex, "")
          this.bodyStyles['font-size'] = finalString + 'px';
        }
        else 
        {
          this.title = text.replace(this.sizeRegex, "")
          this.titleStyles['font-size'] = finalString + 'px';
        }
      }
    }
    else if (this.fontRegex.test(text))
    {
      resultString = text.match(this.fontRegex)[0].slice(6)
      finalString = resultString.slice(0, resultString.length-1)
      if (body) 
      {
        this.newPost = text.replace(this.fontRegex, "")
        this.bodyStyles['font-family'] = finalString
      }
      else 
      {
        this.title = text.replace(this.fontRegex, "")
        this.titleStyles['font-family'] = finalString
      }
    }
    else if (this.cleanse.test(text))
    {
      finalString = text.match(this.cleanse)[0]
      console.log(resultString)
      this.newPost = text.replace(this.cleanse, "")
    }
  }


  /**
  * Logs user out
  */
  logout() 
  {
    let loggedOut = this.dashboardService.logout()
    if (loggedOut) this.router.navigate(['/login'])
  }

  /**
  * publishes post
  * @param {string} title - title of post
  * @param {string} body - body of post
  */
  publish(title: string, body: string)
  {
    const id: string = localStorage.getItem('id')
    function escapeHtml(str: string) {
      var div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    }
    
    let safeTitle = escapeHtml(title)
    let safeBody = escapeHtml(body)
    this.dashboardService.publishNewPost(title, body, id, this.titleStyles, this.bodyStyles)
  }

}
