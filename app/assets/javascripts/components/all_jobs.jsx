var AllJobs = React.createClass({ 

	getInitialState(){
		return { jobs: [] }
	},

	componentDidMount(){ 
			$.getJSON('../api/v1/jobs.json', 
		(response) => {	this.setState({ jobs: response }) }
		) 
	},

  render() {
  	var jobs = this.state.jobs.map((job) => { 
  		return(
  			<div key={job.id} >
  				<h3> {job.title} </h3>
  				<h4> {job.company} </h4>
  				<p> {job.description} </p>
  			</div>
  		)
  	}); 

  	return(
  		<div>
  			{jobs}
  		</div>
  		)
 
  }

});


