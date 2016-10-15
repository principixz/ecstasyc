<?php
class Producto_m extends CI_Model {

  function __construct()
  {
    parent::__construct();

  }

  public function mostrar()
  {
    $r = $this->db->get_where("producto",array('estado'=>'1'));

    return $r->result();
  }


  public function registrar_productos(){



    $data =array('nombre' => $this->input->post("descripcion"),
      'fecha' => $this->input->post("fecha"),
      'id_marca' => $this->input->post("marca"),
      'id_categoria_producto' => $this->input->post("categoria"),
      "stock_min" => $this->input->post("min"),
      "stock_max" => $this->input->post("max"),
      'precio' => $this->input->post("precio"),
      'estado' => '1',
      );
    $r = $this->db->insert("producto",$data);



    return $r;
  }

 public function registrar_productos2(){
      $data =array('nombre' => $this->input->post("descripcion"),
      'fecha' => date("Y-m-d"),
      'id_marca' => $this->input->post("marca"),
      'id_categoria_producto' => $this->input->post("categoria"),
      'precio' => $this->input->post("precio"),
      "stock_min" => $this->input->post("min"),
      "stock_max" => $this->input->post("max"),
      'estado' => '1',
      );
    $r = $this->db->insert("producto",$data);
      if($r) {
            $data["id_producto"] = $this->db->insert_id();
            $data["nombre"] =  $this->input->post("descripcion");
            $data["error"] = 0;

        }else {
            $data["error"] = 1;
        }
         return $data;



  }


  public function insertar_almacen(){


     if(isset($_POST["almacen"]))
    {
      $almacen = $_POST["almacen"];
    }
    else
    {
      $almacen = array();
    }

    $this->db->where("id_producto",$this->input->post("id_producto"));
    $res = $this->db->delete("almacen_producto");

      $datos = array(
        "id_producto" => $this->input->post("id_producto"),
        "id_almacen" =>  $this->input->post("almacen"),
        "stock" => $this->input->post("stock")
        );

      $r = $this->db->insert("almacen_producto",$datos);



    if(isset($r) || isset($res))
    {
      return true;
    }
    elseif(!isset($r)&&!isset($res))
    {
      return false;
    }

  }

  public function insertar_almacen2($idproducto){


     if(isset($_POST["almacen"]))
    {
      $almacen = $_POST["almacen"];
    }
    else
    {
      $almacen = array();
    }

    $this->db->where("id_producto",$idproducto);
    $res = $this->db->delete("almacen_producto");

      $datos = array(
        "id_producto" => $idproducto,
        "id_almacen" =>  $this->input->post("almacen"),
         "stock" => $this->input->post("stock")
        );

      $r = $this->db->insert("almacen_producto",$datos);



    if(isset($r) || isset($res))
    {
      return true;
    }
    elseif(!isset($r)&&!isset($res))
    {
      return false;
    }

  }
  public function todos()
  {
   $this->db->where("estado","1");
   $this->db->order_by("id_producto","desc");
   $r = $this->db->get("producto");
   return $r->result();
 }

  public function categoria_producto(){
        $r= $this->db->get_where("categoria_producto",array('estado' => "1"));
        return $r->result();
    }

   public function marca(){
        $r= $this->db->get_where("marca",array('estado' => "1"));
        return $r->result();
    }

 public function almacen_producto(){
        $r= $this->db->get_where("almacen",array('estado' => "1"));
        return $r->result();
    }

public function traer_almacen_producto($id)
{

 $this->db->select("almacen_producto.id_almacen");
 $this->db->from("almacen_producto");
 $this->db->where("id_producto",$id);
 $r = $this->db->get();
 return $r->result();
}

public function traer_almacen_producto_todos()
{

 $this->db->select("almacen_producto.id_producto,almacen_producto.stock");
 $this->db->from("almacen_producto");
 $r = $this->db->get();
 return $r->result();
}

public function traer_ultimo_producto()
{

  $this->db->SELECT_MAX('id_producto');
  $r = $this->db->get('producto');
  return $r->result();
}



public function actualizar_producto(){
 $data =array('nombre' => $this->input->post("descripcion"),
  'precio' => $this->input->post("precio"),
  'id_marca' => $this->input->post("marca"),
  'id_categoria_producto' => $this->input->post("categoria"),
  'stock_min' => $this->input->post("min"),
  'stock_max' => $this->input->post("max"),
  'precio' => $this->input->post("precio")

  );
 $this->db->where('id_producto',$this->input->post("id_producto"));
 $r= $this->db->update('producto',$data);
 return $r;

}


public function modificar($id){
 $this->db->select("producto.id_producto,producto.nombre,producto.precio,producto.id_marca,
producto.fecha,producto.id_categoria_producto,almacen_producto.id_almacen,producto.stock_min,producto.stock_max,almacen_producto.stock");
 $this->db->from("producto");
  $this->db->join("almacen_producto"," producto.id_producto = almacen_producto.id_producto");
 $this->db->where("producto.id_producto",$id);

 $r = $this->db->get();
 return $r->result();
}



public function ventas(){
 $this->db->select("producto.id_producto,producto.nombre,producto.precio,producto.id_marca,
producto.fecha,producto.id_categoria_producto,almacen_producto.id_almacen,almacen_producto.stock_min,almacen_producto.stock_max,almacen_producto.stock");
 $this->db->from("producto");
 $this->db->join("almacen_producto"," producto.id_producto = almacen_producto.id_producto");

 $r = $this->db->get();
 return $r->result();
}

public function eliminar_almacen($id){

 $this->db->where("id_producto",$id);
 $res = $this->db->delete("almacen_producto");
}
public function eliminar($id){

  $elimi =array('estado' => 0);
  $this->db->where('id_producto',$id);
  $this->db->update('producto',$elimi);
}
}
?>