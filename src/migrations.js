"use strict";
module.exports =function(db) {
  db.serialize(function(){
  db.run("CREATE TABLE projects (id INTEGER PRIMARY KEY, name TEXT,description TEXT,respository TEXT)")
  db.run("CREATE TABLE cards(id INTEGER PRIMARY KEY,message TEXT,data TEXT,project_id INTEGER,FOREIGN KEY(project_id) REFRENCES projects(id)")
})
}
