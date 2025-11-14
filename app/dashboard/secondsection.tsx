import { CreditCard, Lock, PersonStanding } from "lucide-react";

function SecondSection() {
  return (
    <div className="flex flex-col items-center gap-3 p-2">
      <div className="flex items-center gap-2 text-lg">
        <PersonStanding className="w-5 h-5 text-foreground bg-primary/60 rounded-full" />
        <span>95% Visa Success</span>
      </div>

      <div className="flex items-center gap-2 text-lg">
        <CreditCard className="w-6 h-6 text-foreground p-1 bg-amber-500 rounded-full" />
        <span>Pay Later in 3 Parts</span>
      </div>

      <div className="flex items-center gap-2 text-lg">
        <Lock className="w-6 h-6 text-foreground p-1 bg-green-500 rounded-full" />
        <span>20% Deposit</span>
      </div>
    </div>
  );
}

export default SecondSection;
