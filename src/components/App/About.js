import React from 'react';

const About = () => (

	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<h4 className="mt-3 mb-5">About</h4>
				<p>Music search via <a href="https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/">iTunes search API</a></p>
				<p>Result preview listening using the HTML5 <span className="font-monospace">&lt;audio&gt;</span> element</p>
				<p>Build using React Redux and Bootstrap 4</p>
				<p>Code at: <a href="https://github.com/semd/musicindabody">https://github.com/semd/musicindabody</a></p>
				<p><strong>Author:</strong></p>
				<p>Sergi Massaneda (<a href="https://github.com/semd/">https://github.com/semd</a>)</p>
			</div>
		</div>
	</div>

);

export default About;
