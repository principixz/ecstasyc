<?php
class Rutinas_m extends CI_Model {

    public function __construct()
    {
        parent::__construct();

    }

    public function ejercicio()
    {
        $this->db->select("ejercicio.id_ejercicio,ejercicio.descripcion,ejercicio.id_categoriaejercicio");
        $this->db->from("ejercicio");
        $this->db->where("ejercicio.estado", 1);
        $this->db->where("ejercicio.id_categoriaejercicio", $this->input->post("idcategoria")  );
        $r = $this->db->get();      
        return $r->result();
    }

    public function rutinas(){
        $r = $this->db->query("SELECT rutina.id_rutina, rutina.descripcion as rutina, rutina.recomendacion,rutina.estado
            FROM rutina");        
        return $r->result();
    }

    public function rutinasm($id){
        $r = $this->db->query("SELECT rutina.id_rutina, rutina.descripcion as rutina, rutina.recomendacion,rutina.estado
            FROM rutina WHERE rutina.id_rutina='".$id."'");        
        return $r->result();
    }

    public function rutinase($id){
        $r = $this->db->query("SELECT
            rutina_ejercicios.repeticiones,rutina_ejercicios.dia,rutina_ejercicios.estado,rutina_ejercicios.serie,rutina_ejercicios.id_rutina,rutina.descripcion as rutina,
            rutina.recomendacion,ejercicio.descripcion as ejercicio ,categoria_ejercicio.descripcion as categoria,
            categoria_ejercicio.id_categoria_ejercicio,ejercicio.id_ejercicio
            FROM rutina_ejercicios
            INNER JOIN rutina ON rutina.id_rutina = rutina_ejercicios.id_rutina
            INNER JOIN ejercicio ON ejercicio.id_ejercicio = rutina_ejercicios.id_ejercicios
            INNER JOIN categoria_ejercicio ON categoria_ejercicio.id_categoria_ejercicio = ejercicio.id_categoriaejercicio
            Where rutina.id_rutina ='".$id."'");
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
        $rutina = array(
            "descripcion" => $this->input->post("nrutina"),
            "recomendacion" => $this->input->post("recomendacion"),
            "estado" => "1"
            );
        $r = $this->db->insert("rutina",$rutina);
        $this->db->select_max('id_rutina','id_rutina');
        $query = $this->db->get('rutina');
        $r= $query->result() ;
        foreach ($r as $value) {
            $id_rutina = $value->id_rutina;
        }
        
        for($i=0;$i<count($_POST['ejercicio']);$i++){
         $rutina_ejer = array(
            "id_rutina" => $id_rutina,  
            "id_ejercicios" => $this->input->post("ejercicio")[$i],
            "serie" => $this->input->post("serie")[$i],
            "repeticiones" => $this->input->post("repeticiones")[$i],
            "dia" => $this->input->post("dias")[$i],
            "estado" => "1"
            );
         $r = $this->db->insert("rutina_ejercicios",$rutina_ejer);
     }
 }

 public function editar(){
    $id_rutina = $this->input->post("idrutina");
    $nrutina = $this->input->post("nrutina");
    $recomendacion = $this->input->post("recomendacion");
    $acrutina = $this->db->query("UPDATE rutina 
        SET descripcion ='".$nrutina."', recomendacion ='".$recomendacion."'  WHERE id_rutina ='".$id_rutina."'");

    $elirutina = $this->db->query("DELETE FROM rutina_ejercicios Where rutina_ejercicios.id_rutina ='".$id_rutina."'");
    for($i=0;$i<count($_POST['ejercicio']);$i++){
     $rutina_ejer = array(
        "id_rutina" => $id_rutina,  
        "id_ejercicios" => $this->input->post("ejercicio")[$i],
        "serie" => $this->input->post("serie")[$i],
        "repeticiones" => $this->input->post("repeticiones")[$i],
        "dia" => $this->input->post("dias")[$i],
        "estado" => "1"
        );
     $r = $this->db->insert("rutina_ejercicios",$rutina_ejer);
 }
}
}
?>