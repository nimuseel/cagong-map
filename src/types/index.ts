export interface Cafe {
  id: string;
  name: string;
  address: string;
  imageUrl: string;
  facilities: string[];
  operatingHours: {
    open: string;
    close: string;
  };
  tags: string[];
}