enum TaskState {
  Pending = "pending",
  OnProgress = "on progress",
  Canceled = "canceled",
  Finished = "finished",
}

interface Task {
  state: TaskState;
  startingDate: Date;
  endingDate: Date;
  description: string;
}

interface PendingTask extends Task {
  state: TaskState.Pending;
}

interface OnProgressTask extends Task {
  state: TaskState.OnProgress;
}

interface FinishedTask extends Task {
  state: TaskState.Finished;
}

interface CanceledTask extends Task {
  state: TaskState.Canceled;
}

const pendingTaskList: PendingTask[] = [];
const onProgressTaskList: OnProgressTask[] = [];
const canceledTaskList: CanceledTask[] = [];
const finishedTaskList: FinishedTask[] = [];
