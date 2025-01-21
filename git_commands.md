# create .git file 
git init

# remove file from staging area
git rm --cache testing 

# switch between branch 
git checkout <branch_name>
git switch <branch_name>

# merge 
## from main branch 
git merge <feature_branch>