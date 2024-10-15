

export class Saving {
  id: number;
  userId: number;
  name: string;
  totalGoal: number ;
  currentAmount: number;
  categoryId: number;
  startDate: Date;
  endDate: Date;
  constructor(
    id = 0,
    userId = 0,
    name = '',
    totalGoal = 0,
    currentAmount = 0,
    categoryId = 0,
    startDate = new Date(),
    endDate = new Date()
  ) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.totalGoal = totalGoal;
    this.currentAmount = currentAmount;
    this.categoryId = categoryId;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
