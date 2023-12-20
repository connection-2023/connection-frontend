export interface IgetPassFunction {
  take: number | undefined;
  currentPage?: number;
  targetPage?: number;
  firstItemId?: number;
  lastItemId?: number;
  passStatusOptions: 'AVAILABLE' | 'DISABLED';
  filterOption: 'LATEST' | 'HIGHEST_PRICE' | 'BEST_SELLING';
  lectureId?: string | number;
}

export interface IresponsePassData {
  itemList: IpassData[];
  totalItemCount: number;
}

export interface IpassData {
  id: number;
  title: string;
  price: number;
  availableMonths: number;
  maxUsageCount: number;
  salesCount: number;
  lecturePassTarget: {
    lecture: {
      id: number;
      title: string;
    };
  }[];
}