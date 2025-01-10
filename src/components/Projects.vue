<script setup>

import Card from "@/components/ProjectCard.vue";
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
    githubLink: "https://github.com/alinourian/GAN-Bert-DL-2022",
    image: "/images/projects/GAN-BERT.png"
  },
  {
    name: "Attention-Based Filter Designing for Extracting Audio/Image Robust Features",
    projectDate: "Fall 2023",
    githubLink: "https://github.com/alinourian/Adaptive-Torch-KWT/tree/main",
    image: "/images/projects/ABFD.png"
  },
  {
    name: "Breast Cancer Detection with Transfer Learning",
    projectDate: "Fall 2024",
    githubLink: "",
    image: "/images/projects/breast-cancer-detection.png"
  },
  {
    name: "A Multimodal Sentiment Chat Translation on MSCTD dataset",
    projectDate: "Fall 2022",
    githubLink: "https://github.com/alinourian/Multimodal_Sentiment_Chat_Translation",
    image: "/images/projects/multimodal_Sentiment_Chat_Translation.png"
  },
  {
    name: "Automatic Image Captioning using Seq2Seq Model on COCO dataset",
    projectDate: "Fall 2022",
    githubLink: "https://github.com/alinourian/DeepLearning-Sharif-Projects/blob/main/HW04/DL2022_HW4_P2_98102527.ipynb",
    image: "/images/projects/Automatic_image_captioning.png"
  },
  {
    name: "Weighted Multitask FCM Clustering for Brain Tissue Segmentation",
    projectDate: "Spring 2023",
    githubLink: "https://github.com/alinourian/WMT-FCM-Clustering/tree/main",
    image: "/images/projects/WMTFCM.png"
  },
  {
    name: "Active Contour Segmentation for Appendage Detection",
    projectDate: "Spring 2023",
    githubLink: "",
    image: "/images/projects/active-contour.png"
  },
  {
    name: "Superpixel Image Generation using SLIC algorithm",
    projectDate: "Spring 2023",
    githubLink: "",
    image: "/images/projects/superpixel.png"
  },
  {
    name: "Deep Reinforcement Learning for Mastering Atari Games",
    projectDate: "Spring 2022",
    githubLink: "",
    image: "/images/projects/DDQN.png"
  },
  {
    name: "Depth Estimation and 3D Object Detection for Autonomous Driving",
    projectDate: "Summer 2023",
    githubLink: "",
    image: "/images/projects/DepthObjDetection.png",
  },
  {
    name: "Dense Deformation Field Estimation for Atlas-Based Segmentation",
    projectDate: "Spring 2023",
    githubLink: "",
    image: "/images/projects/Atlas.png"
  },
  {
    name: "EEG-based Word Detection Interface using Deep Neural Network",
    projectDate: "Spring 2021",
    githubLink: "https://github.com/alinourian/EEG-based_Word_Detection_Interface",
    image: "/images/projects/WordDetection.png"
  },
  {
    name: "Recommender System",
    projectDate: "Fall 2022",
    githubLink: "https://github.com/alinourian/Netflix_Recommander_System"
  },
  {
    name: "Circuit Simulator Computer Program (Spice)",
    projectDate: "Spring 2020",
    githubLink: "https://github.com/alinourian/Circuit_Simulation_OOP_PROJ",
    image: "/images/projects/CircuitSpice.png"
  },
];
</script>

<template>
  <div class="section">
    <div class="section-heading">
      <h2>SELECTED PROJECTS</h2>
    </div>
    <div class="section-body">
      <div class="projects">
        <Card v-for="(project, index) in projects" :key="index"
            :title=project.name
            :dates="[project.projectDate]"
            :link=project.githubLink
            :poster=project.image
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 10px 0;
}


@media screen and (max-width: 900px) {
  .projects {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>