# Seção com Scroll Lateral Controlado por Botões ← →
<br>
<p align="center">
 <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
 <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
 <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
 </p>
<br>

<p align="center"><img src="./img/example.gif"></p>

## Marcação

<br>

A sessão abaixo irá renderizar os cards que serão criados via _Java Script_:
### HTML
```html
<section id="scrollSection" class="scroll">

</section>
```
### CSS
```css
.scroll {
  background-color: black;
  padding: 50px;
  overflow-x: auto;
  scroll-behavior: smooth;
  white-space: nowrap; 
}
```
Dentro da sessão abaixo teremos o painel que irá renderizar os botões que controlaram o Scroll Lateral do elemento `scrollSection`:
### HTML
```html
  <section id="panel" class="panel">
    <button id="back" class="btn">back</button>
    <button id="next" class="btn">next</button>
  </section>
```
### CSS
```css
.panel {
  display: flex;
  justify-content: space-between;
}

.btn {
  border-radius: 8px;
  background-color: rgb(168, 103, 228);
  padding: 8px;
  width: 50%;
}
```
<br>
<br>

## Java Script
<br>


### Dados:
A constante `data` armazenará as informações dos Cards a serem criados. Aqui trabalharemos apenas com as Cores:
```javascript
const data = [
  
  {
    color: 'red',
  },

  {
    color: 'yellow',
  },

  {
    color: 'green',
  },

  {
    color: 'blue',
  },

  {
    color: 'white',
  },

  {
    color: 'orange',
  },

  {
    color: 'gray',
  },

  {
    color: 'brown',
  },

  {
    color: 'purple',
  },

];
```
<br>
<br>

### Criando Cards:
A função `createCard` Cria um elemento `div` com a classe `cards` e irá inserir o Card dentro do elemento `scrollSection`:

```javascript
const createCard = (color) => {
  const scrollSection = document.getElementById('scrollSection');
  const div = document.createElement('div');
  div.className = 'cards';
  div.style.backgroundColor = color;
  scrollSection.appendChild(div);
};
```
### CSS:
```css
.cards {
    width: 200px;
    height: 200px;
    border-radius: 15px;
    margin: 30px;
    display: inline-block;
}
``` 
Podemos usar o `map` para mapear o array e para cada Objeto dentro dele executar a função `createCard` passando como paremetro o valor dentro da chave `color` do Objeto:
```javascript
data.map(object => createCard(object.color));
```
<br>
<br>

### Painel de controle:

Agora iremos configurar o `addEventListener` com duas conticionais referentes aos botões do painel.

Se o elemento clicado contém o `id` _next_ a `scrollSection` irá se mover `500px` para direita →  
Se o `id` for _back_ se movimentará `500px` para esquerda ← 

```javascript
addEventListener('click', (event) => {
  if (event.target.id === 'next') {
    document.getElementById('scrollSection').scrollBy(500, 0);
  };
  if (event.target.id === 'back') {
    document.getElementById('scrollSection').scrollBy(-500, 0);
  };
})
```

## Bônus 
<br>
<p align="center"><img src="./img/exampleResponsive.gif"></p>
<br>

### Sessão responsiva com Media Queries:

A sessão `scrollSection` só terá Scroll Lateral e o Painel só será visivel em telas Menores de `500px` de largura

Para isso retira o `white-space: nowrap;` da classe `scroll` e adicione `visibility: hidden;` à classe `panel`,

E crie um Media Query com as seguintes configurações:

```css
@media screen and (max-width: 500px) {

    .scroll {
        white-space: nowrap;
    }

    .panel {
        visibility: visible;
    }

}
```


<br>
<br>

<p align="center"><img src="https://media.giphy.com/media/tIeCLkB8geYtW/giphy.gif"></p>

<p align="center" ><a href="https://jsfiddle.net/bob_wend3ll/tg5dn9ay/5/" target="_blank"><img src="https://img.shields.io/static/v1?label=Code&message=JsFiddle&color=rgb(22,1,32)&style=for-the-badge&logo=ghost"></a></p>


 <p align="center" ><a href="https://wend3ll-souza.github.io/scrollYSection/" target="_blank"><img src="https://img.shields.io/static/v1?label=Deploy&message=Go_To_App&color=rgb(0,255,0)&style=for-the-badge&logo=ghost"></a></p>

## Saiba Mais

<br>

[scroll-behavior](https://developer.mozilla.org/pt-BR/docs/Web/CSS/scroll-behavior)

[white-space](https://developer.mozilla.org/pt-BR/docs/Web/CSS/white-space)

[Usando Media Queries](https://developer.mozilla.org/pt-BR/docs/Web/Guide/CSS/CSS_Media_queries)

[map()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)



