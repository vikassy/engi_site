class CreateAllevents < ActiveRecord::Migration
  def change
    create_table :allevents do |t|
      t.string :name
      t.integer :event_id

      t.timestamps
    end
  end
end
