
# Exercícios em TypeScript

Lista de exercícios em TypeScript utilizando Jest.

## Fork
O primeiro passo é definir qual pessoa da dupla será responsável por realizar o fork. Após essa decisão, essa pessoa deve fazer o fork deste repositório. O fork serve para criar uma cópia do repositório original na sua conta do GitHub. Para isso, clique no botão "Fork" e confirme a criação do repositório.

Para verificar se o fork foi realizado com sucesso, acesse seu perfil no GitHub e veja se o repositório aparece na sua lista de repositórios. Ele deve ter o mesmo nome do repositório original, mas com o seu nome de usuário como proprietário.

### Clonar e permissões
Após realizar o fork, adicione seu colega como colaborador do repositório. Para isso, vá em Settings > Collaborators > Add people, e adicione o nome de usuário ou o e-mail do seu colega. Ele deve aceitar o convite de colaboração por meio do e-mail.

Agora vamos clonar o repositório.** Ambos devem realizar esse processo**. No repositório, clique no botão "Code" e copie a URL HTTPS que aparecer.

Em seguida, abra o terminal (ou prompt de comando), navegue até o local onde deseja salvar o projeto e execute o seguinte comando:

```bash
git clone URL_QUE_VOC_COPIOU
```

Pronto! Agora ambos terão uma cópia local do repositório pronta para começar a codar.

### Instalação

Abra o projeto no seu VSCode. Em seguida, abra o terminal integrado e instale as dependências do projeto com o seguinte comando:

```bash
npm install 
```

Esse comando vai ler o arquivo package.json e instalar todas as bibliotecas necessárias para o projeto funcionar corretamente.

Lembrando que essa etapa de instalação das dependências deve ser feita por ambos em suas respectivas máquinas.

### Como funciona o Pareamento

Agora que ambos estão com tudo configurado em suas máquinas e com as permissões certinhas, é hora de começar o pareamento!

Primeiro, definam quem irá compartilhar a tela e começar os exercícios. A outra pessoa será a copilota, ajudando com o código, revisando e pesquisando o que for necessário. É importante que vocês combinem um tempo para trocar os papéis, para que ambos tenham a chance de codar e colaborar ativamente.

--- 

**Quero que minha dupla compartilhe a tela, como devo prosseguir?**

Antes da sua dupla continuar, é importante que você envie tudo o que foi feito até agora para o repositório. Isso garante que ele(a) tenha acesso à versão mais atualizada do projeto.

Enviando suas alterações para o repositório
Abra o terminal do VSCode e siga os passos abaixo:

1. Adicione todas as alterações:

```bash
git add .
```

2. Crie uma mensagem descritiva para o commit: Por exemplo, se vocês fizeram os exercícios de 1 a 3, use:

```bash
git commit -m "adicao dos exericios 1 ao 3"
```

3. Envie para o repositório:

```bash
git push
```

Pronto! Agora sua dupla pode continuar de onde você parou.

--- 

**Recebendo atualizações da sua dupla**

Quando for a sua vez de continuar, certifique-se de puxar as atualizações feitas por sua dupla. Para isso, digite no terminal:

```bash
git pull
```

Esse comando serve para trazer as últimas atualizações do repositório remoto para a sua máquina. Agora é só seguir com o projeto! 🚀


### Como usar

**Primeiro passo: Ambiente-se com os erros**

Antes de mais nada, execute os testes e observe-os falhar no terminal.

Para executar testes:

```bash
npm run test
```

Seu objetivo é fazer com que estes testes passem. Antes de tentar resolver qualquer problema, tome uns minutos para familiarizar-se com o
terminal. Tente interpretar todas as mensagens de erro que aparecem na tela. Não se preocupe se nada ficar claro num primeiro momento, a
única regra é** não temer o terminal nem suas mensagens de erro**. Sempre tente interpretar o que está acontecendo.

**Segundo passo: Leia os enunciados de cada exercício**

Depois de ver tudo falhar, dê uma olhada nos enunciados de cada exercício. Os enunciados de cada exercícios estão em `src/enunciados` e na plataforma do [E-Acelera](https://aceleradora-agil.com.br/nivelamento/rw17169041087560470c1-TypeScript:%20Fundamentos/rw1721236357157ccf465-Fundamentos/rw17169056027059821dc-Soma%20dobrada)

**Terceiro passo: Veja o código**

Depois de ver quais são os exercícios disponíveis, navegue pela estrutura do projeto para encontrar o código que precisa ser alterado para
resolver cada exercício. Os exercícios estão em `src/implementacao`.

> Se quiser, aventure-se também nas pastas `test` de para espiar como os testes foram implementados, mas __não altere nada
> lá__.

**Quarto passo: Implemente suas soluções**

Tente fazer os testes passarem. Tudo que você precisa fazer é colocar sua ideia em prática dentro de cada função e executar novamente o comando
`npm run test`.
