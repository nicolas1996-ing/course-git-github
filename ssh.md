# Generar llave ssh
## windows

terminal: ssh-keygen -t ed25519 -C "email_github"
- name -> por defecto ( dar enter )
- password -> agregar un password
- confirm password
terminal: cd .ssh
- aparecen las dos llaves ( privada & publica )
terminal: eval "$(ssh-agent -s)"
terminal: ssh-add ~/.ssh/<private_key_name> // ( guardar llave privada, ingresar password )
terminal: nano <public_key_name.pub> // copiar y pegar esta llava en github

## mac
terminal: ssh-keygen -t ed25519 -C "email_github"
- name -> por defecto ( dar enter )
- password -> agregar un password
- confirm password
terminal: cd .ssh
ls
terminal: nano config
escribir lo siguiente
```ruby
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa
```
id_rsa-> nombre llave privada (private_key_name)
terminal: ssh-add --apple-use-keychain ~/.ssh/<private_key_name> // ( guardar llave privada, ingresar password )
terminal: nano <public_key_name.pub> // copiar y pegar esta llava en github

## guardar llave pública en github
https://github.com/settings/keys
-> new SSH key

## comprobar conexión con github
ssh -T git@github.com
Hi nicolas1996-ing! You've successfully authenticated, but GitHub does not provide shell access.


## Administración de repositorios con github tokens
- llaves temporales
- acceso temporal a un repo privado
- acceso a repositorio privado con privilegios limitados
- tokens detallados versión beta -- fine grained tokens --> tokens para acceder a un repo en especifico
- - clonar repositorio con git clone
- - ingresar username --> usuario de git
- - password: token fine grained tokens
- tokens clasicos


## mitigación de brechas de seguridad en repositorios de github
- el repo debe ser public
- en github.com --> settings >> advanced security >> code scanning && secret scanning
- code scanning >> codeQL analysis ... clic en setup ... clic en default
- codeQL: Identify vulnerabilities and errors with CodeQL for eligible repositories.
- una vez hecho el push, gitHub por debajo empieza a hacer el sondeo de seguridad
si se levanta alguna alerta se podrán analizar en la pestaña Security ( parte superior del repositorio de gitHub)
