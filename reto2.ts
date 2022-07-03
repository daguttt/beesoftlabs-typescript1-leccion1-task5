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
