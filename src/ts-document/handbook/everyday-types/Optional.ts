class Optional {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getMember(optional?: Optional) {
        console.log(optional)
    }
}

let optional = new Optional("seon", 25);

optional.getMember(undefined);

enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
}

/**
 * 이것은 아래와 동일합니다. :
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log("Log level key is:", key);
        console.log("Log level value is:", num);
        console.log("Log level message is:", message);
    }
}
printImportant("ERROR", "This is a message");
