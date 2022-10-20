<h3>BITPOOL-EDGE LIGHT THEME</h3>


---

## About

A Node-RED theme module presenting a Bitpool light color pallette.


## Getting Started 

Use the procedures below to install the Bitpool-Edge light theme onto your running instance.

## Installation

Install using the Node-RED manage palette,


```javascript
1. Click the 'Hamburger' icon at the top right corner.

2. Select the 'Manage palette' option.

3. Click the 'Install' tab and type '@bitpoolos/edge-theme-light' into the search field.

4. Find the latest version and click to install.
```

or using NPM from the command line.

```bash
$ npm install @bitpoolos/edge-theme-light
```

```javascript
5. Update the settings.js file in your Node-RED install directory with the theme name, "bitpool-light-theme"

6. [OPTIONAL] Add extra editorTheme properties to style Login page, Deploy button, and the UI Header. An example configuration for added styling can look like: 

    editorTheme: {
		page: {
			title: "Bitpool",
			favicon: "c:/path_to_module/resources/favicon.ico",
        },
        header: {
			title: " ",
			image: "c:/path_to_module/resources/Bitpool_RGB_Edge.svg",
        },
        login: {
			image: "c:/path_to_module/resources/Bitpool_RGB_Entity_Logo_Small_Use_Positive.png",
        },
        deployButton: {
			type: "default",
			label: "Save",
			icon: "c:/path_to_module/resources/bitpool-small.svg",
        },
		theme: "bitpool-light-theme"
    }


For more information about Node-RED styling, see https://nodered.org/docs/user-guide/runtime/configuration#editor-themes 

```
## Resources
- [bitpool.com](https://www.bitpool.com/) - who are we.
- [app.bitpool.com](https://app.bitpool.com/) - our platform.
- [wiki.bitpool.com](https://wiki.bitpool.com/) - helpful docs.
- [hub.docker.com](https://hub.docker.com/r/bitpoolos/bitpool-edge) - pre-canned nodes.

## License

This project is under the MIT license agreement. For more details, see the LICENSE file.
