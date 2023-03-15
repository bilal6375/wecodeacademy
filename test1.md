## Set Exercise

### Quetions
## 1. Create an empty set called mySet. 
```let output = "";
for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    if (j % 2 == 0) {
      output += "#";
    } else {
      output += "$";
    }
  }
  for (let k = i; k < 5; k++) {
    if (k % 2 == 0) {
      output += "#";
    } else {
      output += "$";
    }
  }
  console.log(output);
  output = "";
}
```
