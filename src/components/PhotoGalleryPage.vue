<template>
	<v-main class="container">
		<v-form class="search__form ">
			<v-text-field
				v-model="inputValue"
				label="Посик фотографий на unsplash.com"
				@keydown.enter.prevent="requestCollection"
				class="search__input"
			></v-text-field>
			<div class="search__btn">
				<v-btn @click="requestCollection">
					Поиск
				</v-btn>
			</div>
		</v-form>
		<div
			class="search__loader"
			v-if="!getRandomPhotoCompleted"
		>
			<img :src="require('@/assets/loader.gif')" alt="#">
		</div>
		<div
			class="search__previously"
			v-else-if="!getRequestCollCompleted"
		>
			<v-card class="previously__card">
				<p>Случайная фотография c unsplash.com</p>
				<div>
					<img :src="randomPhoto.photo" alt="#">
				</div>
				<p>Автор: {{ randomPhoto.name }}</p>
				<p>Название: {{ randomPhoto.title }}</p>
			</v-card>
		</div>
		<v-container
			class="search__result"
			v-else
		>
			<v-row
				v-for="(photosArray, key) in photoCollection"
				:key="key"
			>
				<v-col
					class="result__col"
					v-for="(photosData, key) in photosArray"
					:key="key"
				>
					<v-card class="result__card">
						<div>
							<img :src="photosData.photo" alt="#">
						</div>
						<p>Автор: {{ photosData.name }}</p>
						<p>Название: {{ photosData.title }}</p>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-main>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
	name: "PhotoGalleryPage",
	data() {
		return {
			inputValue: '',
		}
	},
	created() {
		this.requestRandomPhoto()
	},
	computed: {
		...mapGetters(['getCollection', 'getRequestCollCompleted', 'getRandomPhoto', 'getRandomPhotoCompleted']),
		photoCollection: function () {
			const result = []
			for (let i = 0; i < this.getCollection.length; i += 3) {
				result.push([
					this.getCollection[i],
					this.getCollection[i + 1],
					this.getCollection[i + 2]
				])
			}
			return result
		},
		randomPhoto() {
			return this.getRandomPhoto;
		}
	},
	methods: {
		...mapActions(['requestColl', 'requestRandomPhoto']),
		async requestCollection() {
			if (this.inputValue.trim()) {
				await this.requestColl(this.inputValue)
			}
			this.inputValue = ''
		}
	}
}
</script>

<style lang="scss" scoped>
.search__form {
	margin-top: 5%;
}

.search__btn {
	display: flex;
	justify-content: center;
	margin-bottom: 5%;
}

.search__loader {
	text-align: center;

	img {
		width: 10%;
		height: 10%;
	}
}

.search__previously {
	margin-bottom: 5%;
	text-align: center;
}

.previously__card {
	width: 30vw;
	height: 40vh;
	padding: 2%;
	margin: 0 auto;

	img {
		height: 30vh;
		object-fit: contain;
		margin: 2% 0;
	}
}

.search__result {
	margin-bottom: 5%;
}

.result__col {
	width: 25vw;
	height: 30vh;
	margin-bottom: 5%;
}

.result__card {
	height: 32vh;
	padding: 2%;
	text-align: center;

	img {
		height: 25vh;
		width: 100%;
		object-fit: contain;
		margin-bottom: 2%;
	}
}
</style>
