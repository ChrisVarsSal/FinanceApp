export function useLoanInfo() {
  const loan = {
    id: 1,
    name: "Juan Pérez",
    amount: 5000,
    interestRate: 5,
    term: 12,
  };
  return { loan };
}
