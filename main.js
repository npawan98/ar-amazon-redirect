import { CSS3DObject } from './libs/three.js-r132/examples/jsm/renderers/CSS3DRenderer.js';
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    // const player = await createYoutube();

    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: './amazon_target.mind',
    });
    const {renderer, cssRenderer, scene, cssScene, camera} = mindarThree;

    const obj = new CSS3DObject(document.querySelector("#ar-div"));
    const cssAnchor = mindarThree.addCSSAnchor(0);
    cssAnchor.group.add(obj);

    function redirectToAmazon(){
      // function to redirect to amazon
      window.location.href = "https://www.amazon.in/"
    }

    function clearPreviousElement() {
      // function to clear previous elements

      let element = document.getElementById("player");
      while (element.firstChild) {
        element.removeChild(element.firstChild);

      }
    }

    cssAnchor.onTargetFound = () => {
      // player.playVideo();
      // window.location.href = 'https://www.amazon.com'
      // document.getElementById("player").innerHTML=`
      //   <a href="https://www.amazon.in/>
      //     <img src="https://static.toiimg.com/thumb/msid-94222926,imgsize-897192,width-400,resizemode-4/94222926.jpg"/>
      //   </a>

      // `
      clearPreviousElement();
        var elem = document.createElement("img");
        elem.setAttribute('id','amazon-sale')
        document.getElementById("player").appendChild(elem);
        elem.src = './amazon_sale.webp';
  
        document.getElementById('amazon-sale').onclick = redirectToAmazon;

    }
    cssAnchor.onTargetLost = () => {
      // player.pauseVideo();
    }

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      cssRenderer.render(cssScene, camera);
    });
  }
  start();
});
