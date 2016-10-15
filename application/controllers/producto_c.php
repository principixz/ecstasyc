<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Producto_c extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('Producto_m');
		$this->load->model('Principal_m');
	}
	public function index(){
		$producto = $this->Producto_m->todos();
		$marca = $this->Producto_m->marca();
		$categoria = $this->Producto_m->categoria_producto();
		$permisos = $this->Principal_m->traer_modulos();
		$data["producto"] = $producto;
		$data["marca"] = $marca;
		$data["categoria"] = $categoria;
		$data["permisos"] = $permisos;
		$this->load->view('Producto/producto_v.php',$data);

	}

	public function nuevo()
	{
		$permisos = $this->Principal_m->traer_modulos();
		$ult_producto = $this->Producto_m->traer_ultimo_producto();
		$marca = $this->Producto_m->marca();
		$categoria = $this->Producto_m->categoria_producto();
		$almacen = $this->Producto_m->almacen_producto();
		$data["marca"]=$marca;
		$data["almacen"]=$almacen;
		$data["categoria"] = $categoria;
		$data["ult_producto"]=$ult_producto;
		$data["permisos"] = $permisos;


		$this->load->view('Producto/nuevo_v',$data);
	}

	public function registrar_productos(){


		$registrar_productos = $this->Producto_m->registrar_productos();

		$r = $this->Producto_m->insertar_almacen();

		if($r == true)
		{
			echo 1;
		}
		else
		{
			echo 0;
		}
		$this->index();

	}

	public function registrar_productos2(){


		$registrar_productos = $this->Producto_m->registrar_productos2();
		$this->Producto_m->insertar_almacen2($registrar_productos["id_producto"]);
		echo json_encode($registrar_productos);

	}

	public function actualizar_producto(){
		$actualizar_producto = $this->Producto_m->actualizar_producto();
		$actualizar_almacen_producto = $this->Producto_m->insertar_almacen();
		$this->index();
	}

	public function modificar($id){

		$permisos = $this->Principal_m->traer_modulos();
		$almacen1 = $this->Producto_m->almacen_producto();
		$producto = $this->Producto_m->modificar($id);
		$almacen = $this->Producto_m->traer_almacen_producto($id);
		$marca = $this->Producto_m->marca();
		$categoria = $this->Producto_m->categoria_producto();

		$data["marca"]=$marca;
		$data["categoria"]=$categoria;
		$data["almacen1"]=$almacen1;
		$data["almacen"]=$almacen;
		$data["producto"] = $producto;
		$data["permisos"] = $permisos;
		$this->load->view('Producto/modificar_v',$data);
	}

	public function eliminar(){
		$paquete2 = $this->Producto_m->eliminar($this->input->post("id_producto"));
		$almacen = $this->Producto_m->eliminar_almacen($this->input->post("id_producto"));
		$this->listar();exit;
	}


	public function producto(){
		$producto = $this->Producto_m->ventas();
		$html='';
		foreach ($producto as $value) {
			$nombre = $value->nombre;
			$precio = $value->precio;
			$stock = $value->stock;
			$producto = "Producto('".$value->id_producto."','".$nombre."','".$precio."','".$stock."')";
			$html.='<tr>
						<td> '.$value->id_producto.' </td>
						<td> '.$value->nombre.' </td>

						<td> <a class="btn btn-social-icon btn-reddit" onclick="'.$producto.'" id="seleccionar"  type="submit">
						<i class="fa fa-check-square"></i></a></td>
					</tr>';
		}
		echo $html;
	}




public function producto_lista(){
		$producto = $this->Producto_m->todos();
		$producto2 = $this->Producto_m->traer_almacen_producto_todos();
		$html='';
		foreach ($producto as $value) {
			$nombre = $value->nombre;
		foreach ($producto2 as $key => $values) {
				if ($value->id_producto==$values->id_producto) {
					$cantidad = $values->stock;
				}
			}
			$producto = "Producto('".$value->id_producto."','".$nombre."','".$cantidad."')";
			$html.='<tr>

						<td> '.$value->id_producto.' </td>
						<td> '.$value->nombre.'</td>
						<td> <a class="btn btn-social-icon btn-reddit" onclick="'.$producto.'" id="seleccionar"  type="submit">
						<i class="fa fa-check-square"></i></a></td>
					</tr>';
		}
		echo $html;
	}



	public function listar(){
		$html = '';
		$tabla_perfil = $this->Producto_m->todos();
		$marca = $this->Producto_m->marca();
		$categoria = $this->Producto_m->categoria_producto();
		//print_r($tiposocios);
			foreach ($tabla_perfil as $value){

				foreach ($categoria as $value_cat){
					if($value->id_categoria_producto==$value_cat->id_categoria_producto){
					 $cat=$value_cat->descripcion; }}
					 foreach ($marca as $value_mar){
						if($value->id_marca==$value_mar->id_marca){
					 $mar= $value_mar->descripcion; }}


					 
			$html.= '<tr>
			<td> '.$value->id_producto.' </td>
			<td> '.$value->nombre.' </td>
			<td> '.$value->fecha.' </td>
			<td> '.$cat.' </td>
			<td> '.$mar.' </td>
			<td> '.$value->precio.' </td>

			<td class="center">
				<div class="visible-md visible-lg hidden-sm hidden-xs">
					<a href="'.base_url()."Producto_c/modificar/".$value->id_producto.'" class="btn btn-xs btn-blue tooltips" data-placement="top" data-original-title="Editar"><i class="fa fa-edit"></i></a>
					<a onclick=Eliminar('.$value->id_producto.') class="btn btn-xs btn-red tooltips" data-placement="top" data-original-title="Eliminar"><i class="fa fa-times fa fa-white"></i></a>
				</div>
				<div class="visible-xs visible-sm hidden-md hidden-lg">
					<div class="btn-group">
						<a class="btn btn-green dropdown-toggle btn-sm" data-toggle="dropdown" href="#">
							<i class="fa fa-cog"></i> <span class="caret"></span>
						</a>
						<ul role="menu" class="dropdown-menu pull-right dropdown-dark">
							<li>
								<a role="menuitem" tabindex="-1" onclick="Modificar('.$value->id_producto.')" data-toggle="modal" class="btn btn-xs btn-blue tooltips" data-placement="top">
									<i class="fa fa-edit"></i> Editar
								</a>
							</li>
							<li>
								<a role="menuitem" tabindex="-1"  onclick="Eliminar('.$value->id_producto.')" data-toggle="modal" class="btn btn-xs btn-red tooltips" data-placement="top" >
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