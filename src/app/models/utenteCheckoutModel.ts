export interface utenteCheckoutModel {
  clientName: string;
  address: string;
  totalPrice: number;
  email: string;
  payment: {
    number: string;
    ownerName: string;
    expire: string;
    cvv: number;
  };
  details: prodottoPiccoloModel[];
}

export interface prodottoPiccoloModel {
  idproduct: number;
  quantity: number;
}
