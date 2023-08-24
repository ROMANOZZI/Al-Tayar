let Stations = [
  [
    { country: "المملكة العربية السعودية", name: "جدة" },
    { country: "المملكة العربية السعودية", name: "الرياض" },
    { country: "المملكة العربية السعودية", name: "الدمام" },
    { country: "المملكة العربية السعودية", name: "المدينة" },
    { country: "المملكة العربية السعودية", name: "أبها" },
    { country: "الإمارات العربية المتحدة", name: "دبي" },
    { country: "الإمارات العربية المتحدة", name: "أبو ظبي" },
    { country: "الإمارات العربية المتحدة", name: "الشارقة" },
    { country: "البحرين", name: "المنامة" },
    { country: "الكويت", name: "مدينة الكويت" },
    { country: "قطر", name: "الدوحة" },
    { country: "عمان", name: "مسقط" },
    { country: "عمان", name: "صلالة" },
    { country: "الأردن", name: "عمان" },
    { country: "العراق", name: "بغداد" },
    { country: "العراق", name: "أربيل" },
    { country: "العراق", name: "البصرة" },
  ],
];
const flights = [
  {
    destination: "أبو ظبي",
    from: "الرياض",
    time: "09:24",
    backTime: "18:30",
    fee: 411.49,
    refundable: true,
    company: "طيران الأمارات",
    seatsLeft: 120,
    transitsNumber: 0,
    seatClass: "اقتصادية",
    logo: "Emirates.png",
  },
  {
    destination: "مدينة الكويت",
    from: "مسقط",
    time: "14:37",
    backTime: "22:45",
    fee: 940.78,
    refundable: true,
    company: "طيران الخليج",
    seatsLeft: 85,
    transitsNumber: 1,
    seatClass: "رجال الأعمال",
    logo: "AlkahleeJ.jpg",
  },
  {
    destination: "دبي",
    from: "مسقط",
    time: "21:10",
    backTime: "04:20",
    fee: 609.59,
    refundable: true,
    company: "طيران الخليج",
    seatsLeft: 220,
    transitsNumber: 0,
    seatClass: "اقتصادية",
    logo: "AlkahleeJ.jpg",
  },
  {
    destination: "الدمام",
    from: "أبو ظبي",
    time: "01:25",
    backTime: "09:40",
    fee: 307.55,
    refundable: false,
    company: "الخليج للطيران",
    seatsLeft: 50,
    transitsNumber: 0,
    seatClass: "اقتصادية",
    logo: "AlkahleeJ.jpg",
  },
  {
    destination: "مسقط",
    from: "جدة",
    time: "05:04",
    backTime: "13:15",
    fee: 515.96,
    refundable: false,
    company: "طيران الخطوط القطرية",
    seatsLeft: 160,
    transitsNumber: 2,
    seatClass: "اقتصادية",
    logo: "Qatar.jpg",
  },
  // ... (more entries)
];

export { Stations, flights };
