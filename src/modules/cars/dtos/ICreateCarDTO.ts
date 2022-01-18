interface ICreateCarDTO {
  brand: string;
  model: string;
  year: number;
  km: number;
  chassis: string;
  color: string;
  price: number;
  id?: string;
  status?: string;
}

export { ICreateCarDTO }
