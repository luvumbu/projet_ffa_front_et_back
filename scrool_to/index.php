<!DOCTYPE html>
<html>
<style>
body {
  width: 5000px;
}
</style>

<body>
<h1>The Window Object</h1>
<h2>The scrollTo() Method</h2>

<p>Click to scroll the document.</p>

<button onclick="scrollWin()" style="position:fixed">Scroll to 200 horizontally!</button><br><br>

<script>
function scrollWin() {
  window.scrollTo(20000000000000000, 1000000);
}
</script>

</body>
</html>
