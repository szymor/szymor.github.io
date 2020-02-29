function fits(sizes, maxsizes) {
	var ok = true;
	for (i = 0; i < 3; ++i) {
		if (sizes[i] >= maxsizes[i])
			ok = false;
	}
	return ok;
}

function calculate_shipping() {
	var cost = 100;
	var gabarytA = [640, 380, 80];
	var gabarytB = [640, 380, 190];
	var gabarytC = [640, 410, 380];
	var sizes = [xsize, ysize, zsize];
	var cmp = function(a, b){return b-a};
	sizes.sort(cmp);
	
	if (fits(sizes, gabarytA)) {
		cost = 13;
	} else if (fits(sizes, gabarytB)) {
		cost = 14;
	} else if (fits(sizes, gabarytC)) {
		cost = 16;
	}
	cost += 2;
	
	return cost;
}

function calculate_price() {
	var material_price = 300;
	var density = 3;
	switch ($id("rmaterial").value) {
		case 'PLA':
			material_price = 50;
			density = 1.3;
			break;
		case 'ABS':
			material_price = 55;
			density = 1.1;
			break;
		case 'PETG':
			material_price = 80;
			density = 1.4;
			break;
		case 'nylon':
			material_price = 250;
			density = 1.2;
			break;
	}
	var hour_price = 6;
	var nozzle = parseFloat($id("rnozzle").value);
	var layer = parseFloat($id("rlayer").value);
	var speed = 50; // mm/s
	var infill = parseFloat($id("rinfill").value);
	var shell = area * nozzle * 3;
	var invol = (vol - shell) * infill;
	if (invol < 0)
		invol = 0;

	var btm_area = xsize * ysize;
	var topbot_lyr_n = 7;

	var solid_tb_vol = topbot_lyr_n * 2 * layer * btm_area;
	var real_vol = shell + invol + solid_tb_vol;

	var filam_cost = material_price * density * real_vol / 1000000;
	var time_cost = hour_price * real_vol / (nozzle * layer * speed) / 3600;

	if (time_cost < 6)
		time_cost += 5;
	return filam_cost + time_cost;
}
