

export class Saving {
  id: number;
  userId: number;
  name: string;
  totalGoal: number;
  currentGoal: number;
  currentAmount: number;
  categoryId: number;
  recurringId: number;
  startDate: Date;
  endDate: Date;
  constructor(
    id = 0,
    userId = 0,
    name = '',
    totalGoal = 0,
    currentGoal = 0,
    currentAmount = 0,
    categoryId = 0,
    recurringId = 0,
    startDate = new Date(),
    endDate = new Date()
  ) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.totalGoal = totalGoal;
    this.currentGoal = currentGoal;
    this.currentAmount = currentAmount;
    this.categoryId = categoryId;
    this.recurringId = recurringId;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
