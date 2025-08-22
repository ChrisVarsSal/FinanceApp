export function useSavingsInfo() {
  const loan = {
    id: 1,
    name: "Juan Pérez",
    initialDeposit: 100,
    interestRate: 7.5,
    requestedDate: "2025-01-05",
    monthlyContribution: 500,
    targetAmount: 10000,
  };
  return { loan};
}
