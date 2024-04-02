import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AlertController, IonicSafeString } from '@ionic/angular';
import { DigimonsService } from 'src/app/services/digimons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {
  digimons: any[] = [];
  digimonsChunks: any[][] = [];
  pageNumber: number = 0;
  totalPages: number = 0;
  itemsPerPage: number = 20; // Definir el número de elementos por página
  constructor(private digimonService: DigimonsService, private alertController: AlertController,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getDigimons();
  }


  getDigimons() {
    this.digimonService.getDigimons(this.pageNumber, this.itemsPerPage).subscribe((data) => {
      this.digimons = data.content;
      this.totalPages = Math.ceil(data.pageable.totalElements / this.itemsPerPage);

      // Dividir la lista de digimons en chunks de elementos cada uno
      this.digimonsChunks = [];
      for (let i = 0; i < this.digimons.length; i += this.itemsPerPage) {
        this.digimonsChunks.push(this.digimons.slice(i, i + this.itemsPerPage));
      }
    });
  }

  nextPage() {
    if (this.pageNumber < this.totalPages) {
      this.pageNumber++;
      this.getDigimons();
    }
  }

  previousPage() {
    if (this.pageNumber > 0) {
      this.pageNumber--;
      this.getDigimons();
    }
  }

  //detalle de digimon
  async onDigimonClick(digimon: any) {
    const detail = await this.digimonService.getDigimonDetail(digimon.id).toPromise(); // Obtén el detalle del digimon
    this.presentAlert(detail); // Muestra el pop-up con la información detallada
  }

  async presentAlert(detail: any) {
    const imageUrl = detail.images[0].href;
    const levelText = detail.levels?.[0]?.level || 'No level'; // Obtener el texto del primer nivel si existe
    const attributeText = detail.attributes?.[0]?.attribute || 'No attribute'; // Obtener el texto del primer atributo si existe
    const typeText = detail.types?.[0]?.type || 'No type'; // Obtener el texto del primer tipo si existe

    const subHeader = `
      Level: ${levelText}  -
      Attribute: ${attributeText}   -
      Type: ${typeText}
    `;
    const alert = await this.alertController.create({
      header: detail.id + ' '+ detail.name,
      subHeader: subHeader,
      cssClass: 'custom-alert',
      message: '',
      buttons: ['OK']
    });

    await alert.present();

    // Agregar la imagen como fondo del elemento con la clase cssClass
  const element = document.querySelector('.custom-alert .alert-message') as HTMLElement;
  if (element) {
    element.style.backgroundImage = `url('${imageUrl}')`;
    element.style.backgroundSize = 'cover';
    element.style.backgroundPosition = 'center';
    element.style.height = '290px'; // Ajustar la altura según sea necesario
  }
  }

}
