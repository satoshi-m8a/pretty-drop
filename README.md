# Pretty Drop

jQuery plugin for smooth mega drop down that considered mouse coordinate context.

## Demo

[here][page]

[page]: http://satoshi-m8a.github.io/pretty-drop

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/satoshi.m8a/jquery-pretty-drop/master/dist/jquery.pretty-drop.min.js
[max]: https://raw.github.com/satoshi.m8a/jquery-pretty-drop/master/dist/jquery.pretty-drop.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/pretty-drop.min.js"></script>
<script>
jQuery(function($) {
   $("#prettyDrop").prettyDrop({
          active: function (menu) {
              menu.addClass("active");
          },
          deactive: function (menu) {
              menu.removeClass("active");
          },
          menuSelector: ".menu-item"
      });
});
</script>
<div class="h-menu" id="prettyDrop">
    <ul>
        <li class="menu-item">
            <a href="#">
                Pretty Menu1
            </a>
            <div class="sub-menu">
                <h3>Sub Menu1</h3>
            </div>
        </li>
        <li class="menu-item">
            <a href="#">
                Pretty Menu2
            </a>
            <div class="sub-menu">
                <h3>Sub Menu2</h3>
            </div>
        </li>
        <li class="menu-item">
            <a href="#">
                Pretty Menu3
            </a>
            <div class="sub-menu">
                <h3>Sub Menu3</h3>
            </div>
        </li>
    </ul>
</div>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_
