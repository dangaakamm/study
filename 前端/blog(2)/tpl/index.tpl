<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="{$CSS_PATH}index.css">
</head>
<body>
	<ul>
		{foreach $aa as $v}
		<li>
			<div>
				用户名：<a href="?m=admin&c=show&a=show&id={$v['id']}">{$v["title"]}</a>
			</div><br>
			<div>
				<!-- 密码：<span>{$v["con"]}</span> -->
			</div>
		</li>
		{/foreach}
	</ul>
</body>
</html>