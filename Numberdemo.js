// build a Number by javascript function demo
function MyNumber(value) {
    return toNumber(value)
}

function toNumber(value){
    if (typeof value === 'number') {
        return value
    }

    if(typeof value === "boolean") {
        return value ? 1 :0
    }

    if (value === null) {
        return 0
    }
    
    if (value === undefined) {
        return NaN
    }

    // treat string
    if (typeof value === "string") {
        return stringToNumber(value)
    }
}

function stringToNumber(str) {
    //  remove whitespace
    str = str.trim();

    if(str === '') {
        return 0
    }

    // check specially value
    if (str === 'Infinity' || str === '+Infinity') {
        return Infinity
    }

    if(str === '-Infinity') {
        return -Infinity
    }

    const validNumberRegex = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;
    if (!validNumberRegex.test(str)) {
        return NaN
    }

    const result = parseFloat(str)

    if(result === 0 && str[0] === '-'){
        return -0
    }
    return result;
}


// 测试代码
console.log('MyNumber 测试：');
console.log('----------');

// 测试数字
console.log('MyNumber(123):', MyNumber(123));          // 123
console.log('MyNumber(12.34):', MyNumber(12.34));      // 12.34
console.log('MyNumber(-45):', MyNumber(-45));          // -45

// 测试布尔值
console.log('MyNumber(true):', MyNumber(true));        // 1
console.log('MyNumber(false):', MyNumber(false));      // 0

// 测试 null 和 undefined
console.log('MyNumber(null):', MyNumber(null));        // 0
console.log('MyNumber(undefined):', MyNumber(undefined)); // NaN

// 测试字符串
console.log('MyNumber("123"):', MyNumber("123"));      // 123
console.log('MyNumber("12.34"):', MyNumber("12.34"));  // 12.34
console.log('MyNumber(" 456 "):', MyNumber(" 456 "));  // 456
console.log('MyNumber(".5"):', MyNumber(".5"));        // 0.5
console.log('MyNumber(""):', MyNumber(""));            // 0
console.log('MyNumber("abc"):', MyNumber("abc"));      // NaN
console.log('MyNumber("123abc"):', MyNumber("123abc")); // NaN

// 与原生 Number 对比
console.log('\n与原生 Number 对比：');
console.log('Number("123"):', Number("123"), 'MyNumber("123"):', MyNumber("123"));
console.log('Number(""):', Number(""), 'MyNumber(""):', MyNumber(""));
console.log('Number(null):', Number(null), 'MyNumber(null):', MyNumber(null));