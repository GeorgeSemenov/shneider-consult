$(document).ready(function(){
  /*sandwich button script*/
  $('.header__sandwich-ico-container').click(function(){
    $('.header').toggleClass('header_expanded');
  });

  /*script for monday promotion*/
  $('.header__promotion').text(getMondeyPromotionText);
})

function getMondeyPromotionText(){
  let now = new Date();
  // let now = new Date(2016,1,11);
  // let now = new Date(2016,1,14);
  // let now = new Date(2016,1,17);
  // let now = new Date(2022,0,24);
  let difference = now.getDay()==0 ? 8 - 7 : 8 - now.getDay();
  let mondayDate = now;
  mondayDate.setDate(now.getDate() + difference); 
  let year = mondayDate.getFullYear().toString().substring(2);
  let month = getZero(mondayDate.getMonth() + 1);
  let date = getZero(mondayDate.getDate());
  return `Распродажа до ${date}.${month}.${year}!`
}

function getZero(data){
  return data>9 ? data : `0${data}`;
}