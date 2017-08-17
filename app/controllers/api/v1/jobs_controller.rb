class Api::V1::JobsController < Api::V1::BaseController
	def index 
		respond_with Job.all
	end

	def create
		respond_with :api, v1, Job.create(job_params)
	end 

	def destroy 
		respond_with Job.destroy(params[:id])
	end 

	private 

	def job_params
		params.require(:job).permit(:title, :company, :description)
	end
end
