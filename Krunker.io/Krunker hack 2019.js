 ==UserScript==
 @name         Best Krunker script 2019 Undetected Wallhack,Aimbot,No recoil
 @version      1.3
 @author       gpy-dev
 @include      ^(https)(www.)(.+)krunker.io((gameserverparty)=.+)$
 @grant        GM_xmlhttpRequest
 @run-at       document-start
 @require      httpscode.jquery.comjquery-3.3.1.min.js
 @namespace gpy
 ==UserScript==

window.stop();
document.innerHTML = ;

                 
                 

const version = '1.3';

                 
                 

GM_xmlhttpRequest({
    method GET,
    url document.location.origin,
    onload res = {
        let html = res.responseText;
        html = html.replace(game.[^.]+.js, '____.js');
        html = html.replace(script (type=textjavascripts)data-cfasync(.s)script, `meta name=gpy_version content=${version}`);
        GM_xmlhttpRequest({
            method GET,
            url document.location.origin + 'libszip.js',
            onload res = {
                let zip = res.responseText;
                zip = zip.replace(setInterval.);, '');
                html = html.replace(script src=libszip.js.+script, `script${zip}script`);
                html += 'script src=httpsraw.githack.comgpy-devkrunkermasterbypass.jsscript';
                html += 'script src=httpsraw.githack.comgpy-devkrunkermasterhaxy.jsscript';
                html += 'script src=httpsraw.githack.comgpy-devkrunkermastergame.jsscript';

                document.open();
                document.write(html);
                document.close();
            }
        })
    }
})