const _0x572e53=_0x3be5;function _0x3be5(_0x146c55,_0x4f08aa){const _0x297490=_0x2974();return _0x3be5=function(_0x3be536,_0x440406){_0x3be536=_0x3be536-0xd9;let _0x1c814c=_0x297490[_0x3be536];return _0x1c814c;},_0x3be5(_0x146c55,_0x4f08aa);}function _0x2974(){const _0x4e23ca=['floor','4155315zGkKQy','26743014THHWgN','charCodeAt','charAt','186675OkRyhq','replace','2587800jdokWE','log','╮*\x0a','command','diagonalDerecha','\x22\x20se\x20encuentra\x20en\x20la\x20dirección\x20\x22','keys','random','GITHUB','diagonalIzquierda','horizontal','1401222TqAcyz','\x22\x20empezando\x20en\x20la\x20fila\x20','repeat','\x20|\x20','915215xEpiqc','Incorrecto.\x20Te\x20quedan','WHATSAPP','ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓜⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ','length','\x20\x20\x20\x20\x20','4Gsyjfp','\x20\x20\x20','¡Correcto!','8SwBmQS','GATABOT','\x20y\x20columna\x20','vertical','join','2961658yDMErX','CASA','Agotaste\x20tus\x20intentos.\x20La\x20palabra\x20correcta\x20era:','La\x20palabra\x20\x22'];_0x2974=function(){return _0x4e23ca;};return _0x2974();}(function(_0x3d42cc,_0x2f7074){const _0x456ff4=_0x3be5,_0x4fd12b=_0x3d42cc();while(!![]){try{const _0x125419=-parseInt(_0x456ff4(0xd9))/0x1+-parseInt(_0x456ff4(0xfd))/0x2+-parseInt(_0x456ff4(0xf0))/0x3+-parseInt(_0x456ff4(0xdf))/0x4*(parseInt(_0x456ff4(0xec))/0x5)+parseInt(_0x456ff4(0xf2))/0x6+-parseInt(_0x456ff4(0xe7))/0x7+-parseInt(_0x456ff4(0xe2))/0x8*(-parseInt(_0x456ff4(0xed))/0x9);if(_0x125419===_0x2f7074)break;else _0x4fd12b['push'](_0x4fd12b['shift']());}catch(_0xda7157){_0x4fd12b['push'](_0x4fd12b['shift']());}}}(_0x2974,0x72e0a));let fila,columna,sopaNube=null,intentos=0x2,handler=async(_0x592518,{conn:_0x5748fe,text:_0x15d145,usedPrefix:_0x2118f5,command:_0x5d298c})=>{const _0x179d8b=_0x3be5;function _0x164b75(){const _0x42cfc1=_0x3be5,_0x40ecfa=0xa;let _0x41e344=new Array(_0x40ecfa);for(let _0x4ddcbb=0x0;_0x4ddcbb<_0x40ecfa;_0x4ddcbb++){_0x41e344[_0x4ddcbb]=new Array(_0x40ecfa);}const _0x38dbf6=[_0x42cfc1(0xe8),_0x42cfc1(0xe3),_0x42cfc1(0xdb),_0x42cfc1(0xfa)],_0x5dd570=_0x38dbf6[Math[_0x42cfc1(0xeb)](Math[_0x42cfc1(0xf9)]()*_0x38dbf6[_0x42cfc1(0xdd)])];let _0x43e19b=Math['floor'](Math['random']()*_0x40ecfa),_0x1e38af=Math[_0x42cfc1(0xeb)](Math['random']()*_0x40ecfa);const _0x321d01=[_0x42cfc1(0xfc),'vertical',_0x42cfc1(0xf6),_0x42cfc1(0xfb)],_0x3e6941=_0x321d01[Math[_0x42cfc1(0xeb)](Math['random']()*_0x321d01[_0x42cfc1(0xdd)])];while(_0x43e19b+_0x5dd570[_0x42cfc1(0xdd)]>_0x40ecfa&&_0x3e6941==='vertical'||_0x1e38af+_0x5dd570[_0x42cfc1(0xdd)]>_0x40ecfa&&_0x3e6941===_0x42cfc1(0xfc)||_0x43e19b+_0x5dd570[_0x42cfc1(0xdd)]>_0x40ecfa||_0x1e38af+_0x5dd570[_0x42cfc1(0xdd)]>_0x40ecfa){_0x43e19b=Math[_0x42cfc1(0xeb)](Math[_0x42cfc1(0xf9)]()*_0x40ecfa),_0x1e38af=Math[_0x42cfc1(0xeb)](Math[_0x42cfc1(0xf9)]()*_0x40ecfa);}for(let _0x1f744b=0x0;_0x1f744b<_0x5dd570[_0x42cfc1(0xdd)];_0x1f744b++){if(_0x3e6941===_0x42cfc1(0xfc))_0x41e344[_0x43e19b][_0x1e38af+_0x1f744b]=_0x5dd570[_0x42cfc1(0xef)](_0x1f744b);else{if(_0x3e6941===_0x42cfc1(0xe5))_0x41e344[_0x43e19b+_0x1f744b][_0x1e38af]=_0x5dd570[_0x42cfc1(0xef)](_0x1f744b);else _0x3e6941===_0x42cfc1(0xf6)?_0x41e344[_0x43e19b+_0x1f744b][_0x1e38af+_0x1f744b]=_0x5dd570['charAt'](_0x1f744b):_0x41e344[_0x43e19b+_0x1f744b][_0x1e38af-_0x1f744b]=_0x5dd570['charAt'](_0x1f744b);}}console[_0x42cfc1(0xf3)](_0x42cfc1(0xea)+_0x5dd570+_0x42cfc1(0xf7)+_0x3e6941+_0x42cfc1(0xfe)+_0x43e19b+_0x42cfc1(0xe4)+_0x1e38af+'.\x0a');const _0x2bf729=_0x42cfc1(0xdc);let _0x482bd6='';_0x482bd6+=_0x42cfc1(0xde)+[...Array(_0x40ecfa)[_0x42cfc1(0xf8)]()][_0x42cfc1(0xe6)](_0x42cfc1(0xe0))+'\x0a',_0x482bd6+='\x20\x20*╭'+'┄'[_0x42cfc1(0xff)](_0x40ecfa)+'┄┄'+_0x42cfc1(0xf4);for(let _0x1344f5=0x0;_0x1344f5<_0x40ecfa;_0x1344f5++){let _0x246b19=_0x1344f5+_0x42cfc1(0x100);for(let _0x55deb3=0x0;_0x55deb3<_0x40ecfa;_0x55deb3++){if(_0x41e344[_0x1344f5][_0x55deb3])_0x246b19+=_0x41e344[_0x1344f5][_0x55deb3]+'\x20';else{let _0x436c26=_0x2bf729['charAt'](Math[_0x42cfc1(0xeb)](Math['random']()*_0x2bf729[_0x42cfc1(0xdd)]));_0x246b19+=_0x436c26+'\x20';}}_0x246b19+='\x20|',_0x482bd6+=_0x246b19+'\x0a';}_0x482bd6+='\x20\x20*╰'+'┄'[_0x42cfc1(0xff)](_0x40ecfa)+'┄┄'+'╯*',_0x482bd6=_0x482bd6[_0x42cfc1(0xf1)](/[a-zA-Z]/g,_0x4ca2f3=>_0x2bf729[_0x4ca2f3[_0x42cfc1(0xee)]()-0x41]||_0x4ca2f3),console[_0x42cfc1(0xf3)](_0x482bd6),fila=_0x43e19b,columna=_0x1e38af,sopaNube=_0x482bd6;}if(sopaNube===null){_0x164b75();return;}else{if(''+fila+columna==_0x15d145)console[_0x179d8b(0xf3)](_0x179d8b(0xe1)),(fila,columna,sopaNube=null);else{if(intentos===0x1){fila,columna,sopaNube=null,console[_0x179d8b(0xf3)](_0x179d8b(0xe9),fila,columna);return;}else intentos-=0x1,console[_0x179d8b(0xf3)](_0x179d8b(0xda),intentos,'intentos'),console[_0x179d8b(0xf3)](sopaNube);}}};handler[_0x572e53(0xf5)]=/^(sopa)$/i;export default handler;