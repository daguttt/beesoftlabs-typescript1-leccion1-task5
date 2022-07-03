# TypeScript I - Leccion 1 - Task 5

## Challenge 1

Para un sistema de gestión de tareas, deseamos registrar todas las tareas, cada tarea tiene asociada la siguiente información: nombre, fecha de inicio, descripción y estatus, el estatus debe ser uno de los siguientes: pendiente, en proceso, terminada, cancelada. Además, se requiere una lista con todas las tareas pendientes, las tareas terminadas y las canceladas.

```ts
enum TaskStatus {
  Pending = "pending",
  OnProgress = "on progress",
  Canceled = "canceled",
  Finished = "finished",
}

interface Task {
  name: string;
  startingDate: Date;
  description: string;
  status: TaskStatus;
}

interface PendingTask extends Task {
  state: TaskStatus.Pending;
}

interface OnProgressTask extends Task {
  state: TaskStatus.OnProgress;
}

interface FinishedTask extends Task {
  state: TaskStatus.Finished;
}

interface CanceledTask extends Task {
  state: TaskStatus.Canceled;
}

const pendingTaskList: PendingTask[] = [];
const onProgressTaskList: OnProgressTask[] = [];
const canceledTaskList: CanceledTask[] = [];
const finishedTaskList: FinishedTask[] = [];
```

## Challenge 2

Queremos implementar un sistema de registro de eventos, para esto, necesitamos guardar una lista con la información de las personas participantes del evento, los datos mínimos por participante son: nombre completo, teléfono, correo. Cada evento cuenta con un nombre, precio, fecha y aforo máximo. Se desea guardar una lista con el historial de los eventos y que cada persona pueda ver los datos de los eventos a los que asistió y a los que piensa asistir en un futuro.

```ts
interface Event {
  id: number;
  name: string;
  price: number;
  date: Date;
  capacity: number;
}
interface Participant {
  name: string;
  phone: string;
  email: string;
  attendedEventList: Event[];
  eventsToAttend: Event[];
}

const participantList: Participant[] = [];
const eventsHistory: Event[] = [];
```

## Challenge 3

D2 requiere un registro de inventario básico, para ello necesita saber la lista de productos existentes en su almacén principal, cada producto debe tener asignados los siguientes atributos: Nombre, fecha de vencimiento, precio, peso, uuid, distribuidor, cantidad.

Se cuenta también con los datos de los distribuidores, entre ellos: nombre, teléfono, productos que ofrece. Además, D2 requiere las siguientes listas: productos en almacén, productos por solicitar a distribuidor y lista de distribuidores

```ts
interface Distributor {
  name: string;
  phone: string;
  offeredProducts: Product[];
}

interface Product {
  uuid: number;
  name: string;
  expirationDate: Date;
  price: number;
  weight: number;
  distributor: Distributor;
  amount: number;
}

const availableProducts: Product[] = [];
const productsToRequest: Product[] = [];
const distributorsList: Distributor[] = [];
```
