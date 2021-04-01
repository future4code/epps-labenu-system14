## LabenuSystem:

Você estuda na Labenu_ há tanto tempo que já parecem anos, não é? Então, hoje, vamos pedir para criar um sistema que represente o básico da nossa organização. 

Ele deve possuir, ao menos, as 3 entidades importantes:

1. Estudantes 

    Representa estudantes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento e os principais hobbies dele. 

2. Docente

    Representa docentes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento e todas as especialidades dele. Há 7 especialidades: React, Redux, CSS, Testes, Typescript, Programação Orientada a Objetos e Backend

3. Turma

    Toda turma é composta das seguintes características: id, nome, data de início, data de término, lista de professores responsáveis, uma lista de alunos e módulo atual em que a turma está.

    O módulo pode assumir os valores de 1 a 7 ou `undefined`, indicando que as aulas dessa turma ainda não começaram. Para esse exercício, vamos considerar que existam dois tipos de turma: integral ou noturna. Há uma restrição para o nome das turmas noturnas: tem que terminar com `-na-night`.

As funcionalidades básicas são:

→ Criar estudante: 
    Para criar um estudantes basta acessar URL: http://localhost:3003/student e passar o nome, email, e data de aniversário conforme o exemplo abaixo


    {
        "name": "xxxxx",
        "email": "xxxx@xxxx.xxx",
        "birthDate":"yyyy/mm/dd"
    }
    

→ Criar docente;
    Para criar um estudantes basta acessar URL: http://localhost:3003/teacher e passar o nome, email, e data de aniversário conforme o exemplo abaixo

    ```
    {
        "name": "xxxxx",
        "email": "xxxx@xxxx.xxx",
        "birthDate":"yyyy/mm/dd"
    }
    ```

→ Criar turma;
    Para criar um estudantes basta acessar URL: http://localhost:3003/teacher e passar o nome, email, e data de aniversário conforme o exemplo abaixo

    ```
    {
        "name": "xxxxx",
        "email": "xxxx@xxxx.xxx",
        "birthDate":"yyyy/mm/dd"
    }
    ```



→ Adicionar estudante na turma;
    Para Adicionar um estudante em uma turma basta acessar URL: http://localhost:3003/class/addStudent e passar o id do Professor e o id da turma conforme o exemplo abaixo

    ```
    {
        "student": "Id do professor aqui",
        "class": "Id da turma aqui"
    }
    ```

→ Adicionar docente na turma;
    Para Adicionar um professor em uma turma basta acessar URL: http://localhost:3003/class/addTeacher e passar o id do Professor e o id da turma conforme o exemplo abaixo

    ```
    {
        "teacher": "Id do professor aqui",
        "class": "Id da turma aqui"
    }
    ```

→ Pegar a idade de algum estudante a partir do id
    Para Adicionar um professor em uma turma basta acessar URL: http://localhost:3003/student/info/:id passar o id do aluno na url.

    ```
    Exemplo: http://localhost:3003/student/info/001
    ```

→ Exibir estudantes de uma turma;
    Para pegar todos alunos de uma turma, basta digitar acessar o nome da turma na url URL: http://localhost:3003/class/student/:name 

    ```
    Exemplo: http://localhost:3003/class/epps
    ```
→ Exibir Professores de uma turma;
    Para pegar todos professores de uma turma, basta digitar acessar o nome da turma na url URL: http://localhost:3003/class/teacher/:name 

    ```
    Exemplo: http://localhost:3003/class/teacher/cruz 
    ```




