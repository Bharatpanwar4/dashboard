import { ReactNode } from "react";

export interface ISidebarListProps {
    id: Number;
    label: string;
    iconName: ReactNode;
  }
  
 export interface StatsCardDetailProps {
    icon: ReactNode;
    bgIcon: string;
    col:string;
    name: string;
    number: string;
    percentage: string;
    positive: boolean;

  }
  export interface INetProfitCardDetailProps{
    name:string;
    value:string;
    percent:string;
  }

  export interface IDishCardProps {
    icon: ReactNode;
    iconbg: string;
    col: string;
    name: string;
  }
  
  export interface IOrderTableProps {
    id: number;
    name: string;
    orderNo: string;
    amount: number;
    status: string;
  }

  export interface IFeedbackProps {
    id: number;
    name: string;
    rating: number;
    review: string;
  }