import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'boda';
  @ViewChild('audioPlayer') audioPlayer:any = ElementRef;
  isPlaying = false;
  imgesPortada:any = [
    'assets/img/portada2.jpg',
    'assets/img/portada4.jpg',
    'assets/img/portada.jpg',
    // 'assets/img/portada3.jpg',
    'assets/img/portada5.jpg',
    // 'assets/img/portada6.jpg',
  ];
  selectPortada: number = 0;
  imgesVerticalUno:any = [
    'assets/img/foto1a.jpg',
    'assets/img/foto1.jpg',
    'assets/img/foto1b.jpg',
  ];
  selectVerticalUno: number = 0;
  imgesVerticalDos:any = [
    'assets/img/foto2.jpg',
    'assets/img/foto2a.jpg',
    'assets/img/foto2b.jpg',
    'assets/img/foto2d.jpg',
    'assets/img/foto2e.jpg',
    'assets/img/foto2f.jpg',
  ];
  selectVerticalDos: number = 0;
  imgesVerticalTres:any = [
    'assets/img/foto3a.jpg',
    'assets/img/foto3.jpg',
    'assets/img/foto3b.jpg',
    'assets/img/foto3c.jpg',
    'assets/img/foto3d.jpg',
    'assets/img/foto3e.jpg',
    'assets/img/foto3f.jpg',
    'assets/img/foto3g.jpg',
    'assets/img/foto3h.jpg',
    'assets/img/foto3i.jpg',
  ];
  selectVerticalTres: number = 0;
  imgesLugar:any = [
    'assets/img-lugar/uno.jpg',
    'assets/img-lugar/dos.jpg',
    'assets/img-lugar/tres.jpg',
    'assets/img-lugar/cuatro.jpg',
  ];
  selectedImg:number = 0;
  constructor() { }
  ngOnInit():void {
    this.portadaAleatorio();
    this.perfilA();
    this.perfilB();
    this.perfilC();
    this.lugarAleatorio();
    // setTimeout(() => {
    // this.toggleMusic();
    // }, 7000);
  }
  toggleMusic() {
    const audio = this.audioPlayer.nativeElement;
    // console.log(audio);
    if (this.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }
  portadaAleatorio() {
    if (this.selectPortada <= (this.imgesPortada.length - 2)) {
      this.selectPortada = this.selectPortada + 1;
    } else {
      this.selectPortada = 0;
    }
    setTimeout(() => {
      this.portadaAleatorio();
    }, 5000);
  }
  perfilA() {
    if (this.selectVerticalUno <= (this.imgesVerticalUno.length - 2)) {
      this.selectVerticalUno = this.selectVerticalUno + 1;
    } else {
      this.selectVerticalUno = 0;
    }
    setTimeout(() => {
      this.perfilA();
    }, 8000);
  }
  perfilB() {
    if (this.selectVerticalDos <= (this.imgesVerticalDos.length - 2)) {
      this.selectVerticalDos = this.selectVerticalDos + 1;
    } else {
      this.selectVerticalDos = 0;
    }
    setTimeout(() => {
      this.perfilB();
    }, 8000);
  }
  perfilC() {
    if (this.selectVerticalTres <= (this.imgesVerticalTres.length - 2)) {
      this.selectVerticalTres = this.selectVerticalTres + 1;
    } else {
      this.selectVerticalTres = 0;
    }
    setTimeout(() => {
      this.perfilC();
    }, 8000);
  }
  lugarAleatorio() {
    if (this.selectedImg <= (this.imgesLugar.length - 2)) {
      this.selectedImg = this.selectedImg + 1;
    } else {
      this.selectedImg = 0;
    }
    setTimeout(() => {
      this.lugarAleatorio();
    }, 3000);
  }
}
