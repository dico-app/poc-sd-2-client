# sd-2-demo

## Prerequisites

1. Clone this repository

```bash
$ git clone https://github.com/dico-app/sd-2-demo
```

2. Install dependencies

```bash
$ yarn install # or npm install
```

3. Start dev server

```bash
$ yarn dev # or npm run dev
```

## Getting Started

### Installation

Install Dico easily using _npm_:

```bash
$ npm install --global @dico/cli-sd
```

### Configuration

Log into the _CLI_ to use the command lines:

```bash
$ dico login 81b637d8fcd2c6da6359e6963113a1170de795e4b725b84d1e0b4cfd9ec58ce9
```

Init Dico in your project with the following command. This will create a file _dico.config.jsonc_ to manage your keys:

```bash
$ dico init
```

### Create your first keys

You can now create your first _keys_ and collections in the _dico.config.jsonc_ file:

```json
{
  "myFirstCollection": {
    "myFirstKey": "string"
  }
}
```

Use the _Dico keys_ you just created directly in your code:

```html
<div>{{ $dico.myFirstCollection.myFirstKey }}</div>
```

### Push your changes to Dico

_Push_ all your created keys to Dico and click the link to navigate directly to the merge request on the website:

```bash
$ dico push
```
