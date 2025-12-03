import { useState } from 'react';
import { Calendar, AlertCircle, TrendingUp } from 'lucide-react';
import { DeadlineCard, RiskBadge } from '../components/agents';
import { MOCK_DEADLINES, MOCK_DEADLINE_STATS } from '../services/api';
import type { DeadlineExtractionResult } from '../types/agents';

export default function SecretariaPage() {
  const [deadlines, setDeadlines] = useState<DeadlineExtractionResult>(MOCK_DEADLINES);
  const [isExtracting, setIsExtracting] = useState(false);

  const stats = MOCK_DEADLINE_STATS;

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target. files?.[0];
    if (!file) return;

    setIsExtracting(true);
    // Simulate API call - replace with real API call later
    setTimeout(() => {
      setIsExtracting(false);
      setDeadlines(MOCK_DEADLINES);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-8 h-8 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-900">Agente Secretaria</h1>
          </div>
          <p className="text-gray-600">
            Extracción inteligente de plazos y fechas críticas
          </p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
            <div className="text-sm text-gray-600">Total</div>
          </div>
          <div className="bg-red-50 rounded-lg p-4 shadow border-2 border-red-200">
            <div className="text-2xl font-bold text-red-600">{stats.overdue}</div>
            <div className="text-sm text-red-800">Vencidos</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 shadow border-2 border-orange-200">
            <div className="text-2xl font-bold text-orange-600">{stats.critical}</div>
            <div className="text-sm text-orange-800">Críticos</div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4 shadow border-2 border-yellow-200">
            <div className="text-2xl font-bold text-yellow-600">{stats.high}</div>
            <div className="text-sm text-yellow-800">Altos</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 shadow border-2 border-blue-200">
            <div className="text-2xl font-bold text-blue-600">{stats.medium}</div>
            <div className="text-sm text-blue-800">Medios</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 shadow border-2 border-green-200">
            <div className="text-2xl font-bold text-green-600">{stats.low}</div>
            <div className="text-sm text-green-800">Bajos</div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-indigo-600" />
            Subir Documento para Extraer Plazos
          </h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors">
            <input
              type="file"
              id="deadline-file-upload"
              onChange={handleFileUpload}
              accept=".pdf,. doc,. docx,.txt,.eml"
              className="hidden"
              disabled={isExtracting}
            />
            <label
              htmlFor="deadline-file-upload"
              className="cursor-pointer flex flex-col items-center gap-2"
            >
              <Calendar className="w-12 h-12 text-gray-400" />
              <span className="text-lg font-medium text-gray-700">
                {isExtracting ? 'Extrayendo plazos...' : 'Click para subir documento'}
              </span>
              <span className="text-sm text-gray-500">
                PDF, DOC, DOCX, TXT, EML
              </span>
            </label>
          </div>
        </div>

        {/* Deadlines List */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-600" />
            Plazos Detectados ({deadlines.count})
          </h2>
          
          {deadlines.deadlines.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              No hay plazos extraídos.  Suba un documento para comenzar.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {deadlines.deadlines.map((deadline, idx) => (
                <DeadlineCard key={idx} deadline={deadline} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}