describe('Person', function() {
  var person = new Person('Julius');

  describe('#get()', function() {
    it('should return the name of the person', function() {
      person.getName().should.be.equal('Julius');
    });
  });

  describe('#set()', function() {
    it('should return the new name of the person', function() {
      person.setName('Cornelius').should.be.equal('Cornelius');
    });

    it('should set the person\'s name', function() {
      person.getName().should.be.equal('Cornelius');
    });
  });
});
