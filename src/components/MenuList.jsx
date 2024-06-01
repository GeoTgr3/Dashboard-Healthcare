import { CheckCircleTwoTone, LeftOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
const MenuList = ({ setShowDashboard, setDashboardUrl }) => {


    // const [isModalVisible, setIsModalVisible] = useState(false);

    // const showModal = () => {
    //     setIsModalVisible(true);
    // };

    // const handleOk = () => {
    //     setIsModalVisible(false);
    // };

    // const handleCancel = () => {
    //     setIsModalVisible(false);
    // };

    // const [showImages, setShowImages] = useState(false);

    // const handleClick = () => {
    //     setShowImages(true);
    // };
    const handleClick = () => {
        window.open("src/assets/PA.jpg", "_blank");
    };

    //
    return (

        <Menu theme='dark' mode="inline"
            style={{ height: '100vh', overflow: 'auto' }} className='menu-bar'>
            <div style={{ padding: '10px' }}>
                <Link to="/home">
                    <LeftOutlined style={{ color: '#fff', fontSize: '20px' }} />
                </Link>
            </div>





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
                    Violence à l'égard des femmes
                </Menu.Item>
                <Menu.Item key="VEE" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/230'); }}>
                    Violence à l'égard des enfants
                </Menu.Item>
                <Menu.SubMenu key="MC" title="Maladies chroniques" >
                    <Menu.Item Key="Hyper" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/264'); }} >Hypertension </Menu.Item>
                    <Menu.Item Key="Diab" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/291'); }} > Diabete </Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="MDO" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/353'); }}>
                    Maladies à déclaration obligatoire
                </Menu.Item>
                <Menu.Item key="MSS" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/361'); }}>
                    Maladies sous surveillance
                </Menu.Item>
                <Menu.Item key="PA" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/dashboard/719'); }} >
                    Personnes âgées
                </Menu.Item>

                <Menu.Item key="PA2" onClick={handleClick}>
                    Peronnes âgées section 2
                </Menu.Item>
                <Menu.Item key="SF" >
                    Surveillance aux frontières
                </Menu.Item>
                <Menu.Item key="VE" >
                    Veille épidémiologique
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
                    RESSP
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
            <Menu.Item key="Filtre" icon={<CheckCircleTwoTone />} title="Filtre" onClick={() => { setShowDashboard(true); setDashboardUrl('http://localhost:8089/mapstore/#/context/Filtrage'); }} >

                Filtre
            </Menu.Item>


            <Menu.SubMenu key="RS" icon={<CheckCircleTwoTone />} title="Régions sanitaires">

                <Menu.SubMenu key="BK" title="Béni Mellal-Khénifra">


                    <Menu.Item key="sub1">Profil démographique </Menu.Item>
                    <Menu.Item key="sub2">Profil environnemental</Menu.Item>
                    <Menu.Item key="sub3">Profil géographique</Menu.Item>
                    <Menu.Item key="sub4">Profil capacité sanitaire</Menu.Item>
                    <Menu.Item key="sub5">Profil épidémiologique</Menu.Item>
                    <Menu.Item key="sub6">Profil gouvernance </Menu.Item>
                    <Menu.Item key="sub7">Profil technologique </Menu.Item>
                    <Menu.Item key="sub8">Profil culturel </Menu.Item>
                    <Menu.Item key="sub9">Profil de résilience </Menu.Item>

                </Menu.SubMenu>


            </Menu.SubMenu>



            <Menu.SubMenu key="AS" icon={<CheckCircleTwoTone />} title="Alerte Saniataire ">



            </Menu.SubMenu>
        </Menu>



    );
}

export default MenuList;