<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Proveedor_c extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('Proveedor_m');
		$this->load->model('Principal_m');

	}


	public function index()
	{
		$permisos = $this->Principal_m->traer_modulos();
		$proveedor = $this->Proveedor_m->todos();
		$data["proveedor"] = $proveedor;
		$data["permisos"] = $permisos;
		$this->load->view('Proveedor/proveedor_v',$data);
	}


	public function registrar_proveedor(){

		$registrar = $this->Proveedor_m->registrar_proveedor();
		$this->index();

	}

	public function registrar_proveedor2(){

		$registrar = $this->Proveedor_m->registrar_proveedor2();
		
		echo json_encode($registrar);


	}

	public function nuevo()
	{
		$permisos = $this->Principal_m->traer_modulos();
		$data["permisos"] = $permisos;
		$this->load->view('Proveedor/nuevo_v',$data);
	}

	public function modificar($id){

		$permisos = $this->Principal_m->traer_modulos();
		$clientesm = $this->Clientes_m->clientesm($id);
		$sexoc = $this->Personal_m->sexo();
		$tipo_doc = $this->Personal_m->documento();
		$sangre = $this->Clientes_m->sangre();
		$civil = $this->Clientes_m->civil();
		$grado = $this->Clientes_m->grado();
		$data["permisos"] = $permisos;
		$data["sexoc"] = $sexoc;
		$data["tipo_doc"] = $tipo_doc;
		$data["clientesm"] = $clientesm;
		$data["sangre"] = $sangre;
		$data["civil"] = $civil;
		$data["grado"] = $grado;
		$this->load->view('clientes/modificar/clientemod_v',$data);
	}




		public function cargar_departamentos(){
		$departamento = $this->Proveedor_m->departamento();
		foreach($departamento as $value)
		{
		echo "<option value=\"$value->Departamento\">$value->Departamento</option>";
		}

	}
	public function cargar_provincias(){
		$provincia = $this->Proveedor_m->provincia($this->input->post("code"));

		foreach($provincia as $value)
		{
		echo "<option value=\"$value->Provincia\">$value->Provincia</option>";
		}
	}

	public function cargar_distrito(){
		$distrito = $this->Proveedor_m->distrito($this->input->post("code"));

		foreach($distrito as $value)
		{
		echo "<option value=\"$value->id_ubigeo\">$value->Distrito</option>";
		}
	}

	public function eliminar(){
		$proveedor = $this->Proveedor_m->eliminar($this->input->post("id_proveedor"));
		$this->listar();exit;
	}


public function proveedor_lista(){
		$proveedor = $this->Proveedor_m->todos();
		$html='';
		foreach ($proveedor as $value) {
			$nombre = $value->razon_social;
			$ruc = $value->ruc;
			$proveedor = "Proveedor('".$value->id_proveedor."','".$nombre."','".$ruc."')";
			$html.='<tr>

						<td> '.$value->razon_social.' </td>
						<td> '.$value->ruc.'</td>
						<td> '.$value->telefono.' </td>
						<td> '.$value->email.' </td>
						<td> '.$value->direccion.' </td>
						<td> <a class="btn btn-social-icon btn-reddit" onclick="'.$proveedor.'" id="seleccionar"  type="submit">
						<i class="fa fa-check-square"></i></a></td>
					</tr>';
		}
		echo $html;
	}


	public function listar(){
		$tabla_perfil = $this->Proveedor_m->todos();
		$html='';
		foreach ($tabla_perfil as $value){
		$html.='<tr>
						<td> '.$value->id_proveedor.' </td>
						<td> '.$value->razon_social.' </td>
						<td> '.$value->ruc.'</td>
						<td> '.$value->telefono.' </td>
						<td> '.$value->email.' </td>
						<td> '.$value->direccion.' </td>
			<td class="center">
				<div class="visible-md visible-lg hidden-sm hidden-xs">
					<a onclick=Modificar('.$value->id_proveedor.') class="btn btn-xs btn-blue tooltips" data-placement="top" data-original-title="Editar"><i class="fa fa-edit"></i></a>
					<a onclick=Eliminar('.$value->id_proveedor.') class="btn btn-xs btn-red tooltips" data-placement="top" data-original-title="Eliminar"><i class="fa fa-times fa fa-white"></i></a>
				</div>
				<div class="visible-xs visible-sm hidden-md hidden-lg">
					<div class="btn-group">
						<a class="btn btn-green dropdown-toggle btn-sm" data-toggle="dropdown" href="#">
							<i class="fa fa-cog"></i> <span class="caret"></span>
						</a>
						<ul role="menu" class="dropdown-menu pull-right dropdown-dark">
							<li>
								<a role="menuitem" tabindex="-1" onclick="Modificar('.$value->id_proveedor.')" data-toggle="modal" class="btn btn-xs btn-blue tooltips" data-placement="top">
									<i class="fa fa-edit"></i> Editar
								</a>
							</li>
							<li>
								<a role="menuitem" tabindex="-1"  onclick="Eliminar('.$value->id_proveedor.')" data-toggle="modal" class="btn btn-xs btn-red tooltips" data-placement="top" >
									<i class="fa fa-times"></i> Eliminar
								</a>
							</li>
						</ul>
					</div>
				</div>
			</td>
		</tr>';

	}
	echo $html;
}
}


?>