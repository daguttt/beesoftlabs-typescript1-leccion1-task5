# TypeScript I - Leccion 1 - Task 5

## Challenge 1

```ts
type TaskState = "pending" | "on progres" | "canceled" | "finished";

interface Task {
  state: TaskState;
  startingDate: Date;
  endingDate: Date;
  description: string;
}

interface PendingTask extends Task {
  state: "pending";
}

interface FinishedTask extends Task {
  state: "finished";
}

interface CanceledTask extends Task {
  state: "canceled";
}

const pendingTaskList: PendingTask[] = [];
const canceledTaskList: CanceledTask[] = [];
const finishedTaskList: FinishedTask[] = [];
```

## Challenge 2

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
}

const participantList: Participant[] = [];
const eventsHistory: Event[] = [];
```

## Challenge 3

```ts
interface Distributor {
  name: string;
  phone: string;
  products: Product[];
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
