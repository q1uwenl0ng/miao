var q1uwenl0ng = {
  chunk: function (array, size = 1) {//拆分数组
    var l = array.length
    if (l < 2) {
      return array
    }
    var result = []
    var j = 0
    result[j] = []
    var n = size
    for (var i = 0; i < l; i++) {
      if (n == 0) {
        n = size
        j++
        result[j] = []

      }
      result[j].push(array[i])
      n--
    }
    return result
  },
  compact: function (array) {//去除数组里的false values:false, null, 0, "", undefined,  NaN
    var j = 0
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] !== false && array[i] !== null && array[i] !== 0 && array[i] !== '' && array[i] !== undefined && !Number.isNaN(array[i])) {
        result[j] = array[i]
        j++
      }
    }
    return result
  },
  drop: function (ary, n = 1) {//drop  数组从左开始丢弃n项
    var l = ary.length
    if (l < 1) {
      return ary
    }
    if (n >= l) {
      return []
    }
    var result = []
    var j = 0
    for (var i = n; i < l; i++, j++) {
      result[j] = ary[i]
    }
    return result
  },
  dropRight: function (ary, n = 1) {//Creates a slice of array with n elements dropped from the end. 数组从右开始丢弃n项
    var l = ary.length
    if (l == 0) {
      return ary
    }
    if (n >= l) {
      return []
    }
    var result = []
    var j = 0
    for (var i = 0; i < l - n; i++, j++) {
      result[j] = ary[i]
    }
    return result
  },
  fill: function (array, value, start = 0, end = array.length) {//Fills elements of array with value from start up to, but not including, end.
    var l = array.length
    for (var i = start < l ? start : l; i < (end < l ? end : l); i++) {
      array[i] = value
    }
    return array
  },
  findIndex: function (array, f, fromIndex = 0) {
    if (typeof f == 'string') {
      for (var i = 0; i < array.length; i++) {
        if (typeof array[i] == 'string' && array[i] == f) {
          return i
        } else if (typeof array[i] == 'object') {

        } else if (Array.isArray(array[i])) {

        }
      }
    }
  },
  flatten: function (array) {//铺平一层深度
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (!Array.isArray(array[i])) {
        result.push(array[i])
      } else {
        for (var j = 0; j < array[i].length; j++) {
          result.push(array[i][j])
        }
      }
    }
    return result
  },
  flattenDeep: function (array) {//铺平所有深度
    var result = []
    result = flattenDeepX(array)
    function flattenDeepX(array) {
      for (var i = 0; i < array.length; i++) {
        if (!Array.isArray(array[i])) {
          result.push(array[i])
        } else {
          flattenDeepX(array[i])
        }
      }
      return result
    }
    return result
  },
  flattenDepth: function (array, depth = 1) {
    var result = []
    result = flattenDepthX(array, depth)
    function flattenDepthX(array, depth) {
      for (var i = 0; i < array.length; i++) {
        if (!Array.isArray(array[i]) || depth == 0) {
          result.push(array[i])
        } else {
          flattenDepthX(array[i], --depth)
        }
      }
      return result
    }
    return result
  },
  ary: function (func, n = args.length) {
    return function (...args) {
      return func(...args.slice(0, n))
    }
  },
  unary: function (func) {
    return function (...args) {
      return func(...args.slice(0, 1))
    }
  },
  negate: function (f) {
    return function (...args) {
      return !f(...args)
    }
  },
  spread: function (f) {
    return function (args) {
      return f.apply(this, args)
    }
  },
}
