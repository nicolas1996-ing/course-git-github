# create .git file 
```bash
git init
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
```bash
git reset 
```