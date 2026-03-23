import DB from './DB';

describe('DB.js', () => {
  describe('.insert(data)', () => {
    it('should throw exception if data.id is not a number', async () => {
      const db = new DB();
      await expect(db.insert({ id: "adc" })).rejects.toBeTruthy()
    });

    it('should throw exception if data.id already exists in db', async () => {
      const db = new DB([{ id: 2 }]);
      await expect(db.insert({ id: 2 })).rejects.toBeTruthy()
    });

    it('should create next highest number of index for data to store', async () => {
      const db = new DB([{ id: 4 }]);
      await expect(db.insert({})).resolves.toEqual({ id: 5 })
    })
  });

  describe('.select(id)', () => {
    it('should throw exception if data.id is not found', async () => {
      const db = new DB([{ id: 1 }]);
      await expect(db.select(2)).rejects.toBe('ID not found')
    });

    it('should return item with selected id', async () => {
      const db = new DB([{ id: 2 }]);
      await expect(db.select(2)).resolves.toEqual({ id: 2 })
    })
  });

  describe('.remove(id)', () => {
    it("should throw exception if item id doesn't exist", async () => {
      const db = new DB([{ id: 1 }, { id: 2 }]);
      await expect(db.remove(3)).rejects.toBe('Item not exist!')
    });

    it('should resolve when item with selected id gets removed', async () => {
      const db = new DB([{ id: 1 }, { id: 2 }]);
      await expect(db.remove(2)).resolves.toBe('Item was removed!')
    })
  });

  describe('.update(data)', () => {
    it("should throw exception if item id doesn't exist", async () => {
      const db = new DB([{ id: 1 }, { id: 2 }]);
      await expect(db.update({})).rejects.toBe('ID have to be set!')
    })
  });

  describe('.truncate()', () => {

  });

  describe('.getRows()', () => {

  });
})