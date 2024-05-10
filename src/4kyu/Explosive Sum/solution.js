function sum(num) {
    let memo = {};
      function calculatePartitions(k, m) {
          if (k === 0 || m === 1) return 1;
          if (k < 0 || m < 0) return 0;
          if (memo.hasOwnProperty(`${k}-${m}`)) return memo[`${k}-${m}`];
          const result = calculatePartitions(k, m - 1) + calculatePartitions(k - m, m);
          memo[`${k}-${m}`] = result;
          return result;
      }
      return calculatePartitions(num, num);
  }