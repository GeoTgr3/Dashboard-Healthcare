import { CheckCircleTwoTone } from '@ant-design/icons';
import { Menu } from 'antd';

const MenuList = ({ setShowDashboard ,setDashboardUrl }) => {

//
    return (
        <Menu theme='dark' mode="inline" className='menu-bar'>




            <Menu.SubMenu key="IVS" icon={<CheckCircleTwoTone />} title="Indice de Vulnérabilité Sanitaire">
                <Menu.Item key="Objectif" >
                    Objectif
                </Menu.Item>
                <Menu.Item key="Principes" >
                    Principes
                </Menu.Item>
                <Menu.Item key="Methodologies">
                    Methodologies
                </Menu.Item>                                                                           
                <Menu.Item key="Cartographie" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8087/#/dashboard/88'); }} >
                    Cartographie
                </Menu.Item>
            </Menu.SubMenu>



            <Menu.SubMenu key="expostion" icon={<CheckCircleTwoTone />} title="Exposition">
                <Menu.Item key="Handicap" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8087/#/dashboard/96'); }} >
                    Handicap
                </Menu.Item>
                <Menu.Item key="VEF" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8087/#/dashboard/106'); }} >
                    Violence a l'egard des femmes
                </Menu.Item>
                <Menu.Item key="VEE">
                    Violence a l'egard des enfants
                </Menu.Item>
                <Menu.Item key="MC" >
                    Maladie chronique
                </Menu.Item>
                <Menu.Item key="MDO" >
                    Maladie a déclaration obligatoire
                </Menu.Item>
                <Menu.Item key="MSS" >
                    Maladie sous surveillance
                </Menu.Item>
            </Menu.SubMenu>


            <Menu.SubMenu key="sensibilite" icon={<CheckCircleTwoTone />} title="Sensibilité">

                <Menu.Item key="Population" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8087/#/dashboard/51'); }}>
                    Population/Densité
                </Menu.Item>
                <Menu.Item key="IPM" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8087/#/dashboard/73'); }}>
                    Indice de Pauvreté Multidimensionelle
                </Menu.Item>
            </Menu.SubMenu>



            <Menu.SubMenu key="CA" icon={<CheckCircleTwoTone />} title="Capacité d'Adaptation">
                <Menu.Item key="RSEEB" >
                    RSEEB
                </Menu.Item>
                <Menu.Item key="RH" >
                    RH
                </Menu.Item>
                <Menu.Item key="RISUM">
                    RISUM
                </Menu.Item>
                <Menu.Item key="REMS" >
                    REMS
                </Menu.Item>
                <Menu.Item key="SA" >
                    Structure d'appui
                </Menu.Item>
                <Menu.Item key="ML" >
                    Matériel lourd
                </Menu.Item>
                <Menu.Item key="Rh" >
                    Ressources humaines
                </Menu.Item>
            </Menu.SubMenu>




            <Menu.SubMenu key="RS" icon={<CheckCircleTwoTone />} title="Région Sanitaire">

            </Menu.SubMenu>
            <Menu.SubMenu key="AS" icon={<CheckCircleTwoTone />} title="Alerte Saniatire">

            </Menu.SubMenu>
        </Menu>
    );
}

export default MenuList;