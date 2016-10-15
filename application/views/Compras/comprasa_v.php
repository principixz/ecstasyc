<?php $hoy=  date("d")."-".date("m")."-".date("Y");?>
<div class="page-container">
	<div class="page-head">
		<div class="container">
			<div class="page-title">
				<h1>Compras <small>...</small></h1>
			</div>
		</div>
	</div>
	<div class="page-content">
		<div class="container">
			<div class="modal fade" id="portlet-config" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
							<h4 class="modal-title">Modal title</h4>
						</div>
						<div class="modal-body">
							Widget settings form goes here
						</div>
						<div class="modal-footer">
							<button type="button" class="btn blue">Save changes</button>
							<button type="button" class="btn default" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="tabbable tabbable-custom tabbable-noborder tabbable-reversed">
						<div class="tab-content">
							<div class="portlet box blue">
								<div class="portlet-title">
									<div class="caption">
										<i class="fa fa-gift"></i>Registro de Compras
									</div>
									<div class="tools">
										<a href="javascript:;" class="collapse">
										</a>
									</div>
								</div>
								<div class="portlet-body form">
									<form role="form" id="formulario" method="post" >
										<input type="hidden" name="guardar" id="guardar" value="1" />
										<div class="form-body">
											<div class="row">
												<div class="col-md-6">
													<div class="form-group">
														<label class="control-label">Seleccionar Productos<span class="symbol required"></span></label>
														<div class="input-group">
															<input type="text" placeholder="" value="" name="producto" id="producto" class="form-control" disabled>
															<input type="hidden" placeholder="" name="id_producto" id="id_producto" class="form-control">
															<span class="input-group-btn">
																<span class="input-group-btn">
																	<button type="button" class="btn btn-social-icon btn-reddit"  id="buscar" onclick="Buscar_producto()" >
																		<i class="fa fa-search"></i>
																	</button>
																	<button type="button" class="btn btn-social-icon btn-reddit" id="agregar_producto"  >
																		<i class="fa fa-plus-square"></i>
																	</button>
																	<button type="button" class="btn btn-social-icon btn-reddit" disabled="" id="grafico_producto"  >
																		<i class="fa fa-signal"></i>
																	</button>
																</span>
															</span>
														</div>
													</div>
												</div>
												<div class="col-md-6">
													<div class="form-group has-error">
														<label class="control-label">Encargado</label>
														<input  type="text" maxlength="15" value="<?php echo $_SESSION['personal']?>" placeholder="Insertar Apellido Materno" class="form-control" id="empleado" name="empleado" disabled>
														<input type="hidden" maxlength="15" value="<?php echo $_SESSION["id_empleado"] ?>" placeholder="Insertar Apellido Materno" class="form-control" id="id_empleado" name="id_empleado" disabled>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-md-3">
													<div class="form-group">
														<label class="control-label">Seleccionar Almacen<span class="symbol required"></span></label>
														<div class="input-group">
															<select class="form-control" id="almacen" name="almacen" onclick="stock_almacen()">
																<option value="">Seleccione...</option>

																<?php foreach ($almacen_disponible as $value ) { ?>
																<option value="<?php echo $value->id_almacen;?>"><?php echo $value->descripcion;?></option>

																<?php } ?>
															</select>
															<input type="hidden" name="stock1" id="stock1"/>
														</div>
													</div>
												</div>
												<div class="col-md-3">
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<label class="control-label">Nombre Proveedor</label>
														<div class="input-group">
															<input type="text" placeholder="" value="" name="nombre" id="nombre" class="form-control" disabled>
															<input type="hidden" placeholder="" name="id_proveedor" id="id_proveedor" class="form-control">
															<span class="input-group-btn">
																<button type="button" class="btn btn-social-icon btn-reddit"  disabled="disabled" id="buscar_proveedor" onclick="Buscar()" >
																	<i class="fa fa-search"></i>
																</button>
																<button type="button" class="btn btn-social-icon btn-reddit"  disabled="disabled" id="agregar_proveedor"   >
																	<i class="fa fa-male"></i>
																</button>
															</span>
														</div>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-md-2">
													<div class="form-group">
														<label class="control-label">Tipo de Uni.</label>
														<select class="select2_category form-control" data-placeholder="Choose a Category" tabindex="1">
															<option value="1">Unida.</option>
															<option value="2">Docen.</option>
														</select>
													</div>
												</div>
												<div class="col-md-2">
													<div class="form-group">
														<label class="control-label">Cantidad</label>
														<input type="text" maxlength="3"  style="text-align:right;" name="cantidad" id="cantidad" class="col-md-3 form-control"onkeypress="return soloNumeros(event)" disabled>
													</div>
												</div>
												<div class="col-md-2">
													<div class="form-group">
														<label class="control-label">Precio</label>
														<input type="text" maxlength="10"  style="text-align:right;" name="preciopro" id="preciopro" class=" form-control " onkeypress="return NumCheck(event, this);" disabled>
													</div>
												</div>
												<div class="col-md-3">
													<div class="form-group">
														<label class="control-label">Fecha</label>
														<input type="text" value="<?php echo $hoy ?>" data-date-format="dd-mm-yyyy" name="fechaventa" id="fechaventa" data-date-viewmode="years" class="col-md-3 form-control date-picker" disabled>
													</div>
												</div>
												<div class="col-md-3">
													<div class="form-group">
														<label class="control-label">Ruc</label>
														<input type="text"  name="ruc" id="ruc" data-date-viewmode="years" class=" form-control "  >
													</div>
												</div>
												<div class="col-md-2">
													<div class="form-group">
														<label class="control-label">Tipo Pago</label>
														<div class="input-group">
															<select class="form-control" id="modalidadtrans" name="modalidadtrans">
																<?php foreach ($transaccion as $value ) { ?>
																<option value="<?php echo $value->id_modalidad_transaccion;?>"><?php echo $value->descripcion; ?></option>
																<?php } ?>
															</select>
														</div>
													</div>
												</div>
												<input type="hidden" name="estado_cronograma"  id="estado_cronograma" value="0" >
												<div id="celda_cronograma" style="display: none;"></div>
												<div id="cuotascre" class="col-md-2" style="float:left;display: none;">
													<div class="form-group">
														<label class="control-label">Cuotas</label>
														<input type="number" maxlength="5"  style="text-align:right;" name="cuotas" id="cuotas" class=" form-control " onkeypress="return NumCheck(event, this);">
													</div>
												</div>
												<div id="intervacredi" class="col-md-2" style="float:left;display: none;">
													<div class="form-group">
														<label class="control-label">Intervalo Dias</label>
														<div class="input-group">
															<input type="number" maxlength="5" placeholder="" value="" class="form-control" id="intervalo" name="intervalo">
															<span class="input-group-btn">
																<span class="input-group-btn">
																	<button type="button" class="btn btn-social-icon btn-reddit" title="Ver Cronograma" name="cronograma"  id="VtnCuotas">
																		<i class="fa fa-search"></i>
																	</button>
																</span>
															</span>
														</div>
													</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<label></label>
														<button type="button" title="Agregar al Detalle" id="AgregarDetalleProducto" name="AgregarDetalleProducto" class="btn btn-primary" disabled>
															<i class="fa fa-plus"></i>Agregar
														</button>
													</div>
												</div>
												
											</div>
											<h3 class="form-section">Detalle Ventas</h3>
											<div class="row">
												<div class="col-md-9">
													<div class="form-group">
														<table class="table table-striped table-hover" id="tblDetalle">
															<th>Fecha</th>
															<th>Descripcion</th>
															<th>Cantidad</th>
															<th>Precio</th>
															<th>Importe(S/.)</th>
															<th>x</th>

														</table>
													</div>
												</div>
												<div class="col-md-3">
													<div class="form-group">
														<label class="control-label col-md-3">Sub.</label>
														<div class="col-md-6">
															<input class="form-control" type="text" id="subtotal" name="subtotal" value="0.00" readonly="readonly"/>
														</div>
													</div>
												</div>
												<div class="col-md-3">
													<div class="form-group">
														<input class="col-md-1" type="checkbox" id="chbx_igv" name="chbx_igv"/>
														<label class="control-label col-md-2">IGV.</label>
														<div class="col-md-6">
															<input class="form-control" type="text" id="igv" name="igv" value="0.00" readonly="readonly"/>
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-9"></div>
											<div class="col-md-3">
												<div class="form-group">
													<label class="control-label col-md-3">Tot.</label>
													<div class="col-md-6">
														<input class="form-control" type="text" id="total" name="total" value="0.00" readonly="readonly"/>
													</div>
												</div>
											</div>
										</div>
										<div class="form-actions right">
											<button type="submit" class="btn btn-primary" id="save">Guardar</button>
											<a href="<?php echo base_url() ?>Compras_c" class="btn btn-danger">Cancelar</a>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="table-responsive">
	<div id="producto_modal" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" data-target="#producto_modal" aria-hidden="false">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-content">
					<div class="modal-header">
						<button aria-hidden="true" data-dismiss="modal" class="close" type="button">
							×
						</button>
						<h3><center id="myLargeModalLabel" class="modal-title">Lista de Productos</center></h3>
					</div>
					<div class="modal-body">
						<table id="tablabuscar_producto" class="table table-striped table-hover" cellspacing="0">
							<thead>
								<tr>

									<th>ID</th>
									<th>Nombre Producto</th>
									<th>Accion</th>
								</tr>
							</thead>
							<tbody id="bodyproducto">

							</tbody>
						</table><br><br>
						<div class="modal-footer">
							<button data-dismiss="modal" class="btn btn-default" type="button">
								Cerrar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="table-responsive">
	<div id="estadistica_modal" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" data-target="#estadistica_modal" aria-hidden="false">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-content">
					<div class="modal-header">
						<button aria-hidden="true" data-dismiss="modal" class="close" type="button">
							×
						</button>
						<h3><center id="myLargeModalLabel" class="modal-title">Estadistica del Productos</center></h3>
					</div>
					<div class="modal-body" id="container_producto" style="min-width: 800px; height: 500px; margin: 0 auto">


						<br><br>
						<div class="modal-footer">
							<button data-dismiss="modal" class="btn btn-default" type="button">
								Cerrar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="table-responsive">
	<div id="proveedor" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" data-target="#proveedor">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-content">
					<div class="modal-header">
						<button aria-hidden="true" data-dismiss="modal" class="close" type="button">
							×
						</button>
						<h3><center id="myLargeModalLabel" class="modal-title">Lista de Proveedores</center></h3>
					</div>
					<div class="modal-body">
						<table id="tablabuscar_proveedor" class="table table-striped table-hover" cellspacing="0">
							<thead>
								<tr>

									<th>Razon Social</th>
									<th>Ruc</th>
									<th>Telefono</th>
									<th>Email</th>
									<th>Dirección</th>
									<th>Accion</th>
								</tr>
							</thead>
							<tbody id="bodypro">

							</tbody>
						</table><br><br>
						<div class="modal-footer">
							<button data-dismiss="modal" class="btn btn-default" type="button">
								Cerrar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

	<div id="nuevo_proveedor" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" data-target="#proveedor">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-content">
					<div class="modal-header">
						<button aria-hidden="true" data-dismiss="modal" class="close" type="button">
							×
						</button>
						<h3><center id="myLargeModalLabel" class="modal-title">Nuevo Proveedor</center></h3>
					</div>
					<div class="modal-body">
						<form action="" id="form_proveedor">
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label for="">Razon Social</label>
										<input type="text" name="razon" required class="form-control">
									</div>
									<div class="form-group">
										<label for="">Ruc</label>
										<input type="text" name="ruc" required class="form-control">
									</div>
									<div class="form-group">
										<label for="">Teléfono</label>
										<input type="text" name="tel" required class="form-control">
									</div>
									<div class="form-group">
										<label for="">Email</label>
										<input type="text" name="email" required class="form-control">
									</div>

								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label for="">Dirección</label>
										<input type="text" name="direccion" required class="form-control">
									</div>
									<div class="form-group">
										<label for="">Departamento</label>
										<?php echo form_dropdown('', $departamentos, '','class="form-control" id="departamento" required'); ?>
									</div>
									<div class="form-group">
										<label for="">Provincia</label>
										<div class="provincias">
											<select name="" id="" class="form-control">
												<option value="">Seleccione</option>
											</select>
										</div>

									</div>
									<div class="form-group">
										<label for="">Distrito</label>
										<div class="distritos">
											<select name="" id="" class="form-control">
												<option value="">Seleccione</option>
											</select>
										</div>
									</div>
								</div>
							</div>
						</form>
						<div class="modal-footer">
							<button class="btn btn-primary guardar_proveedor" type="button">
								Guardar
							</button>
							<button data-dismiss="modal" class="btn btn-default" type="button">
								Cerrar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="table-responsive">
				<div id="modalCuotas" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" data-target="#modalCuotas" aria-hidden="false">
					<div class="modal-dialog modal-lg">
						<div class="modal-content">
							<div class="modal-content">
								<div class="modal-header">
									<button aria-hidden="true" data-dismiss="modal" class="close" type="button">
										×
									</button>
									<h3><center id="myLargeModalLabel" class="modal-title">Cronograma de Pagos</center></h3>
								</div>
								<div class="modal-body">
									<form class="VtnCuotas">
										<div class="cronograma">
											<div class="page-header" >

											</div>
										</div>
									</form>
									<div class="modal-footer">
										<button id="guardar_cuotas" name="guardar_cuotas" class="btn btn-success" data-dismiss="modal" aria-hidden="true" style="display:none;" >Guardar</button>
										<button class="btn btn-primary" data-dismiss="modal" aria-hidden="true">Cerrar</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>

<div id="nuevo_producto" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" data-target="#proveedor">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-content">
				<div class="modal-header">
					<button aria-hidden="true" data-dismiss="modal" class="close" type="button">
						×
					</button>
					<h3><center id="myLargeModalLabel" class="modal-title">Nuevo Producto</center></h3>
				</div>
				<div class="modal-body">
					<form id="form_producto">
						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
									<label for="">Nombre</label>

									<input type="text" name="descripcion" required class="form-control">
								</div>
								<div class="form-group">
									<label for="">Precio</label>
									<div class="input-group">
										<span class="input-group-addon">S/.</span>
										<input type="text" name="precio" required onkeypress="return NumCheck(event, this);" class="form-control">
									</div>

								</div>

							</div>
							<div class="col-md-6">

								<div class="form-group">
									<label for="">Marca</label>
									<?php echo form_dropdown('marca', $marcas, '','class="form-control" required'); ?>
								</div>


								<div class="form-group">
									<label for="">Categoria Producto</label>
									<?php echo form_dropdown('categoria', $categorias, '','class="form-control" required'); ?>
								</div>

							</div>

							<div class="col-md-6">
								<label class="control-label">
									Stock Minimo <span class="symbol required"></span>
								</label>
								<input type="text" maxlength="4" value="" placeholder="Insertar el Stock Minimo" class="form-control" id="min" name="min" onkeypress="return soloNumeros(event)"  >
							</div>
							<div class="col-md-6">
								<label class="control-label">
									Stock Maximo <span class="symbol required"></span>
								</label>
								<input  type="text" maxlength="4"  placeholder="Insertar el Stock Maximo " class="form-control" id="max" name="max" onkeypress="return soloNumeros(event)"  >
							</div>

						</form>
						<div class="col-md-12"> </div><div class="col-md-6"> </div>
						<div class="modal-footer col-md-6">
							<button class="btn btn-primary guardar_producto" type="button">
								Guardar
							</button>
							<button data-dismiss="modal" class="btn btn-default" type="button">
								Cerrar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>





	<script>

		function soloNumeros(e){
			var key = window.Event ? e.which : e.keyCode
			return (key >= 48 && key <= 57)
		}

		function NumCheck(e, field) {
			key = e.keyCode ? e.keyCode : e.which
			if (key == 8) return true
				if (key > 47 && key < 58) {
					if (field.value == "") return true
						regexp = /.[0-9]{5}$/
					return !(regexp.test(field.value))
				}
				if (key == 46) {
					if (field.value == "") return false
						regexp = /^[0-9]+$/
					return regexp.test(field.value)
				}
				return false
			}


			$("#comprobante").focus();
			$("#comprobante").change(function(){
				$.post('ventas_c/correlativo','id_tipo_documento='+$("#comprobante").val(),function(datos){
					$("#nro_documento").val(datos);
				});	});

			$("#guardar_cuotas").click(function() {
				$("#estado_cronograma").val('1');
			});


			$("#modalidadtrans").change(function(){
				if($(this).val()==2){
					$("#cuotascre").show();
					$("#intervacredi").show();
					$("#adelantocre").show();

				}else{
					$("#cuotascre").hide();
					$("#intervacredi").hide();
					$("#adelantocre").hide();
			//limpiar_tipo_pago();
		}
	});
			$("#chbx_igv").click(function(){
				if($("#chbx_igv").is(':checked')){
					subtotal = $("#subtotal").val();
					$.post("<?php echo site_url('compras_c/parm');?>",'id_param=IGV',function(datos){

						valor_igv =parseFloat(subtotal)*parseFloat(datos);
						valor_igv = valor_igv.toFixed(2);
						$("#igv_hidden").val(datos);
						$("#igv").val(valor_igv);
						setTotal(0, 1,datos);
					},'json');
				}else{
					$("#igv").val('0.00');
					setTotal(0, 1,0);
				}


			});
			$("input:text[readonly=readonly]").css('cursor','pointer');


			$("#adelanto").change(function(){
				adelanto = $("#adelanto").val();
				adelanto = parseFloat(adelanto).toFixed(2);
				if(parseFloat($("#adelanto").val()) > parseFloat($("#total").val())){
					$("#adelanto").val($("#total").val());
				}else{
					parseFloat($("#adelanto").val(adelanto));
				}
			});

			$("#save").click(function(){
				bval = true;


				if(bval && $("#modalidadtrans").val()=='2'){
					bval = true;
				}
				if (bval) {
					if( $(".row_tmp").length ) {

						if($("#modalidadtrans").val()=='2'){
							if ($("#estado_cronograma").val()=='0') {
								crearCuotas();
							}
							if ($("#restante_cuota").val()!='0' && $("#restante_cuota").val()!='0.00') {
								CrearCronograma();
							}
						}

						bootbox.confirm("¿Está seguro que desea guardar la compra? ", function(result) {
							if (result) {

								$("#celda_cronograma").html($("div.cronograma").html());
									var url = "<?php echo base_url()?>compras_c/registrar";
										$.ajax({
											url: url,
											type: "POST",
											data: $('#formulario').serialize(),
											error:function(){
												alert("error");
											},
											success:function(data){
												cargarmodulo();
											}
										});
							}
						});

					}else{
						bootbox.alert("Agregue los servicios al detalle");
					}
				}
				return false;
			});


			$("#cantidad").click(function() {
				if(parseInt($("#cantidad").val()) > parseInt($("#stockactual").val()) ){
					$("#cantidad").val($("#stockactual").val());
					return false;
				}
				else if($("#cantidad").val() < 1){
					$("#cantidad").val('');
					return false;
				}else{
					setImporte();
				}

			});
			$("#VtnCuotas").click(function() {
				CrearCronograma();
			});
			$("#AbrirVtnBuscarProducto").click(function() {
				Productos();
			});

			function ver(id){
				$.post("<?php echo base_url();?>Compras_c/ver",{"id_compras":id},
					function(data){
						var $modal = $('#compras_ver_modal');
						$('#compras_ver_modal').empty();
						$('#compras_ver_modal').append(data);
						$modal.modal();
					});
			}

			function cargarmodulo(){
				$.post("<?php echo base_url();?>Compras_c",
					function(data){
						//$('#sample_3').DataTable().destroy('#sample_3');
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


			function Buscar(){
				$.post("<?php echo site_url('proveedor_c/proveedor_lista');?>" , function(data){
					var tabla1= $("#tablabuscar_proveedor").DataTable();
					tabla1.destroy();
					$('#bodypro').empty();
					$('#bodypro').append(data);
					$('#proveedor').modal('show');
					$('#tablabuscar_proveedor').DataTable({
						'sPaginationType': 'full_numbers',
						'oLanguage':{
							'sProcessing':     'Cargando...',
							'sLengthMenu':     'Mostrar _MENU_ registros',
							'sZeroRecords':    'No se encontraron resultados',
							'sEmptyTable':     'Ningún dato disponible en esta tabla',
							'sInfo':           'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
							'sInfoEmpty':      'Mostrando registros del 0 al 0 de un total de 0 registros',
							'sInfoFiltered':   '(filtrado de un total de _MAX_ registros)',
							'sInfoPostFix':    '',
							'sSearch':         'Buscar:',
							'sUrl':            '',
							'sInfoThousands':  '',
							'sLoadingRecords': 'Cargando...',
							'oPaginate': {
								'sFirst':    'Primero',
								'sLast':     'Último',
								'sNext':     'Siguiente',
								'sPrevious': 'Anterior'
							},
							'oAria': {
								'sSortAscending':  ': Activar para ordenar la columna de manera ascendente',
								'sSortDescending': ': Activar para ordenar la columna de manera descendente'
							}
						},
                    'aaSorting': [[ 0, 'asc' ]],//ordenar
                    'iDisplayLength': 10,
                    'aLengthMenu': [[5, 10, 20, -1], [5, 10, 20, 'All']]


                });
				});
			};


			function Buscar_producto(){
				$.post("<?php echo site_url('Producto_c/producto_lista');?>" , function(data){
					var tabla1= $("#tablabuscar_producto").DataTable();
					tabla1.destroy();
					$('#bodyproducto').empty();
					$('#bodyproducto').append(data);
					$('#producto_modal').modal('show');
					$('#tablabuscar_producto').DataTable({
						'sPaginationType': 'full_numbers',
						'oLanguage':{
							'sProcessing':     'Cargando...',
							'sLengthMenu':     'Mostrar _MENU_ registros',
							'sZeroRecords':    'No se encontraron resultados',
							'sEmptyTable':     'Ningún dato disponible en esta tabla',
							'sInfo':           'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
							'sInfoEmpty':      'Mostrando registros del 0 al 0 de un total de 0 registros',
							'sInfoFiltered':   '(filtrado de un total de _MAX_ registros)',
							'sInfoPostFix':    '',
							'sSearch':         'Buscar:',
							'sUrl':            '',
							'sInfoThousands':  '',
							'sLoadingRecords': 'Cargando...',
							'oPaginate': {
								'sFirst':    'Primero',
								'sLast':     'Último',
								'sNext':     'Siguiente',
								'sPrevious': 'Anterior'
							},
							'oAria': {
								'sSortAscending':  ': Activar para ordenar la columna de manera ascendente',
								'sSortDescending': ': Activar para ordenar la columna de manera descendente'
							}
						},
                    'aaSorting': [[ 0, 'asc' ]],//ordenar
                    'iDisplayLength': 10,
                    'aLengthMenu': [[5, 10, 20, -1], [5, 10, 20, 'All']]


                });
				});
				$("#buscar_proveedor").removeAttr("disabled","disabled");
				$("#buscar_proveedor").attr("enabled","enabled");
				$("#agregar_proveedor").removeAttr("disabled","disabled");
				$("#agregar_proveedor").attr("enabled","enabled");
				$("#grafico_producto").removeAttr("disabled","disabled");
				$("#grafico_producto").attr("enabled","enabled");
			};





			function crearCuotas(){
				var HTML = '<table id="table_cronograma"  width="100%">' +
				'<thead>' +
				'<tr>' +
				'<th>Nro</th>' +
				'<th>Fecha Vencimiento</th>' +
				'<th>Monto</th>'
				'</tr>' +
				'</thead>' +
				'<tbody>';

				var letras = $("#cuotas").val();
				var c=parseInt(letras);

				if($("#estado_cronograma").val()==0){

					/*		var monto = parseInt($("#total").val()) - parseInt($("#adelanto").val());*/
					var monto = parseFloat($("#total").val());
					var intervalo_dias = parseInt($("#intervalo").val());
					var valor = parseFloat(monto/c).toFixed(2)

					var nueva_fecha = new Date();
					month = nueva_fecha.getMonth()+1;
					day = nueva_fecha.getDate();
					year = nueva_fecha.getFullYear();

					month = (month < 10) ? ("0" + month) : month;
					day = (day < 10) ? ("0" + day) : day;
					var fecha_actual=  year + '-' + month + '-' +day  ;

					var fecha_temp = new Date();
		/*	var monto_pagado = 0;
			var cuota = [];
			var pago_mensual = parseInt(monto / c);
			for(var i=1;i<=c;i++){
				cuota[i]=pago_mensual;
				monto_pagado = monto_pagado + pago_mensual;
			}
			if(monto_pagado !== monto){
				cuota[c]=(cuota[c] + monto).toFixed(2);
			}*/
			fecha_temp.setDate (fecha_temp.getDate() + parseInt(intervalo_dias));
			var month ;
			var day ;
			var year;

			for (var i = 1; i<=c; i++) {

				month = fecha_temp.getMonth()+1;
				day = fecha_temp.getDate();
				year = fecha_temp.getFullYear();

				month = (month < 10) ? ("0" + month) : month;
				day = (day < 10) ? ("0" + day) : day;



				HTML = HTML + '<tr>';
				HTML = HTML + '<td>' + i + '</td>';
				HTML = HTML + '<td>';
				HTML = HTML + '   <input type="date" name="fecha_cuota[]" id="fecha_cuota'+i+'" readonly class="fecha_cuota" value="'+year + '-' + month + '-' +day+'"  min="'+fecha_actual+'"  max="3500-12-31" />';
				HTML = HTML + '</td>';
				HTML = HTML + '<td>';
				HTML = HTML + '   <input type="text" value="'+valor+'" maxlength="10" readonly  name="monto_cuota[]" id="monto_cuota'+i+'" class="monto_cuotas" onkeypress="return dosDecimales(event,this)" onblur="montoCuota('+i+')" />';
				HTML = HTML + '</td>';
				HTML = HTML + '</tr>';

				fecha_temp.setDate (fecha_temp.getDate() + parseInt(intervalo_dias));

			}
			HTML = HTML + '</tbody></table>';
			/*HTML = HTML+'<div class="form-group col-md-6 style="float:left;" >'+
			'<label class="control-label col-md-4">Restante:</label>'+
			'<div class="col-md-7">'+
			'<input id="restante_cuota" name="restante_cuota" readonly class="form-control" value="'+parseFloat(monto).toFixed(2)+'" >'+
			'</div>'+
			'</div>' ;*/
			HTML = HTML+'<div class="form-group col-md-6 " style="float:left;" >'+
			'<label class="control-label col-md-3">Total:</label>'+
			'<div class="col-md-8">'+
			'<input id="total_en_cuotas" name="total_en_cuotas" readonly class="form-control" value="'+$("#total").val()+'" >'+
			'</div>'+
			'</div>'+
			'<br><br>'
			;

			$('div.cronograma').html(HTML);

			$("#guardar_cuotas").show();
			$('#table_cronograma').DataTable({
				'sPaginationType': 'full_numbers',
				'oLanguage':{
					'sProcessing':     'Cargando...',
					'sLengthMenu':     'Mostrar _MENU_ registros',
					'sZeroRecords':    'No se encontraron resultados',
					'sEmptyTable':     'Ningún dato disponible en esta tabla',
					'sInfo':           'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
					'sInfoEmpty':      'Mostrando registros del 0 al 0 de un total de 0 registros',
					'sInfoFiltered':   '(filtrado de un total de _MAX_ registros)',
					'sInfoPostFix':    '',
					'sSearch':         'Buscar:',
					'sUrl':            '',
					'sInfoThousands':  '',
					'sLoadingRecords': 'Cargando...',
					'oPaginate': {
						'sFirst':    'Primero',
						'sLast':     'Último',
						'sNext':     'Siguiente',
						'sPrevious': 'Anterior'
					},
					'oAria': {
						'sSortAscending':  ': Activar para ordenar la columna de manera ascendente',
						'sSortDescending': ': Activar para ordenar la columna de manera descendente'
					}
				},
                    'aaSorting': [[ 0, 'asc' ]],//ordenar
                    'iDisplayLength': 10,
                    'aLengthMenu': [[5, 10, 20, -1], [5, 10, 20, 'All']]


                });
		}
	}

	function montoCuota(num) {
		var restante,
		suma_monto_cuotas=0,
		total=($("#cantidad").val())*($("#preciopro").val());

		if (parseInt($("#monto_cuota"+num).val())==0 || $("#monto_cuota"+num).val()=='') {
			$("#monto_cuota"+num).val('0.00');
		}else{
			var valor=(parseFloat($("#monto_cuota"+num).val()).toFixed(2));
			$("#monto_cuota"+num).val(valor);
		}

		for(var i=1;i<=$("#cuotas").val();i++){
			suma_monto_cuotas=(parseFloat(suma_monto_cuotas)+parseFloat($("#monto_cuota"+i).val())).toFixed(2);
		}
		restante=(parseFloat(total)-parseFloat(suma_monto_cuotas)).toFixed(2);

		if(restante<0){
			var exceso= (parseFloat($("#monto_cuota"+num).val())+parseFloat(restante)).toFixed(2);
			$("#monto_cuota"+num).val(exceso)
			$("#restante_cuota").val('0.00');
			$("#guardar_cuotas").show();
		}else{
			$("#restante_cuota").val(restante);
			if(restante==0){
				$("#guardar_cuotas").show();
			}else{
				$("#guardar_cuotas").hide();
			}

		}

	}

	

	function Productos(){
		if($("#idalmacen").val() == ''){
			alert("INgrese el almacen");
			return false;
		}else{
			idalmacen = $("#idalmacen").val();
			$.blockUI({
				message : '<i class="fa fa-spinner fa-spin"></i>Consultando los Productos',
				responseTime : 1000,
			});
			$.ajax({
				url : "<?php echo site_url('ventas_c/productos'); ?>",
				data : {idalmacen : idalmacen},
				type : 'POST',
				dataType : 'json',
				success : function(json,datos) {
					var HTML = '<table class="table table-striped table-hover" id="table3">' +
					'<thead>' +
					'<tr>' +
					'<th>Item</th>'+
					'<th>Producto</th>'+
					'<th>Presentacion</th>'+
					'<th>Categoria</th>'+
					'<th>Marca</th>'+
					'<th>Stock</th>'+
					'<th>Precio</th>'+
					'<th>Acciones</th>'+
					'</tr>' +
					'</thead>' +
					'<tbody>';

					for (var i = 0; i < json.length; i++) {
						HTML = HTML + '<tr>';
						HTML = HTML + '<td>'+(i+1)+'</td>';
						HTML = HTML + '<td>'+json[i].nombre+'</td>';
						HTML = HTML + '<td>'+json[i].presentacion+'</td>';
						HTML = HTML + '<td>'+json[i].categoria+'</td>';
						HTML = HTML + '<td>'+json[i].marca+'</td>';
						HTML = HTML + '<td>'+json[i].stock+'</td>';
						HTML = HTML + '<td>'+json[i].precio+'</td>';
						var id_producto = json[i].id_producto;
						var id_almacen =$("#idalmacen").val();
						var nombre = json[i].nombre;
						var almacen = $( "#idalmacen option:selected" ).text();
						var stock = json[i].stock;
						var precioc = json[i].precio;
						HTML = HTML + '<td><a style="margin-right:4px" href="javascript:void(0)" onclick="sel_producto(\'' + id_producto + '\',\'' + id_almacen + '\',\'' + almacen + '\',\'' + nombre + '\',\'' + stock + '\',\'' + precioc + '\')" class="btn btn-success"><i class="icon-ok icon-white"></i> </a>';
						HTML = HTML + '</td>';
						HTML = HTML + '</tr>';
					}
					HTML = HTML + '</tbody></table>'	;
					$('div.productosmodal').html(HTML);
					tablabuscar1();
					$("#modalProductos").modal('show');

					$.unblockUI({});
				},
				error : function(xhr, status) {
					$.unblockUI({});
					swal({
						title: "Disculpe ocurrio un problema!",
                // text: "Here's a custom image.",
                imageUrl: "<?php echo base_url().'public/images/dislike.png';?>"
            });
				},
			});

		}

	}

	function CrearCronograma(){
		if($("#modalidadtrans").val()=='2' && $("#nombre").val() != '' && $("#subtotal")!=''){
			bval = true;
			bval = bval && $("#cuotas").attr("required","true");
			bval = bval && $("#intervalo").attr("required","true");
			if ($("#cuotas").val() != '' && $("#intervalo").val() != '') {
				if($("#cuotas").val()<=0 || $("#intervalo").val()<=0){
					bootbox.alert("Por favor ingrese datos correcto, en los campos de credito!", function() {
					});
					return false;
				}
				var total=$("#total").val();
				if(parseInt($("#cuotas").val())>= parseInt(total)){
					bootbox.alert("Numero de cuotas invalido, por ser Mayor al total ");
					$("#cuotas").focus();
					return false;
				}
				crearCuotas();
				$("#modalCuotas").modal('show');
				$("#VtnCuotas").show();
				return true
			}
			return false;
		}else{
			bootbox.alert("Seleccione cliente y el producto!", function() {
			});
		}
	}

	function tablabuscar(){
		$(document).ready(function() {
			$('#table2').dataTable({
				'sPaginationType': 'full_numbers',
				'oLanguage':{
					'sProcessing':     'Cargando...',
					'sLengthMenu':     'Mostrar _MENU_ registros',
					'sZeroRecords':    'No se encontraron resultados',
					'sEmptyTable':     'Ningún dato disponible en esta tabla',
					'sInfo':           'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
					'sInfoEmpty':      'Mostrando registros del 0 al 0 de un total de 0 registros',
					'sInfoFiltered':   '(filtrado de un total de _MAX_ registros)',
					'sInfoPostFix':    '',
					'sSearch':         'Buscar:',
					'sUrl':            '',
					'sInfoThousands':  '',
					'sLoadingRecords': 'Cargando...',
					'oPaginate': {
						'sFirst':    'Primero',
						'sLast':     'Último',
						'sNext':     'Siguiente',
						'sPrevious': 'Anterior'
					},
					'oAria': {
						'sSortAscending':  ': Activar para ordenar la columna de manera ascendente',
						'sSortDescending': ': Activar para ordenar la columna de manera descendente'
					}
				},
                    'aaSorting': [[ 0, 'asc' ]],//ordenar
                    'iDisplayLength': 10,
                    'aLengthMenu': [[5, 10, 20, -1], [5, 10, 20, 'All']]


                });

		});

	}

	function tablabuscar1(){
		$(document).ready(function() {
			$('#table3').dataTable({
				'sPaginationType': 'full_numbers',
				'oLanguage':{
					'sProcessing':     'Cargando...',
					'sLengthMenu':     'Mostrar _MENU_ registros',
					'sZeroRecords':    'No se encontraron resultados',
					'sEmptyTable':     'Ningún dato disponible en esta tabla',
					'sInfo':           'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
					'sInfoEmpty':      'Mostrando registros del 0 al 0 de un total de 0 registros',
					'sInfoFiltered':   '(filtrado de un total de _MAX_ registros)',
					'sInfoPostFix':    '',
					'sSearch':         'Buscar:',
					'sUrl':            '',
					'sInfoThousands':  '',
					'sLoadingRecords': 'Cargando...',
					'oPaginate': {
						'sFirst':    'Primero',
						'sLast':     'Último',
						'sNext':     'Siguiente',
						'sPrevious': 'Anterior'
					},
					'oAria': {
						'sSortAscending':  ': Activar para ordenar la columna de manera ascendente',
						'sSortDescending': ': Activar para ordenar la columna de manera descendente'
					}
				},
                    'aaSorting': [[ 0, 'asc' ]],//ordenar
                    'iDisplayLength': 10,
                    'aLengthMenu': [[5, 10, 20, -1], [5, 10, 20, 'All']]


                });

		});

	}
	
	function sel_producto(id_p,id_a,a, p, s, pc) {
		$("#cantidad,#preciopro").attr('disabled', false);
		$("#id_almacense").val(id_a);
		$("#almacense").val(a);
		$("#idproducto").val(id_p);
		$("#nombreproducto").val(p);
		$("#stockactual").val(s);
		$("#preciopro").val(parseFloat(pc).toFixed(2));
		$('#modalProductos').modal('hide');
		$("#cantidad").val('1').focus();
		var HTMLL;
		for(var i=1; i<=parseInt($("#stockactual").val());i++){
			HTMLL = HTMLL + '<option value="'+i+'">'+i+'</option>';
		}
		$('#cantidad').empty();
		$('#cantidad').append(HTMLL);
		setImporte();

	}

	function setImporte(){
		var cantidad = $("#cantidad").val();
		cantidad = parseInt(cantidad);
		if (cantidad == '') {
			cantidad = 0;
		}
		var precio = $("#preciopro").val();
		precio = parseFloat(precio);
		if (precio == '') {
			precio = 0;
		}
		var importe;
		importe = cantidad * precio;
		$("#importe").val(parseFloat(importe).toFixed(2));

	}

	function Proveedor(id,nombre,ruc){
		$('#nombre').val(nombre).focus();
		$('#id_proveedor').val(id);
		$('#ruc').val(ruc);
		$('#proveedor').modal('hide');
	}

	function Producto(id,producto){
		$('#producto').val(producto).focus();
		$('#id_producto').val(id);
		
		$("#cantidad,#preciopro,#importe,#AgregarDetalleProducto").attr('disabled',false);
		$('#producto_modal').modal('hide');
	}



	function limpiar_producto(){
		$("#id_producto,#producto,#id_almacen,#stockactual,#nombreproducto,#cantidad").val('');
		$("#importe").val('0.00');
		$("#preciopro").val('');
		$("#cantidad,#preciopro,#importe").attr('disabled',true);
	}


	function setTotal(importe,aumenta,igv){
		var subtotal = $("#subtotal").val();
		subtotal = parseFloat(subtotal);
		if (subtotal <=0) {
			subtotal = 0;
		}


		igv = parseFloat(igv);
		if (igv<=0) {
			igv = 0;
		}

		if(aumenta){
			subtotal = subtotal + parseFloat(importe);
		}else{
			subtotal = subtotal - parseFloat(importe);
		}
		$("#subtotal").val(subtotal.toFixed(2));
		var total = subtotal + subtotal * igv;
		$("#total").val(total.toFixed(2));
	}

	function subTotal(importe,aumenta){
		var subtotal = parseInt($("#subtotal").val());
		if (subtotal <= 0) {
			subtotal = 0;
		}
		var igv = $("#igv").val();

		if (parseInt(igv.toFixed(2)) <=0) {
			igv = 0;
		}



		if(aumenta==1){
			subtotal = subtotal + parseFloat(importe);
		}else{
			subtotal = subtotal - parseFloat(importe);
		}
		$("#subtotal").val(parseFloat(subtotal).toFixed(2));
		var total = subtotal + subtotal * igv;
		$("#total").val(parseFloat(total).toFixed(2));
	}


		//agregar stock 
		function stock_almacen(){
			$("#stock1").val('0');
			$idalmacen = $("#almacen").val();
			$idproducto = $("#id_producto").val();
			$.post("<?php echo site_url('compras_c/traer_stock'); ?>",{idproducto:$idproducto,idalmacen:$idalmacen},function(json){
				$object = jQuery.parseJSON(json);
				$("#stock1").val($object.stok);
				
			})

		}



		$("#AgregarDetalleProducto").click(function(){




			if ($("#producto").val() != '' && $("#cantidad").val() != ''  && $("#preciopro").val() != ''  && $("#preciopro").val() != '0.00' && $("#nombre").val() != '' && $("#almacen").val() != '' ) {

				var num = $(".id_producto").length;
				if(($(".id_prod[value=" + $("#id_producto").val() + "]").length) >0){
					alert("YA SE REGISTRO");
					return false;
				}
				var tr = 'tr';
				var html = '<tr class="row_tmp">';
				html += '   <input type="hidden" name="tipo_uni[]" value="' + $("#tipo_uni").val() + '" /><input type="hidden" name="stock[]" value="' + $("#stock1").val() + '" /><input type="hidden" name="almacen[]" value="' + $("#almacen").val() + '" />';

				html += '<td>';
				html += '  <input type="hidden" name="fechaventa[]" value="' + $("#fechaventa").val() + '" />' + $("#fechaventa").val();
				html += '</td>';
				html += '<td>';
				html += '   <input type="hidden" name="id_vendido[]" class="id_prod" value="' + $("#id_producto").val() + '" />' + $("#producto").val();
				html += '</td>';
				html += '<td>';
				html += '   <input type="hidden" name="numero[]" value="' + $("#cantidad").val() + '" />' + $("#cantidad").val();
				html += '</td>';
				html += '<td>';
				html += '   <input type="hidden" name="precio[]" value="' + $("#preciopro").val() + '" />' + $("#preciopro").val();
				html += '</td>';
				html += '<td>';
				html += '   <input type="hidden" name="importe[]" class="importe" value="' + $("#importe").val() + '" />' + (($("#cantidad").val())*($("#preciopro").val())).toFixed(2);
				html += '</td>';
				html += '<td>';
				html += '   <a class="btn btn-danger delete" onclick="$(this).closest('+"'tr'"+').remove();setTotal('+($("#cantidad").val())*($("#preciopro").val())+','+0+')"><i class="icon-trash icon-white"></i></a>';
				html += '</td>';
				html += '</tr>';
				setTotal(($("#cantidad").val())*($("#preciopro").val()), 1,0);

				$("#tblDetalle").append(html);
				limpiar_producto();
				$("#stock1").val('0');
			}else{
				alert("los datos están vacios llenelos");
			}
		});

		/*extends*/

		$(document).on("click","#agregar_proveedor",function(e){
			e.preventDefault();
			$("#nuevo_proveedor").modal("show");
		})

		$(document).on("change","#departamento",function(e){
			e.preventDefault();
			var departamento = $(this).val();
			if(departamento != "") {
				$.post("<?php echo base_url().'compras_c/traer_provincias' ?>",{departamento:departamento},function(data){

					$(".provincias").empty();
					$(".provincias").html(data);
				})
			}

		})

		$(document).on("change","#provincia",function(e){
			e.preventDefault();
			var provincia = $(this).val();
			if(provincia != "") {
				$.post("<?php echo base_url().'compras_c/traer_distritos' ?>",{provincia:provincia},function(data){
					$(".distritos").empty();
					$(".distritos").html(data);
				})
			}

		})

		$(document).on("click",".guardar_proveedor",function(){
			$.ajax({
				url: '<?php echo base_url()."proveedor_c/registrar_proveedor2"; ?>',
				type: 'post',
				data: $("#form_proveedor").serialize(),
				success: function (data) {

					$json = JSON.parse(data);
					if($json.error == 1) {
						alert("Error al insertar proveedor");
					}

					if($json.error == 0) {
						$("input[name=nombre]").val($json.razon_social);
						$("input[name=id_proveedor]").val($json.id_proveedor);
						$("input[name=ruc]").val($json.ruc);
						$("#nuevo_proveedor").modal("hide");
					}
				}
			});
		})

		$(document).on("click","#agregar_producto",function(e){
			e.preventDefault();
			$("#nuevo_producto").modal("show");
		})

		$(document).on("click",".guardar_producto",function(){
			alert($("#form_producto").serialize());
			$.ajax({
				url: '<?php echo base_url()."producto_c/registrar_productos2"; ?>',
				type: 'post',
				data: $("#form_producto").serialize(),
				success: function (data) {

					$json = JSON.parse(data);
					if($json.error == 1) {
						alert("Error al insertar producto");
					}

					if($json.error == 0) {
						$("#buscar_proveedor").removeAttr("disabled","disabled");
						$("#buscar_proveedor").attr("enabled","enabled");
						$("#agregar_proveedor").removeAttr("disabled","disabled");
						$("#agregar_proveedor").attr("enabled","enabled");
						$("#grafico_producto").removeAttr("disabled","disabled");
						$("#grafico_producto").attr("enabled","enabled");
						$('#stock1').val($json.stock);
						$("input[name=producto]").val($json.nombre);
						$("input[name=id_producto]").val($json.id_producto);
						$("#cantidad").removeAttr("disabled","disabled");
						$("#cantidad").attr("enabled","enabled");
						$("#preciopro").removeAttr("disabled","disabled");
						$("#preciopro").attr("enabled","enabled");

						$("#AgregarDetalleProducto").removeAttr("disabled","disabled");
						$("#AgregarDetalleProducto").attr("enabled","enabled");
						$("#nuevo_producto").modal("hide");
					}
				},
				error : function(){
					alert("ERROR");
				}
			});
		});

		$(document).on("click","#grafico_producto",function(e){
			e.preventDefault();
			$idproducto = $("input[name=id_producto]").val();
			$producto = $("input[name=producto]").val();
			if($idproducto != "") {
				$.post('<?php echo site_url("compras_c/traer_proveedores"); ?>',{idproducto:$idproducto},function(data){
					$json = jQuery.parseJSON(data);
					if($json.ok == 0){
						alert("El producto no tiene Proveedores");
					}else{
						var array = [];
						var arr = [];

						for(var x in $json){

							for(var i in $json[x]) {
								if(i=="precio_unitario") {
									arr.push(parseFloat($json[x][i]));
								}else{
									arr.push($json[x][i]);
								}


							}
							array.push(arr);
							arr = [];
						}

						$('#container_producto').highcharts({
							chart: {
								type: 'column'
							},
							title: {
								text: 'Listado de Proveedores y precios para el producto ==>> '+$producto
							},
							subtitle: {
								text: ''
							},
							xAxis: {
								type: 'category',
								labels: {
									rotation: -45,
									style: {
										fontSize: '13px',
										fontFamily: 'Verdana, sans-serif'
									}
								}
							},
							yAxis: {
								min: 0,
								title: {
									text: 'Precios (Soles)'
								}
							},
							legend: {
								enabled: false
							},
							tooltip: {
								pointFormat: '<b>{point.y:.1f} Soles</b>'
							},
							series: [{
								name: 'Population',
								data: array,
								dataLabels: {
									enabled: true,
									rotation: -90,
									color: '#FFFFFF',
									align: 'right',
	                format: '{point.y:.1f}', // one decimal
	                y: 10, // 10 pixels down from the top
	                style: {
	                	fontSize: '13px',
	                	fontFamily: 'Verdana, sans-serif'
	                }
	            }
	        }]
	    }); 
						$("#estadistica_modal").modal("show");
					}

				});
			}
		});

	</script>