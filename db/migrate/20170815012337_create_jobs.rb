class CreateJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :jobs do |t|
    	t.string :title, null: false
    	t.string :company, null: false
    	t.string :description, null: false

      t.timestamps
    end
  end
end
