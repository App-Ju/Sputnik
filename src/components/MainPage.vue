<template>
	<v-main class="container">
		<v-card class="weather">
			<div v-if="!getRequestComplete">
				Загружается
			</div>

			<div v-else class="weather__wrapper">
				<img class="weather__icon" :src="currentIcon">
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
					<div>24 февраля 2022 18:45</div>
					<div>{{ currentWeatherDescription }}</div>
					<v-btn @click="updateWeather" class="weather__btn">
						Обновить
					</v-btn>
				</div>
			</div>

		</v-card>
		<br><br><br>
		<div class="nasa">
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
					value: this.getCurrentWeather.feels_like.toString().slice(0, -3) + '°C'
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
			return result
		},
		currentWeatherTemp: function () {
			return this.getCurrentWeather.temp.toString().slice(0, -3) + '°C';
		},
		currentWeatherDescription: function () {
			return this.getCurrentWeather.weather_description
		},
		currentIcon: function () {
			return `http://openweathermap.org/img/wn/${this.getCurrentWeather.weather_icon}@2x.png`
		}
	},
}
</script>

<style lang="scss" scoped>
.container {
	width: 70%;
}

.nasa {
	text-align: center;
}

.weather {
	margin-top: 5%;
	padding: 3%;
}

.weather__wrapper {
	display: flex;
	align-items: center;
	height: 15vh;
}

.weather__icon {
	background: #efeee9;
	width: 15%;
	height: 100%;
}

.weather__temp {
	width: 20%;
	text-align: center;
	font-size: 60px;
	margin-bottom: 5%;
}

.weather__info {
	width: 40%;
	height: 100%;
	margin-top: 5%;
}

.weather__data {
	display: inline-flex;
	flex-direction: column;
	justify-content: space-between;
	width: 25%;
	height: 100%;
	text-align: right;

	:first-child {
		font-size: 30px;
	}

	:nth-child(2) {
		font-size: 20px;
	}
	:nth-child(3) {
		font-size: 18px;
	}

}

.weather__btn {
	align-self: end;
	width: 90px;
	height: 26px;
	font-size: 11px;
}
</style>