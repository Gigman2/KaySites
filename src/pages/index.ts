import { lazy } from 'react';

export const AuthRoot = lazy(() => import('./auth/root'));
export const DashboardRoot = lazy(() => import('./dashboard/root'));
export const AdminRoot = lazy(() => import('./admin/root'));


