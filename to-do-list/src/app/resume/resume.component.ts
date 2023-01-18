import { AnimationOptions } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  name = 'Anton';
  phone = '3809801971**';
  email = 'Loshatetsky1234@gmail.com';
  sity = 'Khmelnitskyi';
  experience_year = ['1','2-3','3-5','5-7','7 і більше'];
  experience_work = ['менеджер', 'водій', 'керівник', 'диспетчер', 'бугалтер'];
  skills = ['наявність прав', 'володіння Англійською', 'креативність', 'уміння працювати в команді'];
  
}
