# ServerNodeJs
Projet d'implementation d'un serveur HTTP avec NodeJS, Express et une base de donnée MySql, ayant pour but de pouvoir effectuer les opérations CRUD (Create Retrieve Update Delete).

# Installation
1-- Il vous faudra avant tout un serveur de bases de données installé sur votre machine: MAMP pour macOS, LAMP pour Linux, WAMP pour Windows, et un editeur de texte(VSCode par exemple).

2- Appuyer sur le bouton en vert et copier le lien pour cloner le projet.

3- Se positionner sur le repertoire ou vous voulez cloner le dépot,(ex: mkdir NOMDUDOSSIER , cd NOMDUDOSSIER) ensuite git clone LIENCOPIÉ.

4- Normalement dans votre dossier NOMDUDOSSIER vous aurez un nouveau dossier nommé ServerNodeJs, ouvrez ce dossier avec votre éditeur préféré.

5) Ensuite vous devrez lancer votre serveur web (pour ma part MAMP,on appuie juste sur start server), ensuite vous devez aller sur phpmyadmin et appuyer sur le boutton import, naviguez jusqu'au projet téléchargé, et choisissez le fichier requete.sql, et enfin appuyer sur go pour mettre en place votre base de données.

6) Une fois la base de données ok, rendez vous sur votre editeur et ouvrez son terminal (N'oubliez pas de vous positionnez sur ServerNodeJs) et faites  npm init, npm i dotenv.

7) enfin npm start et allez sur  votre navigateur et saisissez localhost:5000 et naviguez !


# ParserFluxNode
Script Nodejs qui parse le flux des articles d'un media et ecrit les données dans un fichier.csv

# Installation 
1- Faire un cd ParserNodeJs

5- ouvrez le terminal de votre editeur et (n'oubliez pas de vous positionnez sur le dossier ParserFluxNode ) et faites un npm init taper sur la touche entrée jusqu'à la fin de l'installation, ensuite npm i rss-parser et appuyer sur entrée


6) faites npm start, normalement un fichier nommé fichier.csv a été crée au même niveau que le fichier server.js.

7) ouvrez le fichier et visualiser le resultat

