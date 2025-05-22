# Curso de git & github

# create .git file
```bash
git init
```

# commit
identificador del commit: lo que va después de commit <c72ed62b4e..>
```bash
commit c72ed62b4e3f2455427f4f4138bc29d681c1f6cd
```

# remove file from staging area
# git no excluirá del seguimiento al archivo
```bash
git rm --cache <file-name>
```


# switch between branch
```bash
git checkout <branch_name>
git switch <branch_name>
```

# delete branch
```bash
git branch -D <branch_name>
```

# merge
## from main branch
```bash
git merge <feature_branch>
```

# reset
El comando te devuelve a un commit anterior, eliminando los cambios en el historial como si nunca hubieran ocurrido
-
```bash
git reset
git reset --soft <commit_id>
git reset --mixed <commit_id>
git reset --hard <commit_id>
```

# revert
Crea un nuevo commit que revierte los cambios realizados por un commit en especifico
regresar a un commit y ponerlo como último commit realizado
- Crea un nuevo commit de revert eliminando los cambios de la rama
- pero conservando dichos cambios en el historia de git
- PELIGROSO: elimina todos los archivos/cambios asociados a ese commit
```bash
commit c72ed62b4e3f2455427f4f4138bc29d681c1f6cd
git revert c72ed62b4e3f2455427f4f4138bc29d681c1f6cd
```
# git tag & git checkout
- git tag
- - etiquetas para commits, se aplica al último commit , versionamiento
- - git tag -a <tag_name> -m "<message>" --> se asocia al último commit del árbol
- - git tag --> listado de tags
- - git show <tag_name> --> detalles del tag
- - git tag -d <tag_name> --> eliminar el tag o etiqueta ( no afecta nada más que eliminar el tag )
- - - git tag -a v1.0 -m "primer tag"
- - - git show v1.0
- - - git tag -a <tag_name> <commit_id> -m "tag_message"


- git checkout
- - regresar a punto especifico del historial de commits
- - crea un espacio temporal, pero no guarda ningún cambio
- - git checkout <commit_id>
- - git checkout main --> regresa a main y los cambios del espacio temporal no modifican NADA, ( antes de regresar agregar un git checkout .)


- conflictos
- - se dan cuando en dos ramas diferentes se modifica la misma linea de código, al intentar fusionar estas ramas aparece el error


- - enviar cambios a la rama <main> del origen <origin>
git push origin main
- - trae los cambios de la rama main de origin, pero no fucionarlos inmediatamente
git fetch origin
- - comparar dos ramas después de hacer fetch
git log main..origin/main
- - fucionar los cambios una vez verificados
git merge origin/main

# traer una rama remota a tu local
git fetch origin --> descarga en tu local todas las ramas
git branch -r --> ramas de tu repositorio remoto descargadas
git checkout <rama-remota>

ó

git checkout --track origin/<rama-remota>

-- cualquiera de los dos funciona


# crear plantillas predeterminads en github ( para reportar issues, por ejemplo)
1. crear la carpeta .github
1.1 crear carpeta ISSUE_TEMPLATE
1.1.1 crear arhivo bug_report.md


![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fjose-nicolas-aristizabal-ramirez-ingeniero)

# gists
- - github gists permite crear un pequeño fragmento de código que no está relacionado a ningún repositorio. Discutir de manera colaborativa sobre el fragmento de código.
[crear gist](https://gist.github.com/)
