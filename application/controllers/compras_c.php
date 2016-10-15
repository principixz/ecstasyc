<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Compras_c extends CI_Controller {

    public function __construct(){
        parent::__construct();
        $this->load->model('Compras_m');
    }

    public function index(){
        $compras = $this->Compras_m->traer_compras();
        $modalidad = $this->Compras_m->modalidad();
        $proveedor = $this->Compras_m->proveedor();
        $empleado = $this->Compras_m->empleado();
        echo $this->load->view('Compras/Compras_v.php',compact("compras","modalidad","proveedor","empleado"));
    }
    public function comprasc(){
        $compra_producto = $this->Compras_m->ver_compra_producto($this->input->post("id_compras"));
        echo json_encode($compra_producto); 
    }
    public function parm(){
        $datos = $this->Compras_m->parm();
        foreach ($datos as $value) {
            $igv = $value->valor;
        }
        echo $igv;
    }
    public function nuevo(){
        $almacen= $this->Compras_m->almacen_producto();
        $departamentos=$this->desencriptar($this->db->group_by("Departamento")->get("ubigeo")->result(),["Departamento","Departamento"]);
        $marcas= $this->desencriptar($this->db->get_where("marca",array("estado"=>"1"))->result(),["id_marca","descripcion"]);
        $categorias=$this->desencriptar($this->db->get_where("categoria_producto",array("estado"=>"1"))->result(),["id_categoria_producto","descripcion"]);
        $producto= $this->Compras_m->traer_productos();
        $producto2= $this->Compras_m->traer_productos2();
        $transaccion= $this->Compras_m->modalidad_transaccion();
        $almacen_disponible= $this->Compras_m->almacen();
        echo $this->load->view('Compras/comprasa_v.php',compact("almacen","departamentos","marcas","categorias","producto","producto2","transaccion","almacen_disponible"));
    }
    public function desencriptar($array,$campos)
    {
        $select = array('""'=>"Seleccione");

        if(count($array)>0) {
            foreach ($array as $value) {

                $select[$value->$campos[0]] = $value->$campos[1];
            }
        }

        return $select;
    }

    public function modificar(){
        $categoriae = $this->Rutinas_m->categoriae();
        $rutina = $this->Rutinas_m->rutinasm($this->input->post("id"));
        $ejercicios = $this->Rutinas_m->rutinase($this->input->post("id"));
        echo $this->load->view('Rutinas/Rutinase_v.php',compact("rutina","ejercicios","categoriae"));
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

    public function traer_proveedores()
    {
        // consulta para saber la fecha de la ultima compra que hizo a ese proveedor
        $array = array();
        $ultima_fecha = $this->db->query("select max(c.fecha) as ultima_fecha,c.id_proveedor from compras as c
                        inner join proveedor as p on(c.id_proveedor=p.id_proveedor)
                        inner join compras_producto as cp on(cp.id_compras=c.id_compras)
                        inner join producto as pr on(pr.id_producto=cp.id_producto)
                        where c.estado=0 and cp.id_producto=".$this->input->post('idproducto')."
                        group by c.id_proveedor
                        ")->result();
        $i = 0;
        if(count($ultima_fecha)>0) {

            foreach ($ultima_fecha as $key => $value) {
                $rstl = $this->db->query("SELECT
                proveedor.razon_social,
                compras_producto.precio_unitario
                FROM
                compras_producto
                INNER JOIN producto ON producto.id_producto = compras_producto.id_producto
                INNER JOIN compras ON compras.id_compras = compras_producto.id_compras
                INNER JOIN proveedor ON proveedor.id_proveedor = compras.id_proveedor
                where producto.id_producto=".$this->input->post("idproducto")." and compras.id_proveedor=".$value->id_proveedor." and compras.fecha='".$value->ultima_fecha."' group by proveedor.razon_social,
                compras_producto.precio_unitario")->row();

                $array[$i]["razon_social"] = $rstl->razon_social;
                $array[$i]["precio_unitario"] = $rstl->precio_unitario;
                $i++;
            }
        }

        if(count($array)>0){
            $array["ok"] = 1;
        }else{
            $array["ok"] = 0;
        }
        echo json_encode($array);

    }


    public function registrar(){
       $registrar = $this->Compras_m->registrar();
    }

    public function editar(){
       $this->Rutinas_m->editar();
    } 
    public function traer_provincias()
    {
        $array = $this->db->group_by("Provincia")->get_where("ubigeo",array("Departamento"=>$this->input->post("departamento")))->result();
        $provincias = $this->desencriptar($array,["Provincia","Provincia"]);

        echo form_dropdown('', $provincias, '""', 'class="form-control" id="provincia" required');
    }

    public function traer_distritos()
    {
        $array = $this->db->get_where("ubigeo",array("Provincia"=>$this->input->post("provincia")))->result();
        $distritos = $this->desencriptar($array,["id_ubigeo","Distrito"]);

        echo form_dropdown('distrito', $distritos, '""', 'class="form-control" id="distrito" required');
    }
}
