<div class="page-container" name="nuevo">
		<div class="page-head">
			<div class="container">
				<div class="page-title">
					<h1>Rutinas <small>...</small></h1>
				</div>
			</div>
		</div>
		<div class="page-content">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="portlet light">
							<div class="portlet-title">
								<div class="caption">
									<i class="fa fa-cogs font-green-sharp"></i>
									<span class="caption-subject font-green-sharp bold uppercase">Registro de Rutinas</span>
								</div>
							</div>
							<div class="portlet-body">
								<div class="table-toolbar">
								<div class="row">
									<div class="col-md-6">
										<div class="btn-group">
											<button id="sample_editable_1_new" onclick="Registrar()" class="btn green">
											Agregar <i class="fa fa-plus"></i>
											</button>
										</div>
									</div>
									<div class="col-md-6">
										<div class="btn-group pull-right">
											<button class="btn dropdown-toggle" data-toggle="dropdown">Tools <i class="fa fa-angle-down"></i>
											</button>
											<ul class="dropdown-menu pull-right">
												<li>
													<a href="javascript:;">
													Print </a>
												</li>
												<li>
													<a href="javascript:;">
													Save as PDF </a>
												</li>
												<li>
													<a href="javascript:;">
													Export to Excel </a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
								<table class="table table-striped table-bordered table-hover" id="sample_1">
									<thead>
										<tr>
											<th>#</th>
											<th>N. Rutina</th>
											<th>Recomendacion</th>
											<th>Modulo Padre</th>
											<th>Estado</th>
											<th>Modificar</th>
										</tr>
									</thead>
									<tbody>
								<?php
								$i=0; 
								foreach ($rutinas as $value) {

									$i=$i+1;
								?>									
										<tr>
											<td><?php echo $value->id_rutina  ?> </td>
											<td><?php echo $value->rutina ?></td>
											<td><?php echo $value->recomendacion ?></td>
											<td align="center">
											   <i  class="'.$value->icono.'"></i>
											</td>
											<td align="center">
											<?php  if($value->estado==1){ ?>
											<a onclick='Estado("1","<?php  echo $value->id_rutina ?>")' data-toggle="modal" href="#small"><span class="label label-sm label-success">Habilitado</span></a>
											<?php  } 
											if($value->estado==0){	?>
											<a onclick='Estado("0","<?php  echo $value->id_rutina ?>")'> <span class="label label-sm label-warning">Inhabilitado</span></a>
											<?php  } ?>											
											</td>
											<td align="center">
												<a onclick='Modificar(<?php  echo $value->id_modulo ?>)' class="btn btn-xs red" data-toggle="modal">
												 Editar<i class="fa fa-edit"></i>
												</a>
											</td>
										</tr>
									
							<?php } ?>		</tbody> 
									</table>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>



<script>
	function cargarmodulo(){
		$.post("<?php echo base_url();?>Rutinas_c",
			function(data){
			$('#sample_1').DataTable().destroy('#sample_1');
			$('#nuevo').empty();
            $('#nuevo').append(data);
            	$('#sample_1').DataTable( {
							language: {
							search: "Buscar ... ",
							sLengthMenu:"",
							sZeroRecords: "No se encontraron resultados",
							sInfo:"",
							sInfoEmpty:"",
							sInfoFiltered:"",
								oPaginate: {
								"sNext":"Siguiente",
								"sPrevious":"Anterior"
								}
							}
           		 });
        	});
	}

		
				
			
	function Estado(estado,id){
		$.post("<?php echo base_url();?>Rutinas_c/cambiarestado",{"estado":estado, "id":id });
		cargarmodulo();
	}

	function Registrar(){
		$.post("<?php echo base_url();?>Rutinas_c/nuevo",
			function(data){
			$('#nuevo').empty();
            $('#nuevo').append(data);
        	});
	}

	function Modificar(id){
		$.post("<?php echo base_url();?>Modulos_c/Modificar",{"id":id },
			function(data){
				$('#nuevo').empty();
            $('#nuevo').append(data);
			});
		
	}
</script>