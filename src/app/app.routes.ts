import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./pages/home/home.component").then((mod => mod.HomeComponent))
  },
  {
    path: 'about',
    loadComponent: () => import("./pages/about/about.component").then((mod => mod.AboutComponent))
  },
  {
    path: 'team',
    loadComponent: () => import("./pages/team/team.component").then((mod => mod.TeamComponent))
  },
  {
    path: 'contact',
    loadComponent: () => import("./pages/contact/contact.component").then((mod => mod.ContactComponent))
  },
  {
    path: 'shop',
    children: [
      {
        path: '',
        loadComponent: () => import("./pages/shop/shop.component").then((mod => mod.ShopComponent))
      },
      {
        path: ':name',
        loadComponent: () => import("./pages/shop-detail/shop-detail.component").then((mod => mod.ShopDetailComponent))
      },
    ],
  },
  {
    path: 'services',
    children: [
      {
        path: '',
        loadComponent: () => import("./pages/services/services.component").then((mod => mod.ServicesComponent))
      },
      {
        path: ':name',
        loadComponent: () => import("./pages/services/services.component").then((mod => mod.ServicesComponent))
      },
    ],
  },
  {
    path: 'news',
    children: [
      {
        path: '',
        loadComponent: () => import("./pages/news/news.component").then((mod => mod.NewsComponent))
      },
      {
        path: ':name',
        loadComponent: () => import("./pages/news-detail/news-detail.component").then((mod => mod.NewsDetailComponent))
      },
    ],
  },


  {
    path: '**',
    loadComponent: () => import("./pages/not-found/not-found.component").then((mod => mod.NotFoundComponent))
  },
];
