device-preview jQuery plugin
===========================

Scrolls video device (iMac screen) over a webpage as a long formated image. Directing the eye downthe page as if they were scrolling the webpage.

## Usage

```

<script src="devicepreview.js"></script>

<div id="devicescrollhere"></div>

<script>
$('#devicescrollhere').devicescroll({
				webpageImg: 'webpage.png',
				speed: 3000
			});
</script>
```

## Options
### type: 
- webpageImg: image file of webpage to show
- speed in which to scroll

