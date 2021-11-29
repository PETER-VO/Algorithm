function isIndexed(data) {
	return _.isArray(data) || _.isString(data);
}

function nth(a, index) {
	if (!_.isNumber(index)) fail('Expected a number as the index');
	if (!isIndexed(a)) fail('Not supported on non-indexed type');
	if (index < 0 || index > a.length - 1) fail('Index value is out of bounds');
	return a[index];
}

function lameCSV(str) {
	return _.reduce(
		str.split('\n'),
		function (table, row) {
			table.push(
				_.map(row.split(','), function (c) {
					return c.trim();
				})
			);
			return table;
		},
		[]
	);
}

var peopleTable = lameCSV('name,age,hair\nMerble,35,red\nBob,64,blonde');
console.log(peopleTable);

function selectNames(table) {
	return _.rest(_.map(table, _.first));
}

function selectAges(table) {
	return _.rest(_.map(table, 1));
}
function selectHairColor(table) {
	return _.rest(
		_.map(table, function (row) {
			return nth(row, 2);
		})
	);
}

var mergeResults = _.zip;

//
