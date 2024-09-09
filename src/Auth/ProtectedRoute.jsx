import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './Contexts/AuhContexts';

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return <Navigate to="/register" state={{ message: 'You need to register to access this page.' }} />;
    }

    return children;
};

export default ProtectedRoute;