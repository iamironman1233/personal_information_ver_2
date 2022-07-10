function killCopy(n){
    return!1}
  function reEnable(){
    return!0}
  document.onselectstart=new Function("return false"),window.sidebar&&(document.onmousedown=killCopy,document.onclick=reEnable);
function clickIE4(){
    return 2==event.button?!1:void 0}
  function clickNS4(n){
    return!(document.layers||document.getElementById&&!document.all)||2!=n.which&&3!=n.which?void 0:!1}
  $(document).ready(function(){
    const n=$("body"),e=$(".btn");
    e.on("click",function(){
      e.removeClass("active"),$(this).addClass("active"),n.toggleClass("dark")}
        )}
                   );
  var message="Haizz";
  document.addEventListener("keydown",function(n){
    n.ctrlKey&&n.preventDefault()}
                           ),document.layers?(document.captureEvents(Event.MOUSEDOWN),document.onmousedown=clickNS4):document.all&&!document.getElementById&&(document.onmousedown=clickIE4),document.oncontextmenu=new Function("return false"),document.onkeypress=function(n){
    return n=n||window.event,123==n.keyCode?!1:void 0}
    ,document.onmousedown=function(n){
    return n=n||window.event,123==n.keyCode?!1:void 0}
    ,document.onkeydown=function(n){
    return n=n||window.event,123==n.keyCode?!1:void 0};

$(document).ready(function(){
    $("*").bind("cut copy paste contextmenu",function(n){
      n.preventDefault()}
               )}
                                                );
!function(){
    window.__CF$cv$params={
      r:"6d580aa7db374649",m:"piHyXZoc9qM8v2S4h3zPl88QWfUKPMFb4pONivjHNl8-1643517830-0-AZZ4CzrzrHD0g48Zh4p5t+A145ezwEIRcQyfkl74WfQw01Aq0I//InSeiMVb8j3fB0wBbFHMXUNptaxPsg3kElwa9j5YAqi+ZDqCY3ATAdZpnPWkoGWqXXT7XxyHd8mt+w==",s:[894195593321,615746247658],u:"/cdn-cgi/challenge-platform/h/b"}
  }
  ();
