### Requirements

### Objectives
- Allow users to choose a character from the provided JSON file
- Upon selection of a character, the UI should update to display information about **each** of the films that that character appears in. Minimally: Title, and formatted ('Thursday, May 19 2005') release date
- Do this with any js framework, and some kind of component-based pattern
- You can only use the API routes found the provided 'characters.json' file, and the data returned from those calls
- Don't load the movie data until the character is clicked
- Don't show any movie information until all of the character's movies have loaded
- Handle HTTP errors (While loading the character as well as the film information)
- Separate concerns where applicable 
- Make it pretty! You're encouraged to use [Bootstrap](https://getbootstrap.com/), [Bulma](https://bulma.io/), [Material Components](https://material.io/develop/web/), or any other css framework

NOTE:** Obi-wan's URL is intentionally incorrect, please do not modify the JSON.

----

`characters.json`
```
    {
      "characters": [
        {
          "name": "Luke Skywalker",
          "url": "https://swapi.co/api/people/1/"
        },
        {
          "name": "Darth Vader",
          "url": "https://swapi.co/api/people/4/"
        },
        {
          "name": "Obi-wan Kenobi",
          "url": "https://swapi.co/api/people/unknown/"
        }, 
        {
          "name": "R2-D2",
          "url": "https://swapi.co/api/people/3/"
        }
      ]
    }
```