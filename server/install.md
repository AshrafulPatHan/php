# Laravel প্রজেক্ট তৈরি — ধাপে ধাপে (Ubuntu/ Linux)

নমস্কার Ashraful — তুমি আগে Laravel ব্যবহার করো নি বলে সম্পূর্ণ সহজ ও পরিষ্কার ধাপে ধাপে ব্যাখ্যা দিলাম। প্রতিটি কমান্ড কপি-পেস্ট করে চালাতে পারো। আমি দেখাবো: প্রয়োজনীয় সফটওয়্যার ইনস্টল, নতুন প্রজেক্ট তৈরি, .env সেট করা, রান করা এবং মালিকানা/পারমিশন ঠিক করা। (নীচের নির্দেশনাগুলো অফিসিয়াল ডকুমেন্টেশনের উপর ভিত্তি করে)। ([Laravel][1])

---

## ১) প্রস্তুতি — কি কি থাকা লাগবে (short)

* PHP (Laravel-এর আধুনিক ভার্সনের জন্য সাধারণত **PHP ≥ 8.2** প্রয়োজন)।
* Composer (PHP-এর package manager)।
* Node + npm (বা Bun) — যদি তোমার ফ্রন্টএন্ড অ্যাসেট কম্পাইল করতে চাও।
  এইগুলোর বিস্তারিত সিস্টেম রিকয়ারমেন্ট অফিসিয়াল ডকসে আছে। ([Laravel][1])

---

## ২) সিস্টেম আপডেট

টার্মিনাল খুলে চালাও:

```bash
sudo apt update && sudo apt upgrade -y
```

(প্রায় সব টিউটোরিয়াল প্রথমেই এটা করতে বলে — প্যাকেজ লিস্ট আপডেট করার জন্য)। ([DigitalOcean][2])

---

## ৩) PHP এবং দরকারি এক্সটেনশন ইনস্টল

সহজভাবে ডিফল্ট PHP প্যাকেজগুলো ইনস্টল করার উদাহরণ (Ubuntu-এর ডিফল্ট রিপোজিটরি ব্যবহার করে):

```bash
sudo apt install -y php php-cli php-fpm php-mbstring php-xml php-curl php-zip php-bcmath php-mysql unzip curl
```

> যদি তুমি বিশেষ কোনো PHP ভার্সন (যেমন php8.2) চান, তাহলে Ondřej Surý PPA যোগ করে সেই ভার্সন নির্দিষ্ট করে ইন্সটল করা যায়। ([PHP.Watch][3])

---

## ৪) Composer ইনস্টল (গ্লোবালি)

Composer হলো PHP-এর package manager — Laravel তৈরি/আপডেটে লাগে। অফিসিয়াল ইনস্টল পদ্ধতি (সরল):

```bash
curl -sS https://getcomposer.org/installer -o composer-setup.php
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
rm composer-setup.php
composer -V
```

(চেক: `composer -V` চালালে ভার্সন দেখাবে)। Composer ইন্সটলের অফিসিয়াল গাইড দেখো — নিরাপত্তার জন্য ইনস্টলার যাচাই করার অপশন আছে। ([getcomposer.org][4])

---

## ৫) নতুন Laravel প্রজেক্ট তৈরি করা (সহজ পদ্ধতি)

সবথেকে সহজ: `composer create-project` ব্যবহার করো:

```bash
cd ~/projects   # যেখানে প্রজেক্ট রাখতে চাও ওখানে যাও
composer create-project laravel/laravel my-laravel-app
```

অথবা তুমি চাইলে Laravel installer ব্যবহার করতে পারো:

```bash
composer global require laravel/installer
# Ensure composer vendor bin is in PATH, তারপর
laravel new my-laravel-app
```

`composer create-project` হল সবচেয়ে সরল ও দ্রুত পদ্ধতি। ([Laravel][5])

---

## ৬) .env ফাইল ও অ্যাপ কী (APP_KEY)

নতুন প্রজেক্টে কাজ করলে `.env` স্বয়ংক্রিয়ভাবে তৈরি না হলে নিজে কপি করো এবং ভেতরে অ্যাপ কী জেনারেট করো:

```bash
cd my-laravel-app
cp .env.example .env      # (প্রয়োজনে)
composer install          # (যদি প্রজেক্ট ক্লোন করে নিয়ে থাকো)
php artisan key:generate
```

`php artisan key:generate` চালালে `.env`-এ `APP_KEY` যোগ/আপডেট হবে। ([Laravel][6])

---

## ৭) ডাটাবেস সেটআপ (প্রয়োজনে)

`.env` ফাইল খুলে `DB_CONNECTION`, `DB_HOST`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD` ভরাও। পরে মাইগ্রেশন চালাতে:

```bash
php artisan migrate
```

(তোমার সিস্টেমে MySQL/MariaDB ইনস্টল না থাকলে আগে সেটাপ করতে হবে)।

---

## ৮) ফাইল পারমিশন ঠিক করা (storage & cache)

Laravel-এ `storage` এবং `bootstrap/cache` রাইটেবল হওয়া দরকার — নাহলে রান টাইমে permission error আসবে। সাধারণ কমান্ড:

```bash
sudo chgrp -R www-data storage bootstrap/cache
sudo chmod -R ug+rwx storage bootstrap/cache
```

(এইগুলো Ubuntu/Apache/Nginx ইত্যাদি সার্ভার ইউজারের জন্য সাধারণ সমাধান)। ([Stack Overflow][7])

---

## ৯) লোকাল ডেভ সার্ভার চালানো

সব ঠিক থাকলে লোকাল ডেভ সার্ভার চালাতে:

```bash
php artisan serve
```

তারপর ব্রাউজারে গিয়ে দেখো: `http://127.0.0.1:8000` — Laravel ওয়েলকাম পেজ দেখাবে। ([Laravel][5])

---

## ১০) ফ্রন্টএন্ড (যদি প্রয়োজন)

Vite দিয়ে assets কম্পাইল করতে Node/npm লাগবে:

```bash
# project root এ
npm install
npm run dev
```

Node + npm ইনস্টল না থাকলে `sudo apt install nodejs npm` বা nvm ব্যবহার করে ইনস্টল করো। (Laravel ডকস বলছে Node/Bun থাকা ভাল)। ([Laravel][8])

---

## ছোট টিপস / Troubleshooting

* `composer` কমান্ড না পাওয়া গেলে `/usr/local/bin` PATH চেক করো বা আবার ইন্সটল করো। ([getcomposer.org][4])
* যদি PHP ভার্সন কম থাকে (`php -v` দিয়ে চেক করো), তাহলে Ondřej PPA যোগ করে উচ্চতর PHP ইন্সটল করতে পারো। ([PHP.Watch][3])
* permission error এ `storage/logs/laravel.log` খোলা যায় না বললে উপরের chgrp+chmod চালাও। ([Stack Overflow][7])

---

### সারা কথাটা সংক্ষেপে — এক লাইন কমান্ড সেঁটে (copy-paste friendly)

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y php php-cli php-fpm php-mbstring php-xml php-curl php-zip php-bcmath php-mysql unzip curl
# install composer
curl -sS https://getcomposer.org/installer -o composer-setup.php
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
rm composer-setup.php
# create project
mkdir -p ~/projects && cd ~/projects
composer create-project laravel/laravel my-laravel-app
cd my-laravel-app
php artisan key:generate
sudo chgrp -R www-data storage bootstrap/cache
sudo chmod -R ug+rwx storage bootstrap/cache
php artisan serve
```

---

অন্তীব প্রশ্ন: তুমি কোন Ubuntu ভার্সনে আছো (22.04/24.04/আরো পুরানো)? আর তুমি Apache নাকি Nginx ব্যবহার করো? (জানলে আমি তোমার সিস্টেম অনুযায়ী ঠিক-ঠাক প্যাকেজ নাম ও আরও নির্দিষ্ট কমান্ড লিখে দেব — কিন্তু তুমি চাইলে আমি সরাসরি উপরের দেখে শুরু করো)।

[1]: https://laravel.com/docs/12.x/deployment?utm_source=chatgpt.com "Deployment - Laravel 12.x - The PHP Framework For Web ..."
[2]: https://www.digitalocean.com/community/tutorials/how-to-install-lamp-stack-on-ubuntu?utm_source=chatgpt.com "How To Install LAMP Stack (Apache, MySQL, PHP) on ..."
[3]: https://php.watch/articles/install-php82-ubuntu-debian?utm_source=chatgpt.com "How to install/upgrade PHP 8.2 on Debian and Ubuntu ..."
[4]: https://getcomposer.org/doc/00-intro.md?utm_source=chatgpt.com "Introduction"
[5]: https://laravel.com/docs/8.x?utm_source=chatgpt.com "Installation - Laravel 8.x - The PHP Framework For Web ..."
[6]: https://laravel.com/docs/12.x/configuration?utm_source=chatgpt.com "Configuration - Laravel 12.x - The PHP Framework For ..."
[7]: https://stackoverflow.com/questions/30639174/how-to-set-up-file-permissions-for-laravel?utm_source=chatgpt.com "How to set up file permissions for Laravel?"
[8]: https://laravel.com/docs/12.x/installation?utm_source=chatgpt.com "Installation - Laravel 12.x - The PHP Framework For Web ..."
