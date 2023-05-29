// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'products',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'flashcards',
    path: '/dashboard/flashcard',
    icon: "mdi:card-multiple",
  },
  {
    title: 'learning material',
    path: '/dashboard/learn',
    icon: "mdi:learn-outline",
  },
  {
    title: 'Mock test',
    path: '/dashboard/mock',
    icon: "icomoon-free:newspaper",
  },
  {
    title: 'Real test',
    path: '/dashboard/real',
    icon: "ps:paper-tablet",
  },
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: icon('ic_user'),
  // },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: icon('ic_cart'),
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: icon('ic_blog'),
  // },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
