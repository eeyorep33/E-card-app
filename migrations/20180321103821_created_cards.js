
exports.up = function(knex, Promise) {
      return knex.schema.createTableIfNotExists('created_cards', function (table) {
          table.increments('id').primary(); 
          table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
          table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
          table.string('senderEmail').notNullable();
          table.string('senderName').notNullable();
          table.string('recipientEmail').notNullable();
          table.string('recipientName').notNullable();
          table.string('source').notNullable();
          table.string('message').notNullable();
            
             
      })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('created_cards') 
  };
