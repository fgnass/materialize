module.exports = function materialize(list, key, value) {
  var ret = {};

  list.forEach(function(item) {
    ret[item[key||'name']] = item[value||'value'];
  });

  return ret;
};
