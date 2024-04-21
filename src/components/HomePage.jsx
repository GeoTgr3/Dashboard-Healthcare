import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import React from 'react';
import Button from 'react-bootstrap/Button'; // Import the Button component from react-bootstrap
import Collapsible from 'react-collapsible';
import Popup from 'reactjs-popup';
import Accueil from '../assets/Accueil.jpg'; // Import the large image
import './HomePage.css'; // Import the CSS file 

const HomePage = () => {
  const handleButtonClick = (buttonText) => {
    console.log(`${buttonText} button clicked!`);
  };

  return (
    <div className="home-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: `url(${Accueil}) no-repeat center/cover` }}>
            <img src="src\assets\sante.png" alt="Logo" className="logo" />

      <div className="button-container">
        <Popup
          trigger={
            <Button
              variant="primary"
              style={{
                transform: 'rotate(0deg)',
                transition: 'transform 0.5s',
                width: '100px',
                height: '100px',
                borderRadius: '50px', // make this half of width and height for a circle
                margin: '10px',
                backgroundColor: '#30D5C8' // this is a medical green color

              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'rotate(360deg)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
              onClick={() => handleButtonClick("Button 1")}
            >
              Objectif
            </Button>
          }
          modal
        >
          {close => (
               <div style={{
                fontFamily: 'Arial, sans-serif',
                lineHeight: 1.6,
                padding: '20px',
                border: '2px solid #ccc',
                borderRadius: '10px',
                backgroundColor: 'rgba(249, 249, 249, 0.8)',
                width: '80%',
                maxHeight: '80vh', // 80% of the viewport height
                overflow: 'auto', // add a scrollbar if necessary
                margin: 'auto'
              }}>              <a className="close" onClick={close}>
                &times;
              </a>
              <div className="header"> Objectif </div>
              <div className="content">
                <div className="content">
                  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6, padding: '20px', border: '2px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
                    <p style={{ marginBottom: '15px' }}>Objectifs de la cartographie de la vulnérabilité sanitaire</p>

                    <p style={{ marginBottom: '15px' }}>L'objectif général de la cartographie de vulnérabilité sanitaire est d’améliorer la réponse aux crises sanitaires et aux urgences de santé publique en identifiant, localisant et prenant en charge de manière proactive les populations vulnérables, y compris celles touchées par la morbidité chronique, la violence, la pauvreté, le handicap et le vieillissement, pour assurer une assistance équitable et adaptée.</p>

                    <p style={{ marginBottom: '15px' }}>Cette cartographie fournit une représentation spatiale et quantifiée de la vulnérabilité des différentes populations aux risques sanitaires, afin d'orienter les décisions politiques et les interventions en santé publique de manière efficace et ciblée. Cette approche cherche à maximiser l'utilisation des ressources disponibles pour réduire les inégalités de santé et améliorer le bien-être des populations les plus à risque. En d'autres termes, elle vise à identifier où et comment les ressources de santé publique peuvent être déployées de la manière la plus efficace pour protéger et promouvoir la santé des populations vulnérables.</p>

                    <p style={{ marginBottom: '15px' }}>Pour atteindre cet objectif général, les objectifs spécifiques seront :</p>

                    <ul style={{ marginBottom: '15px' }}>
                      <li>Identifier les zones de haute vulnérabilité : Localiser géographiquement les régions où les populations sont le plus susceptibles d'être affectées par des problèmes de santé en raison de facteurs socio-économiques, environnementaux, de comportement, ou d'autres déterminants de santé.</li>
                      <li>Quantifier la vulnérabilité sanitaire : À travers l'Indice de Vulnérabilité Sanitaire (IVS), évaluer de manière numérique le niveau de vulnérabilité des populations, permettant ainsi une comparaison objective entre différentes zones ou groupes.</li>
                      <li>Mettre en évidence les déterminants de la vulnérabilité : Analyser les facteurs contribuant à la vulnérabilité sanitaire pour comprendre les racines des inégalités de santé et cibler les interventions de manière adéquate.</li>
                      <li>Mettre en évidence les déterminants de la vulnérabilité : Analyser les facteurs contribuant à la vulnérabilité sanitaire pour comprendre les racines des inégalités de santé et cibler les interventions de manière adéquate.</li>
                      <li>Prioriser les interventions en santé publique : Utiliser la cartographie pour diriger les ressources et les efforts d'intervention vers les zones et les populations les plus nécessiteuses, en fonction de leur niveau de vulnérabilité.</li>
                      <li>Favoriser la planification stratégique et l'allocation des ressources : Offrir aux décideurs politiques et aux planificateurs de santé publique un outil basé sur des données pour l'allocation efficace des ressources financières, humaines et matérielles.</li>
                      <li>Intégrer la dimension « genre » : Assurer l'intégration de la dimension de genre dans la collecte de données et la planification des interventions, en prenant en compte les besoins et les vulnérabilités spécifiques des femmes et des hommes.</li>
                      <li>Adapter et mettre à jour de façon continue : Assurer que le système est suffisamment flexible pour s'adapter aux changements rapides dans le contexte sanitaire et social, et que les données sont régulièrement mises à jour pour refléter la situation actuelle.</li>
                      <li>Soutenir la surveillance et l'évaluation des interventions : Faciliter le suivi des tendances de vulnérabilité sanitaire au fil du temps et évaluer l'impact des politiques et des interventions de santé publique mises en œuvre.</li>
                      <li>Promouvoir l'équité en santé : En identifiant et en ciblant les populations vulnérables, la cartographie vise à réduire les inégalités de santé et à promouvoir un accès équitable aux services de santé et aux interventions préventives.</li>
                      <li>Engager les communautés et renforcer les capacités locales : Impliquer les communautés locales pour renforcer leur capacité à répondre aux défis sanitaires spécifiques.</li>
                    </ul>

                    <p>En résumé, la cartographie de vulnérabilité sanitaire vise à fournir une base solide pour la prise de décision éclairée, la planification stratégique et l'intervention ciblée en santé publique, avec l'objectif ultime d'améliorer la santé et le bien-être des populations les plus vulnérables.</p>
                  </div>
                </div>

              </div>
            </div>
          )}
        </Popup>

        <Popup
          trigger={
            <Button
              variant="primary"
              style={{
                transform: 'rotate(0deg)',
                transition: 'transform 0.5s',
                width: '100px',
                height: '100px',
                borderRadius: '50px', // make this half of width and height for a circle
                margin: '10px',
                backgroundColor: '#30D5C8' // this is a medical green color

              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'rotate(360deg)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
              onClick={() => handleButtonClick("Button 2")}
            >
              Principe
            </Button>
          }
          modal
        >
          {close => (
            <div style={{
              fontFamily: 'Arial, sans-serif',
              lineHeight: 1.6,
              padding: '20px',
              border: '2px solid #ccc',
              borderRadius: '10px',
              backgroundColor: 'rgba(249, 249, 249, 0.8)',
              width: '80%',
              maxHeight: '80vh', // 80% of the viewport height
              overflow: 'auto', // add a scrollbar if necessary
              margin: 'auto'
            }}>             <a className="close" onClick={close}>
                &times;
              </a>
              <div className="header"> Principe </div>
              <div className="content">
                <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6, padding: '20px', border: '2px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
                  <p style={{ marginBottom: '15px' }}>Principes de la cartographie de la vulnérabilité sanitaire</p>

                  <p style={{ marginBottom: '15px' }}>En période de crises sanitaires et d’urgence de santé publique, la cartographie de la vulnérabilité sanitaire, enrichie par l'élaboration d'un Indice de Vulnérabilité Sanitaire (IVS), offre une méthodologie raffinée pour cerner et agir sur les enjeux de santé publique affectant les populations à risque. L'IVS se positionne comme un outil central dans le processus de cartographie, permettant de quantifier et de hiérarchiser la vulnérabilité à travers une approche intégrée. Voici les principes de la cartographie de vulnérabilité sanitaire sur la base de l'utilisation de l'IVS :</p>

                  <ul style={{ marginBottom: '15px' }}>
                    <li>Inclusion et accessibilité : Assurer que le système soit conçu pour inclure tous les segments de la population vulnérable, en prenant en compte les obstacles spécifiques auxquels ils pourraient faire face, tels que les barrières linguistiques, culturelles, géographiques, économiques et technologiques.</li>
                    <li>Identification des indicateurs de vulnérabilité : Sélection et détermination des indicateurs clés qui influencent la vulnérabilité sanitaire, tels que les facteurs socio-économiques, morbidités chronique et l'accès aux services de santé, qui seront utilisés pour construire l'IVS.</li>
                    <li>Fiabilité et précision des données : Garantir l'exactitude des informations recueillies sur la population vulnérable et l’IVS, en utilisant des méthodes de collecte et d'analyse des données éprouvées et en validant ces données à travers des sources fiables.</li>
                    <li>Collecte et analyse de données : Collecte des données provenant de sources variées et fiables pour évaluer chaque indicateur de vulnérabilité. Ces données sont ensuite analysées pour déterminer leur impact sur la santé des populations concernées.</li>
                    <li>Construction de l'Indice de Vulnérabilité Sanitaire (IVS) : Agrégation des différents indicateurs de vulnérabilité à travers des méthodes statistiques ou de pondération pour former un indice composite qui mesure la vulnérabilité sanitaire de manière globale. L'IVS permet de simplifier la complexité des multiples facteurs de vulnérabilité en un score unique, facilitant ainsi la comparaison et la priorisation.</li>
                    <li>Modélisation spatiale et cartographie : Utilisation de systèmes d'information géographique (SIG) pour intégrer l'IVS et créer des cartes de vulnérabilité sanitaire. Cela permet de visualiser géographiquement les zones de haute vulnérabilité et de focaliser les interventions.</li>
                    <li>Approche multicritères et pondération : Application d’une méthodologie multicritère pour évaluer et pondérer les différents indicateurs selon leur importance relative dans la détermination de la vulnérabilité sanitaire. Cette approche assure que l'IVS reflète fidèlement les risques sanitaires.</li>
                    <li>Mise à jour et réévaluation périodique de l'IVS : Reconnaissant la dynamique de la vulnérabilité sanitaire, il est essentiel d'actualiser régulièrement l'IVS pour incorporer les changements dans les conditions de vie, les profils épidémiologiques, et l'efficacité des interventions.</li>
                    <li>Confidentialité et éthique : Prise en compte des aspects éthiques et de la protection des données dans la manipulation des informations sensibles pour la construction de l'IVS, veillant à ne pas stigmatiser les populations identifiées comme vulnérables.</li>
                    <li>Transparence et responsabilité : Veiller à ce que les processus de prise de décision, de gestion des données et de mise en œuvre soient transparents, et que les responsabilités soient clairement définies et communiquées à tous les niveaux.</li>
                    <li>Utilisation stratégique de l'IVS pour la prise de décision : L'IVS sert de fondement à l'élaboration de politiques publiques, à la planification des ressources et à la mise en œuvre de stratégies ciblées de santé publique visant à atténuer les vulnérabilités identifiées et à promouvoir l'équité en santé.</li>
                  </ul>

                  <p>L'intégration de l'Indice de Vulnérabilité Sanitaire dans la cartographie de vulnérabilité renforce la capacité des décideurs et des intervenants en santé publique lors des crises sanitaires et de santé publique à identifier précisément les populations à risque et à orienter efficacement les ressources et les interventions. Cette approche holistique et dynamique favorise une réponse adaptée aux défis de la santé publique, visant à réduire les inégalités et à améliorer les conditions de vie des populations vulnérables.</p>
                </div>
              </div>
            </div>
          )}
        </Popup>

        <Popup
          trigger={
            <Button
              variant="primary"
              style={{
                transform: 'rotate(0deg)',
                transition: 'transform 0.5s',
                width: '100px',
                height: '100px',
                borderRadius: '50px', // make this half of width and height for a circle
                margin: '10px',
                backgroundColor: '#30D5C8' // this is a medical green color

              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'rotate(360deg)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
              onClick={() => handleButtonClick("Button 3")}
            >
              Methode
            </Button>
          }
          modal
        >
          {close => (
            <div style={{
              fontFamily: 'Arial, sans-serif',
              lineHeight: 1.6,
              padding: '20px',
              border: '2px solid #ccc',
              borderRadius: '10px',
              backgroundColor: 'rgba(249, 249, 249, 0.8)',
              width: '80%',
              maxHeight: '80vh', // 80% of the viewport height
              overflow: 'auto', // add a scrollbar if necessary
              margin: 'auto'
            }}>               <a className="close" onClick={close}>
                &times;
              </a>
              <div className="header"> Methode </div>
                <Collapsible trigger="ASPECTS GÉNÉRAUX" triggerClassName="custom-trigger" triggerOpenedClassName="custom-trigger-open" contentOuterClassName="custom-content-outer" contentInnerClassName="custom-content-inner">
  <p style={{ marginBottom: '15px' }}>1.1 Contexte</p>

  <p style={{ marginBottom: '15px' }}>Dans le contexte actuel, caractérisé par une fréquence accrue des crises sanitaires et des urgences de santé publique à l'échelle mondiale, il devient impératif pour les nations d'évaluer et de renforcer la résilience de leurs systèmes de soins. La gouvernance d’un système de soins, dans une démarche proactive, doit reconnaître l'importance de la planification et de l'aide à la décision basée sur des données tangibles et des analyses prédictives, conscient de cette nécessité et soucieux de protéger la santé de sa population, devrait envisager la création d'un Indice de Vulnérabilité Sanitaire (IVS). Cet indice se propose d'être un outil d'analyse et de prévision permettant d'identifier les points de fragilité et de force du pays en matière de santé publique mais également destiné à être un outil central pour la cartographie de la vulnérabilité sanitaire au niveau national. L'IVS marocain se veut multidimensionnel, intégrant des indicateurs reflétant non seulement la vulnérabilité du système de soins lui-même mais aussi les facteurs démographiques et socio-économiques qui influencent la capacité d'une population à faire face aux crises sanitaires. Cet indice ambitionne de capter la complexité des facteurs contribuant à la vulnérabilité face aux menaces sanitaires, englobant les crises sanitaires, les urgences de santé publique, la robustesse du système de soins, les particularités démographiques et les conditions socio-économiques. À travers cet indice, il s'agit de mesurer la vulnérabilité de la population marocaine face aux risques sanitaires, d'anticiper les besoins en matière de soins de santé et de préparer les réponses adéquates. L'IVS marocain a pour vocation de transformer les données en informations stratégiques, facilitant ainsi la préparation et la riposte aux crises sanitaires, tout en soutenant la planification et l'optimisation des ressources. La présente note méthodologique a pour but de détailler les fondements théoriques, les critères de sélection des indicateurs, le processus de pondération et la formule d'agrégation qui sous-tendent l'élaboration de l'IVS. L'objectif est de fournir une compréhension claire des composantes de l'indice, assurant ainsi que celui-ci serve de référence pour la cartographie de la vulnérabilité sanitaire, la préparation aux crises et l'amélioration continue des politiques de santé publique au Maroc. En somme, cet indice est conçu pour être un instrument pivot d'aide à la décision pour les acteurs politiques, les gestionnaires de la santé et les analystes, dans leur quête d'une meilleure gestion des vulnérabilités sanitaires au Maroc renforçant la résilience nationale face aux défis sanitaires actuels et futurs. En établissant une méthodologie claire et rigoureuse, ce document vise à garantir que l'IVS devienne un instrument fiable pour les décideurs politiques, les professionnels de la santé et les chercheurs.</p>

  <p style={{ marginBottom: '15px' }}>1.2 Définition du concept et du cadre de l'Indice de Vulnérabilité Sanitaire (IVS)</p>

  <p style={{ marginBottom: '15px' }}>1.2.1 Objectif et utilisation de l'IVS</p>

  <p style={{ marginBottom: '15px' }}>L'Indice de Vulnérabilité Sanitaire (IVS) est conçu pour évaluer et quantifier le niveau de vulnérabilité sanitaire des populations à l'échelle provinciale/préfectorale, régionale, ou nationale. L'objectif de cet indice est de fournir un outil d'analyse et de décision pour les acteurs de la santé publique, les décideurs politiques, et les organismes de planification urbaine et sociale. En mesurant la vulnérabilité sanitaire, l'IVS vise à identifier les populations à risque, à guider l'allocation des ressources, et à prioriser les interventions pour réduire les inégalités en matière de santé.</p>

  <p style={{ marginBottom: '15px' }}>1.2.2 Sélection des composantes et des indicateurs</p>

  <p style={{ marginBottom: '15px' }}>L’IVS été structuré autour de trois composantes clés, reflétant les facteurs principaux qui influencent la vulnérabilité sanitaire d'une population. Après une Analyse Exploratoire des Données (AED), le nombre et le type de composantes ont été déterminés par l’Analyse en composantes Principales (ACP).</p>

  <p style={{ marginBottom: '15px' }}>1.2.2.1 Composante capacité d’adaptation du système de soins</p>

  <p style={{ marginBottom: '15px' }}>Cette composante mesure la capacité du système de santé du Maroc à s'adapter et à répondre efficacement aux crises sanitaires et aux urgences de santé publique. Elle peut inclure des indicateurs tels que : Disponibilité et accessibilité des services de santé, Ressources humaines, Capacité de réponse aux urgences sanitaires.</p>

  <p style={{ marginBottom: '15px' }}>1.2.2.2 Composante de sensibilité de la population</p>

  <p style={{ marginBottom: '15px' }}>Cette composante mesure la susceptibilité de la population marocaine à subir des dommages en raison de l'exposition aux maladies. Elle peut inclure des indicateurs tels que : Facteurs socio-économiques, Profil démographique, Prévalence des maladies chroniques.</p>

  <p style={{ marginBottom: '15px' }}>1.2.2.3 Composante exposition aux maladies</p>

  <p style={{ marginBottom: '15px' }}>Cette composante mesure le niveau d'exposition de la population marocaine aux maladies, notamment les maladies infectieuses et épidémiques. Elle peut inclure des indicateurs tels que : Prévalence des maladies infectieuses, Risques environnementaux, Mobilité de la population.</p>

  <p style={{ marginBottom: '15px' }}>1.2.3 Cadre conceptuel</p>

  <p style={{ marginBottom: '15px' }}>Le cadre conceptuel de l'IVS repose sur la compréhension que la vulnérabilité sanitaire est multifactorielle, résultant de l'interaction complexe entre les conditions sanitaires, démographiques, et socio-économiques. L'indice cherche à capturer cette complexité en intégrant divers indicateurs représentatifs de chaque dimension dans un score composite unique.</p>

  <p style={{ marginBottom: '15px' }}>La terminologie de base :</p>

  <p style={{ marginBottom: '15px' }}>La gestion efficace d'une crise sanitaire nécessite une compréhension approfondie de des liens entre la vulnérabilité, ses composantes principales et le risque pour développer des stratégies qui minimisent la sensibilité et l'exposition, tout en maximisant la capacité d'adaptation des systèmes de soins. Cela inclut des mesures préventives, des interventions ciblées pour protéger les populations les plus sensibles, et des efforts pour renforcer la résilience et la capacité d'adaptation du système de soins de santé.</p>

  <p style={{ marginBottom: '15px' }}>Crise sanitaire :</p>

  <p style={{ marginBottom: '15px' }}>Une crise sanitaire survient lorsqu'une situation de santé publique menace la santé de la population à grande échelle. Cela peut être dû à une épidémie, une pandémie, ou à une urgence de santé liée à des facteurs non infectieux, comme la pollution ou les catastrophes naturelles. La gestion d'une crise sanitaire nécessite une coordination rapide et efficace entre les organismes de santé publique, les gouvernements, et les organisations internationales.</p>

  <p style={{ marginBottom: '15px' }}>Urgence de santé publique :</p>

  <p style={{ marginBottom: '15px' }}>Une urgence de santé publique est déclarée lorsqu'une situation présente un risque immédiat et significatif pour la santé des populations. Cette déclaration permet de mobiliser des ressources et des mesures exceptionnelles pour y répondre. Par exemple, l'Organisation Mondiale de la Santé (OMS) peut déclarer une urgence de santé publique de portée internationale (USPPI) pour coordonner la réponse globale à une pandémie.</p>

  <p style={{ marginBottom: '15px' }}>Vulnérabilité :</p>

  <p style={{ marginBottom: '15px' }}>La vulnérabilité est une mesure de la capacité d'un individu, d'un groupe ou d'un système à anticiper, résister, faire face et se rétablir de l'impact d'une crise sanitaire. Mais également, à subir des dommages ou des pertes en raison de facteurs internes ou externes Elle est influencée par une variété de facteurs économiques, sociaux, culturels, politiques, de santé et environnementaux.</p>

  <p style={{ marginBottom: '15px' }}>Risque :</p>

  <p style={{ marginBottom: '15px' }}>Le risque, dans le contexte de la santé publique, peut être défini comme la probabilité qu'un événement négatif se produise et les conséquences de cet événement. En termes de crise sanitaire, cela peut inclure le risque d'exposition à des agents pathogènes, le risque de transmission de maladies, et le risque de conséquences graves pour la santé suite à une maladie.</p>

  <p style={{ marginBottom: '15px' }}>Exposition d'une Population :</p>

  <p style={{ marginBottom: '15px' }}>L'exposition fait référence à la proximité ou au contact d'une population avec des agents pathogènes ou des conditions environnementales qui peuvent causer des problèmes de santé. L'exposition est déterminée par des facteurs tels que la géographie, l'environnement de travail, la présence de comorbidité, les conditions de vie, et les pratiques sociales.</p>

  <p style={{ marginBottom: '15px' }}>Sensibilité d'une Population :</p>

  <p style={{ marginBottom: '15px' }}>La sensibilité est le degré auquel une population ou un individu est affecté par une exposition à un risque. Elle peut être influencée par l'âge, le statut socio-économique, les conditions de santé préexistantes, l'accès aux soins de santé, et d'autres facteurs de vulnérabilité.</p>

  <p style={{ marginBottom: '15px' }}>Capacité d'Adaptation d'un Système de Soins :</p>

  <p style={{ marginBottom: '15px' }}>La capacité d'adaptation d'un système de soins se réfère à sa flexibilité et à sa résilience face à une crise sanitaire. Elle inclut la capacité à augmenter rapidement les ressources (humaines, matérielles, financières), à ajuster les protocoles de traitement, à mettre en œuvre des campagnes de prévention et d'éducation, et à fournir des soins aux populations affectées.</p>

  <p style={{ marginBottom: '15px' }}>Le Lien entre ces Éléments :</p>

  <p style={{ marginBottom: '15px' }}>- Lien entre vulnérabilité et risque : Augmentation du risque : la vulnérabilité peut augmenter le risque d'exposition à des agents pathogènes et de conséquences graves. Par exemple, les individus vivant dans des conditions précaires ou avec un accès limité aux soins de santé sont plus susceptibles d'être exposés à des maladies et de subir des conséquences graves.</p>

  <p style={{ marginBottom: '15px' }}>- Interaction entre vulnérabilité et exposition : Plus une population est vulnérable (en raison de facteurs socio-économiques, de conditions de santé, etc.), plus l'effet de son exposition à un risque sanitaire est susceptible d'être grave.</p>

  <p style={{ marginBottom: '15px' }}>- Influence de la sensibilité sur les effets de l'exposition : La sensibilité modifie la manière dont l'exposition affecte la santé d'une population. Par exemple, les personnes âgées ou celles avec des conditions de santé préexistantes sont plus sensibles aux maladies infectieuses, ce qui peut entraîner des taux de morbidité et de mortalité plus élevés.</p>

  <p style={{ marginBottom: '15px' }}>- Rôle de la capacité d'adaptation : Une forte capacité d'adaptation du système de soins peut réduire l'impact d'une crise sanitaire en fournissant des réponses rapides et efficaces, en diminuant la vulnérabilité et en gérant mieux l'exposition et la sensibilité des populations.</p>

  <p style={{ marginBottom: '15px' }}>- Cycle de rétroaction : Ces éléments interagissent dans un cycle de rétroaction où le risque, la capacité d'adaptation du système de soins peut influencer la vulnérabilité et la sensibilité d'une population face à l'exposition, modifiant ainsi l'impact global de la crise sanitaire.</p>

  <p style={{ marginBottom: '15px' }}>En résumé, la vulnérabilité affecte le risque en augmentant la probabilité et l'impact des événements négatifs lors d'une crise sanitaire. Une approche efficace de gestion des risques de santé publique nécessite une compréhension approfondie des vulnérabilités spécifiques des populations et la mise en place de mesures pour les atténuer.</p>

  <p style={{ marginBottom: '15px' }}>La mise en place d'un Indice de Vulnérabilité Sanitaire (IVS) constitue une étape cruciale vers une meilleure compréhension et gestion des risques sanitaires au sein des populations. Dans cette optique, la note méthodologique qui suit s'appuie sur les recommandations de l'Organisation de Coopération et de Développement Économiques (OCDE), telles qu'articulées dans leur publication fondatrice "Handbook on Constructing Composite Indicators: Methodology and User Guide".</p>

  <p style={{ marginBottom: '15px' }}>Cette œuvre méthodologique, représente un guide de référence pour les praticiens désireux d'élaborer des indicateurs composites robustes et significatifs. Elle propose une série de lignes directrices, depuis la conceptualisation d'un indicateur composite jusqu'à son interprétation et son usage dans les politiques publiques.</p>

  <p style={{ marginBottom: '15px' }}>Conformément à cette méthodologie, la construction de l'IVS se déroulera en plusieurs étapes clés. Nous débuterons par l'identification et la sélection d'indicateurs pertinents qui, collectivement, captureront les différentes dimensions de la vulnérabilité sanitaire. Suivra une phase de normalisation des données afin de permettre des comparaisons équitables entre les divers indicateurs. La pondération et l'agrégation des indicateurs normalisés seront ensuite menées, reflétant leur importance relative et assurant que l'IVS représente fidèlement le concept de vulnérabilité sanitaire que nous souhaitons mesurer.</p>

  <p style={{ marginBottom: '15px' }}>La validation et l'analyse de la robustesse de l'IVS seront cruciales pour assurer sa fiabilité et sa pertinence. Des tests de sensibilité seront effectués pour évaluer l'impact des hypothèses sous-jacentes et des choix méthodologiques sur les résultats de l'indice. La transparence et la reproductibilité seront nos mots d'ordre tout au long du processus, assurant que notre indice peut être scruté, critiqué et amélioré par la communauté et les parties prenantes.</p>

  <p style={{ marginBottom: '15px' }}>L'objectif final de l'IVS est de devenir un outil d'évaluation et de planification en santé publique, permettant aux décideurs de cibler efficacement les interventions, de suivre les progrès au fil du temps et de mobiliser les ressources là où elles sont le plus nécessaires. En nous appuyant sur les directives de l'OCDE, nous nous engageons à établir un indicateur qui non seulement éclaire les vulnérabilités sanitaires actuelles mais guide également l'action prospective pour une société plus résiliente et en meilleure santé.</p>


                </Collapsible>

                <Collapsible trigger="ASSURANCE DE LA QUALITÉ DES DONNÉES POUR
L'INDICE DE VULNÉRABILITÉ SANITAIRE (IVS)" triggerClassName="custom-trigger" triggerOpenedClassName="custom-trigger-open" contentOuterClassName="custom-content-outer" contentInnerClassName="custom-content-inner">
                <p style={{ marginBottom: '15px' }}>La qualité des données est fondamentale pour la fiabilité et la validité de l'Indice de Vulnérabilité Sanitaire (IVS). Le détail des mesures et des procédures mises en place pour assurer une haute qualité des données utilisées dans la construction de l'IVS sont :</p>
<p style={{ marginBottom: '15px' }}>2.1 Sélection des sources de données</p>
<p style={{ marginBottom: '15px' }}>Les données pour les indicateurs sélectionnés dans le cadre de l'IVS ont été collectées à partir de sources fiables et reconnues. Ces sources reposent sur des bases de données gouvernementales et des enquêtes statistiques nationales ou régionales. La sélection des sources de données a été faite en priorisant celles qui offrent :</p>
<p style={{ marginBottom: '15px' }}>2.1.1 La fiabilité</p>
<p style={{ marginBottom: '15px' }}>Précision et cohérence des données sur le temps et entre différentes sources.</p>
<p style={{ marginBottom: '15px' }}>2.1.2 L'actualité</p>
<p style={{ marginBottom: '15px' }}>Données les plus récentes disponibles pour refléter l'état actuel de la vulnérabilité sanitaire.</p>
<p style={{ marginBottom: '15px' }}>2.1.3 La représentativité</p>
<p style={{ marginBottom: '15px' }}>Données couvrant l'ensemble de la population ou des échantillons représentatifs pour chaque indicateur.</p>
<p style={{ marginBottom: '15px' }}>2.2 Gestion des données manquantes</p>
<p style={{ marginBottom: '15px' }}>Il est courant de rencontrer des données manquantes lors de la compilation d'indicateurs à partir de diverses sources. Pour gérer ces lacunes, on a procédé :</p>
<p style={{ marginBottom: '15px' }}>2.2.1 Imputation</p>
<p style={{ marginBottom: '15px' }}>On a utilisé des méthodes statistiques d'imputation pour estimer les valeurs manquantes, telles que l'imputation par la moyenne, la médiane et des techniques plus complexes basées sur les modèles.</p>
<p style={{ marginBottom: '15px' }}>2.2.2 Analyse de sensibilité</p>
<p style={{ marginBottom: '15px' }}>On a évalué l'impact des données manquantes et des valeurs imputées sur les résultats finaux de l'IVS pour s'assurer que les estimations sont robustes.</p>
<p style={{ marginBottom: '15px' }}>2.3 Contrôle de qualité et vérification</p>
<p style={{ marginBottom: '15px' }}>Avant l'agrégation des indicateurs en un indice composite, un contrôle de qualité rigoureux a été effectué pour s'assurer de l'exactitude des données. Ce processus a compris :</p>
<p style={{ marginBottom: '15px' }}>2.3.1 Vérification des données</p>
<p style={{ marginBottom: '15px' }}>On a examiné les données pour détecter toute incohérence, erreur de saisie, ou anomalie.</p>
<p style={{ marginBottom: '15px' }}>2.3.2 Comparaison inter-sources</p>
<p style={{ marginBottom: '15px' }}>On a validé les données en les comparant entre différentes sources pour confirmer leur fiabilité.</p>
<p style={{ marginBottom: '15px' }}>2.3.3 Consultation d'experts</p>
<p style={{ marginBottom: '15px' }}>On a fait appel à des experts dans les domaines concernés pour valider la pertinence et la fiabilité des données et des méthodes de normalisation et d'imputation choisies.</p>
<p style={{ marginBottom: '15px' }}>La mise en œuvre de ces étapes assurera que l'IVS repose sur des données de la plus haute qualité possible, renforçant ainsi la fiabilité et la crédibilité de l'indice comme outil d'évaluation de la vulnérabilité sanitaire.</p>
                </Collapsible>



                <Collapsible trigger="NORMALISATION DES INDICATEURS POUR L'INDICE
DE VULNÉRABILITÉ SANITAIRE (IVS)" triggerClassName="custom-trigger" triggerOpenedClassName="custom-trigger-open" contentOuterClassName="custom-content-outer" contentInnerClassName="custom-content-inner">
               <p style={{ marginBottom: '15px' }}>La normalisation des indicateurs est une étape cruciale dans la construction de l'Indice de Vulnérabilité Sanitaire (IVS), permettant de rendre comparables des variables mesurées sur des échelles différentes. Cette méthodologie a été adoptée pour normaliser les indicateurs sélectionnés pour l'IVS, afin d'assurer une agrégation cohérente et significative :</p>
<p style={{ marginBottom: '15px' }}>3.1 Principe de la normalisation</p>
<p style={{ marginBottom: '15px' }}>La normalisation transforme les valeurs des différents indicateurs dans une échelle commune, facilitant ainsi leur combinaison dans un indice composite. Cette étape est essentielle pour garantir que chaque indicateur contribue de manière équitable à l'indice final, sans être influencé par son unité de mesure originale.</p>
<p style={{ marginBottom: '15px' }}>3.2 Méthodes de normalisation</p>
<p style={{ marginBottom: '15px' }}>Plusieurs méthodes de normalisation peuvent être utilisées. Pour l'IVS, nous avons privilégié deux approches principales en fonction de la nature des données et des objectifs spécifiques de l'indice :</p>
<p style={{ marginBottom: '15px' }}>3.2.1 Standardisation Z-score</p>
<p style={{ marginBottom: '15px' }}>Cette méthode consiste à soustraire la moyenne de chaque indicateur de ses valeurs individuelles et à diviser le résultat par l'écart-type de l'indicateur. Les scores Z résultants indiquent combien d'écarts-types une observation se situe par rapport à la moyenne. Cette approche est particulièrement adaptée aux données suivant une distribution normale.</p>
<p style={{ marginBottom: '15px' }}>3.2.2 Transformation Min-Max (rééchelonnement)</p>
<p style={{ marginBottom: '15px' }}>Cette technique transforme les données en les rééchelonnant dans un nouvel intervalle, généralement 0 (pour la valeur la plus basse) à 1 (pour la valeur la plus haute). Cette méthode est simple et préserve l'ordre des valeurs, la rendant utile pour des indicateurs avec des échelles de mesure très différentes. C’est cette méthode qui a été exploitée dans la majorité des cas.</p>
<p style={{ marginBottom: '15px' }}>3.3 Choix de la méthode de normalisation</p>
<p style={{ marginBottom: '15px' }}>Le choix entre la standardisation Z-score et la transformation Min-Max a été guidé par la distribution des données pour chaque indicateur et par la volonté de minimiser les effets de valeurs extrêmes. Pour les indicateurs susceptibles d'être influencés par des valeurs aberrantes ou extrêmes, la transformation Min-Max a été préférée car elle limite l'impact de ces extrêmes sur l'indice global. En revanche, pour les données approximativement normales et sans valeurs extrêmes significatives, la standardisation Z-score a été plus appropriée.</p>
<p style={{ marginBottom: '15px' }}>3.4 Application de la normalisation</p>
<p style={{ marginBottom: '15px' }}>Chaque indicateur de l'IVS a été normalisé selon la méthode sélectionnée, en suivant ces étapes :</p>
<p style={{ marginBottom: '15px' }}>3.4.1 Calcul des paramètres nécessaires (moyenne, écart-type pour le Z-score, valeurs minimales et maximales pour la transformation Min-Max).</p>
<p style={{ marginBottom: '15px' }}>3.4.2 Application de la formule de normalisation à chaque valeur de l'indicateur.</p>
<p style={{ marginBottom: '15px' }}>3.4.3 Vérification de la cohérence des valeurs normalisées</p>
<p style={{ marginBottom: '15px' }}>Pour s'assurer qu'elles sont correctement rééchelonnées et comparables entre elles.</p>
<p style={{ marginBottom: '15px' }}>3.5 Gestion des anomalies</p>
<p style={{ marginBottom: '15px' }}>Après normalisation, une analyse a été effectuée pour identifier et gérer les anomalies potentielles dans les données normalisées. Quand des valeurs normalisées semblent dévier de manière significative de l'attendu, une révision des données sources et des méthodes de normalisation appliquées ont été nécessaires.</p>
<p style={{ marginBottom: '15px' }}>La normalisation des indicateurs est une étape fondamentale qui prépare le terrain pour l'agrégation des données en un indice composite cohérent et significatif. En suivant ces principes et procédures, l'IVS sera en mesure de fournir une mesure robuste de la vulnérabilité sanitaire, bas sur une comparaison équitable entre ses différents composants.</p>   
                </Collapsible>



                <Collapsible trigger="PONDÉRATION DES INDICATEURS POUR L'INDICE DE
VULNÉRABILITÉ SANITAIRE (IVS)" triggerClassName="custom-trigger" triggerOpenedClassName="custom-trigger-open" contentOuterClassName="custom-content-outer" contentInnerClassName="custom-content-inner">
                  <p style={{ marginBottom: '15px' }}>La pondération des indicateurs est une composante essentielle dans la construction de l&#39;Indice de Vulnérabilité Sanitaire (IVS), car elle reflète l&#39;importance relative de chaque indicateur au sein de l&#39;indice composite. Le détaille de la démarche adoptée pour l&#39;assignation des poids aux différents indicateurs de l&#39;IVS :</p>

<p style={{ marginBottom: '15px' }}>4.1 Principes de pondération</p>

<p style={{ marginBottom: '15px' }}>La pondération doit être fondée sur une justification claire et transparente, basée sur la pertinence de chaque indicateur par rapport aux objectifs de l&#39;IVS. Les principes suivants ont été pris en compte :</p>

<p style={{ marginBottom: '15px' }}>4.1.1 Importance théorique</p>

<p style={{ marginBottom: '15px' }}>Les poids reflètent l&#39;importance théorique de chaque indicateur, basée sur la littérature scientifique et les cadres conceptuels de la vulnérabilité sanitaire.</p>

<p style={{ marginBottom: '15px' }}>4.1.2 Contribution routinière</p>

<p style={{ marginBottom: '15px' }}>Les poids tiennent compte de l&#39;importance routinière des indicateurs, dérivée de leur capacité à prédire ou à refléter la vulnérabilité sanitaire dans des études antérieures.</p>

<p style={{ marginBottom: '15px' }}>4.1.3 Rapidité de la réponse</p>

<p style={{ marginBottom: '15px' }}>Le poids tient compte de la priorisation des infrastructures, des ressources et des capacités de réponse sanitaire.</p>

<p style={{ marginBottom: '15px' }}>4.1.4 Propagation et risques</p>

<p style={{ marginBottom: '15px' }}>Le poids tient compte de la structure démographique comme facteur de risque et de propagation des maladies.</p>

<p style={{ marginBottom: '15px' }}>4.1.5 Résilience socio-économique</p>

<p style={{ marginBottom: '15px' }}>Le poids tient compte de la reconnaissance que les facteurs socio-économiques affectent la capacité d&#39;une population à résister et à se remettre d&#39;une crise.</p>

<p style={{ marginBottom: '15px' }}>4.2 Méthodologie de pondération</p>

<p style={{ marginBottom: '15px' }}>Différentes méthodes ont été utilisées pour la pondération des indicateurs, y compris :</p>

<p style={{ marginBottom: '15px' }}>4.2.1 Analyse d&#39;experts</p>

<p style={{ marginBottom: '15px' }}>On a consulté des experts dans les domaines de la santé, de la démographie, statistiques et des sciences sociales pour évaluer l&#39;importance relative des indicateurs.</p>

<p style={{ marginBottom: '15px' }}>4.2.2 Techniques statistiques</p>

<p style={{ marginBottom: '15px' }}>On a utilisé des méthodes statistiques telles que l&#39;analyse en composantes principales (ACP) pour déterminer les poids en fonction de la variance expliquée par chaque indicateur.</p>

<p style={{ marginBottom: '15px' }}>4.3 Assignation des poids</p>

<p style={{ marginBottom: '15px' }}>Les poids ont été assignés à chaque indicateur en suivant les étapes suivantes :</p>

<p style={{ marginBottom: '15px' }}>4.3.1 Compilation des évaluations</p>

<p style={{ marginBottom: '15px' }}>Nous avons rassemblé les évaluations d&#39;importance pour chaque indicateur provenant de différentes sources.</p>

<p style={{ marginBottom: '15px' }}>4.3.2 Normalisation des poids</p>

<p style={{ marginBottom: '15px' }}>Nous nous sommes assurés que la somme des poids attribués à tous les indicateurs soit égale à 100% puisqu’on utilise des pourcentages.</p>

<p style={{ marginBottom: '15px' }}>4.3.3 Validation des poids</p>

<p style={{ marginBottom: '15px' }}>Nous avons vérifié que les poids attribués correspondent aux objectifs de l&#39;IVS et aux principes de pondération établis.</p>

<p style={{ marginBottom: '15px' }}>4.4 Ajustement et équilibrage</p>

<p style={{ marginBottom: '15px' }}>4.4.1 Équilibrage des composantes</p>

<p style={{ marginBottom: '15px' }}>Les poids ont été ajustés pour assurer que chaque composante de l&#39;IVS (capacité d’adaptation, sensibilité de la population, exposition aux maladies) contribue de manière équilibrée à l&#39;indice final.</p>

<p style={{ marginBottom: '15px' }}>4.4.2 Révision basée sur la sensibilité</p>

<p style={{ marginBottom: '15px' }}>Nous avons ajusté les poids en fonction des résultats des analyses de sensibilité pour maintenir la robustesse de l&#39;IVS.</p>

<p style={{ marginBottom: '15px' }}>4.5 Justification des poids</p>

<p style={{ marginBottom: '15px' }}>La pondération des différentes composantes d&#39;un indice composite comme l&#39;Indice de Vulnérabilité Sanitaire (IVS) doit refléter les objectifs de l&#39;indice, l&#39;importance relative de chaque composante dans la détermination de la vulnérabilité sanitaire et les résultats des recherches ou des consultations d&#39;experts dans le domaine. L&#39;utilisation de l&#39;Indice de Vulnérabilité Sanitaire (IVS) en tant qu&#39;outil d&#39;évaluation des risques et de planification des interventions pendant les crises sanitaires et les urgences de santé publique au Maroc ajoute une nuance importante à la pondération de ses composantes.</p>

<p style={{ marginBottom: '15px' }}>La pondération que nous proposons attribue la plus grande importance à la composante « capacité « d’adaptation » (50%), suivie de l’« Exposition aux maladies » (30%) et de la « Sensibilité de la population » (20%).</p>

<p style={{ marginBottom: '15px' }}>La cohérence de cette pondération repose sur les éléments suivants :</p>

<p style={{ marginBottom: '15px' }}>4.5.1 Au niveau de la capacité d’adaptation</p>

<p style={{ marginBottom: '15px' }}>Durant les urgences de santé publique, les infrastructures de santé et la capacité de réponse (y compris les structures de soins, les ressources humaines et les équipements) deviennent des facteurs critiques. En effet, une crise sanitaire peut rapidement submerger des systèmes de santé déjà fragiles. La composante capacité d’adaptation reçoit le poids le plus élevé un poids de 50%, ce qui suggère que les aspects directs de la santé sont considérés comme les plus influents sur la</p>

<p style={{ marginBottom: '15px' }}>niveau global de vulnérabilité sanitaire.</p>

<p style={{ marginBottom: '15px' }}>4.5.2 Au niveau de l'exposition aux maladies</p>

<p style={{ marginBottom: '15px' }}>L'exposition aux maladies est également cruciale dans la détermination de la vulnérabilité sanitaire, car elle reflète la probabilité qu'une population soit affectée par des maladies infectieuses ou autres menaces pour la santé. Cette composante reçoit un poids de 30%, ce qui indique son importance significative dans la construction de l'IVS.</p>

<p style={{ marginBottom: '15px' }}>4.5.3 Au niveau de la sensibilité de la population</p>

<p style={{ marginBottom: '15px' }}>La sensibilité de la population, bien que moins pondérée que les deux autres composantes, reste néanmoins essentielle. Elle reflète la capacité d'une population à faire face aux défis posés par une</p>
<p style={{ marginBottom: '15px' }}>vulnérabilité sanitaire. Cela est logique car l&#39;indice est principalement utilisé pour orienter les interventions de santé publique et car les structures de soins, les ressources (humaines, matérielles et moyens de mobilité) et l’accessibilité, sont les principaux déterminants de la vulnérabilité dans le contexte étudié. Cette dimension est composée de 5 indicateurs à savoir : un indicateur relatif aux structures de soins, un relatif aux ressources humaines, un relatif au matériel lourd, un relatif à la morbidité, un relatif à l’accessibilité et le dernier indicateur relatif aux moyens de mobilité.</p>

<p style={{ marginBottom: '15px' }}>La répartition des 50% de pondération attribuée à la dimension santé entre ses différents indicateurs reflète leur importance relative dans la réponse aux crises sanitaires et urgences de santé publique. Voici notre approche pour la répartition, en tenant compte de l&#39;importance critique de chaque indicateur :</p>

<ul style={{ listStyleType: 'none', marginBottom: '15px', paddingLeft: '20px' }}>
  <li>Structures de soins (ambulatoires, hospitalisation et appui) : Ces infrastructures sont essentielles pour traiter les patients et fournir des soins directs. En situation de crise sanitaire, elles sont souvent le premier point de contact pour les soins et la prise en charge des cas. Elles pourraient donc recevoir une pondération plus importante.</li>
  <li>Ressources humaines (médecins, infirmiers, techniciens) : Le personnel de santé est au cœur de la réponse à toute crise sanitaire. Leur disponibilité et leur capacité à répondre de manière efficace sont cruciales.</li>
  <li>Matériel lourd (équipements médicaux spécialisés comme les respirateurs, les scanners, etc.) : Ces équipements sont nécessaires pour diagnostiquer et traiter les cas graves. Leur importance est accentuée dans les crises telles que les pandémies de maladies respiratoires.</li>
  <li>Moyens de mobilité (ambulances, véhicules de transport médical) : La capacité de transporter rapidement les patients vers des structures de soins appropriées est vitale, surtout dans les régions étendues ou difficiles d&#39;accès.</li>
  <li>Morbidité : Les taux de maladies chroniques ou de conditions préexistantes dans une population peuvent grandement influencer la vulnérabilité en temps de crise, car des populations avec des taux de morbidité élevés peuvent nécessiter des interventions plus intensives.</li>
  <li>Accessibilité : est souvent un facteur critique, car sans un accès adéquat aux services de santé, les autres indicateurs peuvent ne pas être aussi pertinents. Par conséquent, elle pourrait justifier une pondération significative.</li>
</ul>

<p style={{ marginBottom: '15px' }}>En tenant compte de ces considérations, une répartition cohérente pourrait être :</p>

<ul style={{ listStyleType: 'none', marginBottom: '15px', paddingLeft: '20px' }}>
  <li>Structures de soins : 12%</li>
  <li>Ressources humaines : 12%</li>
  <li>Matériel lourd : 8%</li>
  <li>Morbidité et facteurs d’exposition sociétale : 8% (2% MC, 2% FES, 2%MDO, 2%MSS)</li>
  <li>Accessibilité : 6%</li>
  <li>Moyens de mobilité : 4%</li>
</ul>

<p style={{ marginBottom: '15px' }}>Pour déterminer la pondération des indicateurs au sein de la catégorie de morbidité et facteurs de vulnérabilité sociétale de l&#39;Indice de Vulnérabilité Sanitaire (IVS), il est essentiel de considérer leur pertinence en fonction de la fréquence, de l&#39;impact sur les systèmes de santé, et de leur importance dans le contexte des crises sanitaires. Voici une analyse pour l&#39;ordre d&#39;importance :</p>

<ul style={{ listStyleType: 'none', marginBottom: '15px', paddingLeft: '20px' }}>
  <li>Maladies chroniques : Elles représentent une charge constante sur les systèmes de santé et peuvent rendre les populations particulièrement vulnérables lors des crises sanitaires, car les personnes souffrant de maladies chroniques sont souvent plus susceptibles de complications.</li>
  <li>Facteurs de vulnérabilité sociétale : ce terme met l&#39;accent sur la façon dont les structures sociales et les conditions environnementales peuvent contribuer à ou exacerber les risques et les inégalités auxquels les individus et les groupes sont confrontés au sein de la société. Cela souligne l&#39;importance de l&#39;environnement sociétal dans la création ou la mitigation de la vulnérabilité.</li>
  <li>Maladies à déclaration obligatoire : Celles-ci incluent souvent des maladies infectieuses graves qui peuvent provoquer des épidémies. Leur surveillance est cruciale pour une intervention rapide et efficace en cas de crise sanitaire.</li>
  <li>Maladies sous surveillance épidémiologique : Cela inclut les maladies émergentes ou ré-émergentes qui sont surveillées pour prévenir et contrôler les épidémies potentielles. Leur importance varie en fonction de l&#39;actualité épidémiologique.</li>
</ul>

<p style={{ marginBottom: '15px' }}>Dans le contexte d&#39;une crise sanitaire, les maladies à déclaration obligatoire et les maladies sous surveillance épidémiologique peuvent devenir soudainement très importantes si elles sont liées à l&#39;urgence actuelle (par exemple, une épidémie de maladie infectieuse). Cependant, les maladies chroniques et les facteurs de vulnérabilité sociétale représentent une vulnérabilité sous-jacente qui peut altérer la résilience d&#39;une population face à une crise sanitaire et nécessiter une gestion à long terme.</p>

<p style={{ marginBottom: '15px' }}>Une proposition de pondération pour la morbidité, considérant son poids de 8% dans la dimension santé, pourrait être :</p>

<ul style={{ listStyleType: 'none', marginBottom: '15px', paddingLeft: '20px' }}>
  <li>Maladies chroniques : 2%. Elles constituent une préoccupation constante qui affecte la capacité des individus à réagir à une crise.</li>
  <li>Facteurs de vulnérabilité sociétale : 2%. Idem.</li>
  <li>Maladies à déclaration obligatoire : 2%. Elles sont essentielles à surveiller pour les interventions rapides et pour prévenir les épidémies.</li>
  <li>Maladies sous surveillance épidémiologique : 2%. Elles sont importantes pour la surveillance et la préparation aux épidémies.</li>
</ul>

<p style={{ marginBottom: '15px' }}>Ces pondérations reconnaissent que, bien que les maladies chroniques et les facteurs de vulnérabilité sociétale soient une préoccupation constante, l&#39;importance des maladies infectieuses à déclaration obligatoire et celles sous surveillance épidémiologique peut augmenter de façon significative pendant une crise sanitaire spécifique. Cela donne une répartition qui totalise 50% pour la composante capacité d’adaptation. Il est important de noter que cette répartition est adaptée en fonction des spécificités du nouveau système de santé marocain et des types de crises sanitaires les plus fréquemment rencontrées.</p>
<p>Pour répartir la pondération de la composante sensibilité de la population, qui est de 20%, entre la densité de la population, l&#39;âge de la population et l’indice de pauvreté multidimensionnelle, il est crucial de tenir compte de la manière dont ces facteurs influencent la vulnérabilité sanitaire en temps de crise.</p>

<ul style={{ listStyleType: 'none', marginBottom: '15px', paddingLeft: '20px' }}>
  <li>Densité de la population : En cas de crise sanitaire, une forte densité de population peut faciliter la propagation rapide des maladies, surtout si elles sont contagieuses. Les régions densément peuplées nécessitent donc une surveillance et une réactivité accrues.</li>
  <li>Âge de la population : Les populations avec une grande proportion de personnes âgées ou de très jeunes enfants sont souvent plus vulnérables lors des crises sanitaires, car ces groupes sont généralement plus susceptibles de développer des formes graves de maladies et ont des besoins spécifiques en matière de soins de santé.</li>
  <li>Indice de Pauvreté Multidimensionnelle : reste un facteur crucial, car la pauvreté et les inégalités peuvent exacerber les crises sanitaires en limitant l&#39;accès aux services de santé, en réduisant la capacité des individus à maintenir une bonne hygiène et en augmentant les difficultés d&#39;accès à l&#39;eau potable ou à une nutrition adéquate.</li>
</ul>

<p>La pondération a été envisagée comme suit :</p>

<ul style={{ listStyleType: 'none', marginBottom: '15px', paddingLeft: '20px' }}>
  <li>Densité de la population : 10% - Les régions à forte densité de population peuvent nécessiter des ressources plus importantes pour le contrôle des maladies et la réponse aux crises.</li>
  <li>Âge de la population : 6% - Bien que l&#39;âge soit un facteur important, la densité de population pourrait être jugée plus critique dans la propagation rapide des maladies en situation d&#39;urgence sanitaire.</li>
  <li>Indice de Pauvreté Multidimensionnelle : 4% - Alors que cet IPM est considéré comme crucial, l’âge pourrait être jugé comme plus déterminant lors des crises sanitaires ou urgences de santé publique.</li>
</ul>

<p>Cette répartition tient compte du fait que, bien que les trois facteurs soient importants, la densité de population est un facteur multiplicateur dans la propagation des maladies infectieuses, ce qui justifie une pondération plus élevée dans le contexte d&#39;une crise sanitaire.</p>

<p>Au niveau de l’exposition aux maladies, un poids de 30% est approprié si l&#39;on considère que l’épidémiologie a un impact direct sur la vulnérabilité sanitaire par rapport aux facteurs démographiques, socio-économiques et de capacité d’adaptation.</p>

<p>Ainsi, la composante exposition aux maladies est un pilier fondamental dans l&#39;évaluation de la vulnérabilité sanitaire d&#39;une population. Sa pondération à 30% dans le calcul de l&#39;Indice de Vulnérabilité Sanitaire (IVS) peut être justifiée par plusieurs facteurs clés :</p>

<ul style={{ listStyleType: 'none', marginBottom: '15px', paddingLeft: '20px' }}>
  <li>Evidence Empirique : La justification commence par les études épidémiologiques et les recherches en santé publique qui montrent l&#39;impact significatif des maladies, notamment infectieuses ou chroniques, sur la santé des populations. L&#39;exposition aux maladies est un déterminant majeur de la santé publique dans la région.</li>
  <li>Priorités de Santé Publique : Le contexte sanitaire est marqué par des épidémies et des problèmes de santé spécifiques, comme des flambées de maladies infectieuses, des taux élevés de certaines maladies chroniques, ou des problèmes sanitaires émergents.</li>
  <li>Charge de Morbidité : Le poids de 30% peut être aligné avec la charge de morbidité des maladies dans la population cible. Les indicateurs tels que le nombre de cas et les taux de morbidité et de mortalité peuvent étayer la pondération.</li>
  <li>Analyse de Sensibilité : Une analyse de sensibilité a été effectuée pour voir comment les changements dans la pondération affectent l&#39;IVS global. Une pondération de 30% pour l&#39;exposition aux maladies permet de produire un indice robuste et sensible aux variations dans la santé de la population.</li>
  <li>Considérations Méthodologiques : L&#39;approche statistique, comme une Analyse en Composantes Principales (ACP) a indiqué que l&#39;exposition aux maladies explique une grande part de la variance dans les données de santé, ce qui justifie sa pondération significative.</li>
</ul>

<p>La pondération de 30% pour la composante exposition aux maladies est donc une reconnaissance de son rôle considérable dans la détermination de la capacité d&#39;une population à faire face aux problèmes de santé et à maintenir une bonne santé globale. Cette pondération permet de s&#39;assurer que l&#39;IVS est un outil équilibré qui tient compte de tous les facteurs essentiels à la compréhension de la vulnérabilité sanitaire au Maroc.</p>

<p>On a effectué une analyse de sensibilité pour évaluer comment les changements dans la pondération des dimensions affectent les scores globaux de l&#39;IVS. Cela a aidé à identifier la pondération qui rend l&#39;indice robuste et réactif aux variations dans les données.</p>

<p>Cela dit, il peut être judicieux de mener des analyses de sensibilité pour voir comment l&#39;IVS réagit aux variations de ces pondérations dans des scénarios de crise spécifiques. Cela permettrait de s&#39;assurer que l&#39;indice reste pertinent et utile pour la prise de décision en temps réel lors d&#39;urgences sanitaires.</p>





                </Collapsible>









                <Collapsible trigger="MÉTHODE D'AGRÉGATION POUR L'INDICE DE
VULNÉRABILITÉ SANITAIRE (IVS)" triggerClassName="custom-trigger" triggerOpenedClassName="custom-trigger-open" contentOuterClassName="custom-content-outer" contentInnerClassName="custom-content-inner">
                  <h3>Choix de la méthode d'agrégation</h3>
      <p>
        Pour l'agrégation des indicateurs de l'IVS, deux principales méthodes peuvent être envisagées : l'agrégation linéaire et l'agrégation géométrique. Après une évaluation minutieuse, la méthode d'agrégation linéaire a été choisie pour sa simplicité, sa transparence et sa flexibilité, permettant de pondérer différemment les indicateurs selon leur importance relative dans la détermination de la vulnérabilité sanitaire. Chaque indicateur contribue à l'indice final proportionnellement à son importance, déterminée par un système de pondération.
      </p>
      <h3>Formule d'agrégation</h3>
      <p>
        L'IVS est calculé en utilisant la formule d'agrégation suivante :
        IVS = [(PP * Exm) + (PP * Sp)] - (PP * Ca)
      </p>
      <p>
        Où :
        <ul>
          <li>Exm : Exposition au maladies.</li>
          <li>Sp : Sensibilité de la population.</li>
          <li>Ca : Capacité d'adaptation.</li>
          <li>PP : Poids de la pondération.</li>
        </ul>
        Cette formule comprend les trois composantes normalisées. Chaque composante est multipliée par son poids correspondant PP. Cette formulation implique que la capacité d'adaptation est soustraite de l'exposition et de la sensibilité. Cela suggère que la capacité d'adaptation peut atténuer l'impact de l'exposition et de la sensibilité sur la vulnérabilité sanitaire. On doit toujours s’assurer que la somme des poids PP est égale à 100 puisque nous utilisons des pourcentages pour que l'indice soit correctement normalisé.
      </p>
      <p>
        Cette formule assure également que chaque indicateur contribue à l'IVS proportionnellement à son poids, permettant ainsi de refléter de manière équilibrée les différentes dimensions de la vulnérabilité sanitaire.
      </p>
      <h3>Validation des poids et de la méthode d'agrégation</h3>
      <p>
        Après la définition initiale des poids et l'application de la formule d'agrégation, une phase de validation a été mise en œuvre. Cette phase comprend des analyses de sensibilité pour évaluer l'impact des variations des poids sur les scores de l'IVS. De plus, une comparaison avec des indices et des données externes a été effectuée pour vérifier la cohérence et la crédibilité de l'IVS.
      </p>
      <h3>Ajustements et révisions</h3>
      <p>
        Sur la base des résultats de la validation, des ajustements ont été nécessaires pour affiner les poids des indicateurs. L'objectif est d'optimiser la représentation de la vulnérabilité sanitaire par l'IVS, en assurant que l'indice soit à la fois robuste et sensible aux variations significatives des conditions de vulnérabilité.
      </p>
      <p>
        En suivant cette méthodologie d'agrégation, l'IVS vise à fournir un outil précis et fiable pour évaluer la vulnérabilité sanitaire, soutenant ainsi les efforts des décideurs et des professionnels de la santé dans l'identification des populations à risque et la mise en place de stratégies d'intervention efficaces.
      </p>
                </Collapsible>
                



                
            </div>
          )}
        </Popup>

        <Button
          variant="primary"
          style={{
            transform: 'rotate(0deg)',
            transition: 'transform 0.5s',
            width: '100px',
            height: '100px',
            borderRadius: '50px', // make this half of width and height for a circle
            margin: '10px',
            backgroundColor: '#30D5C8' // this is a medical green color

          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'rotate(360deg)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
          onClick={() => window.location.href = 'http://localhost:5173/app'}
        >
          Dashboard
        </Button>
      </div>
    </div>
  );
};

export default HomePage;