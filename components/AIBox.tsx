import React, { useState } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { generateStudentSummary } from '../services/geminiService';
import { FullStudentData } from '../types';

interface AIBoxProps {
  data: FullStudentData;
}

export const AIBox: React.FC<AIBoxProps> = ({ data }) => {
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateStudentSummary(data);
    setSummary(result);
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl shadow-lg p-6 text-white mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold flex items-center">
            <Sparkles className="w-6 h-6 mr-2 text-yellow-300" />
            AI Performance Insight
          </h2>
          <p className="text-indigo-100 text-sm mt-1">Generate a comprehensive summary for parents using Gemini AI.</p>
        </div>
        <button 
          onClick={handleGenerate}
          disabled={loading}
          className="mt-4 md:mt-0 bg-white text-indigo-600 hover:bg-indigo-50 px-5 py-2 rounded-full font-bold shadow-sm transition-all flex items-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Sparkles className="w-4 h-4 mr-2" />
          )}
          {loading ? 'Analyzing...' : summary ? 'Regenerate Summary' : 'Generate Summary'}
        </button>
      </div>

      {summary && (
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-in">
          <div className="prose prose-invert prose-sm max-w-none">
            <ReactMarkdown>{summary}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};