type TaskState = 'pending' | 'on progres' | 'canceled' | 'finished';

interface Task {
  state: TaskState;
  startingDate: Date,
  endingDate: Date,
  description: string
}

interface PendingTask extends Task {
  state: "pending"
}

interface FinishedTask extends Task {
  state: "finished"
}

interface CanceledTask extends Task {
  state: "canceled"
}

const pendingTaskList: PendingTask[] = []
const canceledTaskList: CanceledTask[] = []
const finishedTaskList: FinishedTask[] = []