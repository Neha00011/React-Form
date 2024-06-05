const countries = [
  {
    id: 1,
    name: "India",
    cities: [
      {
        id: 1,
        name: "Delhi",
      },
      {
        id: 2,
        name: "Mumbai",
      },
      {
        id: 3,
        name: "Chennai",
      },
      {
        id: 4,
        name: "Kolkata",
      },
      {
        id: 5,
        name: "Bangalore",
      },
    ],
  },
  {
    id: 2,
    name: "USA",
    cities: [
      {
        id: 1,
        name: "New York",
      },
      {
        id: 2,
        name: "Los Angeles",
      },
      {
        id: 3,
        name: "Chicago",
      },
      {
        id: 4,
        name: "Houston",
      },
      {
        id: 5,
        name: "Phoenix",
      },
    ],
  },
  {
    id: 3,
    name: "UK",
    cities: [
      {
        id: 1,
        name: "London",
      },
      {
        id: 2,
        name: "Birmingham",
      },
      {
        id: 3,
        name: "Manchester",
      },
      {
        id: 4,
        name: "Glasgow",
      },
      {
        id: 5,
        name: "Liverpool",
      },
    ],
  },
  {
    id: 4,
    name: "Australia",
    cities: [
      {
        id: 1,
        name: "Sydney",
      },
      {
        id: 2,
        name: "Melbourne",
      },
      {
        id: 3,
        name: "Brisbane",
      },
      {
        id: 4,
        name: "Perth",
      },
      {
        id: 5,
        name: "Adelaide",
      },
    ],
  },
  {
    id: 5,
    name: "Canada",
    cities: [
      {
        id: 1,
        name: "Toronto",
      },
      {
        id: 2,
        name: "Montreal",
      },
      {
        id: 3,
        name: "Vancouver",
      },
      {
        id: 4,
        name: "Calgary",
      },
      {
        id: 5,
        name: "Ottawa",
      },
    ],
  },
  {
    id: 6,
    name: "Germany",
    cities: [
      {
        id: 1,
        name: "Berlin",
      },
      {
        id: 2,
        name: "Hamburg",
      },
      {
        id: 3,
        name: "Munich",
      },
      {
        id: 4,
        name: "Cologne",
      },
      {
        id: 5,
        name: "Frankfurt",
      },
    ],
  },
  {
    id: 7,
    name: "France",
    cities: [
      {
        id: 1,
        name: "Paris",
      },
      {
        id: 2,
        name: "Marseille",
      },
      {
        id: 3,
        name: "Lyon",
      },
      {
        id: 4,
        name: "Toulouse",
      },
      {
        id: 5,
        name: "Nice",
      },
    ],
  },
  {
    id: 8,
    name: "Italy",
    cities: [
      {
        id: 1,
        name: "Rome",
      },
      {
        id: 2,
        name: "Milan",
      },
      {
        id: 3,
        name: "Naples",
      },
      {
        id: 4,
        name: "Turin",
      },
      {
        id: 5,
        name: "Palermo",
      },
    ],
  },
  {
    id: 9,
    name: "Japan",
    cities: [
      {
        id: 1,
        name: "Tokyo",
      },
      {
        id: 2,
        name: "Yokohama",
      },
      {
        id: 3,
        name: "Osaka",
      },
      {
        id: 4,
        name: "Nagoya",
      },
      {
        id: 5,
        name: "Sapporo",
      },
    ],
  },
  {
    id: 10,
    name: "China",
    cities: [
      {
        id: 1,
        name: "Shanghai",
      },
      {
        id: 2,
        name: "Beijing",
      },
      {
        id: 3,
        name: "Tianjin",
      },
      {
        id: 4,
        name: "Guangzhou",
      },
      {
        id: 5,
        name: "Shenzhen",
      },
    ],
  },
  {
    id: 11,
    name: "Brazil",
    cities: [
      {
        id: 1,
        name: "Sao Paulo",
      },
      {
        id: 2,
        name: "Rio de Janeiro",
      },
      {
        id: 3,
        name: "Salvador",
      },
      {
        id: 4,
        name: "Brasilia",
      },
      {
        id: 5,
        name: "Fortaleza",
      },
    ],
  },
  {
    id: 12,
    name: "South Africa",
    cities: [
      {
        id: 1,
        name: "Johannesburg",
      },
      {
        id: 2,
        name: "Cape Town",
      },
      {
        id: 3,
        name: "Durban",
      },
      {
        id: 4,
        name: "Pretoria",
      },
      {
        id: 5,
        name: "Port Elizabeth",
      },
    ],
  },
  {
    id: 13,
    name: "Russia",
    cities: [
      {
        id: 1,
        name: "Moscow",
      },
      {
        id: 2,
        name: "Saint Petersburg",
      },
      {
        id: 3,
        name: "Novosibirsk",
      },
      {
        id: 4,
        name: "Yekaterinburg",
      },
      {
        id: 5,
        name: "Nizhny Novgorod",
      },
    ],
  },
  {
    id: 14,
    name: "Mexico",
    cities: [
      {
        id: 1,
        name: "Mexico City",
      },
      {
        id: 2,
        name: "Iztapalapa",
      },
      {
        id: 3,
        name: "Ecatepec",
      },
      {
        id: 4,
        name: "Guadalajara",
      },
      {
        id: 5,
        name: "Puebla",
      },
    ],
  },
  {
    id: 15,
    name: "Spain",
    cities: [
      {
        id: 1,
        name: "Madrid",
      },
      {
        id: 2,
        name: "Barcelona",
      },
      {
        id: 3,
        name: "Valencia",
      },
      {
        id: 4,
        name: "Seville",
      },
      {
        id: 5,
        name: "Zaragoza",
      },
    ],
  },
  {
    id: 16,
    name: "Argentina",
    cities: [
      {
        id: 1,
        name: "Buenos Aires",
      },
      {
        id: 2,
        name: "Cordoba",
      },
      {
        id: 3,
        name: "Rosario",
      },
      {
        id: 4,
        name: "Mendoza",
      },
      {
        id: 5,
        name: "La Plata",
      },
    ],
  },
  {
    id: 17,
    name: "Nigeria",
    cities: [
      {
        id: 1,
        name: "Lagos",
      },
      {
        id: 2,
        name: "Kano",
      },
      {
        id: 3,
        name: "Ibadan",
      },
      {
        id: 4,
        name: "Kaduna",
      },
      {
        id: 5,
        name: "Port Harcourt",
      },
    ],
  },
  {
    id: 18,
    name: "Indonesia",
    cities: [
      {
        id: 1,
        name: "Jakarta",
      },
      {
        id: 2,
        name: "Surabaya",
      },
      {
        id: 3,
        name: "Bandung",
      },
      {
        id: 4,
        name: "Medan",
      },
      {
        id: 5,
        name: "Semarang",
      },
    ],
  },
  {
    id: 19,
    name: "Russia",
    cities: [
      {
        id: 1,
        name: "Moscow",
      },
      {
        id: 2,
        name: "Saint Petersburg",
      },
      {
        id: 3,
        name: "Novosibirsk",
      },
      {
        id: 4,
        name: "Yekaterinburg",
      },
      {
        id: 5,
        name: "Nizhny Novgorod",
      },
    ],
  },
  {
    id: 20,
    name: "Turkey",
    cities: [
      {
        id: 1,
        name: "Istanbul",
      },
      {
        id: 2,
        name: "Ankara",
      },
      {
        id: 3,
        name: "Izmir",
      },
      {
        id: 4,
        name: "Bursa",
      },
      {
        id: 5,
        name: "Adana",
      },
    ],
  },
  {
    id: 21,
    name: "Philippines",
    cities: [
      {
        id: 1,
        name: "Quezon City",
      },
      {
        id: 2,
        name: "Manila",
      },
      {
        id: 3,
        name: "Davao City",
      },
      {
        id: 4,
        name: "Caloocan",
      },
      {
        id: 5,
        name: "Cebu City",
      },
    ],
  },
  {
    id: 22,
    name: "Egypt",
    cities: [
      {
        id: 1,
        name: "Cairo",
      },
      {
        id: 2,
        name: "Alexandria",
      },
      {
        id: 3,
        name: "Giza",
      },
      {
        id: 4,
        name: "Shubra El-Kheima",
      },
      {
        id: 5,
        name: "Port Said",
      },
    ],
  },
  {
    id: 23,
    name: "Vietnam",
    cities: [
      {
        id: 1,
        name: "Ho Chi Minh City",
      },
      {
        id: 2,
        name: "Hanoi",
      },
      {
        id: 3,
        name: "Haiphong",
      },
      {
        id: 4,
        name: "Da Nang",
      },
      {
        id: 5,
        name: "Biên Hòa",
      },
    ],
  },
  {
    id: 24,
    name: "Thailand",
    cities: [
      {
        id: 1,
        name: "Bangkok",
      },
      {
        id: 2,
        name: "Nonthaburi",
      },
      {
        id: 3,
        name: "Nakhon Ratchasima",
      },
      {
        id: 4,
        name: "Chiang Mai",
      },
      {
        id: 5,
        name: "Hat Yai",
      },
    ],
  },
  {
    id: 25,
    name: "Myanmar",
    cities: [
      {
        id: 1,
        name: "Yangon",
      },
      {
        id: 2,
        name: "Mandalay",
      },
      {
        id: 3,
        name: "Naypyidaw",
      },
      {
        id: 4,
        name: "Mawlamyine",
      },
      {
        id: 5,
        name: "Bago",
      },
    ],
  },
  {
    id: 26,
    name: "South Korea",
    cities: [
      {
        id: 1,
        name: "Seoul",
      },
      {
        id: 2,
        name: "Busan",
      },
      {
        id: 3,
        name: "Incheon",
      },
      {
        id: 4,
        name: "Daegu",
      },
      {
        id: 5,
        name: "Daejeon",
      },
    ],
  },
  {
    id: 27,
    name: "Colombia",
    cities: [
      {
        id: 1,
        name: "Bogotá",
      },
      {
        id: 2,
        name: "Medellín",
      },
      {
        id: 3,
        name: "Cali",
      },
      {
        id: 4,
        name: "Barranquilla",
      },
      {
        id: 5,
        name: "Cartagena",
      },
    ],
  },
  {
    id: 28,
    name: "Sri Lanka",
    cities: [
      {
        id: 1,
        name: "Colombo",
      },
      {
        id: 2,
        name: "Dehiwala-Mount Lavinia",
      },
      {
        id: 3,
        name: "Moratuwa",
      },
      {
        id: 4,
        name: "Negombo",
      },
      {
        id: 5,
        name: "Kandy",
      },
    ],
  },
];

export default countries;
