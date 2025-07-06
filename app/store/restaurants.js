const restaurants = [
  {
    name: "The Bombay Canteen",
    address: "Kamala Mills, Lower Parel, Mumbai, MH 400013",
    opening: "12:00",
    closing: "23:00",
    seats: 60,
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
  },
  {
    name: "Leopold Cafe",
    address: "Colaba Causeway, Mumbai, MH 400039",
    opening: "08:00",
    closing: "23:59",
    seats: 80,
    image: "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg",
  },
  {
    name: "Masala Library",
    address: "Cilantro Building, BKC, Mumbai, MH 400051",
    opening: "12:30",
    closing: "23:30",
    seats: 45,
    image:
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?_gl=1*zc0jq8*_ga*NzU5NTY1NDIwLjE3NTA0OTM3MDM.*_ga_8JE65Q40S6*czE3NTA0OTM3MDMkbzEkZzAkdDE3NTA0OTM3MDMkajYwJGwwJGgw",
  },
  {
    name: "Trishna",
    address: "Sai Baba Marg, Fort, Mumbai, MH 400001",
    opening: "12:00",
    closing: "15:30",
    seats: 40,
    image: "https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg",
  },
  {
    name: "Britannia & Co.",
    address: "Ballard Estate, Mumbai, MH 400038",
    opening: "12:00",
    closing: "16:00",
    seats: 35,
    image: "https://images.pexels.com/photos/618491/pexels-photo-618491.jpeg",
  },
  {
    name: "Yauatcha Mumbai",
    address: "Raheja Towers, BKC, Mumbai, MH 400051",
    opening: "12:00",
    closing: "23:45",
    seats: 70,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  },
  {
    name: "Bayroute",
    address: "Cuffe Parade, Mumbai, MH 400005",
    opening: "12:00",
    closing: "23:30",
    seats: 55,
    image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
  },
  {
    name: "Prithvi Cafe",
    address: "Juhu Church Road, Mumbai, MH 400049",
    opening: "10:00",
    closing: "22:00",
    seats: 50,
    image: "https://images.pexels.com/photos/1025804/pexels-photo-1025804.jpeg",
  },
  {
    name: "Hitchki",
    address: "Powai Plaza, Mumbai, MH 400076",
    opening: "12:00",
    closing: "00:30",
    seats: 65,
    image: "https://images.pexels.com/photos/1860202/pexels-photo-1860202.jpeg",
  },
  {
    name: "Jamjar Diner",
    address: "Versova, Andheri West, Mumbai, MH 400061",
    opening: "09:00",
    closing: "23:00",
    seats: 60,
    image: "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg",
  },
];
const carouselImages = [
  {
    images: [
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
      "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg",
      "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg",
    ],
    res_id: "/restaurants/restaurant_1",
  },
  {
    images: [
      "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg",
      "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg",
      "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg",
      "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg",
      "https://images.pexels.com/photos/1449713/pexels-photo-1449713.jpeg",
      "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg",
    ],
    res_id: "/restaurants/restaurant_2",
  },
  {
    images: [
      "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg",
      "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg",
      "https://images.pexels.com/photos/2253642/pexels-photo-2253642.jpeg",
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
      "https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg",
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
    ],
    res_id: "/restaurants/restaurant_3",
  },
  {
    images: [
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg",
      "https://images.pexels.com/photos/811319/pexels-photo-811319.jpeg",
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
      "https://images.pexels.com/photos/620749/pexels-photo-620749.jpeg",
      "https://images.pexels.com/photos/2454536/pexels-photo-2454536.jpeg",
    ],
    res_id: "/restaurants/restaurant_4",
  },
  {
    images: [
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
      "https://images.pexels.com/photos/1082343/pexels-photo-1082343.jpeg",
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      "https://images.pexels.com/photos/5117632/pexels-photo-5117632.jpeg",
      "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg",
      "https://images.pexels.com/photos/537991/pexels-photo-537991.jpeg",
    ],
    res_id: "/restaurants/restaurant_5",
  },
  {
    images: [
      "https://images.pexels.com/photos/1250289/pexels-photo-1250289.jpeg",
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
      "https://images.pexels.com/photos/3992152/pexels-photo-3992152.jpeg",
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg",
      "https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg",
    ],
    res_id: "/restaurants/restaurant_6",
  },
  {
    images: [
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg",
      "https://images.pexels.com/photos/66639/pexels-photo-66639.jpeg",
      "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg",
      "https://images.pexels.com/photos/1674466/pexels-photo-1674466.jpeg",
      "https://images.pexels.com/photos/1639568/pexels-photo-1639568.jpeg",
      "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg",
    ],
    res_id: "/restaurants/restaurant_7",
  },
  {
    images: [
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg",
      "https://images.pexels.com/photos/4058223/pexels-photo-4058223.jpeg",
      "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg",
      "https://images.pexels.com/photos/4061401/pexels-photo-4061401.jpeg",
      "https://images.pexels.com/photos/4058221/pexels-photo-4058221.jpeg",
      "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg",
    ],
    res_id: "/restaurants/restaurant_8",
  },
  {
    images: [
      "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg",
      "https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg",
      "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg",
      "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg",
      "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg",
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    ],
    res_id: "/restaurants/restaurant_9",
  },
  {
    images: [
      "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg",
      "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg",
      "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg",
      "https://images.pexels.com/photos/2253642/pexels-photo-2253642.jpeg",
      "https://images.pexels.com/photos/1449713/pexels-photo-1449713.jpeg",
      "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg",
    ],
    res_id: "/restaurants/restaurant_10",
  },
];
const slots = [
  {
    ref_id: "/restaurants/restaurant_1",
    slot: ["11:30", "13:30", "15:30", "17:30", "19:30", "21:30"],
  },
  {
    ref_id: "/restaurants/restaurant_2",
    slot: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
  },
  {
    ref_id: "/restaurants/restaurant_3",
    slot: ["11:00", "13:00", "15:00", "17:00", "19:00", "21:00", "23:00"],
  },
  {
    ref_id: "/restaurants/restaurant_4",
    slot: [
      "09:00",
      "11:00",
      "13:00",
      "15:00",
      "17:00",
      "19:00",
      "21:00",
      "23:00",
    ],
  },
  {
    ref_id: "/restaurants/restaurant_5",
    slot: ["10:30", "12:30", "14:30", "16:30", "18:30", "20:30"],
  },
  {
    ref_id: "/restaurants/restaurant_6",
    slot: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"],
  },
  {
    ref_id: "/restaurants/restaurant_7",
    slot: ["11:15", "13:15", "15:15", "17:15", "19:15", "21:15"],
  },
  {
    ref_id: "/restaurants/restaurant_8",
    slot: ["09:30", "11:30", "13:30", "15:30", "17:30", "19:30"],
  },
  {
    ref_id: "/restaurants/restaurant_9",
    slot: ["10:45", "12:45", "14:45", "16:45", "18:45", "20:45"],
  },
  {
    ref_id: "/restaurants/restaurant_10",
    slot: ["11:00", "12:30", "14:00", "15:30", "17:00", "18:30", "20:00"],
  },
];

export { carouselImages, restaurants, slots };
