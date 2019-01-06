//Elem is the text we will be replacing with the image.
      var elem = document.querySelector('#textPara');


//Election is the name of the datamap svg. 
//This is because I think I based this off on a tutorial that related to election results and ended up keeping it.
      var election = new Datamap({
        scope: 'world',
        element: document.getElementById('worldMap'),
        // projection: 
        setProjection: function (element, options){
          //This is the height and width of the datamap SVG, set relative to the window size to make it responsive.
              var width = window.innerWidth / 1.9,
                 height = width * .8;
              var projection = d3.geo.mollweide()
                  .scale(150)
                  .translate([width / 2, height / 2])
                  .precision(.1);
              var path = d3.geo.path().projection(projection);
              return { path: path, projection: projection };
              console.log('test');
        },
        fills: {
          //uncomment the default fill if you want to set the default fill to be a hex color instead of a pattern.
          // defaultFill: '#f0af0a',
          defaultFill: 'url(#horizontal-stripe)',
          horizontalStripe: 'url(#horizontal-stripe)',
          diagonalStripe: 'url(#diagonal-stripe)',
          verticalStripe: 'url(#vertical-stripe)',
          circles: 'url(#circles)',
          gradient: 'url(#gradient)',
          triangle: 'url(#triangle)'
        },
        
        //This is the data itself populating the map. 
        data: {
          ARG: {fillKey: 'gradient',
                bodegaStatus: 'Observed',
                bodegaImage: 'https://cdn.glitch.com/23fa8cec-e81a-4213-bfab-85d4d2ae92d0%2FIMG_3967.JPG?1544134109943'},
          ATA: {fillKey: 'circles',
                bodegaStatus: 'No known bodegas.',
                bodegaImage: 'https://cdn.glitch.com/23fa8cec-e81a-4213-bfab-85d4d2ae92d0%2Fantartica.jpg?1544268460570'},
          CAN: {fillKey: 'gradient',
                bodegaStatus: 'Observed',
                bodegaImage: 'https://cdn.glitch.com/23fa8cec-e81a-4213-bfab-85d4d2ae92d0%2FIMG_6592.JPG?1544134120235'},
          CZE: {fillKey: 'gradient',
                bodegaStatus: 'Observed',
                bodegaImage: 'https://cdn.glitch.com/23fa8cec-e81a-4213-bfab-85d4d2ae92d0%2FIMG_9557.JPG?1544166923546'},
          DEU: {fillKey: 'gradient',
                bodegaStatus: 'Observed',
                bodegaImage: 'https://cdn.glitch.com/23fa8cec-e81a-4213-bfab-85d4d2ae92d0%2Fgermany.JPG?1544262480146'},
          // ESP: {fillKey: 'gradient',
          //       bodegaStatus: 'Observed',
          //      bodegaImage: 'https://cdn.glitch.com/23fa8cec-e81a-4213-bfab-85d4d2ae92d0%2FIMG_5676.JPG?1544134144594'},
          GTM: {fillKey: 'gradient',
                bodegaStatus: 'Observed',
                bodegaImage: 'https://cdn.glitch.com/23fa8cec-e81a-4213-bfab-85d4d2ae92d0%2FIMG_2992.JPG?1544134122129'},
          // IND: {fillKey: 'gradient',
          //       bodegaStatus: 'Observed',
          //      bodegaImage: 'https://cdn.glitch.com/23fa8cec-e81a-4213-bfab-85d4d2ae92d0%2FIMG_5418.JPG?1544167165812'},
          ISR: {fillKey: 'gradient',
                bodegaStatus: 'Observed',
                bodegaImage: 'https://cdn.glitch.com/23fa8cec-e81a-4213-bfab-85d4d2ae92d0%2FIMG_0124.jpg?1546549666306'},
          JPN: {fillKey: 'gradient',
                bodegaStatus: 'Observed',
                bodegaImage: 'https://cdn.glitch.com/23fa8cec-e81a-4213-bfab-85d4d2ae92d0%2Fjapan.jpeg?1544262068597'},
          KOR: {fillKey: 'gradient',
                bodegaStatus: 'Observed',
                bodegaImage: 'https://cdn.glitch.com/23fa8cec-e81a-4213-bfab-85d4d2ae92d0%2Fcornerstore_seoul.jpg?1545071262882'
          },
          MAR: {fillKey: 'gradient',
                bodegaStatus: 'Observed',
                bodegaImage: 'https://cdn.glitch.com/23fa8cec-e81a-4213-bfab-85d4d2ae92d0%2FIMG_5389.JPG?1544134138327'},
          MEX: {fillKey: 'gradient',
                bodegaStatus: 'Observed',
                bodegaImage: 'https://cdn.glitch.com/23fa8cec-e81a-4213-bfab-85d4d2ae92d0%2FIMG_7032.JPG?1544166743907'},
          TUR: {fillKey: 'gradient',
                bodegaStatus: 'Observed',
                bodegaImage: 'https://cdn.glitch.com/23fa8cec-e81a-4213-bfab-85d4d2ae92d0%2Fphoto5850439520028306998.jpg?1546454554449'
               },
          USA: {fillKey: 'gradient',
                bodegaStatus: 'Observed',
                bodegaImage: 'https://cdn.glitch.com/23fa8cec-e81a-4213-bfab-85d4d2ae92d0%2Fmanhattan.jpeg?1544262342716'},
          ZAF: {fillKey: 'gradient',
                bodegaStatus: 'Observed',
                bodegaImage: 'https://cdn.glitch.com/23fa8cec-e81a-4213-bfab-85d4d2ae92d0%2Fsouthafrica.jpg?1544262098413'}
          
        },
         geographyConfig: {
         responsive: true,
         hideAntarctica: false,
         //Notice that the pop-up template has different text depending on the status of the country.
         popupTemplate: function(geo, data) {
                if(!data){
                        return ['<div class="hoverinfo"><strong>',
                        geo.properties.name, ' ', '</strong><br>' + 'Not yet observed.' +
                        '</div>'].join('');
                } else {
                return ['<div class="hoverinfo"><strong>',
                        geo.properties.name + ' ' + '</strong><br>' + data.bodegaStatus, 
                        '</div>'].join('');
                }
      }
      },
        //The below puts the bodega image in the box if the country has a bodega image.
        done: function(datamap) {
        var html = elem.innerHTML;
        var deviceEventType = '';
         //If its not a mobile device use 'click'
         //Had to use this if/else statement because on mobile the datamaps hover was overriding the click. 
         //This is then recognizing the device and thus setting the deviceEventType for following function.
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            deviceEventType = 'touchstart'
          } else {

            deviceEventType = 'click'
          }
        datamap.svg.selectAll('.datamaps-subunit').on(deviceEventType, function(geography, data) {
          if(!datamap.options.data[geography.id]) {
            elem.innerHTML = "No corner store yet observed.<br><br>Please contribute a photo if you have one!"
          } else {
            var width = window.innerWidth / 4,
                height = width;
            var countryData = datamap.options.data
            var countryID = geography.id
            var countryImage = countryData[countryID].bodegaImage
            elem.innerHTML = "<img src=" + countryImage + "alt=" + "A photo of a corner store from " + geography.id + ">"
            console.log(window.innerWidth);
          }
        })}
        

});