# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## This project is a TodoList using React and Typescript

Hello everyone! This project is the result of the HPI technical test. I have to make a todo list using React and Typescript. This application is connected with an external API (https://609a4b280f5a13001721a85b.mockapi.io/tasks). This API allows us to save a todo and his state even if we refresh the page.
Do not hesitate to clone this repository and use is as you want. Enjoy it!

## How to use it

When you start the application, a menu with three choices is displayed ("All todos", "Completed todos", "Settings"). You also have an input text with submit button.

First, if you click on "All todos" button, you will display a list of all todos which are not been done. Each todo have two buttons. One to make it done, and to allows it to being sent to the completed todos list. The other button is to delete the todo. 

Then, you have the "Completed todos" page. It's a list of all completed todos. You can make the same actions as "All todos" page. But in this page, the button "Done" becomes "Not done!". You can make a todo "not completed" again, so the todo goes back to the "All todos" list.

Finally, there is a settings page to change the theme of the application. You have two themes: HPI theme, Dark side theme.

You can also add a new todo with the input below the menu. You can press the button "Submit" to submit it, or the keyboard button "Enter".

A "Delete completed todos" button allows you to delete all completed todos list. 

All lists are order by date, the most recent to the oldest.

Each action displays a toaster at top-left of the application. You can hover the toaster to keep it active. You can also close it with the cross button. The design is different depending on the action performed.

Each action is saved on the API, so, if you refresh the application, the saved state is the same as before. Except the "Delete completed todos" feature which is not connected with API.

## Features developed

- Adding a new todo with the input
- Update a todo state (is completed or not)
- Delete a todo
- Delete all completed todos
- Display all todos list
- Display completed todos list
- Ordering list by date.
- Settings the theme (dark mode)

## Features under development

- Display date in todos
- "Delete completed todos" interact with the API 

## Remaining functionalities

- Error handling
- Any others suggestions .. ?

## Libraries used

- shortid = to create a random ID for todo which is not a number.
- react-toast-notification = use for the toaster. Time saving and very easy to use. The documentation is good as well.
- react-router-dom = use for route. Very useful for the page system and time saving.
- axios = use for HTTP requests, to interact with the API and very easy to use it.
- font-awesome = Some icons in your application is good too :D


### Français

## Ce projet est une TodoList utilisant React et Typescript

Bonjour à tous ! Ce projet est le résultat du test technique HPI. Je devais effectuer une liste de tâches en utilisant React et Typescript. Cette application est connectée à une API externe (https://609a4b280f5a13001721a85b.mockapi.io/tasks. 
Cette API nous permet de sauvegarder une tâche et son état même si nous actualisons la page.
N'hésitez pas à cloner ce repertoire et à l'utiliser comme vous le souhaitez. Profitez-en !

## Comment l'utiliser

Au démarrage de l'application, un menu avec trois choix s'affiche ("All todos", "Completed Todos", "Settings"). Vous avez également un champ avec le bouton d'envoi pour ajouter une tâche.

Tout d'abord, si vous cliquez sur le bouton «All todos», vous afficherez une liste de toutes les tâches qui n'ont pas été effectuées. Chaque tâche a deux boutons. Un pour le completer, et l'envoyer ainsi à la liste des tâches terminées. L'autre bouton pour supprimer la tâche.

Ensuite, vous avez la page "Completed todos". C'est une liste de toutes les tâches terminées. Vous pouvez effectuer les mêmes actions que la page "All todos". Mais dans cette page, le bouton "Done!" devient "Not Done!", ce qui envoie la tâche dans la liste "All todos".

Enfin, il existe une page de paramètres pour changer le thème de l'application. Vous avez deux thèmes: le thème HPI, le thème Dark side.

Vous pouvez également ajouter une nouvelle tâche avec le champ sous le menu. Vous pouvez appuyer sur le bouton «Submit» pour le soumettre, ou sur le bouton du clavier «Entrée».

Un bouton «Delete completed todos» est là pour supprimer toute la liste des tâches terminées.

Toutes les listes sont classées par date, de la plus récente à la plus ancienne.

Chaque action affiche un pop-up en haut à gauche de l'application. Vous pouvez passer la souris sur le pop-up pour le maintenir actif. Vous pouvez également le fermer avec le bouton en forme de croix. La conception est différente selon l'action effectuée.

Chaque action est enregistrée sur l'API, donc, si vous actualisez l'application, l'état enregistré est le même qu'avant. Sauf la fonction "Supprimer les tâches terminées" qui n'est pas connectée à l'API.

## Fonctionnalités développées

- Ajout d'une nouvelle tâche avec le champ associé
- Mettre à jour l'état d'une tâche (terminée ou non)
- Supprimer une tâche
- Supprimer toutes les tâches terminées
- Afficher la liste de toutes les tâches
- Afficher la liste des tâches terminées
- Listes des tâches classées par date.
- Paramètres du thème (mode sombre)

## Fonctionnalités en cours de développement

- Afficher la date dans une tâche
- "Delete completed todos", interagir avec l'API

## Fonctionnalités restantes

- La gestion des erreurs
- D'autres suggestions ..?

## Bibliothèques utilisées

- shortid = pour créer un ID aléatoire pour une tâche qui n'est pas un nombre.
- react-toast-notification = utilisation pour le pop-up. Gain de temps et utilisation très simple. La documentation est également bien réalisée.
- react-router-dom = utilisé pour les routes. Très utile pour le système de page et permet un gain de temps.
- axios = utilisation pour les requêtes HTTP, pour interagir avec l'API et très facile à utiliser.
- font-awesome = Avoir des icônes dans notre application c'est cool aussi :D