import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  constructor() { }

  myProject = [
    {
      name: 'Project',
      value: 'p1',
      favorite: false
    },
    {
      name: 'Project DS',
      value: 'p2',
      favorite: false
    },
    {
      name: 'Project 1',
      value: 'p3',
      favorite: false
    },
    {
      name: 'Project 2',
      value: 'p4',
      favorite: false
    },
    {
      name: 'Project 3',
      value: 'p5',
      favorite: false
    },
    {
      name: 'eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      value: 'p6',
      favorite: false
    },
    {
      name: 'Many desktop publishing packages.',
      value: 'p7',
      favorite: false
    },
    {
      name: 'Project 4',
      value: 'p8',
      favorite: false
    },
    {
      name: 'Project 5',
      value: 'p9',
      favorite: false
    },
  ];
  recent = [
    {
      name: 'Test Project/ Job Type - Freelance',
      updated: 'Updated 1 hour ago'
    },
    {
      name: 'Test Project 1/ Job Type - Gig Worker ',
      updated: 'Updated 2 hour ago'
    },
    {
      name: 'Test Project 1/ Job Type - Freelance',
      updated: 'Updated 5 hour ago'
    },
    {
      name: 'Test Project 2/ Job Type - Gig Worker ',
      updated: 'Updated 18 hour ago'
    },
    {
      name: 'Test Project/ Job Type - Regular',
      updated: 'Updated 1 day ago'
    },
    {
      name: 'Test Project 3/ Job Type - Regular',
      updated: 'Updated 3 day ago'
    },
    {
      name: 'Test Project/ Job Type - Self Employed',
      updated: 'Updated 5 hour ago'
    },
    {
      name: 'Test Project 4/ Job Type - Irregular',
      updated: 'Updated 18 hour ago'
    }
  ]

  ngOnInit(): void {
  }

  createProject() {
    console.log('create project');
  }

  delete(item: any){
    console.log('delete: ' + item)
  }
  
  favoriteSelected(item: any){
    console.log('favorite: '+ item);
    item.favorite = !item.favorite;
  }

}
