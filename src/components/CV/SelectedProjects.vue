<script setup>

import ProjectBox from "@/components/CV/ProjectBox.vue";

const projects = [
  {
    name: "3D Object Detection and Tracking for Autonomous Driving",
    projectDate: "Fal 2024",
    githubLink: ""
  },
  {
    name: "Semi-Supervised Learning with GANs for Robust Text Classification",
    projectDate: "Spring 2023",
    githubLink: "https://github.com/alinourian/GAN-Bert-DL-2022"
  },
  {
    name: "Attention-Based Filter Designing for Extracting Audio/Image Robust Features",
    projectDate: "Fall 2023",
    githubLink: "https://github.com/alinourian/Adaptive-Torch-KWT/tree/main"
  },
  {
    name: "Breast Cancer Detection with Transfer Learning",
    projectDate: "Fall 2024",
    githubLink: ""
  },
  {
    name: "A Multimodal Sentiment Chat Translation on MSCTD dataset",
    projectDate: "Fall 2022",
    githubLink: "https://github.com/alinourian/Multimodal_Sentiment_Chat_Translation"
  },
  {
    name: "Automatic Image Captioning using Seq2Seq Model on COCO dataset",
    projectDate: "Fall 2022",
    githubLink: "https://github.com/alinourian/DeepLearning-Sharif-Projects/blob/main/HW04/DL2022_HW4_P2_98102527.ipynb"
  },
  {
    name: "Weighted Multitask FCM Clustering for Brain Tissue Segmentation",
    projectDate: "Spring 2023",
    githubLink: "https://github.com/alinourian/WMT-FCM-Clustering/tree/main"
  },
  {
    name: "Active Contour Segmentation for Appendage Detection",
    projectDate: "Spring 2023",
    githubLink: ""
  },
  {
    name: "Superpixel Image Generation using SLIC algorithm",
    projectDate: "Spring 2023",
    githubLink: ""
  },
  {
    name: "Deep Reinforcement Learning for Mastering Atari Games",
    projectDate: "Spring 2022",
    githubLink: ""
  },
  {
    name: "Depth Estimation and 3D Object Detection for Autonomous Driving",
    projectDate: "Summer 2023",
    githubLink: ""
  },
  {
    name: "Dense Deformation Field Estimation for Atlas-Based Segmentation",
    projectDate: "Spring 2023",
    githubLink: ""
  },
  {
    name: "EEG-based Word Detection Interface using Deep Neural Network",
    projectDate: "Spring 2021",
    githubLink: "https://github.com/alinourian/EEG-based_Word_Detection_Interface"
  },
  {
    name: "Recommender System",
    projectDate: "Fall 2022",
    githubLink: "https://github.com/alinourian/Netflix_Recommander_System"
  },
  {
    name: "Circuit Simulator Computer Program (Spice)",
    projectDate: "Spring 2020",
    githubLink: "https://github.com/alinourian/Circuit_Simulation_OOP_PROJ"
  },
];
</script>

<template>
  <div class="section">
    <div class="section-heading">
      <h3>Selected Projects</h3>
    </div>
    <div class="section-body">
      <ProjectBox v-for="(project, index) in projects" :key="index"
          :name=project.name
          :projectDate=project.projectDate
          :github-link=project.githubLink
      />
    </div>
  </div>
</template>

<style scoped>
.section-body {
  padding: 15px 0;
}
</style>