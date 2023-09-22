export type IOrder = {
  id: string;
  userId: string;
  status: 'pending' | 'shipped' | 'delivered';
  orderedBooks: [
    {
      bookId: string;
      quantity: number;
    },
  ];
};
