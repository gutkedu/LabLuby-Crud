interface ICreateCarDTO {
  brand: string;
  model: string;
  year: number;
  km: number;
  chassis: string;
  price: number;
  id?: string;
  status: number;
}

export { ICreateCarDTO }
