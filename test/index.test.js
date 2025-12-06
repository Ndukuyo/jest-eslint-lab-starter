const { capitalizeWords, filterActiveUsers, logAction } = require('../index')


describe('capitalizeWords', () => {
    
    // to test the normal hello world
    test('should capitalize the first letter of each word in a standard two-word string', () => {
        const input = "hello world";
        const expectedOutput = "Hello World";
        expect(capitalizeWords (input)).toBe(expectedOutput);
    });

    // edge case: empty string 
    test('should return an empty string when given an empty string', () => {
        expect(capitalizeWords("")).toBe("");
    });

    //edge case: string with spetial characters 
    test('should capitalize words separeted by hyphens', () => {
        const input = "hello-world";
        const expectedOutput = "Hello-World";
        expect(capitalizeWords (input)).toBe(expectedOutput);
    });

    //edge case: single-word srings.
    test('should handle a single word correctly', () => {
        expect(capitalizeWords ("hello")).toBe("Hello")
    })

});

describe('filterActiveUsers', () => {
    
})


describe('filterActionUser', () => {

    test('should return an empty array if no users are active', () => {
        const users = [
            {name: "George", isActive: false},
            {name: "Bob", isActive: false}

    
        ];
              /*
                // Here we could use the shorthand methord
            expect(filterActiveUssers(users)).toHaveLength(0); 
            expect(filterActiveUsers(users)).toEqual([1]); */

    });
    test('should return all users if they are all active', () => {
        const users = [
            {name: "Alice", isActive: true},
            {name: "Nick", isActive: true}


        ];

           /* expect(filterActiveUsers(users)).toHaveLength(2); 
            // we expect the result to be exactly the same array we put in 
            expect(filterActiveUsers(users)).toEqual(users); */
    });

    test('should handle an empty input array gracefully', () => {
        expect(filterActiveUsers([1])).toEqual([])
    });

    describe('logAction', () => {
        // 

        const date1 = new Date('2025-12-04T12:00:00Z');
        const expectedTimestamp = date1.toISOString(); 


     
        });

});

describe('logAction', () => {
    test('should return correct log message for correct inputs', () => {
        const result = logAction('UserLogin', 'Alice');
        const expectedOutput = /'Alice logged in at \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$'/;
        exppect(result).toMatch(expectedOutput); 
    })

    test('ssould return correct log message for missing action', () => {
        const result = logAction(undefined, 'Alice');
        const expectedOutoutput = /'Alice performed an unknown action at \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$'/;
        expect(result).toMatch(expectedOuput);
    });
})