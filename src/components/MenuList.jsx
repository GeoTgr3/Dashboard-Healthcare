import { CheckCircleTwoTone } from '@ant-design/icons';
import { Menu } from 'antd';

const MenuList = ({ setDashboardUrl }) => {
    const handleClick = () => {
        window.open("src/assets/PA.jpg", "_blank");
    };

    const items = [
        {
            key: 'IVS',
            icon: <CheckCircleTwoTone />,
            label: 'Indice de Vulnérabilité Sanitaire',
            children: [
                {
                    key: 'Cartographie',
                    label: 'Cartographie',
                    onClick: () => setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/139')
                }
            ]
        },
        {
            key: 'exposition',
            icon: <CheckCircleTwoTone />,
            label: 'Exposition',
            children: [
                {
                    key: 'Handicap',
                    label: 'Handicap',
                    onClick: () => setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/165')
                },
                {
                    key: 'VEF',
                    label: "Violence à l'égard des femmes",
                    onClick: () => setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/173')
                },
                {
                    key: 'VEE',
                    label: "Violence à l'égard des enfants",
                    onClick: () => setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/230')
                },
                {
                    key: 'MC',
                    label: 'Maladies chroniques',
                    children: [
                        {
                            key: 'Hyper',
                            label: 'Hypertension',
                            onClick: () => setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/264')
                        },
                        {
                            key: 'Diab',
                            label: 'Diabete',
                            onClick: () => setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/291')
                        }
                    ]
                },
                {
                    key: 'MDO',
                    label: 'Maladies à déclaration obligatoire',
                    onClick: () => setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/353')
                },
                {
                    key: 'MSS',
                    label: 'Maladies sous surveillance',
                    onClick: () => setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/361')
                },
                {
                    key: 'PA',
                    label: 'Personnes âgées',
                    onClick: () => setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/719')
                },
                {
                    key: 'PA2',
                    label: 'Personnes âgées section 2',
                    onClick: handleClick
                },
                {
                    key: 'SF',
                    label: 'Surveillance aux frontières'
                },
                {
                    key: 'VE',
                    label: 'Veille épidémiologique'
                }
            ]
        },
        {
            key: 'sensibilite',
            icon: <CheckCircleTwoTone />,
            label: 'Sensibilité',
            children: [
                {
                    key: 'Population',
                    label: 'Population/Densité',
                    onClick: () => setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/147')
                },
                {
                    key: 'IPM',
                    label: 'Indice de Pauvreté Multidimensionelle',
                    onClick: () => setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/155')
                }
            ]
        },
        {
            key: 'CA',
            icon: <CheckCircleTwoTone />,
            label: "Capacité d'Adaptation",
            children: [
                {
                    key: 'RSEEB',
                    label: 'RESSP',
                    onClick: () => setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/382')
                },
                {
                    key: 'RH',
                    label: 'RH',
                    onClick: () => setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/390')
                },
                {
                    key: 'RISUM',
                    label: 'RISUM',
                    onClick: () => setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/399')
                },
                {
                    key: 'REMS',
                    label: 'REMS',
                    onClick: () => setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/407')
                }
            ]
        },
        {
            key: 'Filtre',
            icon: <CheckCircleTwoTone />,
            label: 'Filtre',
            onClick: () => setDashboardUrl('http://localhost:8089/mapstore/#/context/Filtrage')
        },
        {
            key: 'RS',
            icon: <CheckCircleTwoTone />,
            label: 'Régions sanitaires',
            children: [
                {
                    key: 'BK',
                    label: 'Béni Mellal-Khénifra',
                    children: [
                        { key: 'sub1', label: 'Profil démographique' },
                        { key: 'sub2', label: 'Profil environnemental' },
                        { key: 'sub3', label: 'Profil géographique' },
                        { key: 'sub4', label: 'Profil capacité sanitaire' },
                        { key: 'sub5', label: 'Profil épidémiologique' },
                        { key: 'sub6', label: 'Profil gouvernance' },
                        { key: 'sub7', label: 'Profil technologique' },
                        { key: 'sub8', label: 'Profil culturel' },
                        { key: 'sub9', label: 'Profil de résilience' }
                    ]
                }
            ]
        },
        {
            key: 'AS',
            icon: <CheckCircleTwoTone />,
            label: 'Alerte Saniataire'
        }
    ];

    return (
        <Menu theme='dark' mode="inline" style={{ height: '100vh', overflow: 'auto' }} className='menu-bar' items={items} />
    );
}

export default MenuList;
