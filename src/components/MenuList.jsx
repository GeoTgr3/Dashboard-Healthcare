import { BookOutlined, CompassFilled, DatabaseOutlined, GoldenFilled, HomeOutlined, PushpinFilled, SoundOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const MenuList = () => {
    return (
        <Menu theme='dark' mode="inline" className='menu-bar'>
            <Menu.Item key="home" icon={<HomeOutlined />}>
                Home
            </Menu.Item>



            <Menu.SubMenu key="IVS" icon={<DatabaseOutlined />} title="Indice de Vulnérabilité Sanitaire">
                <Menu.Item key="Objectif" >
                    Objectif
                </Menu.Item>
                <Menu.Item key="Principes" >
                    Principes
                </Menu.Item>
                <Menu.Item key="Methodologies">
                    Methodologies
                </Menu.Item>
                <Menu.Item key="Cartographie" >
                    Cartographie
                </Menu.Item>
            </Menu.SubMenu>



            <Menu.SubMenu key="expostion" icon={<BookOutlined />} title="Exposition">
                <Menu.Item key="Handicap" >
                    Handicap
                </Menu.Item>
                <Menu.Item key="VEF" >
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


            <Menu.SubMenu key="sensibilite" icon={<PushpinFilled />} title="Sensibilité">
                <Menu.Item key="Population" >
                    Population
                </Menu.Item>
                <Menu.Item key="Densité" >
                    Densité
                </Menu.Item>
                <Menu.Item key="IPM">
                    Indice de Pauvreté Multidimensionelle
                </Menu.Item>
            </Menu.SubMenu>



            <Menu.SubMenu key="CA" icon={<GoldenFilled />} title="Capacité d'Adaptation">
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




            <Menu.SubMenu key="RS" icon={<CompassFilled />} title="Région Sanitaire">

            </Menu.SubMenu>
            <Menu.SubMenu key="AS" icon={<SoundOutlined />} title="Alerte Saniatire">

            </Menu.SubMenu>
        </Menu>
    );
}

export default MenuList;