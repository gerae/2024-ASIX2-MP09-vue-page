#!/bin/bash
sudo service mysql start

read -p  "Vols crear la base de dades? (s/N)" dbcreation

case "$dbcreation" in
	[yYsSsiyes] )
	echo "ok, creare la base de dades de nou"
	echo "Contrasenya de l'usuari root de MySQL"
	mysql -u root -proot -vv <<EOF || { echo ""; exit 1; }

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
	    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	    PRIMARY KEY (id)
	);

	INSERT INTO users (username, email, password) VALUES ('admin', 'admin@example.com', 'admin');
EOF
	;;
	[nNnoNO] ) 
		echo "ok, no creare la base de dades"
	;;
esac

# Iniciar el servidor vite i api
npm run dev
