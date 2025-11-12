---
layout: post
title: "Applications Android et Python communicant en BLE pour l'IRIT"
date: 2025-03-10
end: 2025-05-02
categories: internship best-project
project-type: "Stage"
image-path: "/assets/images/projects/city_model_irit.webp"
image-alt: "Maquette de ville connectée"
tags:
  [
    "Android",
    "Python",
    "Bluetooth Low Energy",
    "Raspberry Pi",
    "Android Studio",
  ]
description: "J’ai développé 2 applications, une Android en Java et une en Python sur un Raspberry Pi. Ces deux applications communiquaient entre elles via Bluetooth Low Energy (BLE) afin de simuler et de contrôler l’éclairage des lampadaires d’une ville connectée. L'application Python était une interface entre la communication BLE et la partie hardware."
---

# Contexte

J’ai réalisé un stage à l’**IRIT** (Institut de Recherche en Informatique de Toulouse), où j’ai participé à un projet de l'**IEEE** (Institute of Electrical and Electronics Engineers) intitulé **"My Smart Lighting"**. Ce projet était dirigé par mon tuteur de stage, ingénieur de recherche à l’IRIT.

L’objectif du projet était d’étudier et d’optimiser la **consommation d'énergie** des lampadaires d'une ville connectée.  
Pour cela, une **maquette de ville connectée** a été conçue afin de simuler le comportement de lampadaires. Cette dernière est contrôlée par une **application Python** tournant sur un **Raspberry Pi**.

Dans le cadre de ce projet, j’ai développé deux applications :

- Une **application Android** permettant de visualiser la consommation énergétique simulée et d’envoyer des commandes de contrôle (par exemple : réduire la luminosité, n’allumer les lampadaires qu’au passage d’un véhicule, etc.) ;
- Une **application Python** sur le Raspberry Pi, servant d’interface entre la **communication Bluetooth Low Energy (BLE)** et le **système électronique** de la maquette. La partie électronique, développée par mon maitre de stage, a été mise en place après la fin de mon stage. J’ai mis en place une **simulation** de cette partie matérielle pour pouvoir tester et valider le flux de communication.

Les deux applications communiquent via le protocole **Bluetooth Low Energy (BLE)**.
Le BLE est un protocole de communication sans fil, similaire au Wi-Fi ou au Bluetooth classique, mais conçu pour une **consommation d’énergie minimale**. Les appareils échangent des informations à travers des **services**, qui exposent des **données** ou des **actions** précises.
Dans ce projet, l’application Python propose un service BLE personnalisé (permettant d'accéder aux données de simulation et aux commandes de contrôle), auquel l’application Android se connecte pour échanger ces informations.

# Les applications

## Application Android

L’application Android, développée avec **Android Studio** en **Java**, utilise les fonctionnalités natives d’Android avec le **Bluetooth Low Energy (BLE)** afin de rechercher et se connecter au Raspberry Pi.

Concrètement, l’application scanne les appareils disponible à proximité à la recherche d’un **Service BLE spécifique** (avec un identifiant unique associé aux contrôles de la maquette). Ce service est fourni par l’application Python exécutée sur le Raspberry Pi.

L’application Android est structurée autour de trois états principaux :

- **État de connexion :** l’application scanne les alentours à la recherche d'un appareil proposant le service BLE cible. Une fois trouvé, elle tente de s’y connecter. En cas d’échec, plusieurs tentatives sont effectuées avant de relancer le scan.
- **État de réception des données :** une fois connectée, l’application demande les données de l’appareil (par exemple, la consommation énergétique actuelle). Ces données sont ensuite affichées à l’utilisateur. Si elles changent, le Raspberry Pi envoie automatiquement une notification à l’application pour mettre à jour les données.
- **État d’édition des données :** tant que la connexion est active, l’utilisateur peut modifier le mode de fonctionnement des lampadaires (par exemple : réduire la luminosité). Dans ce cas, l’application envoie une commande au Raspberry Pi, qui met à jour la simulation en conséquence.

{% include place-figure.html src="/assets/images/projects/android_connection_screens_irit.png" alt="Écrans de connexion de l’application Android" figure-nb="1" figure-text="Écrans de l’application Android lors de la connexion au Raspberry Pi" %}

{% include place-figure.html src="/assets/images/projects/android_data_received_irit.png" alt="Écrans de lecture de données de l’application Android" figure-nb="2" figure-text="Écrans de l’application Android lors de la réception et de l’affichage des données de simulation depuis le Raspberry Pi" %}

{% include place-figure.html src="/assets/images/projects/android_editor_irit.png" alt="Écrans d’édition de l’application Android" figure-nb="3" figure-text="Écrans de l’application Android lors de la modification du mode de fonctionnement des lampadaires (envoi de commandes de contrôle)" %}

## Application Python

L’application Python joue le rôle de **pont** entre la communication BLE et le système électronique de la maquette.

Elle s’appuie sur l’**API BlueZ** (logiciel Bluetooth officiel de Linux) pour créer un **Service BLE personnalisé**.  
Ce service expose deux éléments :

- Les **données de la simulation** (consommation, puissance, etc.).
- Un **mode de fonctionnement éditable** (permet de visualiser et modifier le mode à distance depuis l’application Android).

Pour interagir avec BlueZ, l’application Python utilise **D-Bus**, un système de **communication interprocessus (IPC)** permettant aux applications Linux d’échanger entre elles. Dans notre cas, D-Bus permet au programme Python de gérer les appareils connectés via BLE à travers BlueZ.

Bien que je me sois principalement concentré sur la partie communication BLE, j’ai également conçu l'**architecture** du futur système de contrôle électronique. J’ai mis en place différentes classes simulant les modes de fonctionnement des lampadaires, ainsi qu’un contrôleur chargé de gérer la transition entre ces modes.  
Avec ceci, le développeur suivant pourra facilement étendre ces classes pour les connecter au matériel réel.

Le diagramme de classes ci-dessous illustre la structure de l’application Python :  
la **partie supérieure** correspond aux classes liées au BLE, tandis que la **partie inférieure** regroupe les classes de simulation du contrôle électronique.

{% include place-figure.html src="/assets/images/projects/python_class_diagram_irit.png" alt="Diagramme de classes de l’application Python" figure-nb="4" figure-text="Diagramme de classes de l’application Python" %}

# Processus de développement

Pour démarrer le projet, j’ai d’abord cherché à bien comprendre le fonctionnement du Bluetooth Low Energy (BLE). J’ai pour cela réalisé un petit prototype d’application Android permettant d’activer/désactiver le Bluetooth et de détecter les appareils alentour. Cette étape m’a permis de me familiariser avec la communication BLE avant de m'attaquer au projet principal.

J’ai ensuite designé l’application Android avec un mélange entre une **maquette et un user flow**, détaillant chaque écran et interaction possible dans l'application. L'application finale est fidèle à cette maquette, avec quelques changements et améliorations au niveau de la gestion des erreurs.

{% include place-figure.html src="/assets/images/projects/android_mockup_irit.png" alt="Maquette et User flow de l’application Android" figure-nb="5" figure-text="Maquette de l’application Android" %}

L’application Python a été développée **en parallèle** de l’application Android afin d’assurer que la communication entre les deux fonctionne correctement.  
L’un des principaux défis de ce stage a été la **documentation limitée et parfois obsolète** concernant l’usage de Python avec BlueZ via D-Bus. J’ai réussi à surmonter cette difficulté en étudiant attentivement l’API BlueZ et en expérimentant avec de petits programmes de test jusqu’à obtenir une solution stable.

Avec le recul, je constate que le langage C disposait de plus de ressources et d’exemples à ce sujet, mais l’implémentation en Python a l'avantage d'être **plus flexible et facile à prendre en main** pour de futur développeurs.

# Impact

Les deux applications ont été présentées lors d’une exposition à l’IRIT pour illustrer l’avancement du projet **My Smart Lighting**.

Comme l’application Python a été conçue avec une structure **modulaire**, il sera facile d'y ajouter des extensions dans le futur et de la connecter au matériel réel.

Ce projet a également marqué une **étape clé** dans mon développement professionnel. Il m’a offert une expérience concrète avec des technologies que je connaissais surtout en théorie (**Java et Python**), ainsi que d’autres totalement nouvelles pour moi (**Bluetooth Low Energy, D-Bus, BlueZ**).

Au-delà des compétences techniques, ce stage m’a appris à **travailler de manière autonome**, à **organiser efficacement mon travail**, et à **chercher les bonnes ressources** même lorsque la documentation est limitée.
J’y ai aussi découvert le fonctionnement d’un **laboratoire de recherche** et la dynamique de **collaboration au sein d’une équipe de projet**.
