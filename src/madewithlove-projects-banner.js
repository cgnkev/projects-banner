;(function (win, doc) {

  var projectsWrapper, iframe, projectsLoaded;

  projectsLoaded = false;


  
  var init = function () {
    generateHTML();
  };


  var generateElement = function (nodeName, properties, styles) {
    var element = doc.createElement(nodeName);
    Object.keys(properties || {}).forEach(function (property) {
      element[property] = properties[property];
    });
    Object.keys(styles || {}).forEach(function (style) {
      element.style[style] = styles[style];
    });
    return element;
  }


  var generateHTML = function () {
    var banner, button;

    banner = doc.createElement('div');

    button = generateElement('button', {
      innerHTML: '<img src="http://madewithlove.be/themes/madewithlove/assets/app/img/logo.svg" style="width:1.4em;vertical-align:middle"> madewithlove #friyay project',
      onclick: triggerProjects
    }, {
      background: '#EEF0F1',
      border: 'none',
      cursor: 'pointer',
      font: '1em Helvetica, sans-serif',
      outline: 'none',
      padding: '0.8em 1.2em',
      position: 'absolute',
      right: '2em',
      top: '0'
    });

    banner.appendChild(button);
    doc.documentElement.appendChild(banner);
  };


  var triggerProjects = function () {
    if (!projectsWrapper) {
      generateProjectWrapper();
    }

    if (projectsLoaded) {
      showProjects();
    }
    else {
      iframe.addEventListener('load', function () {
        projectsLoaded = true;
        setTimeout(showProjects, 100);
      });
    }
  };


  var generateProjectWrapper = function () {
    var closeButton;

    projectsWrapper = generateElement('div', null, {
      background: '#FFF',
      height: '70%',
      left: '0',
      position: 'fixed',
      top: '0',
      transform: 'translateY(-120%)',
      transition: 'transform 1.4s',
      width: '100%'
    });

    iframe = generateElement('iframe', {
      scrolling: 'auto',
      src: 'https://madewithlove.github.io/projects-banner/projects/projects.html'
    }, {
      border: 'none',
      borderBottom: '2px solid #1C84B0',
      height: '100%',
      overflow: 'auto',
      width: '100%'
    });

    closeButton = generateElement('button', {
      innerHTML: 'Close',
      onclick: hideProjects
    }, {
      background: '#1C84B0',
      border: 'none',
      color: '#FFF',
      font: '18px/1 Helvetica,sans-serif',
      outline: 'none',
      padding: '0.5em',
      position: 'absolute',
      right: '2em',
      top: '100%'
    });

    projectsWrapper.appendChild(iframe);
    projectsWrapper.appendChild(closeButton);

    doc.documentElement.appendChild(projectsWrapper);
  }


  var showProjects = function () {
    projectsWrapper.style.transform = 'translateY(0)';
  };


  var hideProjects = function () {
    projectsWrapper.style.transform = 'translateY(-120%)';
  }


  if ('querySelectorAll' in doc && 'addEventListener' in win) {
    win.addEventListener('load', init);
  }

})(window, document);