Cheetos Global, a remix of Corner Stores Global
=================

This is both a project covering snax vendors globally AND template for others looking to play around with d3 maps, mapping something they love around the world. 

The Project 
------------

## How it's made

The map is made is [datamaps](http://datamaps.github.io/), an easily customizable library based on the data visualization library d3. 

All of the countries have a default fill. The countries that have a bodega image are listed in the json object in script.js. The image links are stored in that file, while the images are hosted in the glitch asset folder. 

### Notes on the structure.
#### index.html
The main thing to note here is the svg pattern creations and the code to create a custom legend.  

#### script.js
This script creates the datamap map. When a user clicks on the country on the map, it creates both the standard datamap popup. If the country has a corner store picture, then it pops up the picture on the page.

Customizations from standard datamap: 
- Custom svg pattern based fill. 
- The Mollweide projection.


Hosted on [Glitch](https://glitch.com/). Made by [eve](https://twitter.com/eveahe).
-------------------

\ ゜o゜)ノ
