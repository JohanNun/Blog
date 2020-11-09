import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '../post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  todosLosPosts: Post[];
  lasCategorias: string[];

  constructor(private postService: PostService) { }

  async ngOnInit() {

    await this.postService.getCategorias()
      .then(response => {
        this.lasCategorias = response
      })
      .catch(error => console.log(error)
      )


    await this.postService.getAllPost()
      .then(response => this.todosLosPosts = response)
      .catch(error => console.log(error)
      )


  }


  async filtrarCategorias($event) {
    const all = await this.postService.getAllPost();
    const arrFiltrado = await this.postService.getPostByCategory($event.target.value)

    if ($event.target.value === 'all') {
      return this.todosLosPosts = all;
    } else {
      return this.todosLosPosts = arrFiltrado;
    }

  }


}
