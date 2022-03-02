<template>
	<v-main class="main__wrapper" :style="designSwitch">
		<v-card class="weather container">
			<div
				class="loader"
				v-if="!getRequestComplete"
			>
				<img :src="require('@/assets/loader.gif')" alt="#">
			</div>
			<div v-else class="weather__wrapper">
				<img class="weather__icon" :src="currentIcon" alt="#">
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
					<div v-html="currentTime"></div>
					<div>{{ currentWeatherDescription }}</div>
					<v-btn @click="updateWeather" class="weather__btn">
						Обновить
					</v-btn>
				</div>
			</div>
		</v-card>
		<v-card class="nasa container">
			<div
				class="loader"
				v-if="!getNasaCompleted"
			>
				<img :src="require('@/assets/loader.gif')" alt="#">
			</div>
			<div class="nasa__data">
				<div>
					<img :src="nasaData.photo" alt="#">
				</div>
				<p>{{ nasaData.title }}</p>
				<p>{{ nasaData.fact }}</p>
			</div>
		</v-card>
	</v-main>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
	name: "MainPage",
	data() {
		return {
			currentTime: this.getCurrentTime()
		}
	},
	created() {
		this.requestWeather()
		this.requestNasaAPOD()
	},
	mounted() {
		this.interval = setInterval(() => this.currentTime = this.getCurrentTime(), 1000)
	},
	beforeUnmount() {
		clearInterval(this.interval)
	},
	methods: {
		...mapActions(['requestWeather', 'requestNasaAPOD']),
		updateWeather() {
			this.requestWeather()
		},
		getCurrentTime() {
			const date = new Date()
			const day = date.toLocaleDateString()
			const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
			const hours = date.getHours()
			const opacity = date.getSeconds() % 2 ? 0 : 1
			const divider = `<span style="opacity: ${opacity}">:</span>`
			return `${day}  ${hours}${divider}${minutes}`
		}
	},
	computed: {
		...mapGetters(['getCurrentWeather', 'getRequestComplete', 'getNasaAPOD', 'getNasaCompleted']),
		currentWeatherInfo: function () {
			return [
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
		},
		currentWeatherTemp: function () {
			return this.getCurrentWeather.temp.toString().slice(0, -3) + '°C';
		},
		currentWeatherDescription: function () {
			return this.getCurrentWeather.weather_description
		},
		currentIcon: function () {
			const date = new Date().getHours()
			const icon = this.getCurrentWeather.weather_icon.slice(0, -1)
			if (date >= 20 || date < 8) {
				return `http://openweathermap.org/img/wn/${icon}n@2x.png`
			} else if (date >= 8) {
				return `http://openweathermap.org/img/wn/${icon}d@2x.png`
			}
		},
		designSwitch: function () {
			const date = new Date().getHours()
			if (date >= 20 || date < 8) {
				return 'background: #a1a5b6'
			} else if (date >= 8) {
				return 'background: #fafac5'
			}
		},
		nasaData: function () {
			return this.getNasaAPOD
		}
	},
}
</script>

<style lang="scss" scoped>
.main__wrapper {
	min-height: calc(100% - 120px);
}

.loader {
	text-align: center;

	img {
		width: 10%;
		height: 10%;
	}
}

.weather {
	margin-top: 3%;
	padding: 3%;
}

.weather__wrapper {
	display: flex;
	align-items: center;
	height: 15vh;
}

.weather__icon {
	border: 1px solid #b0acac;
	width: 13%;
	object-fit: contain;
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

.nasa {
	margin: 3% auto 7% auto;
}

.nasa__data {
	padding: 2%;
	text-align: center;

	img {
		height: 50vh;
		object-fit: contain;
		margin-bottom: 1%;
	}

	:nth-child(2) {
		font-size: 1.2rem;
		margin-bottom: 1%;
	}

	:last-child {
		line-height: 120%;
	}
}
</style>