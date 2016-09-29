<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Rutinas_c extends CI_Controller {

    public function __construct(){
        parent::__construct();
        $this->load->model('Rutinas_m');
    }

    public function index(){
        $rutinas = $this->Rutinas_m->rutinas();
        echo $this->load->view('Rutinas/Rutinas_v.php',compact("rutinas"));
    }

    public function nuevo(){
        $categoriae = $this->Rutinas_m->categoriae();
        echo $this->load->view('Rutinas/Rutinasa_v.php',compact("categoriae","Ejercicios"));
    }
    public function cambiarestado(){
        $this->Rutinas_m->cambiarestado($this->input->post("estado"),$this->input->post("id")); 
    }

    public function eleccion(){
        $Ejercicios = $this->Rutinas_m->ejercicio();
        $html = "";
        $html.='<select class="form-control" id="ejercicios">';
        foreach ($Ejercicios as  $value) {
           $html.='<option value="'.$value->id_ejercicio.'">'.$value->descripcion.'
           <input type="hidden" value="'.$value->descripcion.'" id="nejercicio" name="nejercicio" disabled></option>';
        }
        $html.='</select>';
        echo $html;   
    }

    public function registrar(){
       $this->Rutinas_m->registrar();
    }

    

}
