<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<ul>
		{foreach $aa as $v}
		<li>
			<div>
				标题：<h1>{$v["title"]}</h1>
			</div><br>
			<div>
				内容：<p>{$v["con"]}</p>
			</div>
		</li>
		{/foreach}
	</ul>
</body>
</html>