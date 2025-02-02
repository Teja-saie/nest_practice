Sequelize provides a variety of methods for working with databases in **Node.js**. These methods can be categorized into different operations like **CRUD (Create, Read, Update, Delete), Querying, Transactions, Hooks, Associations, etc.**  

Here’s a comprehensive list:

---

## **1. Model Methods (CRUD Operations)**  

### **Create / Insert**  
- `create(data)` – Inserts a single record  
- `bulkCreate(dataArray)` – Inserts multiple records  

### **Read / Fetch**  
- `findOne({ where: {} })` – Fetches a single record  
- `findByPk(primaryKey)` – Fetches a record by primary key  
- `findAll({ where: {} })` – Fetches multiple records  
- `findOrCreate({ where: {}, defaults: {} })` – Finds a record or creates a new one if not found  
- `count({ where: {} })` – Counts records matching the condition  
- `max('column', { where: {} })` – Finds the maximum value of a column  
- `min('column', { where: {} })` – Finds the minimum value of a column  
- `sum('column', { where: {} })` – Sums up values of a column  
- `findAndCountAll({ where: {} })` – Returns an object with `count` and `rows`  

### **Update**  
- `update(data, { where: {} })` – Updates records matching the condition  

### **Delete / Destroy**  
- `destroy({ where: {} })` – Deletes records matching the condition  
- `truncate({ cascade: true })` – Deletes all records and resets primary keys  

---

## **2. Instance Methods (Used on Model Instances)**  
- `save()` – Saves the model instance (Insert or Update)  
- `reload()` – Reloads the instance with updated values from the database  
- `destroy()` – Deletes the specific instance from the database  
- `increment('field', { by: value })` – Increases a field’s value  
- `decrement('field', { by: value })` – Decreases a field’s value  
- `restore()` – Restores a soft-deleted record (if `paranoid: true` is enabled)  
- `toJSON()` – Converts instance to a plain JSON object  

---

## **3. Querying Methods (Advanced Fetching)**  
- **Operators** (`Op.eq`, `Op.ne`, `Op.gt`, `Op.gte`, `Op.lt`, `Op.lte`, `Op.in`, `Op.notIn`, `Op.like`, `Op.notLike`, etc.)  
- `where: { column: condition }` – Applies conditions in queries  
- `order: [['column', 'ASC' | 'DESC']]` – Sorting results  
- `limit: 10` – Limits the number of results  
- `offset: 5` – Skips a certain number of results  
- `group: 'column'` – Groups by a column  

---

## **4. Query Interface Methods (Raw Queries)**  
Sequelize also provides direct SQL execution methods:  
- `sequelize.query("SELECT * FROM users", { type: QueryTypes.SELECT })`  
- `sequelize.query("UPDATE users SET name='John' WHERE id=1")`  

---

## **5. Transactions**
- `sequelize.transaction()` – Starts a transaction  
- `t.commit()` – Commits the transaction  
- `t.rollback()` – Rolls back the transaction  

---

## **6. Associations (Relationships)**
- `belongsTo(Model, { foreignKey })` – Defines a **One-to-One** relation  
- `hasOne(Model, { foreignKey })` – Defines a **One-to-One** relation  
- `hasMany(Model, { foreignKey })` – Defines a **One-to-Many** relation  
- `belongsToMany(Model, { through: 'tableName' })` – Defines a **Many-to-Many** relation  

---

## **7. Hooks (Lifecycle Methods)**
- `beforeCreate(instance, options)`  
- `afterCreate(instance, options)`  
- `beforeUpdate(instance, options)`  
- `afterUpdate(instance, options)`  
- `beforeDestroy(instance, options)`  
- `afterDestroy(instance, options)`  

---

This is a broad list of methods available in **Sequelize for Node.js**. Let me know if you need detailed examples! 🚀