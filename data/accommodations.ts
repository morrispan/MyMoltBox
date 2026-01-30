export interface Accommodation {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

export const accommodationsData: Accommodation[] = [
  {
    id: 1,
    title: "山景溫馨小屋",
    description: "寧靜山區，絕佳視野",
    price: 2500,
    rating: 4.9,
    image: "/placeholder-cabin.jpg",
  },
  {
    id: 2,
    title: "海景第一排",
    description: "沙灘僅一步之遙",
    price: 3200,
    rating: 4.8,
    image: "/placeholder-beach.jpg",
  },
  {
    id: 3,
    title: "城市中心民宿",
    description: "交通便利，購物天堂",
    price: 2800,
    rating: 4.7,
    image: "/placeholder-city.jpg",
  },
  {
    id: 4,
    title: "鄉村田園風",
    description: "農村體驗，自然悠閒",
    price: 2200,
    rating: 4.6,
    image: "/placeholder-country.jpg",
  },
  {
    id: 5,
    title: "豪華別墅",
    description: "私人泳池，管家服務",
    price: 5800,
    rating: 4.9,
    image: "/placeholder-villa.jpg",
  },
  {
    id: 6,
    title: "湖畔小屋",
    description: "寧靜湖泊，划船垂釣",
    price: 3500,
    rating: 4.7,
    image: "/placeholder-lake.jpg",
  },
];