;(function (win, doc) {

  var projectsWrapper, iframe, projectsLoaded, resets;

  projectsLoaded = false;

  resets = {
    background: 'none',
    border: 'none',
    borderRadius: '0',
    clear: 'none',
    color: 'inherit',
    cursor: 'auto',
    display: 'inline',
    filter: 'none',
    font: 'inherit',
    height: 'auto',
    left: 'auto',
    letterSpacing: 'normal',
    lineHeight: '1',
    listStyle: 'none',
    margin: '0',
    overflow: 'visible',
    padding: '0',
    position: 'static',
    cssFloat: 'none',
    textAlign: 'left',
    textDecoration: 'none',
    textIndent: '0',
    textTransform: 'none',
    top: 'auto',
    verticalAlign: 'baseline',
    visibility: 'visible',
    width: 'auto',
    zIndex: 'auto'
  };


  
  var init = function () {
    generateHTML();
  };


  var generateElement = function (nodeName, properties, styles) {
    var element = doc.createElement(nodeName);
    Object.keys(properties || {}).forEach(function (property) {
      element[property] = properties[property];
    });
    Object.keys(resets).forEach(function (property) {
      element.style[property] = resets[property];
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
      innerHTML: '<img src="http://madewithlove.be/themes/madewithlove/assets/app/img/logo.svg" style="width:1.4em;vertical-align:middle;display:inline-block"> madewithlove #friyay project',
      onclick: triggerProjects
    }, {
      background: '#EEF0F1',
      border: 'none',
      bottom: '0',
      cursor: 'pointer',
      font: '1em Helvetica, sans-serif',
      outline: 'none',
      padding: '0.8em 1.2em',
      position: 'fixed',
      right: '2em',
      whiteSpace: 'nowrap'
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
      bottom: '0',
      height: '70%',
      left: '0',
      position: 'fixed',
      transform: 'translateY(200%)',
      transition: 'transform 1.4s',
      width: '100%'
    });

    blur = generateElement('div', null, {
      background: 'linear-gradient(to bottom, rgba(238, 240, 241, 0), rgba(238, 240, 241, 0.7))',
      bottom: '100%',
      height: '50%',
      position: 'absolute',
      left: '0',
      right: '0'
    });

    iframe = generateElement('iframe', {
      scrolling: 'auto',
      src: 'http://projects-banner.madewithlove.be/'
    }, {
      border: 'none',
      borderTop: '2px solid #1C84B0',
      height: '100%',
      overflow: 'auto',
      width: '100%'
    });

    closeButton = generateElement('button', {
      innerHTML: '&times;',
      onclick: hideProjects
    }, {
      background: '#1C84B0',
      border: 'none',
      boxSizing: 'border-box',
      bottom: '100%',
      color: '#FFF',
      cursor: 'pointer',
      font: '18px/1 Helvetica,sans-serif',
      height: '2em',
      outline: 'none',
      padding: '0.5em',
      position: 'absolute',
      right: '2em',
      textAlign: 'center',
      width: '2em'
    });

    projectsWrapper.appendChild(blur);
    projectsWrapper.appendChild(iframe);
    projectsWrapper.appendChild(closeButton);

    doc.documentElement.appendChild(projectsWrapper);
  }


  var showProjects = function () {
    projectsWrapper.style.transform = 'translateY(0)';
  };


  var hideProjects = function () {
    projectsWrapper.style.transform = 'translateY(200%)';
  }


  if ('querySelectorAll' in doc && 'addEventListener' in win) {
    win.addEventListener('load', init);
  }

})(window, document);