#!/bin/bash
sudo apt-get install faker -y
pip install --upgrade faker
sudo service mysql start

read -p  "Vols crear la base de dades? (s/N)" dbcreation

case "$dbcreation" in
	[yYsSsiyes] )
	echo "ok, creare la base de dades de nou"
	echo "Contrasenya de l'usuari root de MySQL"
	sudo mysql -u root -proot -vv <<EOF || { echo ""; exit 1; }

	## Comprobar si existeix la base de dades vueproject y eliminar-la
	DROP DATABASE IF EXISTS vueproject;

	## Crear la base de dades vueproject
	CREATE DATABASE vueproject;

	## Utilitzar la base de dades vueproject
	USE vueproject;

	## Comprobar si existeix l'usuari gerard y eliminar-lo
	DROP USER IF EXISTS 'gerard'@'localhost';

	## Afegir l'usuari gerard amb contrasenya gerard y tots els permisos a la base de dades vueproject
	CREATE USER 'gerard'@'localhost' IDENTIFIED WITH mysql_native_password BY 'gerard';

	GRANT ALL PRIVILEGES ON vueproject.* TO 'gerard'@'localhost';
	flush privileges;

	## Afegir la taula users i totes les columnes corresponents
	CREATE TABLE users (
	    id INT NOT NULL AUTO_INCREMENT,
	    username VARCHAR(255) NOT NULL,
	    email VARCHAR(255) NOT NULL,
	    password VARCHAR(255) NOT NULL,
	    points INT DEFAULT 0,
	    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	    PRIMARY KEY (id)
	);

	INSERT INTO users (username, email, password, points, created_at, updated_at) VALUES
    	$(for i in {1..15}; do
        	echo "('"$(faker user_name)"', '"$(faker email)"', '"$(faker password)"', $((RANDOM % 1001)), NOW(), NOW())"
    	done | paste -sd ',' -);
EOF
	;;
	[nNnoNO] ) 
		echo "ok, no creare la base de dades"
	;;
esac

# Iniciar el servidor vite i api
sudo npm install
sudo npm run dev
