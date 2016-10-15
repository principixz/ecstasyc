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
									<span class="caption-subject font-green-sharp bold uppercase">Registro de Nueva Rutina</span>
								</div>
							</div>
							<div class="portlet-body">
								<form id="formulario" action="<?php echo base_url()?>Rutinas_c/registrar" method="post" class="horizontal-form">
											<div class="form-body">
												<div class="row">
													<div class="col-md-6">
														<div class="form-group">
															<label class="control-label">Nombre de Rutina</label>
															<input type="text" id="nrutina" name="nrutina" class="form-control" placeholder="Descripción" required>
														</div>
													</div>
													<!--/span-->
													<div class="col-md-6">
														<div class="form-group">
															<label class="control-label">Recomendación</label>
															<input type="text" id="recomendacion" name="recomendacion" class="form-control" placeholder="" required>
														</div>
													</div>
													<!--/span-->
												</div>
												<!--/row-->
												<div class="row">
													<div class="col-md-3">
														<div class="form-group">
															<label class="control-label">Categoria Ejercicio</label>
															<select class="form-control" id="categoriaejercicio">	
																<?php foreach ($categoriae as $value) { ?>
																<option  value="<?php echo $value->id_categoria_ejercicio ?>"><?php echo $value->descripcion ?>
																
																</option>

																<?php } ?>
															</select>															
														</div>
													</div>
													<div class="col-md-3">
														<div class="form-group">
															<label class="control-label">Ejercicio</label>
															<select class="form-control" id="ejercicios" disabled>
																<option></option>
																
															</select>
														</div>
													</div>
													<!--/span-->
													<div class="col-md-2">
														<div class="form-group">
															<label class="control-label">Serie</label>
															<input type="text" id="serie" class="form-control" placeholder="">
														</div>
													</div>
													<div class="col-md-2">
														<div class="form-group">
															<label class="control-label">Repeticiones</label>
															<input type="text" id="repeticiones" class="form-control" placeholder="">
														</div>
													</div>
													<div class="col-md-2">
														<div class="form-group">
															<label class="control-label">Dias</label>
															<input type="text" id="dias" class="form-control" placeholder="">
														</div>
													</div>
													<!--/span-->
													<div class="col-md-10">
													</div>
													<div class="col-md-2">
														<button type="button" onclick="Agregar()" class="btn blue"><i class="fa fa-check"></i> Agregar</button>
													</div>
												</div>
												<!--/row-->
									
												<!--/row-->
												<h3 class="form-section">Registro</h3>
												<div class="row" id="rutinas">
													<div class="col-md-12 ">
														<div class="form-group">
															<table class="table table-striped table-bordered table-hover" id="rutinasregistro">
															<th>Categoria Ejerc.</th>
															<th>Ejercicio</th>
															<th>Serie</th>
															<th>Repeticiones</th>
															<th>Día</th>
															<th>Edit.</th>
															</table>
														</div>
													</div>
												</div>
												
												<!--/row-->
											</div>
											<div class="form-actions right">
												<button type="button" class="btn default">Cancel</button>
												<button type="submit" class="btn blue"><i class="fa fa-check"></i> Guardar</button>
											</div>
										</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>



<script>
$(document).ready(function(){
	$("#formulario").submit(function(e){
		e.preventDefault();
		$.ajax({
			url: $(this).attr("action"),
			type: $(this).attr("method"),
			data: $(this).serialize(),
				error:function(){
					alert("error");
				},
				success:function(data){
					cargarmodulo();
				}
			});
		});
});
	function cargarmodulo(){
		$.post("<?php echo base_url();?>Rutinas_c",
			function(data){
			$('#sample_3').DataTable().destroy('#sample_3');
			$('#nuevo').empty();
            $('#nuevo').append(data);
            	$('#sample_3').DataTable( {
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

	$(document).on("change","#categoriaejercicio",function(e){
		e.preventDefault();
		var categoriae = $(this).val();
		if(categoriae != "") {
			$.post("<?php echo base_url();?>Rutinas_c/eleccion",{idcategoria:categoriae},function(data){
				$("#ejercicios").empty();
				$("#ejercicios").html(data);
				$("#ejercicios").attr("disabled",false);  
			})
		}

	})
		
				
			
	function Estado(estado,id){
		$.post("<?php echo base_url();?>Modulos_c/cambiarestado",{"estado":estado, "id":id });
		cargarmodulo();
	}

	function Agregar(){

		combo = document.getElementById("categoriaejercicio");
		var selected = combo.options[combo.selectedIndex].text;

		combo1 = document.getElementById("ejercicios");
		var selected1 = combo1.options[combo1.selectedIndex].text;
		alert(selected1);

		var html = '<tr class="row_tmp">';
			
			html += '<td>';
			html += '  <input type="hidden" name="categejercicio[]" value="' + $("#categejercicio").val() + '" />' + selected;
			html += '</td>';
			html += '<td>';
			html += '   <input type="hidden" name="ejercicio[]"   value="' + $("#ejercicios").val() + '" />' + selected1;
			html += '</td>';
			html += '<td>';
			html += '   <input type="hidden" name="serie[]" value="' + $("#serie").val() + '" />' + $("#serie").val();
			html += '</td>';
			html += '<td>';
			html += '   <input type="hidden" name="repeticiones[]" value="' + $("#repeticiones").val() + '" />' + $("#repeticiones").val();
			html += '</td>';
			html += '<td>';
			html += '   <input type="hidden" name="dias[]" class="importe" value="' + $("#dias").val() + '" />' + $("#dias").val();
			html += '</td>';
			html += '<td>';
			html += '   <a class="btn btn-danger delete" onclick="$(this).closest('+"'tr'"+').remove();setTotal('+($("#cantidad").val())*($("#preciopro").val())+','+0+')"><i class="icon-trash icon-white"></i></a>';
			html += '</td>';
			html += '</tr>';
			$("#rutinasregistro").append(html);

	}

	function Modificar(id){
		$.post("<?php echo base_url();?>Modulos_c/Modificar",{"id":id },
			function(data){
				$('#nuevo').empty();
            $('#nuevo').append(data);
			});
		
	}
</script>