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


### Fran??ais

## Ce projet est une TodoList utilisant React et Typescript

Bonjour ?? tous ! Ce projet est le r??sultat du test technique HPI. Je devais effectuer une liste de t??ches en utilisant React et Typescript. Cette application est connect??e ?? une API externe (https://609a4b280f5a13001721a85b.mockapi.io/tasks. 
Cette API nous permet de sauvegarder une t??che et son ??tat m??me si nous actualisons la page.
N'h??sitez pas ?? cloner ce repertoire et ?? l'utiliser comme vous le souhaitez. Profitez-en !

## Comment l'utiliser

Au d??marrage de l'application, un menu avec trois choix s'affiche ("All todos", "Completed Todos", "Settings"). Vous avez ??galement un champ avec le bouton d'envoi pour ajouter une t??che.

Tout d'abord, si vous cliquez sur le bouton ??All todos??, vous afficherez une liste de toutes les t??ches qui n'ont pas ??t?? effectu??es. Chaque t??che a deux boutons. Un pour le completer, et l'envoyer ainsi ?? la liste des t??ches termin??es. L'autre bouton pour supprimer la t??che.

Ensuite, vous avez la page "Completed todos". C'est une liste de toutes les t??ches termin??es. Vous pouvez effectuer les m??mes actions que la page "All todos". Mais dans cette page, le bouton "Done!" devient "Not Done!", ce qui envoie la t??che dans la liste "All todos".

Enfin, il existe une page de param??tres pour changer le th??me de l'application. Vous avez deux th??mes: le th??me HPI, le th??me Dark side.

Vous pouvez ??galement ajouter une nouvelle t??che avec le champ sous le menu. Vous pouvez appuyer sur le bouton ??Submit?? pour le soumettre, ou sur le bouton du clavier ??Entr??e??.

Un bouton ??Delete completed todos?? est l?? pour supprimer toute la liste des t??ches termin??es.

Toutes les listes sont class??es par date, de la plus r??cente ?? la plus ancienne.

Chaque action affiche un pop-up en haut ?? gauche de l'application. Vous pouvez passer la souris sur le pop-up pour le maintenir actif. Vous pouvez ??galement le fermer avec le bouton en forme de croix. La conception est diff??rente selon l'action effectu??e.

Chaque action est enregistr??e sur l'API, donc, si vous actualisez l'application, l'??tat enregistr?? est le m??me qu'avant. Sauf la fonction "Supprimer les t??ches termin??es" qui n'est pas connect??e ?? l'API.

## Fonctionnalit??s d??velopp??es

- Ajout d'une nouvelle t??che avec le champ associ??
- Mettre ?? jour l'??tat d'une t??che (termin??e ou non)
- Supprimer une t??che
- Supprimer toutes les t??ches termin??es
- Afficher la liste de toutes les t??ches
- Afficher la liste des t??ches termin??es
- Listes des t??ches class??es par date.
- Param??tres du th??me (mode sombre)

## Fonctionnalit??s en cours de d??veloppement

- Afficher la date dans une t??che
- "Delete completed todos", interagir avec l'API

## Fonctionnalit??s restantes

- La gestion des erreurs
- D'autres suggestions ..?

## Biblioth??ques utilis??es

- shortid = pour cr??er un ID al??atoire pour une t??che qui n'est pas un nombre.
- react-toast-notification = utilisation pour le pop-up. Gain de temps et utilisation tr??s simple. La documentation est ??galement bien r??alis??e.
- react-router-dom = utilis?? pour les routes. Tr??s utile pour le syst??me de page et permet un gain de temps.
- axios = utilisation pour les requ??tes HTTP, pour interagir avec l'API et tr??s facile ?? utiliser.
- font-awesome = Avoir des ic??nes dans notre application c'est cool aussi :D