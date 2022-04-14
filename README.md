# Cronometro de Tarefas com som

Este ambiente foi baseado em exercícios do curso "Fundamentos de React: escrevendo com Typescript" da Alura do professor Luiz Fernando (https://github.com/lfrprazeres)

Todos os códigos foram escritos por mim, me baseando nos códigos desenvolvidos para o curso.

## Para utilizar a aplicação

Clone o Projeto com o comando : **`git clone https://github.com/icarusramos/Cronometro-de-Tarefas-com-Som`**

### `npm install`

Rode o comando `npm install` para instalar os módulos e dependências necessárias para a aplicação

### `npm start`

Execute o comando `npm start` para iniciar a aplicação.

Lembrando  que geralmente o ambient será executado no endereço local [localhost:3000](http://localhost:3000)

## Extras

-- Todo o ambiente está separado em módulos, aumentando a possibilidade de alterações e melhorias (inclusive os SCSS)

## Alterando o som de término da tarefa

Existe um diretórios de caminho **"/public/sounds"** onde constam alguns sons para serem alterados na amplicação.

No arquivo de caminho **"/src/components/Cronometro/index.tsx"** podo-se encontrar a linha : 
  ```
  const sound = new Howl({
    src:['http://localhost:3000/sounds/dun-dun-dun.mp3'],
  });
  ```
 Basta alterar esse caminho para um .mp3 válido e terá o novo som da conclusão da atividade!
 
# Faça um excelente uso !
