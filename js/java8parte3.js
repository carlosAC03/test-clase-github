class Tarea {
    constructor(nombre, completada = false) {
      this.nombre = nombre;
      this.completada = completada;
    }
  
    completar() {
      this.completada = true;
    }
  
    mostrarEstado() {
      return this.completada ? 'Completada' : 'Pendiente';
    }
  
    static agregarTarea(tareas, nombre) {
      const nuevaTarea = new Tarea(nombre);
      tareas.push(nuevaTarea);
    }
  
    static completarTarea(tareas, nombre) {
      const tarea = tareas.find(t => t.nombre === nombre);
      if (tarea) {
        tarea.completar();
      } else {
        console.log(`Tarea "${nombre}" no encontrada.`);
      }
    }
  
    static mostrarTareas(tareas, filtro = 'todas') {
      let tareasFiltradas;
  
      if (filtro === 'completadas') {
        tareasFiltradas = tareas.filter(t => t.completada);
      } else if (filtro === 'pendientes') {
        tareasFiltradas = tareas.filter(t => !t.completada);
      } else {
        tareasFiltradas = tareas;
      }
  
      tareasFiltradas.forEach(t => {
        console.log(`Tarea: ${t.nombre}, Estado: ${t.mostrarEstado()}`);
      });
    }
  }
  
  const tareas = [];
  Tarea.agregarTarea(tareas, 'Fumar');
  Tarea.agregarTarea(tareas, 'Trabajar');
  Tarea.agregarTarea(tareas, 'Estudiar');
  Tarea.completarTarea(tareas, 'Estudiar');
  
  Tarea.mostrarTareas(tareas, 'completadas');
  
  Tarea.mostrarTareas(tareas, 'pendientes');

