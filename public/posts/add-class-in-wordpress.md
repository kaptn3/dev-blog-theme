---
title:  "Добавление класса к изображениям WordPress"
date:   2017-03-11 18:11:00 +0300
category: php
tags: [wordpress, картинки, классы]
---
<!--more-->
В WordPress картинки, которые добавляются редактором в статью, вставляются без классов. Чтобы это исправить мы напишем функцию, которая к каждой картинке добавит класс, например, `.img-responsive`. В файл `function.php`, который находится в папке `wp-content`, нужно прописать следующее:

```php
images class
function add_image_responsive_class($content) {
   global $post;
   $pattern ="/<img(.*?)class=\"(.*?)\"(.*?)>/i";
   $replacement = '<img$1class="$2 img-responsive"$3>';
   $content = preg_replace($pattern, $replacement, $content);
   return $content;
}
add_filter('the_content', 'add_image_responsive_class');
```
