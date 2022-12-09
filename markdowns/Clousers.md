# Closures no React

```js
function Comment() {
  const [likes, setLikes] = useState(0);

  function addLike() {
    /* Ambas as funções executam no mesmo contexto então likes continua sendo 0 */
    setLikes(likes + 1);
    setLikes(likes + 1);
  }
}

Comment(props, 0);

// Portanto para todas as exec acima o antigo valores de likes é 0
Comment(props, 1);
```

<br>

## Caso o intuito seja aumentar conforme o valor atualizado

```js
function Comment() {
  const [likes, setLikes] = useState(0);

  function addLike() {
    // State terá o valor mais recente
    setLikes((state) => {
      return state + 1;
    });
  }
}
```
