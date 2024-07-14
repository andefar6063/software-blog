<script setup lang="ts">
import { ref, computed } from "vue";
import { testQuestions } from "../data/testQuestions";

const questions = ref(testQuestions);
const currentQuestionIndex = ref(0);
const userAnswers = ref(0);
const showResult = ref(false);

const currentQuestion = computed(() => {
  const questionSet = questions.value[currentQuestionIndex.value + 1];
  return questionSet ? questionSet[0] : null;
});

const handleAnswer = (answer: string) => {
  if (currentQuestion.value) {
    if (answer === currentQuestion.value.correctAnswer) {
      userAnswers.value++;
    }

    if (currentQuestionIndex.value < Object.keys(questions.value).length - 1) {
      currentQuestionIndex.value++;
    } else {
      showResult.value = true;
    }
  }
};

const resetQuiz = () => {
  currentQuestionIndex.value = 0;
  userAnswers.value = 0;
  showResult.value = false;
};
</script>

<template>
  <div class="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl">
      <h1
        class="mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-4xl font-bold text-transparent"
      >
        Test Your Knowledge
      </h1>
      <div class="text-white/90">
        <div v-if="!showResult">
          <div v-if="currentQuestion" class="space-y-4">
            <p class="text-lg">{{ currentQuestion.question }}</p>
            <pre
              v-if="currentQuestion.code !== 'none'"
              class="overflow-x-auto rounded-lg bg-gray-800 p-4"
            >
              <code>{{ currentQuestion.code }}</code>
            </pre>
            <div class="space-y-2">
              <button
                v-for="answer in currentQuestion.answers"
                :key="answer"
                @click="handleAnswer(answer)"
                class="w-full rounded-lg border border-primary/20 bg-primary/10 p-2 text-left transition-colors hover:bg-primary/20"
              >
                {{ answer }}
              </button>
            </div>
          </div>
        </div>
        <div v-else class="text-center">
          <h2 class="mb-4 text-2xl font-semibold text-secondary">
            Quiz Results
          </h2>
          <p class="text-lg">
            You got {{ userAnswers }} out of
            {{ Object.keys(questions).length }} questions correct.
          </p>
          <button
            @click="resetQuiz"
            class="mt-4 rounded-lg bg-secondary px-4 py-2 text-white transition-colors hover:bg-opacity-80"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
