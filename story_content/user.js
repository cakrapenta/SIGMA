function ExecuteScript(strId)
{
  switch (strId)
  {
      case "63bwK7yBrn3":
        Script1();
        break;
      case "6ZEwEAOl5lH":
        Script2();
        break;
      case "68jVprRKN5O":
        Script3();
        break;
      case "61wd5z0Qm4o":
        Script4();
        break;
      case "5Xrq3XaGhI3":
        Script5();
        break;
      case "6GIW5Hb5LFF":
        Script6();
        break;
      case "5ccv3dtyE57":
        Script7();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume=1.0;
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.0;
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.2;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.4;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.6;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.8;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume= 1.0;
}

