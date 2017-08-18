var NewJob = React.createClass({ 

	handleClick(){
		var title = this.refs.title.value;
		var company = this.refs.company.value;
		var description = this.refs.description.value; 

		console.log(title)
		$.ajax({
			url: '/api/v1/jobs',
			type: 'POST',
			data: {job: {title: title, company: company, description: description }},
			success: (response) => {
				console.log(response);
			}
		})
	},

	render(){
		return (
			<div className="add-job-container"> 
			<h3> Post a Job </h3> 
				<form className="new-job-form">
				<label> Job Title: </label>
					<input ref='title' /> 
					<label> Company: </label>
					<input ref='company'/>
					<label> Brief Description: </label>
					<textarea ref='description' />
					<label> Job Type: </label>
					<select name="employtype" >
					  <option value="Full Time">Full Time</option>
					  <option value="Part Time">Part Time</option>
					  <option value="Internship">Internship</option>
					  <option value="Contract">Contract</option>
					</select>
					<label> Pay Type: </label>
					<div className="radiobtn">
						<input type="radio" name="paytype" value="salary" /> Salary
	  				<input type="radio" name="paytype" value="hourly" /> Hourly
  				</div>
					<button onClick={this.handleClick} >Submit</button>
				</form>
			</div>
			)
	}
})
