tuzi
====

A fast and lightweight non-MVC framework.

[![NPM](https://nodei.co/npm/tuzi.png?downloads=true)](https://nodei.co/npm/tuzi/)

## Install

Install this globally and you'll have access to the `tuzi` command anywhere on your system.

```sh
npm install -g tuzi
```

## Initialize Application

```sh
cd your-app
tuzi
```

## Enable Livereload

1. Start watching task:

   ```sh
   grunt watch &
   ```

2. Start your app with `-l` or `--livereload` parameter. Example:

   ```sh
   ./server.js -l
   ```

### Tips

1. You can also change port of livereload [here](./Gruntfile.js#L10).
2. See also [`grunt-contrib-watch`](https://github.com/gruntjs/grunt-contrib-watch#optionslivereload).
3. Remember **NOT** to delete [this](./public/partial/bundle.html#L3) in your app.
4. `livereload.js` will be removed after running `grunt ejs` because of [this](./Gruntfile.js#L39).
   Be free to use this feature.


## Build your site

1. Generate your pages and minimize static resources.

   ```sh
   grunt
   ```

2. Add `root` and `/lib/` to your HTTP server configuration. Nginx Example:

   ```nginx
   root /path/to/your-app/dist/;
   location /lib/ {
       alias /path/to/your-app/bower_components/;
   }
   ```

## Q & A

 * Why is it so FAST and light than any other frameworks?

   The most common use-case of `tuzi` is just writing/serving static
   pages. Every thing on the server should be **LOGIC-LESS**. 
   Everything logic should be compiled to static files before uploading
   to the production (nginx) **OR** after browser loading pages.

 * Why is it not MVC based?

   Everybody likes RESTful development nowadays, right? So it's time to
   drop MVC and start a new life. You can use angular or **something else**
   (XHR/XDR/JSONP/*WebSocket*) to fetch data from other servers.

 * Is it really a FRAMEWORK?

   `tuzi` is just like `express`. It is showing you a way to develop and
   manage your code/logic. I'm not really sure whether it should be called
   "F-R-A-M-E-W-O-R-K" but it should be helpful for our development.
 
 * Where is your/my test?

   It should be in `test/` if there was.
