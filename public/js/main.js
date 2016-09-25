$(document).ready(init);

function init() {
    $margen = 20;
    $velocidad = 300;
    $("li").mouseenter(function(e){
        var ancho = $(this).width();
        var alto = $(this).height();
        
        var offset = $(this).offset(); 
        var x = e.pageX - offset.left;
        var y = e.pageY - offset.top;
        
        
        $tapa = $(this).find(".tapa");
        //e.offsetX
        if(x < $margen){ /*izquierda*/
            $tapa.css("margin-top", "0px");
            $tapa.css("margin-left", "-"+ancho+"px");
            $tapa.animate(
                {'margin-left':'0px'},
                $velocidad, 
                'swing');
        }else if(x > ancho - $margen){/*derecha*/
            $tapa.css("margin-top", "0px");
            $tapa.css("margin-left", ancho+"px");
            $tapa.animate({'margin-left':'0px'},
                $velocidad, 
                'swing');
        }else if(y < $margen){/*arriba*/
            $tapa.css("margin-left", "0px");
            $tapa.css("margin-top", "-"+alto+"px");
            $tapa.animate({'margin-top':'0px'},
                $velocidad, 
                'swing');
        }else if(y > alto - $margen){/*abajo*/
            $tapa.css("margin-left", "0px");
            $tapa.css("margin-top", alto+"px");
            $tapa.animate({'margin-top':'0px'},
                $velocidad,
                'swing');
        }
        
        $tapa.css("visibility", "visible");
    });
    
    $("li").mouseleave(function(e){
        var ancho = $(this).width();
        var alto = $(this).height();
        
         
        var offset = $(this).offset(); 
        var x = e.pageX - offset.left;
        var y = e.pageY - offset.top;
        
        
        $tapa = $(this).find(".tapa");
        
        if(x < $margen){/*izquierda*/
            $tapa.animate({'margin-left':"-"+ancho+"px"},
                $velocidad,
                'swing');
        }else if(x > ancho - $margen){/*derecha*/
            $tapa.animate({'margin-left': ancho+'px'},
                $velocidad,
                'swing');
        } else if(y < $margen){/*arriba*/
            $tapa.animate({'margin-top':"-"+alto+"px"},
                $velocidad,
                'swing');
        }else if(y > alto - $margen){/*abajo*/
            $tapa.animate({'margin-top':alto+"px"},
                $velocidad,
                'swing');
        }
        
    });
}
