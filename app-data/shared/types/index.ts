export type User = {
  _id: string;
  confirmed: boolean;
  email: string;
  firstName: string;
  lastName: string;
  role: number;
  token: string;
};

export type AdminPagePros = {
  token: string;
  role: number;
};

export type Order = {
  _id: string;
  client: string;
  phone: string;
  email: string;
  dateFrom: string;
  dateTo: string;
  note: string;
  status: string;
  passengers: number;
}