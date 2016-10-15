<?php
class Compras_m extends CI_Model {

    public function __construct()
    {
        parent::__construct();

    }

    public function traer_compras(){
     $this->db->select("*");
     $this->db->from("compras");
     $r = $this->db->get();
     return $r->result();
 }
 public function modalidad()
 {
    $r = $this->db->get_where('modalidad_transaccion',array('estado' => '1'));
    return $r->result();
}
public function parm(){
    $r = $this->db->get_where('param',array('id_param' => $this->input->post("id_param")));
    return $r->result();
}
public function proveedor(){
    $this->db->select("*");
    $this->db->from("proveedor");
    $r = $this->db->get();
    return $r->result();
}
public function empleado(){
    $this->db->select("*");
    $this->db->from("empleado");
    $r = $this->db->get();
    return $r->result();
}

public function ver_compra($id){
    $this->db->select("compras.id_compras, compras.monto,compras.fecha,empleado.nombre,empleado.apellido_paterno  as paterno,
        empleado.apellido_materno as materno,proveedor.razon_social,proveedor.ruc");
    $this->db->from("compras");
    $this->db->join("empleado","compras.id_empleado = empleado.id_empleado");
    $this->db->join("proveedor","compras.id_proveedor = proveedor.id_proveedor");
    $this->db->where("compras.id_compras",$id);
    $r = $this->db->get();
    return $r->result();
}

public function ver_compra_producto($id){
    $this->db->select("compras.id_compras, producto.nombre");
    $this->db->from("compras");
    $this->db->join("compras_producto","compras.id_compras = compras_producto.id_compras");
    $this->db->join("producto","compras_producto.id_producto = producto.id_producto");
    $this->db->where("compras.id_compras",$id);
    $r = $this->db->get();
    return $r->result();
}

public function almacen_producto(){
    $r= $this->db->get_where("almacen",array('estado' => "1"));
    return $r->result();
}

public function categoriae()
{
    $this->db->select("categoria_ejercicio.id_categoria_ejercicio,categoria_ejercicio.descripcion");
    $this->db->from("categoria_ejercicio");
    $this->db->where("categoria_ejercicio.estado",1);
    $r = $this->db->get();      
    return $r->result();
}


public function cambiarestado($estado,$id){
    if($estado==1){
        $elimi =array('estado' => 0);
    }
    if($estado ==0){
        $elimi =array('estado' => 1);   
    }
    $this->db->where('id_rutina',$id);
    $this->db->update('rutina',$elimi);
    return 0;
}

public function modificar($id)
{
    $this->db->select("modulo.nombre,modulo.id_modulo,modulo.url,modulo.orden,modulo.id_padre,modulo.estado,modulo.modulo_padre,modulo.icono");
    $this->db->from("modulo");
    $this->db->where("id_modulo",$id );
    $this->db->order_by("id_padre","asc");
    $r = $this->db->get();      
    return $r->result();
}

 public function registrar(){

        if (isset($_POST['guardar'])) {
           $this->db->select_max('id_compras','id_compras');
           $query = $this->db->get('compras');
           $r= $query->result() ;
           foreach ($r as $value) {
            $id_compras = $value->id_compras + 1;
        }
        if ($_POST['guardar'] == 1) {
            $this->db->select_max('id_compras','id_compras');
            $query = $this->db->get('compras');

            $compras = array(
                "id_proveedor" => $this->input->post("id_proveedor"),
                "id_empleado" => $_SESSION["id_empleado"],
                "id_modalidad_transaccion" => $this->input->post("modalidadtrans"),
                "fecha" => date("Y-m-d H:i:s"),
                "monto" => $this->input->post("total"),
                "estado" => "0"
                );
            $r = $this->db->insert("compras",$compras);
    //-----------------------------------------------------------------//
  //inicio del cronograma de compra
            if($_POST['modalidadtrans']==2){
                        for($i=0;$i<$_POST['cuotas'];$i++){
                         $cronograma_credito = array(
                            "id_compras" => $id_compras,
                            "fecha" => date("Y-m-d H:i:s"),
                            "num_cuota" => $i+1,
                            "monto_cuota" => $_POST['monto_cuota'][$i],
                            "estado" => '1'
                            );
                         $r = $this->db->insert("cronograma_compras",$cronograma_credito);
                     }
                 }else{
                    $cronograma_contado = array(
                        "id_compras" => $id_compras,
                        "fecha" => date("Y-m-d H:i:s"),
                        "num_cuota" =>1,
                        "monto_cuota" => $_POST['total'],
                        "estado" => '1'
                        );
                    $r = $this->db->insert("cronograma_compras",$cronograma_contado);
                }
          //fin del cronograma de compra
        //------------------------------------------------------------------------//
        //inicio del compra-producto
        //------------------------------------------------------------------------//



                for($i=0;$i<count($_POST['id_vendido']);$i++){
                  if ($_POST['tipo_uni'][$i]!=1) {
                    $cant=($_POST['numero'][$i])*12;
                    $precio=$_POST['precio'][$i]/12;
                }else{
                    $cant=($_POST['numero'][$i])*1;
                    $precio=$_POST['precio'][$i];
                }

                $datos = array(
                    "id_compras" => $id_compras,
                    "id_producto" =>  $_POST['id_vendido'][$i],
                    "igv" => $_POST["igv"],
                    "cantidad" => $cant,
                    "precio_unitario" =>  $precio
                    );
                $r = $this->db->insert("compras_producto",$datos);

            $this->db->where("id_almacen",$_POST['almacen'][$i]);
            $this->db->where("id_producto",$_POST['id_vendido'][$i]);
            $res = $this->db->delete("almacen_producto");
            
                $almacen_producto =array( 
                    'id_almacen' => $_POST['almacen'][$i],
                    'id_producto' => $_POST['id_vendido'][$i],
                    'stock' => $cant + $_POST['stock'][$i]
                    );

                $r1 = $this->db->insert("almacen_producto",$almacen_producto);
             

            }


        //------------------------------------------------------------------------//







        }
    }
  //
    
}
public function traer_productos(){
    $this->db->select("*");
    $this->db->from("producto");
    $r = $this->db->get();
    return $r->result();
}
public function traer_productos2(){
    $this->db->select("*");
    $this->db->from("almacen_producto");
    $r = $this->db->get();
    return $r->result();
}
public function modalidad_transaccion(){
    $r = $this->db->get_where('modalidad_transaccion',array('estado' => '1'));
    return $r->result();
}
public function almacen(){
    $r = $this->db->get_where('almacen',array('estado' => '1'));
    return $r->result();
}
}
?>