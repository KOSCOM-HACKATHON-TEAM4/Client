// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [

  {
    title: '초기화면',
    path: '/dashboard/app',
    icon: icon('credit'),
  },
  {
    title: '시뮬레이터',
    path: '/dashboard/products',
    icon: icon('folder'),
  },
  {
    title: '대시보드',
    path: '/dashboard/view',
    icon: icon('credit'),
  },
  {
    title: '목표 달성 릴레이',
    path: '/dashboard/social',
    icon: icon('folder'),
  },
];

export default navConfig;
