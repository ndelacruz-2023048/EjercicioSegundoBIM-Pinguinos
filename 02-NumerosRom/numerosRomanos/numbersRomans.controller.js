export const validateSum = (romanString) => {
    let repeatCount = 1;
    for (let i = 1; i < romanString.length; i++) {
        if (romanString[i] === romanString[i - 1]) {
            repeatCount++;
            if (repeatCount > 3) {
                return false; 
            }
        } else {
            repeatCount = 1;
        }
    }
    return true; 
};

export const validateVLD = (romanString) => {
    const invalidPairs = ['VV', 'LL', 'DD', 'VL', 'VD', 'LV', 'LD', 'DV', 'DL'];

    for (let i = 0; i < romanString.length - 1; i++) {
        const pair = romanString[i] + romanString[i + 1];
        if (invalidPairs.includes(pair)) {
            return false; 
        }
    }
    return true; 
};

export const numRomans = async (req, res) => {
    try {
        let data = req.body;

        if (!data || !data.numerosRomanos || typeof data.numerosRomanos !== 'string') {
            return res.status(400).send({ message: 'Invalid input. Please provide a valid Roman numeral string.' });
        }

        const romansNumber = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        };

        const combinations = {
            IV: 4,
            IX: 9,
            XL: 40,
            XC: 90,
            CD: 400,
            CM: 900
        };

        const request = data.numerosRomanos.toUpperCase();
        let total = 0;

        if (!validateSum(request)) {
            return res.status(400).send({ message: 'Invalid Roman numeral: more than three consecutive repetitions found.' });
        }

        if (!validateVLD(request)) {
            return res.status(400).send({ message: 'Invalid Roman numeral: addition or subtraction of V, L, or D detected.' });
        }

        for (let i = 0; i < request.length; i++) {
            const current = romansNumber[request[i]];
            const next = romansNumber[request[i + 1]];

            if (!current) {
                return res.status(400).send({ message: `Invalid Roman numeral character: ${request[i]}` });
            }

            if (next && current < next) {
                const combinationValue = combinations[request[i] + request[i + 1]];
                if (!combinationValue) {
                    return res.status(400).send({ message: `Invalid Roman numeral combination: ${request[i]}${request[i + 1]}` });
                }
                total += combinationValue;
                i++;
            } else {
                total += current;
            }
            
            if(romansNumber [request[i]] === undefined) {
                return res.status(400).send({ message: `Invalid Roman numeral character: ${request[i]}` });
            }
            
        }

        if (total < 1 || total > 3999) {
            return res.status(400).send({ message: 'Roman numeral out of range (1-3999)' });
        }


        return res.status(200).send({ message: 'Conversion successful', number: total });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Failed to convert number', error });
    }
};
