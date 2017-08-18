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
			<div> 
					<input ref='title' placeholder="Title" />
					<input ref='company' placeholder="Company" />
					<input ref='description' placeholder="Description" />
					<button onClick={this.handleClick} >Submit</button>
				
			</div>
			)
	}
})
