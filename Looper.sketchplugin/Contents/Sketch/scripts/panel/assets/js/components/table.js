(function () {

  var _submit,
    send_loop,
    send_rotate_select,
    send_position,
    send_angle,
    send_rotate_inc_perf,
    send_rotate_sin,
    send_rotate_rnd,
    send_opacity,
    send_move_inc,
    send_move_rnd_x,
    send_move_rnd_y,
    send_scale,
    send_scale_px,
    send_scale_pr,
    send_scale_rnd;

  _submit = function () {
      
    var loop_auto,
    loop,
    rotate_select,
    rotate_center,
    rotate_auto,
    rotate_angle,
    rotate_inc_perf,
    rotate_sin,
    rotate_rnd,
    opacity_select,
    opacity_1,
    opacity_2,
    opacity_3,
    opacity,
    move_select,
    move_direction,
    move_inc,
    move_rnd_x,
    move_rnd_y,
    scale_selection,
    scale_perf,
    scale_px,
    scale_pr,
    scale_rnd;

    
    //loop_auto = $('#input_count_toggle').is(':checked'); // Checkbox
    //console.log("loop_auto:"+loop_auto);
    loop = $('#input_count_txt').val().trim(); // Text box
    //console.log("loop:"+loop);
    
    rotate_select = $('#input_angle_checkbox_1').is(':checked'); // Checkbox
    //console.log("rotate_select:"+rotate_select);
    //rotate_center = $('#input_angle_checkbox_2').is(':checked'); // Checkbox
    //console.log("rotate_center:"+rotate_center);
    //rotate_auto = $('#input_angle_checkbox_3').is(':checked'); // Checkbox
    rotate_auto = $('#input_rot_1').is(':checked');
    //console.log("rotate_auto:"+rotate_auto);
    rotate_angle = $('#input_angle_txt').val().trim(); // Text box
    //console.log("rotate_angle:"+rotate_angle);
    rotate_inc_perf = $('#input_angle_dropdown_1').val().trim(); // Dropdown
    //console.log("rotate_inc_perf:"+rotate_inc_perf);
    rotate_sin = $('#input_angle_sin_val').val().trim(); // Text box
    //console.log("rotate_sin:"+rotate_sin);
    rotate_rnd = $('#input_angle_rnd_val').val().trim(); // Text box
    //console.log("rotate_rnd:"+rotate_rnd);
    
    opacity_select = $('#input_opacity_toggle').is(':checked'); // Checkbox
    //console.log("opacity_select:"+opacity_select);
    opacity_1 = $('#input_opacity_1').is(':checked'); // Checkbox
    //console.log("opacity_1:"+opacity_1);
    opacity_2 = $('#input_opacity_2').is(':checked'); // Checkbox
    //console.log("opacity_2:"+opacity_2);
    opacity_3 = $('#input_opacity_3').is(':checked'); // Checkbox
    //console.log("opacity_3:"+opacity_3);
    
    move_select = $('#input_move_toggle').is(':checked'); // Checkbox
    //console.log("move_select:"+move_select);
    move_direction = $('#input_move_dropdown').val().trim(); // Dropdown
    //console.log("move_direction:"+move_direction);    
    move_inc = $('#input_move_txt_1').val().trim(); // Text box
    //console.log("move_inc:"+move_inc);
    move_rnd_x = $('#input_move_txt_2').val().trim(); // Text box
    //console.log("move_rnd_x:"+move_rnd_x);
    move_rnd_y = $('#input_move_txt_3').val().trim(); // Text box
    //console.log("move_rnd_y:"+move_rnd_y);

    scale_selection = $('#input_scale_toggle').is(':checked'); // Checkbox
    //console.log("scale_selection:"+scale_selection);
    scale_perf = $('#input_scale_dropdown').val().trim(); // Dropdown
    //console.log("scale_perf:"+scale_perf);
    scale_px = $('#input_scale_txt_1').val().trim(); // Text box
    //console.log("scale_px:"+scale_px);
    scale_pr = $('#input_scale_txt_2').val().trim(); // Text box
    //console.log("scale_pr:"+scale_pr);
    scale_rnd = $('#input_scale_txt_3').val().trim(); // Text box
    //console.log("scale_rnd:"+scale_rnd);


    // Check if all txt input are numbers
    if(!isNaN(loop) && 
      !isNaN(rotate_angle) && 
      !isNaN(rotate_sin) && 
      !isNaN(rotate_rnd) && 
      !isNaN(move_inc) && 
      !isNaN(move_rnd_x) && 
      !isNaN(move_rnd_y) && 
      !isNaN(scale_px) && 
      !isNaN(scale_pr) && 
      !isNaN(scale_rnd)) {
          

          //console.log("no error");
          var options = {};
          
          // Loop / Count
          options.send_loop = loop;
          /*
          if (loop_auto) {
              options.send_loop = (360/rotate_angle)+1;   
          } else {
              options.send_loop = loop;
          }
          */

          
          // Rotate
          if (rotate_select) {
            options.send_rotate_select = 0;
          } else {
            options.send_rotate_select = 1;
          }

          if (rotate_auto) {
            options.send_angle = (360/loop);
          } else {
            options.send_angle = rotate_angle;
          }

          switch(rotate_inc_perf) {
              case "Linear":
                  options.send_rotate_inc_perf = 0;
                  break;
              case "Sinusoidal":
                  options.send_rotate_inc_perf = 1;
                  break;
              case "Random":
                  options.send_rotate_inc_perf = 2;
                  break;
          }

          options.send_rotate_sin = rotate_sin;
          options.send_rotate_rnd = rotate_rnd;
          /*
          if (loop_auto) {
              options.send_loop = (360/rotate_angle)+1;   
          } else {
              options.send_loop = loop;
          }
          */
          // Opacity
          if (opacity_select) {
              if (opacity_1) options.send_opacity = 2;
              if (opacity_2) options.send_opacity = 3;
              if (opacity_3) options.send_opacity = 4;
          } else {
              options.send_opacity = 1;
          }


          // Position
          if (move_select) {
              switch(move_direction) {
                  case "Horizontally":
                      options.send_position = 2;
                      break;
                  case "Vertically":
                      options.send_position = 3;
                      break;
                  case "Diagonally":
                      options.send_position = 4;
                      break;
                  case "Randomly":
                      options.send_position = 5;
                      break;
              }
            
          } else {
            options.send_position = 0;
          }

          options.send_move_inc = move_inc;
          options.send_move_rnd_x = move_rnd_x;
          options.send_move_rnd_y = move_rnd_y;

          /*
          if (rotate_center) {
            options.send_position = 0;
          } else {
            options.send_position = 1;
          }
          */


          // Scale
          scale_px = Math.floor(scale_px);
          if (scale_px%2 == 0) {

          } else {
            scale_px = scale_px - 1;            
          }

          if (scale_selection) {
              switch(scale_perf) {
                  case "Pixels":
                      options.send_scale = 2;
                      break;
                  case "Percentage":
                      options.send_scale = 3;
                      break;
                  case "Randomly":
                      options.send_scale = 1;
                      break;
              }
          } else {
              options.send_scale = 0;
              options.send_scale_inc = scale_px;
          }

          options.send_scale_px = scale_px;
          options.send_scale_pr = scale_pr;
          options.send_scale_rnd = scale_rnd;

          ga('send', 'event', 'table panel', 'submit', 'tables');
          MDAction('submit', options);
          
    }


  }

  _toggleAngleEnbale = function () {
      if ($('#input_angle_checkbox_1').is(':checked')) {
        $('#input_angle_controls').fadeTo( "fast", 1.0 );
        //$('#input_angle_checkbox_2').removeAttr('disabled'); // Enable - Rotate from center
        //$('#input_angle_checkbox_3').removeAttr('disabled'); // Enable - Automatic
        //$('#input_angle_txt').val("20");
        $('#input_angle_txt').removeAttr('disabled'); // Enable - Rotation angle
        $('#input_angle_dropdown_1').removeAttr('disabled'); // Enable - Rotation increment dropdown

        $('#input_angle_sin_val').removeAttr('disabled'); // Enable - Rotation sin
        $('#input_angle_rnd_val').removeAttr('disabled'); // Enable - Rotation rnd

      } else {
        //$('#input_angle_controls').fadeTo( "fast", 0.34 );
        $('#input_angle_controls').hide();
        //$('#input_angle_checkbox_2').attr('disabled', 'disabled'); // Disable - Rotate from center
        //document.querySelector('#input_angle_checkbox_3_lbl').MaterialCheckbox.uncheck(); // Uncheck - Automatic
        //$('#input_angle_checkbox_3').attr('disabled', 'disabled'); // Disable - Automatic
        //$('#input_angle_txt').val("-");
        $('#input_angle_txt').attr('disabled', 'disabled'); // Disable - Rotation angle
        $('#input_angle_dropdown_1').attr('disabled', 'disabled'); // Disable - Rotation increment dropdown

        $('#input_angle_sin_val').attr('disabled', 'disabled'); // Disable - Rotation sin
        $('#input_angle_rnd_val').attr('disabled', 'disabled'); // Disable - Rotation rnd
      }
  }
  _toggleAngleInc = function () {
      switch($('#input_angle_dropdown_1').val().trim()) {
          case "Linear":
              $('#input_angle_sin_div').hide();
              $('#input_angle_rnd_div').hide();
              break;
          case "Sinusoidal":
              $('#input_angle_sin_div').show();
              $('#input_angle_rnd_div').hide();
              break;
          case "Random":
              $('#input_angle_sin_div').hide();
              $('#input_angle_rnd_div').show();
              break;
      }
  }
  /*
  _toggleCountAuto = function () {
      if ($('#input_count_toggle').is(':checked')) {
        //$('#input_count_txt_div').fadeTo( "fast", 0.34 );
        $('#input_count_txt_div').hide();
        $('#input_count_txt').attr('disabled', 'disabled'); // Disable - Count txt

        if ($('#input_angle_checkbox_3').is(':checked')) {
          document.querySelector('#input_angle_checkbox_3_lbl').MaterialCheckbox.uncheck();
          _toggleAngleAuto();
        }
        
      } else {
        $('#input_count_txt_div').fadeTo( "fast", 1.0 );
        $('#input_count_txt').removeAttr('disabled'); // Enable - Count txt
      }
  }
  */
  _toggleAngleAuto = function () {
      /*
      if ($('#input_angle_checkbox_3').is(':checked')) {
        //$('#input_angle_txt_div').fadeTo( "fast", 0.34 );
        $('#input_angle_txt_div').hide();
        $('#input_angle_txt').attr('disabled', 'disabled'); // Disable - Count txt
        
        if ($('#input_count_toggle').is(':checked')) {
          document.querySelector('#input_count_toggle_lbl').MaterialCheckbox.uncheck();
          _toggleCountAuto();
        }
        
        
      } else {
        $('#input_angle_txt_div').fadeTo( "fast", 1.0 );
        $('#input_angle_txt').removeAttr('disabled'); 
      }
      */
      $('#input_angle_txt_div').fadeTo( "fast", 1.0 );
      $('#rot_perf').fadeTo( "fast", 1.0 );
      
  }
  _toggleAngleAuto1 = function () {
      $('#input_angle_txt_div').hide();
      $('#rot_perf').hide();
      
  }
  _toggleMove = function () {
      if ($('#input_move_toggle').is(':checked')) {
        $('#input_move_controls').fadeTo( "fast", 1.0 );
        $('#input_move_dropdown').removeAttr('disabled'); 
        $('#input_move_txt_1').removeAttr('disabled'); 
        $('#input_move_txt_2').removeAttr('disabled'); 
        $('#input_move_txt_3').removeAttr('disabled'); 
      } else {
        //$('#input_move_controls').fadeTo( "fast", 0.34 );
        $('#input_move_controls').hide();
        $('#input_move_dropdown').attr('disabled', 'disabled');
        $('#input_move_txt_1').attr('disabled', 'disabled');
        $('#input_move_txt_2').attr('disabled', 'disabled');
        $('#input_move_txt_3').attr('disabled', 'disabled'); 
      }
  }
  _toggleMoveDropdown = function () {
      switch($('#input_move_dropdown').val().trim()) {
          case "Horizontally":
              $('#input_move_txt_1_div').show();
              $('#input_move_txt_2_div').hide();
              $('#input_move_txt_3_div').hide();
              break;
          case "Vertically":
              $('#input_move_txt_1_div').show();
              $('#input_move_txt_2_div').hide();
              $('#input_move_txt_3_div').hide();
              break;
          case "Diagonally":
              $('#input_move_txt_1_div').show();
              $('#input_move_txt_2_div').hide();
              $('#input_move_txt_3_div').hide();
              break;
          case "Randomly":
              $('#input_move_txt_1_div').hide();
              $('#input_move_txt_2_div').show();
              $('#input_move_txt_3_div').show();
              break;
      }
  }
  _toggleScale = function () {
      if ($('#input_scale_toggle').is(':checked')) {
        $('#input_scale_controls').fadeTo( "fast", 1.0 );
        $('#input_scale_dropdown').removeAttr('disabled'); 
        $('#input_scale_txt_1').removeAttr('disabled'); 
        $('#input_scale_txt_2').removeAttr('disabled'); 
        $('#input_scale_txt_3').removeAttr('disabled'); 
      } else {
        //$('#input_scale_controls').fadeTo( "fast", 0.34 );
        $('#input_scale_controls').hide();
        $('#input_scale_dropdown').attr('disabled', 'disabled');
        $('#input_scale_txt_1').attr('disabled', 'disabled');
        $('#input_scale_txt_2').attr('disabled', 'disabled');
        $('#input_scale_txt_3').attr('disabled', 'disabled'); 
      }
  }
  _toggleScaleDropdown = function () {
      switch($('#input_scale_dropdown').val().trim()) {
          case "Pixels":
              $('#input_scale_txt_1_div').show();
              $('#input_scale_txt_2_div').hide();
              $('#input_scale_txt_3_div').hide();
              break;
          case "Percentage":
              $('#input_scale_txt_1_div').hide();
              $('#input_scale_txt_2_div').show();
              $('#input_scale_txt_3_div').hide();
              break;
          case "Randomly":
              $('#input_scale_txt_1_div').hide();
              $('#input_scale_txt_2_div').hide();
              $('#input_scale_txt_3_div').show();
              break;
      }
  }
  _toggleOpacity = function () {
      if ($('#input_opacity_toggle').is(':checked')) {
        $('#input_opacity_controls').fadeTo( "fast", 1.0 );
      } else {
        //$('#input_opacity_controls').fadeTo( "fast", 0.34 );
        $('#input_opacity_controls').hide();
      }
  }
  if($('#input_rot_1').is(':checked')) {
      $('#input_angle_txt_div').hide();
      $('#rot_perf').hide();
      
  }
  //_toggleScale();
  if ($('#input_scale_toggle').is(':checked')) {
      $('#input_scale_controls').fadeTo( "fast", 1.0 );
    } else {
      //$('#input_scale_controls').fadeTo( "fast", 0.34 );
      $('#input_scale_controls').hide();
    }

  //_toggleMove();
  if ($('#input_move_toggle').is(':checked')) {
    $('#input_move_controls').fadeTo( "fast", 1.0 );
  } else {
    //$('#input_move_controls').fadeTo( "fast", 0.34 );
    $('#input_move_controls').hide();
  }

  _toggleOpacity();
  _toggleScaleDropdown();
  _toggleMoveDropdown();
  _toggleAngleInc();
  

    $('#submit').on('click', _submit);    

    //$('#input_count_toggle').on('change', _toggleCountAuto); // Count automatic toggle
    $('#input_angle_checkbox_1').on('change', _toggleAngleEnbale); // Rotate toggle
    $("#input_rot_1").on('change', _toggleAngleAuto1); // Rotate automatic toggle
    $("#input_rot_2").on('change', _toggleAngleAuto); // Rotate automatic toggle
    $('#input_angle_dropdown_1').on('change', _toggleAngleInc); // Rotate increment dropdown
    $('#input_move_toggle').on('change', _toggleMove); // Rotate automatic toggle
    $('#input_move_dropdown').on('change', _toggleMoveDropdown); // Move dropdown
    $('#input_scale_toggle').on('change', _toggleScale); // Rotate toggle
    $('#input_scale_dropdown').on('change', _toggleScaleDropdown); // Scale dropdown
    $('#input_opacity_toggle').on('change', _toggleOpacity); // Opacity toggle
    

})();