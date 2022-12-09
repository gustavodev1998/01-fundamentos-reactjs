# KEY no React

## Por que única?

3 momentos em que um componente é renderizado novamente no React.

1. Quando o estado altera;
2. Quando a propriedade altera;
3. Quando um componente pai renderiza novamente.

## Por que não posso usar o indice do array?

```js
const posts = [1, 2, 3, 4, 5];

Caso eu troque para

const posts = [1, 2, 5, 4, 3];

// Podemos observar que os indices não mudaram de lugar e sim o conteúdo

```
