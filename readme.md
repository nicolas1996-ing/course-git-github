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
```bash
git rm --cache testing
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
