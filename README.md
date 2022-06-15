# Fig Coding Challenge

This project is meant for live interviewing purposes with the Fig team for react developers. It is meant to assess the basic technical competency of tasks in React

In the `public/data/search-response.json` is a search response for one of our Get /products/search API endpoints.

To run the project start with `npm run start`

## Tasks

- Call `GET /data/search-response.json` from React
  - Feel free to use an API library like `fetch` or `Axios` (pre-installed)
- Render the Search results in UI following [this Figma](https://www.figma.com/file/SReSqtkCurV1edi1rvC0BX/Untitled?node-id=0%3A34) that display the following information:
  
  - `name`
  - `picture`
  - `category`
  - `rating`

Acceptance criteria

- Filters the search results by `rating`
- Adds a text input that searches the result by name (exact match ok)
- Adds tests as appropriate to ensure that functionality works correctly

### Styling

- Feel free to use a framework like `styled-components` or vanilla CSS to style your components

## Installation

### Prerequisite

This app is built using CRA - as such it requires node v14 or later

```bash
# project dependencies
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```

## Running tests

```bash
# development
$ npm run test
```
