sudo apt-get update
sudo apt-get install git
sudo apt-get -y update
sudo apt-get install -y nodejs npm
sudo ln -s /usr/bin/nodejs /usr/bin/node
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse"
sudo apt-get install -y mongodb-org
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
sudo apt-get update
sudo apt-get install -y mongodb-org
git clone -b gh-pages https://github.com/Rub21/gtur.git
cd gtur/
npm start
