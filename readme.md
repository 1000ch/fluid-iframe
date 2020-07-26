# fluid-iframe [![Build Status](https://travis-ci.org/1000ch/fluid-iframe.svg?branch=master)](https://travis-ci.org/1000ch/fluid-iframe) [![devDependency Status](https://david-dm.org/1000ch/fluid-iframe/dev-status.svg)](https://david-dm.org/1000ch/fluid-iframe?type=dev)

> Web Components which provides fluid width `<iframe>`.

## Install

Using [npm](https://www.npmjs.org/package/fluid-iframe):

```sh
$ npm install fluid-iframe
```

## Usage

Import `FluidIframe` and register it as a custom element.

```html
<script type="module">
import FluidIframe from 'https://unpkg.com/fluid-iframe';

customElements.define('fluid-iframe', FluidIframe);
</script>
```

Put `<fluid-iframe>`.

```html
<fluid-iframe
  src="https://www.youtube.com/embed/EqNHSrHzSOU"
  title="Santa Tracker: Out Like A Light"
  aspect="16/9">
</fluid-iframe>
```

## API

### `src` attribute

URL string which will be set as `<iframe src>`.

### `title` attribute

Title string which will be set as `<iframe title>`.

### `aspect` attribute

`x/y` format string will be calculated for aspect ratio. Default value is `16/9`.

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
