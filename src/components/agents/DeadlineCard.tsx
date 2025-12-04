import { Calendar, AlertTriangle } from 'lucide-react';
import type { Deadline } from '../../types/agents';

interface DeadlineCardProps {
  deadline: Deadline;
}

const getRiskColor = (riskLevel: string) => {
  switch (riskLevel) {
    case 'overdue':
      return 'bg-red-100 text-red-800 border-red-300';
    case 'critical':
      return 'bg-orange-100 text-orange-800 border-orange-300';
    case 'high':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    case 'medium':
      return 'bg-blue-100 text-blue-800 border-blue-300';
    case 'low':
      return 'bg-green-100 text-green-800 border-green-300';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300';
  }
};

const getRiskLabel = (riskLevel: string) => {
  switch (riskLevel) {
    case 'overdue':
      return 'VENCIDO';
    case 'critical':
      return 'CRÍTICO';
    case 'high':
      return 'ALTO';
    case 'medium':
      return 'MEDIO';
    case 'low':
      return 'BAJO';
    default:
      return riskLevel. toUpperCase();
  }
};

export function DeadlineCard({ deadline }: DeadlineCardProps) {
  const riskColor = getRiskColor(deadline.risk_level);
  const isOverdue = deadline.working_days_remaining < 0;

  return (
    <div className={`border-2 rounded-lg p-4 ${riskColor}`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          {isOverdue && <AlertTriangle className="w-5 h-5" />}
          <Calendar className="w-5 h-5" />
        </div>
        <span className="text-xs font-bold px-2 py-1 rounded">
          {getRiskLabel(deadline.risk_level)}
        </span>
      </div>

      <p className="font-medium mb-2">{deadline.description}</p>

      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold">{deadline.date}</span>
        <span>
          {isOverdue
            ? `${Math.abs(deadline.working_days_remaining)} días de retraso`
            : `${deadline.working_days_remaining} días hábiles`}
        </span>
      </div>
    </div>
  );
}