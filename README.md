# Blogger
Este pryecto, me sirvio de aprendizaje no solo para crear una simple aplicacion con formato de Blog para crear contenido sobre cualquier nicho, sino que tambien aprendi a utilizar otras herramientas y dependencias para desarrollar el mismo, aqui estan las 3 Tecnologias mas importantes que le dan vida a este proyecto:

+ Next Js 14
+ Sanity
+ Typescript

Además, use otras dependencias para manejar la UI.
Aqui esta el package.json de las dependencias usadas:

```
"dependencies": {
    "@sanity/vision": "^3.23.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-is": "^18.2.0",
    "sanity": "^3.23.4",
    "styled-components": "^6.0.7"
  },
  "devDependencies": {
    "@sanity/eslint-config-studio": "^3.0.1",
    "@types/react": "^18.0.25",
    "eslint": "^8.6.0",
    "prettier": "^3.0.2",
    "typescript": "^5.1.6"
  },
```
## Schema de los Posts
El contenido de los post, se crean desde la API de Sanity.
Aca esta la estructura de los atributos que utilice para crear los Post:
```
export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of blog article',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of your blog article',
            options: {
                source: 'title'
            }
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title Image',
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small Description',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                }
            ]
        }
    ]
}
```
Gracias por leer! :)
Codeando ando...