<template>
	<div class="header__wrapper">
		<div class="header__container container">
			<div class="header__logo">
				<img :src="require('@/assets/logo.png')" alt="#">
			</div>
			<nav class="header__nav">
				<router-link to="/" class="header__link">
					Main
				</router-link>
				<router-link to="/photos" class="header__link">
					Photo Gallery
				</router-link>
			</nav>
		</div>
	</div>
</template>

<script>
export default {
	name: "Header"
}
</script>

<style scoped>
.header__wrapper {
	background: #9cd9dc;
	font-size: 22px;
	font-weight: bold;
}

.header__container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
}

.header__logo img {
	width: 50px;
	object-fit: contain;
}

.header__nav {
	display: flex;
	justify-content: space-around;
	width: 70%;
}

a:visited, :link {
	color: #333333;
}

a:hover {
	color: #7f45c7;
	transform: scale(1.1);
	transition-duration: 0.3s;
}

a:active {
	transform: scale(0.9);
	transition-duration: 0.3s;
}
</style>