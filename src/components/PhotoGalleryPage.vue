<template>
	<v-main class="container">
		<v-form class="search__form ">
			<v-text-field
				v-model="inputValue"
				label="Посик фотографий"
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
			class="search__previously"
			v-if="!getRequestCollCompleted"
		>
			Рандом фото
		</div>
		<v-container
			class="search__result"
			v-else
		>
			<v-row
				v-for="(photosArray, key) in PhotoCollection"
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
	computed: {
		...mapGetters(['getCollection', 'getRequestCollCompleted']),
		PhotoCollection: function () {
			const result = []
			for (let i = 0; i < this.getCollection.length; i += 3) {
				result.push([
					this.getCollection[i],
					this.getCollection[i + 1],
					this.getCollection[i + 2]
				])
			}
			return result
		}
	},
	methods: {
		...mapActions(['requestColl']),
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

.search__result {
	margin-bottom: 5%;
}

.result__col {
	width: 25vw;
	max-height: 30vh;
	margin-bottom: 5%;
}

.result__card {
	padding: 2%;
	text-align: center;

	img {
		height: 25vh;
		object-fit: contain;
		margin-bottom: 2%;
	}
}
</style>
