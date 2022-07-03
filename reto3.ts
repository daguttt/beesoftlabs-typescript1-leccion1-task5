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