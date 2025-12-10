import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Lock, User, ArrowRight, BookOpen } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const success = login(username.toLowerCase(), password);
    if (!success) {
      setError('Invalid credentials. Try: chaitanya / pass123');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl flex overflow-hidden border border-gray-100">
        
        {/* Left Side - Brand / Image */}
        <div className="hidden md:flex w-1/2 bg-slate-900 text-white flex-col justify-between p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 z-0"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-6">
               <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                 <BookOpen className="text-white w-6 h-6" />
               </div>
               <h1 className="text-2xl font-bold tracking-wider">EduFolio</h1>
            </div>
            <h2 className="text-4xl font-serif font-bold leading-tight mb-4">
              Your Vocational Journey Starts Here.
            </h2>
            <p className="text-slate-400">
              Access your complete academic portfolio, track your skills, and showcase your achievements to the world.
            </p>
          </div>

          <div className="relative z-10 text-xs text-slate-500">
            © 2024 EduFolio Student Portal. All rights reserved.
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="text-center mb-10 md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h3>
            <p className="text-gray-500">Please sign in to access your portfolio.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-gray-50 transition-colors"
                  placeholder="Student ID / Username"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-gray-50 transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-100 flex items-center">
                <span className="font-bold mr-2">Error:</span> {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center bg-slate-900 text-white px-4 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Sign In
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
             <p className="text-sm text-gray-500 mb-2">Demo Credentials:</p>
             <div className="flex justify-center gap-2 text-xs font-mono text-slate-600">
                <span className="bg-gray-100 px-2 py-1 rounded">chaitanya / pass123</span>
                <span className="bg-gray-100 px-2 py-1 rounded">priya / pass123</span>
                <span className="bg-gray-100 px-2 py-1 rounded">rahul / pass123</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};