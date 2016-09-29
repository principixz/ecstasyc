<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Tipo_empleado_c extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('Tipo_empleado_m');
	}

	public function index(){
		$tipoempl = $this->Tipo_empleado_m->mostrar_tipoempleado();
		echo $this->load->view('TipoEmpleado/tipoempleado_v.php',compact("tipoempl"));
	}

	public function cambiarestado(){
		$tipoempl = $this->Tipo_empleado_m->cambiarestado($this->input->post("estado"),$this->input->post("id"));	
		$this->index();
	}

	public function Modificar(){
		$tipoempl = $this->Tipo_empleado_m->Modificar($this->input->post("id"));
		echo $this->load->view('TipoEmpleado/tipoempleado_v.php',compact("tipoempl"));
	}

	public function agregar_cliente(){
		 echo $this->load->view('TipoEmpleado/tipoempleado_v.php');
	}

}
