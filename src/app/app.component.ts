import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'boda';
  @ViewChild('audioPlayer') audioPlayer:any = ElementRef;
  isPlaying = false;
  imgesPortada:any = [
    'assets/img/portada2.jpg',
    'assets/img/portada8.jpg',
    'assets/img/portada9.jpg',
    // 'assets/img/portada10.jpg',
    // 'assets/img/portada11.jpg',
    'assets/img/portada12.jpg',
    // 'assets/img/portada13.jpg',
    'assets/img/portada14.jpg',
    // 'assets/img/portada15.jpg',
    'assets/img/portada4.jpg',
    'assets/img/portada.jpg',
    // 'assets/img/portada3.jpg',
    'assets/img/portada5.jpg',
    // 'assets/img/portada6.jpg',
  ];
  selectPortada: number = 0;
  imgesVerticalUno:any = [
    // 'assets/img/foto1a.jpg',
    'assets/img/foto1.jpg',
    'assets/img/foto1b.jpg',
    'assets/img/foto1c.jpg',
    'assets/img/foto1d.jpg',
    'assets/img/foto1e.jpg',
  ];
  selectVerticalUno: number = 0;
  imgesVerticalDos:any = [
    'assets/img/foto2.jpg',
    'assets/img/foto2a.jpg',
    'assets/img/foto2b.jpg',
    'assets/img/foto2d.jpg',
    // 'assets/img/foto2e.jpg',
    'assets/img/foto2f.jpg',
  ];
  selectVerticalDos: number = 0;
  imgesVerticalTres:any = [
    'assets/img/foto3.jpg',
    'assets/img/foto3a.jpg',
    'assets/img/foto3c.jpg',
    // 'assets/img/foto3e.jpg',
    'assets/img/foto3f.jpg',
    'assets/img/foto3d.jpg',
    'assets/img/foto3b.jpg',
    'assets/img/foto3g.jpg',
    // 'assets/img/foto3h.jpg',
    // 'assets/img/foto3i.jpg',
    'assets/img/foto3j.jpg',
    // 'assets/img/foto3k.jpg',
    // 'assets/img/foto3m.jpg',
    // 'assets/img/foto3n.jpg',
    // 'assets/img/foto3o.jpg',
    'assets/img/foto3r.jpg',
    'assets/img/foto3p.jpg',
    // 'assets/img/foto3q.jpg',
  ];
  selectVerticalTres: number = 0;
  imgesLugar:any = [
    'assets/img-lugar/uno.jpg',
    'assets/img-lugar/dos.jpg',
    'assets/img-lugar/tres.jpg',
    // 'assets/img-lugar/cuatro.jpg',
  ];
  selectedImg:number = 0;

  constructor() {
  }
  ngAfterViewInit() {
    this.audioPlayer.nativeElement.addEventListener('play', (a:any) => { // solo para sabes si esta en play
      console.log(a)
      this.isPlaying = true;
    });

    this.audioPlayer.nativeElement.addEventListener('ended', (a:any) => { // solo para sabes si finalizo el audio y volverlo a reproducir
      console.log(a)
      // this.isPlaying = false;
      const audioElement = this.audioPlayer.nativeElement;
      audioElement.currentTime = 0; // Volvemos al principio del audio
      audioElement.play(); // Reproducimos el audio nuevamente
    });
  }
  ngOnInit():void {
    this.portadaAleatorio();
    // this.perfilA();
    // this.perfilB();
    // this.perfilC();
    this.lugarAleatorio();
    // setTimeout(() => {
    //     this.toggleMusic();
    // }, 1000);
  }
  toggleMusic() {
    const audio = this.audioPlayer.nativeElement;
    audio.pause();
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
  // perfilA() {
  //   if (this.selectVerticalUno <= (this.imgesVerticalUno.length - 2)) {
  //     this.selectVerticalUno = this.selectVerticalUno + 1;
  //   } else {
  //     this.selectVerticalUno = 0;
  //   }
  //   setTimeout(() => {
  //     this.perfilA();
  //   }, 5000);
  // }
  // perfilB() {
  //   if (this.selectVerticalDos <= (this.imgesVerticalDos.length - 2)) {
  //     this.selectVerticalDos = this.selectVerticalDos + 1;
  //   } else {
  //     this.selectVerticalDos = 0;
  //   }
  //   setTimeout(() => {
  //     this.perfilB();
  //   }, 5000);
  // }
  // perfilC() {
  //   if (this.selectVerticalTres <= (this.imgesVerticalTres.length - 2)) {
  //     this.selectVerticalTres = this.selectVerticalTres + 1;
  //   } else {
  //     this.selectVerticalTres = 0;
  //   }
  //   setTimeout(() => {
  //     this.perfilC();
  //   }, 5000);
  // }
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
