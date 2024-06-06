export interface utenteCheckout {
    clientName: string;
    address: string;
    totalPrice: number;
    payment: {
        number: string;
        ownerName: string;
        expire: string;
        cvv: number;
    };
    details: prodottoPiccolo[];
}

export interface prodottoPiccolo{
    idproduct:number;
    quantity:number;
}