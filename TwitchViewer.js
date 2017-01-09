$(document).ready(function(){
  //FCC Stream

  // API call
  $.ajax({
    type: "GET",
    url: 'https://api.twitch.tv/kraken/channels/freecodecamp',
    headers: {
    'Client-ID': '6ji6gjb1redgevfccimp7bqsmgqw4y'
  },
    success: function(data1){
      console.log(data1);
      var displayName = data1.display_name;
      var logo = data1.logo;
      var status= data1.status;
    $("#fccInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" + "<img src='" + logo + "'>" + "</div>" + "<div class='col-md-4'>" + displayName + "</div>" + "<div class='col-md-4'><a href=\'https://www.twitch.tv/freecodecamp\' target='_blank'>" + status + "</a></div></div>");

      if (data1.stream === null){
        $("#fccStatus").html("FreeCodeCamp is currently OFFLINE!");
      } else {
        $("#fccStatus").html("FreeCodeCamp is currently LIVE!");
      }
    }
  });

  $.ajax({
    type: "GET",
    url: 'https://api.twitch.tv/kraken/channels/battsgo',
    headers: {
    'Client-ID': '6ji6gjb1redgevfccimp7bqsmgqw4y'
  },
    success: function(data1){
      console.log(data1);
      var displayName = data1.display_name;
      var logo = data1.logo;
      var status= data1.status;
    $("#battsInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" + "<img src='" + logo + "'>" + "</div>" + "<div class='col-md-4'>" + displayName + "</div>" + "<div class='col-md-4'><a href=\'https://www.twitch.tv/battsgo\' target=_blank>" + status + "</a></div></div>");
    }
  });

$.ajax({
    type: "GET",
    url: 'https://api.twitch.tv/kraken/channels/esl_sc2',
    headers: {
    'Client-ID': '6ji6gjb1redgevfccimp7bqsmgqw4y'
  },
    success: function(data1){
      console.log(data1);
      var displayName = data1.display_name;
      var logo = data1.logo;
      var status= data1.status;
    $("#eslInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" + "<img src='" + logo + "'>" + "</div>" + "<div class='col-md-4'>" + displayName + "</div>" + "<div class='col-md-4'><a href=\'https://www.twitch.tv/esl_sc2\' target=_blank>" + status + "</a></div></div>");
    }
  });

  // DELETED FOLLOWERS
   var deletedFollowers=['brunofin', 'comster404'];
  for(var i=0;i<deletedFollowers.length;i++){
  $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/channels/"+deletedFollowers[i],
    headers:{
      'Client-ID': '6ji6gjb1redgevfccimp7bqsmgqw4y'
    },
     success: function(data3){
       console.log(data3);
       var logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
       var displayName= deletedFollowers[i];
       var status= data3.status;
         $("#followerInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" + "<img src='" + logo + "'>" + "</div>" + "<div class='col-md-4'>" + displayName + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
     }
  });

  }

});

// MINIFIED JS: $(document).ready(function(){$.ajax({type:"GET",url:"https://api.twitch.tv/kraken/channels/freecodecamp",headers:{"Client-ID":"6ji6gjb1redgevfccimp7bqsmgqw4y"},success:function(a){console.log(a);var b=a.display_name,c=a.logo,d=a.status;$("#fccInfo").prepend("<div class ='row'><div class='col-md-4'><img src='"+c+"'></div><div class='col-md-4'>"+b+"</div><div class='col-md-4'><a href='https://www.twitch.tv/freecodecamp' target='_blank'>"+d+"</a></div></div>"),null===a.stream?$("#fccStatus").html("FreeCodeCamp is currently OFFLINE!"):$("#fccStatus").html("FreeCodeCamp is currently LIVE!")}}),$.ajax({type:"GET",url:"https://api.twitch.tv/kraken/channels/battsgo",headers:{"Client-ID":"6ji6gjb1redgevfccimp7bqsmgqw4y"},success:function(a){console.log(a);var b=a.display_name,c=a.logo,d=a.status;$("#battsInfo").prepend("<div class ='row'><div class='col-md-4'><img src='"+c+"'></div><div class='col-md-4'>"+b+"</div><div class='col-md-4'><a href='https://www.twitch.tv/battsgo' target=_blank>"+d+"</a></div></div>")}}),$.ajax({type:"GET",url:"https://api.twitch.tv/kraken/channels/esl_sc2",headers:{"Client-ID":"6ji6gjb1redgevfccimp7bqsmgqw4y"},success:function(a){console.log(a);var b=a.display_name,c=a.logo,d=a.status;$("#eslInfo").prepend("<div class ='row'><div class='col-md-4'><img src='"+c+"'></div><div class='col-md-4'>"+b+"</div><div class='col-md-4'><a href='https://www.twitch.tv/esl_sc2' target=_blank>"+d+"</a></div></div>")}});for(var a=["brunofin","comster404"],b=0;b<a.length;b++)$.ajax({type:"GET",url:"https://api.twitch.tv/kraken/channels/"+a[b],headers:{"Client-ID":"6ji6gjb1redgevfccimp7bqsmgqw4y"},success:function(c){console.log(c);var d="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g",e=a[b],f=c.status;$("#followerInfo").prepend("<div class ='row'><div class='col-md-4'><img src='"+d+"'></div><div class='col-md-4'>"+e+"</div><div class='col-md-4'>"+f+"</div></div>")}})});
// API CALL Kraken: https://api.twitch.tv/kraken/streams/freecodecamp
// API CALL FCC: https://wind-bow.gomix.me/twitch-api/streams/freecodecamp
// TWITCH API KEY: 6ji6gjb1redgevfccimp7bqsmgqw4y
// TWITCH APPLICATION NAME: "TwitchViewer9000Turbo"
// API CALL RESOURCE: https://github.com/justintv/Twitch-API/blob/master/v3_resources/streams.md#example-request
