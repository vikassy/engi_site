class CreateSubscribes < ActiveRecord::Migration
  def change
    create_table :subscribes do |t|
      t.string :email
      t.string :activation_string
      t.boolean :confirmed

      t.timestamps
    end
  end
end
