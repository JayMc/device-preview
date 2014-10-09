device-preview jQuery plugin
===========================

Scrolls video device (iMac screen) over a webpage as a long formated image. Directing the eye downthe page as if they were scrolling the webpage.

## Usage

```
<!-- requires jQuery to be loaded first -->
<!-- If you want to change animation easing types you will need to load jQuery UI-->
<script src="devicepreview.js"></script>

<div id="devicescrollhere"></div>

<script>
$('#devicescrollhere').devicescroll({
				webpageImg: 'webpage.png',
				speed: 3000,
				ease: 'swing' //requires jQuery UI (http://api.jqueryui.com/easings/) (tip: stick with an InOut one)
			});
</script>
```

## Options

- webpageImg: image file of webpage to show
- speed in which to scroll
- ease type of easing the animation will use (requires jQuery UI)
