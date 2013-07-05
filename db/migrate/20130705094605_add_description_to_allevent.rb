class AddDescriptionToAllevent < ActiveRecord::Migration
  def change
    add_column :allevents, :description, :text
  end
end
