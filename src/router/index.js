import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Home from "@/views/Home.vue";
import CV from "@/views/CV.vue";
import ProjectLayout from "@/layouts/ProjectLayout.vue";
import Java from "@/views/lectures/JAVA.vue";
import MATLAB from "@/views/lectures/MATLAB.vue";
import Python from "@/views/lectures/Python.vue";
import LLMsLiteratureReview from "@/views/lectures/LLMsLiteratureReview.vue";
import Mistral7B from "@/views/lectures/Mistral7B.vue";
import MachineLearning from "@/views/lectures/MachineLearning.vue";

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {path: '', name: 'Home', component: Home},
            {path: 'CV', name: 'CV', component: CV},
        ],
    },
    {
        path: '/lectures',
        component: ProjectLayout,
        children: [
            {path: 'Java', name: 'Java', component: Java},
            {path: 'MATLAB', name: 'MATLAB', component: MATLAB},
            {path: 'MachineLearning', name: 'MachineLearning', component: MachineLearning},
            {path: 'Mistral-7B', name: 'Mistral7B', component: Mistral7B},
            {path: 'LLMsLiteratureReview', name: 'LLMsLiteratureReview', component: LLMsLiteratureReview},
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // Scroll to the top by default
        return { top: 0 };
    },
});

export default router;
