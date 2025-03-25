import React, { useEffect, useState } from 'react';
import { Clock, Calendar, User } from 'lucide-react';

const WelcomeBanner = () => {
    const [username, setUsername] = useState('User');
    const [currentTime, setCurrentTime] = useState(new Date());
    const [greeting, setGreeting] = useState('');
    
    useEffect(() => {
        // Get token from localStorage
        const authUser = localStorage.getItem('authUser');
        if (authUser) {
            try {
                const userData = JSON.parse(authUser);
                if (userData.token) {
                    // Decode JWT token
                    const base64Url = userData.token.split('.')[1];
                    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                    const jsonPayload = decodeURIComponent(
                        atob(base64)
                            .split('')
                            .map(function (c) {
                                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                            })
                            .join('')
                    );
                    
                    const decodedToken = JSON.parse(jsonPayload);
                    if (decodedToken.UserName) {
                        setUsername(decodedToken.UserName);
                    }
                }
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        }
        
        // Set up time and greeting
        const hour = currentTime.getHours();
        if (hour < 12) {
            setGreeting('Chào buổi sáng');
        } else if (hour < 18) {
            setGreeting('Chào buổi chiều');
        } else {
            setGreeting('Chào buổi tối');
        }
        
        // Update time every minute
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);
        
        return () => {
            clearInterval(timer);
        };
    }, [currentTime]);
    
    return (
        <div className="mb-5 card">
            <div className="card-body py-4">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div>
                        <div className="text-sm text-slate-500 dark:text-zink-200 mb-1">
                            {greeting}
                        </div>
                        <h2 className="text-xl font-semibold text-slate-800 dark:text-zink-50">
                            Chào mừng trở lại, <span className="text-custom-500">{username}</span>!
                        </h2>
                        <p className="text-slate-600 dark:text-zink-200 mt-1">
                            Đây là những gì đang diễn ra với cửa hàng của bạn hôm nay.
                        </p>
                    </div>
                    
                    <div className="flex items-center space-x-4 mt-3 md:mt-0">
                        <div className="flex items-center text-slate-600 dark:text-zink-200">
                            <Clock className="size-4 mr-1" />
                            <span>{currentTime.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                        <div className="flex items-center text-slate-600 dark:text-zink-200">
                            <Calendar className="size-4 mr-1" />
                            <span>{currentTime.toLocaleDateString('vi-VN', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center text-slate-600 dark:text-zink-200">
                            <User className="size-4 mr-1" />
                            <span>Quản lý</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeBanner; 