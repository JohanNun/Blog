import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Post {
  titulo: string;
  texto: string;
  autor: string;
  imagen: string;
  fecha: string;
  categoria: string;
  esconder: true;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrayDePost: Post[];


  constructor() {
    this.arrayDePost = [

      { titulo: "Album Review: Lords of Black - Alchemy of Souls", texto: "In May 2018, when we reviewed the previous Lords of Black album,  we were rather stunned by the impressive showing of this upstart renegade Chilean-Spaniard metal project. These days, vocalist Ronnie Romero is a bit more of a household name in the metal world, but when he was the fresh face of Ritchie Blackmore’s Rainbow, and exploded onto the scene, he really turned our heads at Sonic Perspectives, as well as the heads at Frontiers Records. While Ronnie is busy vying with the formidable Dino Jelusick for title of best new metal voice, the heavy lifting for the Lords of Black is being done by metal guitar mastermind Tony Hernando. Dani Criado returns with his solid bass guitar chops, and Andi Cobos has been replaced by Johan Nunez on the drums. While we will miss the creative drum fills provided by Andi on the previous record, let’s face it; Jo Nunez is an absolute beast on the newer Firewind albums, and is not wasted here. When all is said and done, how does “Alchemy” stack up to previous Lords of Black albums, and against progressive melodic metal at large? While it lacks a few cool tricks from the previous “Icons of the New Days” album, it also has some new techniques, keeping it fresh and relevant. As a whole, it’s every bit the equal with “Icons,” putting it comfortably into the top rankings of today’s metal scene. This one lands on November 6, and there are some cool pre-order packages at their website . Be sure to check it out.", autor: "John Kokel", imagen: "https://www.velvetthunder.co.uk/wp-content/uploads/2020/09/Lords-Of-Black_Alchemy-Of-Souls-Pt1-e1600214238149.jpg", fecha: '27-10-2020', categoria: "Music", esconder: true },

      {
        titulo: "Album Review: Firewind - Firewind", texto: "You won't get many surprises from a FIREWIND record. And why would you want them? Gus G has consistently demonstrated his mastery of melodic heavy metal, not to mention the art of guitar playing, and whichever of the band's multiple vocalists has been front and center, FIREWIND have been thoroughly consistent. A muscular, streamlined alternative to power metal's twinkly eyed pomp, their sound is all about the big melody, the bombastic chorus and the blazing solo. The difference between this band and the countless others that pursue a similar path, is that FIREWIND have never struggled for memorable songs. Sonically a touch warmer and grittier than 2017's Immortals, Firewind feels more organic and untamed than previous records, even during the sumptuous grandeur of opener Welcome To The Empire and the joyous AOR stomp of Overdrive: both gentle nods to a spirit of diversity that suit FIREWIND perfectly well, while still fitting neatly into this album's thunderous flow.Even the slightly goofy, glam- metal strut of Space Cowboy earns its place with a killer hook, while the closing Kill The Pain is a snotty, speed metal riot, with Langhans snarling like Udo in his prime. Proudly delivering the goods — very much as advertised but with the occasional, inspirational tweak — FIREWIND are back and on their best form since 2008's The Premonition. If you like explosive heavy metal with massive tunes, you know what to do.", autor: "Dom Lawson", imagen: "https://images-na.ssl-images-amazon.com/images/I/71seJgfEIAL._SL1200_.jpg", fecha: '20-05-2020', categoria: "Music", esconder: true
      },

      { titulo: "Album Review: Kamelot - The Shadow Theory ", texto: "Kamelot are no strangers to concept albums, but the idea behind their latest is ambitious even by their standards. In Jungian psychology, the shadow refers to the dark side of our unconsciousness and the quintet have expanded this into a full- blown theme that explores the complexity of the human mind. It sounds like the plot to some weird arthouse movie, and The Shadow Theory is so epic it could be a film soundtrack. Jam-packed with monstrous riffs, strings, choirs, stunning guest vocals from Beyond The Black’s Jennifer Haben and gut-wrenching growls from Once Human’s Lauren Hart, it captures the perfect balance between darkness and light. Singer Tommy Karevik is more expressive than ever, and even seems to be channelling the theatrical airs of his fellow Ayreon collaborator Damian Wilson (ex-Threshold). The Shadow Theory isn’t just big, it’s clever, too", autor: "Natasha Scharf", imagen: "https://images-na.ssl-images-amazon.com/images/I/816Si7%2B-duL._SL1200_.jpg", fecha: "20-06-2018", categoria: "Music", esconder: true },

      { titulo: "El abc del desarrollador Full Stack", texto: "Una de las inquietudes más recurrentes que me plantean los futuros programadores antes de embarcarse en la aventura que supone la realización de un bootcamp de programación, es dónde pueden encontrar contenido que les permita tener una pequeña preparación previa de cara al reto que tienen en el horizonte. Habitualmente se les recomienda las típicas páginas básicas por las que todo programador ha pasado y que ofrecen explicaciones claras sobre principios básicos y ejercicios sencillos para empezar a calentar de cara al curso.   Creo que la práctica previa y el tomar contacto con el ordenador antes de “convertirte en programador” es necesario y completar con éxito estos pequeños “entrenamientos” te ayudan a mejorar, pero contando con que eso es prácticamente necesario, creo que conocer el entorno que rodea al programador Full Stack, y muchas veces conocer su jerga, te hace sentir mucha más empatía hacia el resto de profesionales y de alguna manera te permite empezar a dominar conceptos que se van a volver muy importantes en tu carrera profesional.  Vamos a hacer un resumen de alguno de ellos: Full Stack  El punto de partida es establecer qué debemos considerar cuando nos presentamos como desarrolladores Full Stack. Quizá el concepto en sí es demasiado ambicioso, ya que plantea un perfil de desarrollador con conocimientos suficientes para poder afrontar cualquiera de las etapas en las que vamos a poder dividir un proyecto web.  Aparte de ser conocedor del lenguaje de desarrollo utilizado y de las herramientas que conforman los proyectos, el desarrollador Full Stack debe ser capaz de analizar las necesidades y así poder diseñar diferentes soluciones que mejoren el producto final.Para alcanzar la excelencia dentro de este perfil no solo hay que programar bien, sino, que necesitamos años de experiencia afrontando y resolviendo cualquiera de los problemas que puedan aparecer en el desarrollo de cualquier proyecto IT. Front-end frente Back-end Estos dos conceptos están estrechamente relacionados con la definición anterior. Conforman la mayor parte de la estructura de cualquier proyecto web y por tanto es recomendable que el desarrollador Full Stack conozca cada uno de sus detalles. ¿Qué es el Front-end? Cuando hablamos del Front-end de un proyecto web estamos haciendo referencia a todos los aspectos visibles que conforman el desarrollo. Es el conjunto de aplicaciones que desarrollamos para que el usuario pueda tener una interacción directa con ellas.El mundo de la programación está repleto de conceptos como los que hemos detallado en este post. Los cambios son tan numerosos y continuos que nos obligan a mantenernos al día sobre cualquier tecnología existente para poder tener la capacidad de valorar si debería formar parte de nuestro día a día, o al contrario no puede aportar nada a nuestra carrera profesional. No es cuestión de ser expertos en todo si no de conocer todo lo que nos rodea para conseguir especializarnos en lo que necesitemos.", autor: "Mario Girón", imagen: "https://pbs.twimg.com/profile_images/1113760589371854848/FlDgm5Sy_400x400.png", fecha: "29-10-2020", categoria: "Programing", esconder: true },

      { titulo: "Aaaaaah", texto: "3 putos penaltis, me cago en la puta...", autor: "Johan Nuñez", imagen: "https://pbs.twimg.com/media/EmVUu24XUAcocPP.jpg", fecha: "08-11-2020", categoria: "Sports", esconder: true }

    ];
  }

  agregarPost(pPost: Post) {
    if (localStorage.getItem('losPosts') === null) {
      this.arrayDePost.unshift(pPost);
      localStorage.setItem('losPosts', JSON.stringify(this.arrayDePost));
    } else {
      this.arrayDePost = JSON.parse(localStorage.getItem('losPosts'));
      this.arrayDePost.unshift(pPost);
      localStorage.setItem('losPosts', JSON.stringify(this.arrayDePost))
    }

  }


  deletePost(pPost: any) {
    if (localStorage.getItem('losPosts') === null) {
      this.arrayDePost.splice(pPost, 1);
    } else {
      this.arrayDePost = JSON.parse(localStorage.getItem('losPosts'));
      this.arrayDePost.splice(pPost, 1);
      /* localStorage.setItem('losPosts', JSON.stringify(this.arrayDePost)) */
    }
  }


  getAllPost(): Promise<Post[]> {
    if (localStorage.getItem('losPosts') === null) {
      return Promise.resolve(this.arrayDePost);
    } else {
      this.arrayDePost = JSON.parse(localStorage.getItem('losPosts'));
      return Promise.resolve(this.arrayDePost);
    }

  }


  getCategorias(): Promise<string[]> {

    return Promise.resolve([... new Set(this.arrayDePost.map(post => post.categoria))]);

  }


  getPostByCategory(pCat: string): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      let arrFiltrado = [];
      for (let cate of this.arrayDePost) {
        if (cate.categoria == pCat) {
          arrFiltrado.push(cate)
        }
      }
      resolve(arrFiltrado);
    })
  }


}
