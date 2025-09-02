export interface Pagina {
  id: number;
  nombre: string;
  url: string;
  hijos?: Pagina[];
}

// Menu Principal
export const menuCatalogos: Pagina = {
  id: 1,
  nombre: "Catálogos",
  url: "#",
  hijos: [
    { id: 1.1, nombre: "Niveles", url: "/catalogos/niveles" },
    { id: 1.2, nombre: "Departamentos", url: "/catalogos/departamentos" },
    { id: 1.3, nombre: "Puestos", url: "/catalogos/puestos" },
    {
      id: 1.4,
      nombre: "Plantilla de Personal",
      url: "/catalogos/plantillaPersonal",
    },
    {
      id: 1.5,
      nombre: "Periodos de Captura",
      url: "/catalogos/periodosCaptura",
    },
    {
      id: 1.6,
      nombre: "Tablas de Incentivos",
      url: "/catalogos/tablasIncentivos",
    },
    { id: 1.7, nombre: "Unidades de Medida", url: "/catalogos/unidadesMedida" },
    { id: 1.8, nombre: "Grupos Tareas", url: "/catalogos/gruposTareas" },
    { id: 1.9, nombre: "Grupos Folios", url: "/catalogos/gruposFolios" },
  ],
};

export const menuEstrategia: Pagina = {
  id: 2,
  nombre: "Estratégia",
  url: "#",
  hijos: [
    { id: 2.1, nombre: "Enfoques", url: "/estrategia/enfoques" },
    { id: 2.2, nombre: "Planes", url: "/estrategia/planes" },
    { id: 2.3, nombre: "Programas", url: "/estrategia/programas" },
  ],
};

export const menuProyectos: Pagina = {
  id: 3,
  nombre: "Proyectos",
  url: "#",
  hijos: [
    { id: 3.1, nombre: "Definición", url: "/proyectos/definicion" },
    { id: 3.2, nombre: "Actividades", url: "/proyectos/actividades" },
    { id: 3.3, nombre: "Avance de Actividad", url: "/proyectos/avance" },
  ],
};

export const menuIndicadores: Pagina = {
  id: 4,
  nombre: "Indicadores",
  url: "#",
  hijos: [
    { id: 4.1, nombre: "Definición", url: "/indicadores/definicion" },
    { id: 4.2, nombre: "Avance Indicador", url: "/indicadores/avance" },
  ],
};

export const menuDesempenio: Pagina = {
  id: 5,
  nombre: "Desempeño",
  url: "#",
  hijos: [
    {
      id: 5.1,
      nombre: "Criterios de Evaluación",
      url: "/desempenio/evaluacion",
    },
    {
      id: 5.2,
      nombre: "Criterios por Puesto",
      url: "/desempenio/criteriosPuesto",
    },
    {
      id: 5.3,
      nombre: "Criterios por Persona",
      url: "/desempenio/criteriosPersona",
    },
    {
      id: 5.4,
      nombre: "Registro de Calificaciones",
      url: "/desempenio/calificaciones",
    },
  ],
};

export const menuNavegador: Pagina = {
  id: 6,
  nombre: "Navegador",
  url: "#",
  hijos: [
    { id: 6.1, nombre: "Empresa", url: "/navegador/empresa" },
    { id: 6.2, nombre: "Estrategia", url: "/navegador/estrategia" },
    { id: 6.3, nombre: "Estrategico", url: "/navegador/estrategico" },
    { id: 6.4, nombre: "Proyecto", url: "/navegador/proyecto" },
    { id: 6.5, nombre: "Desempeño", url: "/navegador/desempenio" },
    { id: 6.6, nombre: "Bono", url: "/navegador/bono" },
    { id: 6.7, nombre: "Mejora", url: "/navegador/mejora" },
    { id: 6.8, nombre: "Tarea", url: "/navegador/tarea" },
    { id: 6.9, nombre: "Folio", url: "/navegador/folio" },
  ],
};

export const menuAdministracion: Pagina = {
  id: 7,
  nombre: "Administración",
  url: "#",
  hijos: [
    {
      id: 7.1,
      nombre: "Periodos De Evaluación",
      url: "/administracion/periodoEvaluacion",
    },
    { id: 7.2, nombre: "Configuración", url: "/administracion/configuracion" },
    { id: 7.3, nombre: "Proceso", url: "/administracion/proceso" },
    {
      id: 7.4,
      nombre: "Indicadores Automáticos",
      url: "/administracion/indicadorAutomatico",
    },
    {
      id: 7.5,
      nombre: "Indicadores Compuestos",
      url: "/administracion/indicadorCompuesto",
    },
    {
      id: 7.6,
      nombre: "Actividades Automáticas",
      url: "/administracion/actividadAutomatica",
    },
    { id: 7.7, nombre: "Importar Datos", url: "/administracion/importarDatos" },
    { id: 7.8, nombre: "Direccion", url: "/administracion/cireccion" },
    { id: 7.9, nombre: "LiMoN", url: "/administracion/adminLimon" },
  ],
};

export const menuPermisos: Pagina = {
  id: 8,
  nombre: "Permisos",
  url: "#",
  hijos: [
    { id: 8.1, nombre: "Admon. de Grupos", url: "/permisos/grupos" },
    { id: 8.2, nombre: "Admon. de Usuarios", url: "/permisos/usuarios" },
    {
      id: 8.3,
      nombre: "Permisos de Departamentos",
      url: "/permisos/departamentos",
    },
    { id: 8.4, nombre: "Roles de Usuario", url: "/permisos/roles" },
    { id: 8.5, nombre: "Usuarios Admins.", url: "/permisos/admins" },
    { id: 8.6, nombre: "Usuarios Admins. Folio", url: "/permisos/adminsFolio" },
  ],
};

export const menuCompleto: Pagina[] = [
  menuCatalogos,
  menuEstrategia,
  menuDesempenio,
  menuNavegador,
  menuAdministracion,
  menuPermisos,
];
