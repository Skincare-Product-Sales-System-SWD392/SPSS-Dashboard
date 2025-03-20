import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'slices/store';
import { User, UserCircle } from 'lucide-react';

const WelcomeBackChart = () => {
    // Get user info from localStorage
    const userInfo = JSON.parse(localStorage.getItem('authUser') || '{}');
    const username = userInfo?.name || 'User';
    const avatarUrl = userInfo?.imageUrl || '';
    const role = userInfo?.role || 'User';
    
    return (
        <React.Fragment>
            <div className="col-span-12 card lg:col-span-6 2xl:col-span-4">
                <div className="card-body">
                    <div className="flex flex-col items-center justify-center p-4 text-center">
                        {avatarUrl ? (
                            <img 
                                src={avatarUrl} 
                                alt={username} 
                                className="size-24 rounded-full mb-4 border-4 border-custom-100 dark:border-custom-800"
                            />
                        ) : (
                            <div className="flex items-center justify-center size-24 rounded-full bg-custom-100 dark:bg-custom-800 mb-4">
                                <UserCircle className="size-16 text-custom-500" />
                            </div>
                        )}
                        
                        <h3 className="text-xl font-semibold mb-1">Welcome back, {username}!</h3>
                        <p className="text-slate-500 dark:text-zink-200 mb-4">{role}</p>
                        
                        <div className="grid grid-cols-2 gap-4 w-full mt-2">
                            <div className="bg-custom-50 dark:bg-custom-900/20 p-4 rounded-lg">
                                <h4 className="text-lg font-medium text-custom-500">Your Role</h4>
                                <p className="text-slate-600 dark:text-zink-200">{role}</p>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                                <h4 className="text-lg font-medium text-purple-500">Last Login</h4>
                                <p className="text-slate-600 dark:text-zink-200">{new Date().toLocaleDateString()}</p>
                            </div>
                        </div>
                        
                        <div className="w-full mt-4 bg-slate-100 dark:bg-zink-600 p-4 rounded-lg">
                            <h4 className="text-lg font-medium mb-2">Quick Actions</h4>
                            <div className="grid grid-cols-3 gap-2">
                                <button className="p-2 bg-custom-500 text-white rounded hover:bg-custom-600 transition-all">
                                    Products
                                </button>
                                <button className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all">
                                    Orders
                                </button>
                                <button className="p-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-all">
                                    Reports
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default WelcomeBackChart; 