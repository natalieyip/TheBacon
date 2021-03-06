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
  			<div key={job.id} className="job-container">
  				<h2> {job.title} </h2>
          <h3> {job.company} </h3>
          <h4> <em> {job.employtype} - {job.paytype} </em> </h4>
  				<p> {job.description} </p>
  			</div>
  		)
  	}); 

  	return(
  		<div className="all-jobs-container">
  			{jobs} 
  		</div>


  		)
 
  }

});


