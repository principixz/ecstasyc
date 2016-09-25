<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Portal_c extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('Portal_m');

	}

	public function index()
	{
		$this->load->view('portal/index');
	}

	public function login(){
		$this->load->view('login/login_v');
	}

	public function vistas($vista)
	{
		switch ($vista)
		{
			case 'nosotros':
			$this->load->view('portal/nosotros');
			break;

			case 'dietas':
			$this->load->view('portal/dietas');
			break;

			case 'galeria':
			$this->load->view('portal/galeria');
			break;
		}
	}

	public function autentificar()
	{
		$r = $this->Portal_m->comprobar();
		if($r)
		{
			$_SESSION["personal"] = $r[0]->nombre." ".$r[0]->apellido_paterno." ".$r[0]->apellido_materno;
			$_SESSION["user"] = $r[0]->usuario;
			$_SESSION["id_empleado"] = $r[0]->id_empleado;
			$_SESSION["idperfil"] = $r[0]->id_perfil_usuario;
			redirect("principal_c","refresh");
		}
		else
		{
			echo "no entro";
		}
	}

}
