import { redirect } from 'react-router-dom';
import ViewDashboard from './view-dashboard/view-dashboard';

export const routes = [
  { index: true, loader: () => redirect('view-dashboard') },
  { path: 'view-dashboard', element: <ViewDashboard />, text: 'ViewDashboard' }
];
