import DB from './DB';

describe('.insert()', () => {
    it('return 1 when insert one item', async () => {
        const db = new DB();
        await db.insert({
            id: 1,
            name: 'John',
        });
        const rows = await db.getRows();
        expect(rows.length).toBe(1);
    });
    it('reject when insert id is not a number', async () => {
        expect.assertions(1);
        const db = new DB();
        try {
            await db.insert({
                id: 'xyz',
                name: 'John',
            });
        } catch (e) {
            expect(e).toBe('ID can be only number!');
        }
    });
    it('reject when insert id is duplicated', async () => {
        expect.assertions(1);
        const db = new DB();
        try {
            await db.insert({
                id: 1,
                name: 'John',
            });
            await db.insert({
                id: 1,
                name: 'James',
            });
        } catch (e) {
            expect(e).toBe("ID can't be duplicated!");
        }
    });
    it('inserted data is correct', async () => {
        const data = { id: 1, name: 'John' };
        const db = new DB();
        const insertedData = await db.insert(data);
        expect(insertedData).toEqual(data);
    });
    it('should reject removal of data with a non-existent ID', async () => {
        expect.assertions(1);
        const db = new DB();
        try {
            await db.remove(1);
        } catch (e) {
            expect(e).toBe('Item not exist!');
        }
    });
    it('should update data with a matching ID', async () => {
        const data = { id: 1, name: 'John Doe' };
        const db = new DB();
        await db.insert(data);

        const updatedData = { id: 1, name: 'Jane Doe' };
        const result = await db.update(updatedData);
        const rows = await db.getRows();

        expect(result).toEqual(updatedData);
        expect(rows[0]).toEqual(updatedData);
    });
    it('should reject update of data with a non-existent ID', async () => {
        expect.assertions(1);
        const data = { id: 1, name: 'John Doe' };
        const db = new DB();
        try {
            await db.update(data);
        } catch (e) {
            expect(e).toBe('ID not found!');
        }
    });

    it('should reject update of data without an ID', async () => {
        expect.assertions(1);
        const data = { name: 'John Doe' };
        const db = new DB();
        try {
            await db.update(data);
        } catch (e) {
            expect(e).toBe('ID have to be set!');
        }
    });
});