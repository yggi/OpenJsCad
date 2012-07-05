// # class CSG

// Holds a binary space partition tree representing a 3D solid. Two solids can
// be combined using the `union()`, `subtract()`, and `intersect()` methods.

CSG = function() {
  this.children = [];
  this.name = "";
};

CSG.fromChildren = function(children, name) {
  var csg = new CSG();
  csg.children = children;
  return csg;
};

CSG.prototype = {
  clone: function() {
    var csg = new CSG();
    csg.name = this.name;
    csg.children = this.children.map(function(p) { return p.clone(); });
    return csg;
  },

  toChildren: function() {
    return this.children;
  },

  
  union: function(csg) {
    return CSG.fromChildren([this,csg],"union");
  },


  subtract: function(csg) {
    return CSG.fromChildren([this,csg],"substract");
  },

 
  intersect: function(csg) {
   return CSG.fromChildren([this,csg],"intersect");
  },

};


CSG.cube = function(options) {
  return CSG.fromChildren([],"cube");
};

CSG.sphere = function(options) {
  return CSG.fromChildren([],"sphere");
};


CSG.cylinder = function(options) {
  return CSG.fromChildren([],"cylinder");
};
