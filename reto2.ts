interface Event {
  id: number;
  name: string;
  price: number;
  date: Date;
  capacity: number
}
interface Participant {
  name: string;
  phone: string;
  email: string;
}

const participantList: Participant[] = []
const eventsHistory: Event[] = []