import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({component}) => {
    const {user, token} = useSelector(state => state.auth);
    if(user?.role !== 'admin') return(<Navigate to="/login" />);
    if(user?.role === 'admin') return component
}

export default AdminRoute