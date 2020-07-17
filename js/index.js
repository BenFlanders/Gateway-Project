//Get modal 
var modal = document.getElementById("modal");

//Get modal button
var modalBtn = document.getElementById("modalBtn"); 

//Get modal close button
var closeBtn2 = document.getElementsByClassName("modal-close")[0];

//Get alert close button
var close = document.getElementsByClassName("alert-close");

//Get online video
var video = document.getElementById("onlinevideo");

//Get online video container
var container = document.getElementById("youtube");

//Get opening button
var videoOpen = document.getElementsByClassName("video-button"); 

//Get overlay backdrop
var backdrop = document.getElementById("backdrop");

//Open the Reserve Menu
function openReserveMenu(){
      document.getElementById('reserve-menu').style.width = '350px';
     
}

//Listen for open click
modalBtn.addEventListener('click', openModal);
//Listen for close click
closeBtn2.addEventListener('click', closeModal);
//Listen for outside click

//Close the alert
close[0].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    div.style.display = "none"; 
}

//Close Reserve Menu
    function closeReserveMenu(){
      document.getElementById('reserve-menu').style.width = '0';
      
    } 

//Function to open modal
function openModal(){
  backdrop.style.display ='block';
  modal.style.display = 'block';
}

//Function to close modal
function closeModal(){
  backdrop.style.display ='none';
  modal.style.display = 'none';
}

//Function to open video
function openVideo(){
  backdrop.style.display ='block';
  video.style.display = 'block';
  container.style.display ='block';
  
} 

//function to close video
function closeVideo(){
  video.style.display = 'none';
  container.style.display = 'none';
  backdrop.style.display ='none';
}

//open side navbar
function openSlideMenu(){
      document.getElementById('side-menu').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';
  
    }
//close side navbar
    function closeSlideMenu(){
      document.getElementById('side-menu').style.width = '0';
      document.getElementById('main').style.marginLeft = '0';
      
      
    }
