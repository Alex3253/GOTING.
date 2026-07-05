import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class Services {
  showHeading = input(true);
  protected activeNum = signal('01');

  protected selectTab(num: string): void {
    this.activeNum.set(num);
  }

  protected get activeService() {
    return this.services.find((s) => s.num === this.activeNum())!;
  }

  protected readonly services = [
    {
      num: '01',
      icon: '🛸',
      tab: 'Fotogrametría Aérea',
      title: 'Fotogrametría Aérea de Alta Resolución',
      description: 'Áreas extensas, ortomosaicos, control volumétrico y monitoreo en tiempo real.',
      tech: 'DJI MATRICE 4E / MAVIC 3E',
      nuevo: false,
      imagen: null,
      detail: {
        intro: 'Captura geoespacial en proyectos de gran envergadura, eliminando largas jornadas de topografía clásica en terreno complejo: menos costos operativos y menos riesgo humano.',
        aplicaciones: [
          { titulo: 'Control volumétrico', desc: 'Movimiento de tierras, stockpiles y tajos abiertos (minería y construcción).' },
          { titulo: 'Catastro urbano y rural', desc: 'Saneamiento físico-legal de predios.' },
          { titulo: 'Monitoreo de obras lineales', desc: 'Carreteras, ductos, vías férreas, canales.' },
        ],
        proyecto: {
          nombre: 'Proyecto Vientos de Negritos',
          lugar: 'TALARA, PIURA · CORDILLERA SOLAR I S.A.C.',
          desc: 'Levantamiento fotogramétrico integral sobre 1,253.5 ha para energía renovable. Vuelos automatizados con seguimiento del terreno para optimizar la distribución de infraestructura eléctrica y obras civiles preliminares.',
          imagen: null,
          stats: [
            { valor: '1.2+ ha', label: 'Superficie' },
            { valor: 'CMOS 4/3"', label: 'Ortomosaico' },
          ],
        },
        indicadores: [
          { titulo: 'GSD', desc: 'Resolución espacial < 2–5 cm/pixel: identifica elementos mínimos del terreno con nitidez.' },
          { titulo: 'MDS / MDT', desc: 'Modelos digitales de superficie y terreno con curvas de nivel hasta 0.20 m.' },
          { titulo: 'Traslape', desc: 'Vuelos con 90% longitudinal / 80% transversal: sin zonas ciegas ni distorsión de bordes.' },
        ],
        entregables: [
          { formato: 'Ortomosaicos georreferenciados', ext: 'TIFF · GeoTIFF · ECW' },
          { formato: 'Cartografía digital vectorial en DWG', ext: 'AutoCAD Civil 3D' },
          { formato: 'Planos en PDF y/o en físico firmados', ext: 'Por ingenieros especialistas' },
        ],
        camposAplicacion: null,
        ventaja: null,
      },
    },
    {
      num: '02',
      icon: '🌊',
      tab: 'Batimetría y Caudales',
      title: 'Batimetría y Medición de Caudales con ADCP',
      description: 'Caracterización de cuerpos de agua para proyectos de ingeniería.',
      tech: 'TECNOLOGÍA ADCP',
      nuevo: true,
      imagen: null,
      detail: {
        intro: 'Levantamiento y análisis de cuerpos de agua mediante medición de profundidades y evaluación de caudales para proyectos de ingeniería, infraestructura y gestión de recursos hídricos.',
        aplicaciones: null,
        proyecto: null,
        indicadores: null,
        entregables: null,
        camposAplicacion: null,
        ventaja: null,
        flujoMetodologico: null,
        indicadoresEntregables: null,
        caracteristicas: null,
        bulletPoints: null,
        proyectosDestacados: null,
      },
    },
    {
      num: '03',
      icon: '📡',
      tab: 'Topografía LiDAR',
      title: 'Inspección & Topografía con Tecnología LiDAR',
      description: 'Líneas de alta tensión, modelado 3D y penetración de vegetación.',
      tech: 'DJI MATRICE 400 LIDAR',
      nuevo: true,
      imagen: null,
      detail: {
        intro: 'Escaneo láser dinámico que emite miles de pulsos por segundo: <strong class="text-slate-900">atraviesa la vegetación densa</strong> y captura el terreno desnudo real, con una precisión que la fotogrametría pasiva no alcanza.',
        aplicaciones: null,
        proyecto: null,
        indicadores: null,
        entregables: null,
        camposAplicacion: [
          { icono: '🏗️', titulo: 'Líneas de alta tensión', desc: 'Detección de catenarias y distancias de seguridad a la vegetación.' },
          { icono: '🌊', titulo: 'Modelamiento hidráulico y cuencas', desc: 'Base de puntos para simulación de flujos e inundaciones.' },
          { icono: '🏠', titulo: 'Estructuras complejas y canteras', desc: 'Modelado 3D sin detener la operación del cliente.' },
        ],
        ventaja: 'Filtrado avanzado de la nube de puntos + validación con <strong class="text-slate-900">Trimble Business Center (TBC).</strong>',
      },
    },
    {
      num: '04',
      icon: '🌿',
      tab: 'Agricultura de Precisión',
      title: 'Agricultura de Precisión Multiespectral',
      description: 'Índices NDVI/NDRE, RGB, conteo de plantas y diagnóstico de estrés.',
      tech: 'MAVIC 3 MULTIESPECTRAL',
      nuevo: false,
      imagen: null,
      detail: {
        intro: 'Capturamos la firma espectral del cultivo —información invisible al ojo— y la convertimos en mapas de diagnóstico listos para decidir.',
        aplicaciones: null,
        proyecto: null,
        indicadores: null,
        entregables: null,
        camposAplicacion: null,
        ventaja: null,
        flujoMetodologico: [
          {
            num: '01',
            titulo: 'Captura espectral',
            desc: 'Vuelo con bandas Green, Red, Red Edge y NIR + calibración radiométrica en campo.',
            imagen: null,
          },
          {
            num: '02',
            titulo: 'Procesamiento',
            desc: 'Alineación y corrección radiométrica; aísla atmósfera e iluminación.',
            imagen: null,
          },
          {
            num: '03',
            titulo: 'Análisis',
            desc: 'Mapas e indicadores listos para la gestión del cultivo.',
            imagen: null,
          },
        ],
        indicadoresEntregables: [
          { icono: '🍃', titulo: 'Vigor vegetal', sub: 'NDVI · NDRE · GNDVI · NDWI' },
          { icono: '💧', titulo: 'Estrés hídrico y nutricional temprano', sub: '' },
          { icono: '🌱', titulo: 'Conteo y georreferenciación de plantas', sub: '' },
          { icono: '⚠️', titulo: 'Severidad de plagas', sub: '(focos de infección)' },
        ],
      },
    },
    {
      num: '05',
      icon: '📍',
      tab: 'Geodesia Oficial',
      title: 'Geodesia Oficial y Certificación de Puntos de Control',
      description: 'Monumentación de puntos geodésicos de órdenes "B" y "C" certificados ante IGN.',
      tech: 'RECEPTORES GNSS',
      nuevo: false,
      imagen: null,
      detail: {
        intro: 'Establecimiento, posicionamiento y tramitación oficial de puntos de control vinculados a la <strong class="text-slate-900">Red Geodésica Geocéntrica Nacional (REGGEN)</strong> del IGN.',
        aplicaciones: null,
        proyecto: {
          nombre: 'Planta Solar Fotovoltaica Malvinas',
          lugar: 'CHAO, LA LIBERTAD · NOVUM SOLAR S.A.C.',
          desc: 'Levantamiento integral sobre +22 ha para energía renovable. Vuelos automatizados con control geodésico RTK y vinculación a red oficial IGN para generar curvas de nivel, modelos digitales del terreno y planos topográficos a escala 1:1000.',
          imagen: null,
          stats: [
            { valor: '22+ ha', label: 'Superficie' },
            { valor: 'CMOS 4/3"', label: 'Ortomosaico' },
          ],
        },
        indicadores: null,
        entregables: null,
        camposAplicacion: null,
        ventaja: null,
        flujoMetodologico: null,
        indicadoresEntregables: null,
        caracteristicas: [
          {
            titulo: 'Hito Monumentado',
            desc: 'Marca perenne en concreto f\'c=210 kg/cm² con platina de bronce grabada con código oficial.',
          },
          {
            titulo: 'GNSS',
            desc: 'Receptores multibanda de doble frecuencia: GPS · GLONASS · GALILEO · BEIDOU simultáneos.',
          },
          {
            titulo: 'Línea Base',
            desc: 'Post-procesamiento enlazado a las ERP oficiales del IGN con precisión milimétrica.',
          },
        ],
      },
    },
    {
      num: '06',
      icon: '✏️',
      tab: 'Topografía de Detalle',
      title: 'Topografía de Detalle e Infraestructura',
      description: 'Planialtimetría, replanteos arquitectónicos, sanitarios y eléctricos.',
      tech: 'ESTACIÓN TOTAL / NIVEL',
      nuevo: false,
      imagen: null,
      detail: {
        intro: 'Cuadrillas con escáner láser 3D, estación total y nivel diferencial donde el sensor aéreo encuentra límites y se exige precisión milimétrica.',
        aplicaciones: null,
        proyecto: null,
        indicadores: null,
        entregables: null,
        camposAplicacion: null,
        ventaja: null,
        flujoMetodologico: null,
        indicadoresEntregables: null,
        caracteristicas: null,
        bulletPoints: [
          'Planialtimetría y replanteo arquitectónico/estructural a detalle',
          'As-built sanitario y eléctrico: redes de agua, desagüe, PTAR, tendidos',
        ],
        proyectosDestacados: [
          {
            nombre: 'Replanteo de linderos inmobiliarios',
            lugar: 'SAN CLEMENTE, PISCO · ACOSTA INMOBILIARIA',
            desc: 'Materialización de coordenadas registrales con GPS diferencial (RTK) y planos perimétricos conformes a SUNARP.',
          },
          {
            nombre: 'Centro Acuícola La Arena',
            lugar: 'CASMA, ÁNCASH · FONDEPES',
            desc: 'Levantamiento topográfico integral e instalación de 2 puntos geodésicos oficiales para la optimización del complejo pesquero.',
          },
        ],
      },
    },
    {
      num: '07', icon: '⊕', tab: 'Alquiler y Capacitación', title: 'Otros: Alquiler y Capacitación',
      description: 'Formación especializada y alquiler de equipos topográficos.',
      tech: 'FLOTA CERTIFICADA', nuevo: false, detail: null, imagen: null,
    },
  ];
}
