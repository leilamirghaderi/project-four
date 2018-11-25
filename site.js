(function(){
  // Check to make sure essential features are supported
  if (typeof document.querySelector === 'undefined') {
    // No? Then bye!!!
    return;
  }

  document.addEventListener('DOMContentLoaded', function(){
    // Diagnostic...make sure DOMContentLoaded has fired...
    console.log('OMG the DOM has loaded!');

    // Grab the HTML element:
    var html_tag = document.querySelector('html');

    // Go and remove the .nojs class from <html>...
      html_tag.classList.remove('nojs');

    // And then add the .js class to <html>:
    html_tag.classList.add('js');
    var heading_label = 'Read More...';
    var heading = document.querySelector('#read');
    heading.innerHTML = '<a href="#action">'+heading_label+'</a>';
    heading.addEventListener('click',function(){
      var content = document.querySelector('#action');
      var label = document.querySelector('#read a');

      content.classList.toggle('visible');

      if (label.textContent === heading_label) {
        label.textContent = 'Read Less';
      } else {
        label.textContent = heading_label;
      }
    })
  });

  console.log("Hello from JavaScript! You have querySelector!");
})();
