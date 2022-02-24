<template>
	<v-main class="container">
		<v-card class="weather">
			<div v-if="!getRequestComplete">
				Загружается
			</div>

			<div v-else class="weather__wrapper">
				<div class="weather__icon">Иконка</div>
				<div class="weather__temp">{{ currentWeatherTemp }}</div>
				<v-container class="weather__info">
					<v-row v-for="(obj, key) in currentWeatherInfo"
					       :key="key">
						<v-col>{{ obj.title }}</v-col>
						<v-col>{{ obj.value }}</v-col>
					</v-row>
				</v-container>
				<div class="weather__data">
					<div>Томск</div>
					<div>Дата время</div>
					<div>{{ currentWeatherDescription }}</div>
				</div>
				<v-btn @click="updateWeather" class="weather__btn">
					Обновить
				</v-btn>
			</div>

		</v-card>
		<br><br><br>
		<div class="container">
			1) Главная страница:
			отображение погоды на текущий день, используя предложенную API:
			<br> <br>
			вместе с погодой должна отображаться соответствующая иконка.
			<br> <br>
			на странице должна отображаться текущая дата и время
			<br> <br>
			в зависимости от времени суток должен изменяться дизайн страницы.
			<br> <br>
			Также на странице должна быть отображена информация, полученная из Nasa APOD API (заголовок, факт и
			картинка).
		</div>

	</v-main>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {

	name: "MainPage",
	data() {
		return {}
	},
	created() {
		this.requestWeather()
	},
	methods: {
		...mapActions(['requestWeather']),
		updateWeather() {
			this.requestWeather()
		}
	},
	computed: {
		...mapGetters(['getCurrentWeather', 'getRequestComplete']),
		currentWeatherInfo: function () {
			const result = [
				{
					title: 'Ощущается как',
					value: this.getCurrentWeather.feels_like.toString().slice(0, -3) + ' C'
				},
				{
					title: 'Влажность',
					value: this.getCurrentWeather.humidity + ' %'
				},
				{
					title: 'Давление',
					value: this.getCurrentWeather.pressure
				},
				{
					title: 'Скорость ветра',
					value: this.getCurrentWeather.wind_speed + ' м/с'
				},
			]
			console.log(result)
			return result
		},
		currentWeatherTemp: function () {
			return this.getCurrentWeather.temp.toString().slice(0, -3) + ' C'
		},
		currentWeatherDescription: function () {
			return this.getCurrentWeather.weather_description
		},
		currentWeatherIcon: function () {
			return this.getCurrentWeather.weather_icon
		}
	},
}
</script>

<style lang="scss" scoped>
.container {
	width: 80%;
	text-align: center;
}

.weather {
	margin-top: 5%;
}
</style>