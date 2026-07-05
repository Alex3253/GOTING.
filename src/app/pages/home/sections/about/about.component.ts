import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class About {
  showHeading = input(true);

  protected readonly misionVision = [
    {
      label: 'Misión',
      text: 'Brindar levantamientos topográficos y datos geoespaciales con exactitud, precisión y compromiso para el desarrollo sostenible de nuestros clientes.',
    },
    {
      label: 'Visión',
      text: 'Ser referentes en precisión y confianza en topografía y geomática con drones, como aliados estratégicos de empresas y entidades públicas.',
    },
  ];

  protected readonly propuestaValor = [
    {
      num: '01',
      titulo: 'Estándares PMI · Agilismo',
      desc: 'Gestionamos cada proyecto bajo el marco del PMI y metodologías ágiles, con hitos claros y control total del alcance.',
      imagen: '/topografia.png',
    },
    {
      num: '02',
      titulo: 'Alineado a IGN y DHN',
      desc: 'Nuestros levantamientos cumplen con los lineamientos oficiales del Instituto Geográfico Nacional y la Dirección de Hidrografía y Navegación.',
      imagen: null,
    },
    {
      num: '03',
      titulo: 'Sistema QA/QC en campo',
      desc: 'Protocolos de control y aseguramiento de calidad aplicados en cada etapa de campo y gabinete, minimizando errores y reprocesos.',
      imagen: null,
    },
    {
      num: '04',
      titulo: 'Sensores LiDAR · RGB Multiespectral',
      desc: 'Equipos de última generación con sensores LiDAR, RGB y multiespectrales para capturar datos de alta densidad y precisión.',
      imagen: null,
    },
    {
      num: '05',
      titulo: 'Cámara CMOS 4/3"',
      desc: 'Sensores de gran formato que permiten ortomosaicos de altísima resolución incluso en condiciones de poca luz.',
      imagen: null,
    },
  ];

  protected readonly clientes = [
    { logo: '/fondepes.png', alt: 'FONDEPES' },
    { logo: '/lader.png', alt: 'Lader Energy' },
    { logo: '/green.jpeg', alt: 'Green' },
    { logo: '/yaku.png', alt: 'Yaku Consultores' },
    { logo: '/aacosta.jpeg', alt: 'AACosta Inmobiliaria' },
    { logo: '/palmas.png', alt: 'Palmas' },
  ];
}
