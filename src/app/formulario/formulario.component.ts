import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post, PostService } from '../post.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  arrPost: Post[];
  alerta: boolean;

  constructor(private postService: PostService) {

    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required
      ]),
      texto: new FormControl('', [
        Validators.required
      ]),
      autor: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl(''),
      fecha: new FormControl('', [
        Validators.required
      ]),
      categoria: new FormControl('', [
        Validators.required
      ]),
      esconder: new FormControl('true')

    })

    this.alerta = false;
  }

  ngOnInit(): void {
  }


  onSubmit() {
    this.postService.agregarPost(this.formulario.value);
    this.alerta = !this.alerta;
    this.formulario.reset();

  }

}

