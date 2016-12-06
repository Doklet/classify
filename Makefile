.PHONY: distro

name=classify
user=root
node=digitalocean-prod-0

init:
	bower install
	npm install

clean:
	grunt clean

build:
	grunt build

stage:
	-rm -rf app/bower_components
	ln -s $(PWD)/bower_components app/bower_components