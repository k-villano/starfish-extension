//document.addEventListener('DOMContentLoaded', () => {
if (( document.documentElement.textContent || document.documentElement.innerText
        ).indexOf('About' || 'monday' || 'and' || 'Ocean' ||'ocean') > -1
      ) {
        //pop up our video
        //ourBody.style.backgroundColor = 'blue';
        const ourBody = document.querySelector('body');
        ourBody.style.backgroundColor = 'teal'
        const ourEl = document.querySelectorAll('*')
        for (let el of ourEl){
            el.style.backgroundColor = 'transparent'
        }
        const ourText = document.querySelectorAll('p')
        for (let el of ourEl){
            el.style.color = 'rgb(219, 219, 210)'
        }
        const ourCode = document.querySelectorAll('code')
        for (let el of ourEl){
            el.style.color = 'rgb(219, 219, 210)'
        }

        const vidtag = document.createElement('embed')
        ourBody.appendChild(vidtag)
        vidtag.setAttribute('src', 'https://www.youtube.com/embed/DHUnz4dyb54?si=pubQ2MSfNxZvLp9C&autoplay=1&mute=1')
        vidtag.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen; web-share')
        vidtag.setAttribute('type', 'video/mp4')
        vidtag.setAttribute('wmode', 'transparent')
        vidtag.style.width = '100%'
        vidtag.style.height = '100%'
        vidtag.style.top = '0'
        vidtag.style.left = '0'
        
        vidtag.style.objectFit = 'cover'
        vidtag.style.position = 'fixed'
        vidtag.style.zIndex =  '-1'
        vidtag.autoplay = true
        vidtag.setAttribute('frameboard', '0')

      
      }
      console.log('here')


//})

