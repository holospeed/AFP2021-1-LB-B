export default class Vector3 {
  static dot(array1, array2) {
    let dot = 0;
    for (let i = 0; i < array1.length; i++) {
      dot += array1[i] * array2[i];
    }
    return dot;
  }

  static norm(array) {
    return Math.sqrt(Vector3.dot(array, array));
  }
}
