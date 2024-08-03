import {
  ArrowLeftRight,
  Crosshair,
  NotebookTabs,
  Soup,
  TicketX,
  Truck,
  WalletMinimal,
} from "lucide-react";

export const StatsCardDetails = [
  {
    icon: <ArrowLeftRight />,
    bgIcon: "#273368",
    col: "#3E68FF",
    name: "Total Orders",
    number: "75",
    percentage: "3",
    positive: true,
  },
  {
    icon: <Truck />,
    bgIcon: "#125447",
    name: "Total Delivered",
    number: "70",
    col: "#01C88C",
    percentage: "3",
    positive: false,
  },
  {
    icon: <TicketX />,
    bgIcon: "#613339",
    name: "Total Cancelled",
    col: "#F65D5C",
    number: "05",
    percentage: "5",
    positive: true,
  },
  {
    icon: <WalletMinimal />,
    bgIcon: "#5A2B4B",
    name: "Total Revenue",
    number: "₹ 12K",
    col: "#EF67B8",
    percentage: "5",
    positive: false,
  },
];

export const NetProfitCardDetail = {
  name: "Net Profit",
  value: "4500.54",
  percent: "5",
};

export const DishesCardDetail = [
  {
    icon: <Crosshair />,
    iconbg: "#623138",
    col: "#E86C2F",
    name: "Goals",
  },
  {
    icon: <Soup />,
    iconbg: "#293268",
    col: "#6C7FD9",
    name: "Popular Dishes",
  },
  {
    icon: <NotebookTabs />,
    iconbg: "#204A60",
    col: "#2C95C3",
    name: "Menus",
  },
];

export const OrderTableDetails = [
  {
    id: 1,
    name: "John Doe",
    orderNo: "12345",
    amount: 100.0,
    status: "pending",
  },
  {
    id: 2,
    name: "Jane Smith",
    orderNo: "23456",
    amount: 150.5,
    status: "delivered",
  },
  {
    id: 3,
    name: "Sam Johnson",
    orderNo: "34567",
    amount: 200.75,
    status: "cancelled",
  },
  {
    id: 4,
    name: "Chris Lee",
    orderNo: "45678",
    amount: 250.0,
    status: "pending",
  },
  {
    id: 5,
    name: "Patricia Brown",
    orderNo: "56789",
    amount: 300.2,
    status: "delivered",
  },
  {
    id: 6,
    name: "Michael Davis",
    orderNo: "67890",
    amount: 350.5,
    status: "cancelled",
  },
  {
    id: 7,
    name: "Linda Martinez",
    orderNo: "78901",
    amount: 400.0,
    status: "pending",
  },
  {
    id: 8,
    name: "Robert Wilson",
    orderNo: "89012",
    amount: 450.75,
    status: "delivered",
  },
  {
    id: 9,
    name: "Karen Anderson",
    orderNo: "90123",
    amount: 500.25,
    status: "cancelled",
  },
  {
    id: 10,
    name: "Paul Thomas",
    orderNo: "01234",
    amount: 550.0,
    status: "pending",
  },
  {
    id: 11,
    name: "Emily White",
    orderNo: "13579",
    amount: 600.8,
    status: "delivered",
  },
  {
    id: 12,
    name: "James Harris",
    orderNo: "24680",
    amount: 650.5,
    status: "cancelled",
  },
  {
    id: 13,
    name: "Jessica Walker",
    orderNo: "13524",
    amount: 700.0,
    status: "pending",
  },
  {
    id: 14,
    name: "Brian Young",
    orderNo: "24635",
    amount: 750.3,
    status: "delivered",
  },
  {
    id: 15,
    name: "Laura King",
    orderNo: "35746",
    amount: 800.6,
    status: "cancelled",
  },
  {
    id: 16,
    name: "Daniel Scott",
    orderNo: "46857",
    amount: 850.0,
    status: "pending",
  },
  {
    id: 17,
    name: "Sarah Green",
    orderNo: "57968",
    amount: 900.9,
    status: "delivered",
  },
  {
    id: 18,
    name: "Andrew Hall",
    orderNo: "68079",
    amount: 950.75,
    status: "cancelled",
  },
  {
    id: 19,
    name: "Elizabeth Clark",
    orderNo: "79180",
    amount: 1000.0,
    status: "pending",
  },
  {
    id: 20,
    name: "Joshua Lewis",
    orderNo: "80291",
    amount: 1050.2,
    status: "delivered",
  },
];

export const customerFeedbackDetails = [
  {
    id: 1,
    name: "Alice Johnson",
    rating: 4.5,
    review:
      "The pasta was delicious and cooked to perfection! The sauce was flavorful, and the portion size was just right. Will definitely order again.",
  },
  {
    id: 2,
    name: "Bob Smith",
    rating: 5,
    review:
      "Best burger I have ever had. The meat was juicy, the bun was fresh, and the toppings were plentiful. Highly recommend!",
  },
  {
    id: 3,
    name: "Charlie Brown",
    rating: 3.5,
    review:
      "The salad was fresh but could use more dressing. The vegetables were crisp, and the ingredients were high quality, but it was a bit bland.",
  },
  {
    id: 4,
    name: "Diana Prince",
    rating: 2.5,
    review:
      "The soup was too salty and not hot enough. The flavor was good, but it was almost lukewarm when served, which was disappointing.",
  },
  {
    id: 5,
    name: "Ethan Hunt",
    rating: 5,
    review:
      "Absolutely loved the steak. Cooked exactly how I like it. The seasoning was perfect, and the side dishes complemented the meal well.",
  },
  {
    id: 6,
    name: "Fiona Gallagher",
    rating: 4,
    review:
      "Great pizza, but the crust was a bit too thick for my taste. The toppings were generous, and the cheese was melted perfectly.",
  },
  {
    id: 7,
    name: "George Michael",
    rating: 3,
    review:
      "The sushi was decent but not very flavorful. The fish was fresh, but the rice lacked seasoning, making the overall taste bland.",
  },
  {
    id: 8,
    name: "Hannah Montana",
    rating: 1,
    review:
      "Terrible service and the food was cold when it arrived. The presentation was poor, and the taste did not make up for the cold temperature.",
  },
];
