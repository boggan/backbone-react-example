# backbone-react-example

this is a sample application to which includes a built react component in an existing backbone application.

The application is using backbone to render a super simple view (no models needed for this example)
and the view is using requirejs to dynamically import the built react component

this project is split into 2 folders

app (the backbone application, no dependencies needed)
components (the folder for the react component, dependencies + build process needed)

## Dependencies

within the components folder install dependencies via: 

**npm install**

## Component Build

within the components folder, once the dependencies have been installed, you can build using

**npm run build**

or using webpack directly using: 

**webpack --config webpack.dev.config.js**

## Loading

put the the content of this folder in a web server and visit the root of the app folder (ie: http://localhost/backbone-react-example/app/)

## Post Installation Notes

## Enjoy! :)
