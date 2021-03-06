var path = require('path'),
	testLoad = require('markdown-it-testgen').load,
	mdk = require('../index');

var md = require('markdown-it')()
	.use(mdk);

/* this uses the markdown-it-testgen module to automatically generate tests
   based on an easy to read text file
 */
testLoad(path.join(__dirname, 'fixtures/default.txt'), function(data){
	data.fixtures.forEach(function (fixture){

		/* Testing using jest */
		test(fixture.header, function() {

			var expected = fixture.second.text,
				actual = md.render(fixture.first.text);

			expect(actual).toEqual(expected);

		});

	});
});
