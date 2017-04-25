sudo apt-get update
sudo apt-get install nginx php7.0-fpm php7.0-cli php7.0-mcrypt git
sudo apt-get -y install php7.0-mysql

sudo service nginx restart
sudo fallocate -l 1G /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

sudo service php7.0-fpm restart
service nginx restart

cd mybabyjournal
chmod 644 -R *
find . -type d | argx chmod 775
chmod -R 777 storage

php artisan cache:clear
composer dump-autoload
php artisan key:generate

sudo apt-get install php-dom
sudo apt-get install php-mbstring
composer install --no-scripts

sudo apt-get install nodejs
sudo apt-get install npm
