import { CheckCircleTwoTone } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const MenuList = ({ setShowDashboard, setDashboardUrl }) => {


    const [isModalVisible, setIsModalVisible] = useState(false);

const showModal = () => {
  setIsModalVisible(true);
};

const handleOk = () => {
  setIsModalVisible(false);
};

const handleCancel = () => {
  setIsModalVisible(false);
};


    //
    return (
        <Menu theme='dark' mode="inline"
        style={{ height: '100vh', overflow: 'auto' }} className='menu-bar'>




            <Menu.SubMenu key="IVS" icon={<CheckCircleTwoTone />} title="Indice de Vulnérabilité Sanitaire">

                <Menu.Item key="Cartographie" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/139'); }} >
                    Cartographie
                </Menu.Item>
            </Menu.SubMenu>



            <Menu.SubMenu key="expostion" icon={<CheckCircleTwoTone />} title="Exposition">
                <Menu.Item key="Handicap" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/165'); }} >
                    Handicap
                </Menu.Item>
                <Menu.Item key="VEF" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/173'); }} >
                    Violence a l'egard des femmes
                </Menu.Item>
                <Menu.Item key="VEE" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/230'); }}>
                    Violence a l'egard des enfants
                </Menu.Item>
                <Menu.SubMenu key="MC" title="Maladie Chronique" >
                    <Menu.Item Key="Hyper" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/264'); }} >Hypertension </Menu.Item>
                    <Menu.Item Key="Diab" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/291'); }} > Diabete </Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="MDO" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/353'); }}>
                    Maladie a déclaration obligatoire
                </Menu.Item>
                <Menu.Item key="MSS" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/361'); }}>
                    Maladie sous surveillance
                </Menu.Item>
                <Menu.Item key="PA" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/719'); }} >
                     Peronnes âgées  
                </Menu.Item>
            </Menu.SubMenu>


            <Menu.SubMenu key="sensibilite" icon={<CheckCircleTwoTone />} title="Sensibilité">

                <Menu.Item key="Population" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/147'); }}>
                    Population/Densité
                </Menu.Item>
                <Menu.Item key="IPM" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/155'); }}>
                    Indice de Pauvreté Multidimensionelle
                </Menu.Item>
            </Menu.SubMenu>



            <Menu.SubMenu key="CA" icon={<CheckCircleTwoTone />} title="Capacité d'Adaptation">
                <Menu.Item key="RSEEB" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/382'); }} >
                    REESP
                </Menu.Item>
                <Menu.Item key="RH" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/390'); }}  >
                    RH
                </Menu.Item>
                <Menu.Item key="RISUM" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/399'); }} >
                    RISUM
                </Menu.Item>
                <Menu.Item key="REMS" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/407'); }}  >
                    REMS
                </Menu.Item>

            </Menu.SubMenu>
            <Menu.Item key="Filtre" icon={<CheckCircleTwoTone />} title="Filtre" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/viewer/609'); }} >

                Filtre
            </Menu.Item>


            <Menu.SubMenu key="RS" icon={<CheckCircleTwoTone />} title="Région Sanitaires">

                <Menu.SubMenu key="BK" title="Béni Mellal-Khénifra">
                    

                    <Menu.Item key="sub1">profil démographique </Menu.Item>
                    <Menu.Item key="sub1">profil environnemental</Menu.Item>
                    <Menu.Item key="sub1">profil géographique</Menu.Item>
                    <Menu.Item key="sub1">profil capacité sanitaire</Menu.Item>
                    <Menu.Item key="sub1">profil épidémiologique</Menu.Item>
                    <Menu.Item key="sub1">profil gouvernance </Menu.Item>
                    <Menu.Item key="sub1">profil technologique </Menu.Item>
                    <Menu.Item key="sub1">profil culturel </Menu.Item>
                    <Menu.Item key="sub1">profil de résilience </Menu.Item>

                </Menu.SubMenu>


            </Menu.SubMenu>



            <Menu.SubMenu key="AS" icon={<CheckCircleTwoTone />} title="Alerte Saniataire ">
                


            </Menu.SubMenu>
        </Menu>
    );
}

export default MenuList;