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
