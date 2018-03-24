<?php include_once "const.php"; ?>
<html>
<head>
<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="js/ajax.js"></script>
</head>
<body>
<select name="select" id = "select-pref">
  <?php foreach ($pref as $cd => $val) : ?>
      <option value="<?=$cd?>"><?=$val?></option>
  <?php endforeach;?>
</select>
<select name="select" id = "select-city">
</select>
</body>
</html>