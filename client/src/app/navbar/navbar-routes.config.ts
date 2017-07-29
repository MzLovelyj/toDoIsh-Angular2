import { MenuType, RouteInfo } from './navbar.metadata';

export const ROUTES: RouteInfo[] = [
  { path: '', title: 'Todo-App', menuType: MenuType.BRAND },
  { path: 'todolist', title: 'Todo Lists', menuType: MenuType.LEFT },
  { path: 'login', title: 'Log In', menuType: MenuType.RIGHT },
  { path: 'Sign Up', title: 'Sign Up', menuType: MenuType.RIGHT }
];
