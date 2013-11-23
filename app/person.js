var Person = function(name) {

  return {
    getName: function() {
      return name;
    },

    setName: function(newName) {
      name = newName;
      return name;
    }
  };

};
