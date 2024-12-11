<template>
  <div class="table-container">
    <div class="controls">
      <input
          v-model="searchQuery"
          placeholder="Search..."
          class="search-bar"
          @input="filterTable"
      />
    </div>
    <table class="professional-table">
      <thead>
      <tr>
        <th @click="sortTable('Date')">Date</th>
        <th @click="sortTable('keywords')">Keywords</th>
        <th @click="sortTable('Institute')">Institute</th>
        <th @click="sortTable('Paper')">Paper</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, index) in paginatedData" :key="index">
        <td class="date-td">{{ row.Date }}</td>
        <td class="keyword-td">{{ row.keywords }}</td>
        <td class="institute-td">{{ row.Institute }}</td>
        <td>{{ row.Paper }}</td>
      </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { Date: '2017-06', keywords: 'Transformers', Institute: 'Google', Paper: 'Attention Is All You Need', },
        { Date: '2018-06', keywords: 'GPT 1.0', Institute: 'OpenAI', Paper: 'Improving Language Understanding by Generative Pre-Training', },
        { Date: '2018-10', keywords: 'BERT', Institute: 'Google', Paper: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding', },
        { Date: '2019-02', keywords: 'GPT 2.0', Institute: 'OpenAI', Paper: 'Language Models are Unsupervised Multitask Learners', },
        { Date: '2019-01', keywords: 'Transformer-XL', Institute: 'Google', Paper: 'Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context', },
        { Date: '2019-05', keywords: 'UNILM', Institute: 'Microsoft', Paper: 'Unified Language Model Pre-training for Natural Language Understanding and Generation', },
        { Date: '2019-03', keywords: 'ERNIE', Institute: null, Paper: 'ERNIE: Enhanced Language Representation with Informative Entities', },
        { Date: '2019-07', keywords: 'ERNIE 2.0', Institute: null, Paper: 'ERNIE 2.0: A Continual Pre-training Framework for Language Understanding', },
        { Date: '2019-07', keywords: 'CTRL', Institute: 'Salesforce', Paper: 'CTRL: A conditional transformer language model for controllable generation', },
        { Date: '2019-07', keywords: 'RoBERTa', Institute: 'Facebook AI', Paper: 'RoBERTa: A Robustly Optimized BERT Pretraining Approach', },
        { Date: '2019-09', keywords: 'ALBERT', Institute: 'Google', Paper: 'ALBERT: A LITE BERT FOR SELF-SUPERVISED LEARNING OF LANGUAGE REPRESENTATIONS', },
        { Date: '2019-09', keywords: 'Megatron-LM', Institute: 'NVIDIA', Paper: 'Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism', },
        { Date: '2019-10', keywords: 'T5', Institute: 'Google', Paper: 'Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer', },
        { Date: '2019-10', keywords: 'ZeRO', Institute: 'Microsoft', Paper: 'ZeRO: Memory Optimizations Toward Training Trillion Parameter Models', },
        { Date: '2019-10', keywords: 'BART', Institute: 'Facebook AI', Paper: 'BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension', },
        { Date: '2019-10', keywords: 'XLNet', Institute: null, Paper: 'XLNet: Generalized Autoregressive Pretraining for Language Understanding', },
        { Date: '2019-11', keywords: 'ELECTRA', Institute: 'Standford', Paper: 'ELECTRA: PRE-TRAINING TEXT ENCODERS AS DISCRIMINATORS RATHER THAN GENERATORS', },
        { Date: '2020-01', keywords: 'Scaling Law', Institute: 'OpenAI', Paper: 'Scaling Laws for Neural Language Models', },
        { Date: '2020-03', keywords: 'BARD', Institute: 'Google', Paper: 'BARD: A structured technique for group elicitation of Bayesian networks to support analytic reasoning', },
        { Date: '2020-05', keywords: 'GPT 3.0', Institute: 'OpenAI', Paper: 'Language models are few-shot learners', },
        { Date: '2021-01', keywords: 'Switch Transformers', Institute: 'Google', Paper: 'Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity', },
        { Date: '2021-02', keywords: null, Institute: null, Paper: 'Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm', },
        { Date: '2021-08', keywords: 'Codex', Institute: 'OpenAI', Paper: 'Evaluating Large Language Models Trained on Code', },
        { Date: '2021-08', keywords: 'Foundation Models', Institute: 'Stanford', Paper: 'On the Opportunities and Risks of Foundation Models', },
        { Date: '2021-09', keywords: 'FLAN', Institute: 'Google', Paper: 'Finetuned Language Models are Zero-Shot Learners', },
        { Date: '2021-10', keywords: 'T0', Institute: 'HuggingFace et al.', Paper: 'Multitask Prompted Training Enables Zero-Shot Task Generalization', },
        { Date: '2021-12', keywords: 'GLaM', Institute: 'Google', Paper: 'GLaM: Efficient Scaling of Language Models with Mixture-of-Experts', },
        { Date: '2021-12', keywords: 'WebGPT', Institute: 'OpenAI', Paper: 'WebGPT: Browser-assisted question-answering with human feedback', },
        { Date: '2021-12', keywords: 'Retro', Institute: 'DeepMind', Paper: 'Improving language models by retrieving from trillions of tokens', },
        { Date: '2021-12', keywords: 'Gopher', Institute: 'DeepMind', Paper: 'Scaling Language Models: Methods, Analysis & Insights from Training Gopher', },
        { Date: '2022-01', keywords: 'COT', Institute: 'Google', Paper: 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models', },
        { Date: '2022-01', keywords: 'LaMDA', Institute: 'Google', Paper: 'LaMDA: Language Models for Dialog Applications', },
        { Date: '2022-01', keywords: 'Minerva', Institute: 'Google', Paper: 'Solving Quantitative Reasoning Problems with Language Models', },
        { Date: '2022-01', keywords: 'Megatron-Turing NLG', Institute: 'Microsoft&NVIDIA', Paper: 'Using DeepSpeed and Megatron to Train Megatron-Turing NLG 530B, A Large-Scale Generative Language Model', },
        { Date: '2022-01', keywords: 'AlphaCode', Institute: 'DeepMind', Paper: 'Competition-Level Code Generation with AlphaCode', },
        { Date: '2022-03', keywords: 'InstructGPT', Institute: 'OpenAI', Paper: 'Training language models to follow instructions with human feedback', },
        { Date: '2022-03', keywords: 'CodeGen', Institute: 'Salesforce', Paper: 'CodeGen: An Open Large Language Model for Code with Multi-Turn Program Synthesis', },
        { Date: '2022-04', keywords: 'PaLM', Institute: 'Google', Paper: 'PaLM: Scaling Language Modeling with Pathways', },
        { Date: '2022-04', keywords: 'Chinchilla', Institute: 'DeepMind', Paper: 'An empirical analysis of compute-optimal large language model training', },
        { Date: '2022-05', keywords: 'OPT', Institute: 'Meta', Paper: 'OPT: Open Pre-trained Transformer Language Models', },
        { Date: '2022-05', keywords: 'UL2', Institute: 'Google', Paper: 'Unifying Language Learning Paradigms', },
        { Date: '2022-06', keywords: 'Emergent Abilities', Institute: 'Google', Paper: 'Emergent Abilities of Large Language Models', },
        { Date: '2022-06', keywords: 'BIG-bench', Institute: 'Google', Paper: 'Beyond the Imitation Game: Quantifying and extrapolating the capabilities of language models', },
        { Date: '2022-06', keywords: 'METALM', Institute: 'Microsoft', Paper: 'Language Models are General-Purpose Interfaces', },
        { Date: '2022-06', keywords: null, Institute: null, Paper: 'A Hybrid Deep Learning Approach for Stock Price Prediction', },
        { Date: '2022-08', keywords: 'BlenderBot 3', Institute: 'Meta', Paper: 'BlenderBot 3: A deployed conversational agent that continually learns to responsibly engage', },
        { Date: '2022-08', keywords: null, Institute: null, Paper: 'PromptCast: A New Prompt-based Learning Paradigm for Time Series Forecasting', },
        { Date: '2022-08', keywords: 'AlexaTM', Institute: 'Amazon', Paper: 'AlexaTM 20B: Few-Shot Learning Using a Large-Scale Multilingual Seq2Seq Model', },
        { Date: '2022-09', keywords: 'Sparrow', Institute: 'DeepMind', Paper: 'Improving alignment of dialogue agents via targeted human judgements', },
        { Date: '2022-09', keywords: null, Institute: null, Paper: 'Leveraging Language Foundation Models for Human Mobility Forecasting', },
        { Date: '2022-10', keywords: 'Flan-T5/PaLM', Institute: 'Google', Paper: 'Scaling Instruction-Finetuned Language Models', },
        { Date: '2022-10', keywords: 'GLM-130B', Institute: 'Tsinghua', Paper: 'GLM-130B: An Open Bilingual Pre-trained Model', },
        { Date: '2022-11', keywords: 'HELM', Institute: 'Stanford', Paper: 'Holistic Evaluation of Language Models', },
        { Date: '2022-11', keywords: 'BLOOM', Institute: 'BigScience', Paper: 'BLOOM: A 176B-Parameter Open-Access Multilingual Language Model', },
        { Date: '2022-11', keywords: 'Galactica', Institute: 'Meta', Paper: 'Galactica: A Large Language Model for Science', },
        { Date: '2022-11', keywords: 'FlashAttention', Institute: 'Stanford', Paper: 'FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness', },
        { Date: '2022-12', keywords: 'OPT-IML', Institute: 'Meta', Paper: 'OPT-IML: Scaling Language Model Instruction Meta Learning through the Lens of Generalization', },
        { Date: '2022-12', keywords: null, Institute: null, Paper: 'Large Language Models Encode Clinical Knowledge', },
        { Date: '2023-01', keywords: 'Flan 2022 Collection', Institute: 'Google', Paper: 'The Flan Collection: Designing Data and Methods for Effective Instruction Tuning', },
        { Date: '2023-02', keywords: 'LLaMA', Institute: 'Meta', Paper: 'LLaMA: Open and Efficient Foundation Language Models', },
        { Date: '2023-02', keywords: 'Kosmos-1', Institute: 'Microsoft', Paper: 'Language Is Not All You Need: Aligning Perception with Language Models', },
        { Date: '2023-03', keywords: 'PaLM-E', Institute: 'Google', Paper: 'PaLM-E: An Embodied Multimodal Language Model', },
        { Date: '2023-03', keywords: 'GPT 4', Institute: 'OpenAI', Paper: 'GPT-4 Technical Report', },
        { Date: '2023-04', keywords: 'Pythia', Institute: 'EleutherAI et al.', Paper: 'Pythia: A Suite for Analyzing Large Language Models Across Training and Scaling', },
        { Date: '2023-05', keywords: 'Dromedary', Institute: 'CMU et al.', Paper: 'Principle-Driven Self-Alignment of Language Models from Scratch with Minimal Human Supervision', },
        { Date: '2023-05', keywords: 'PaLM 2', Institute: 'Google', Paper: 'PaLM 2 Technical Report', },
        { Date: '2023-05', keywords: 'RWKV', Institute: 'Bo Peng', Paper: 'RWKV: Reinventing RNNs for the Transformer Era', },
        { Date: '2023-05', keywords: 'DPO', Institute: 'Stanford', Paper: 'Direct Preference Optimization: Your Language Model is Secretly a Reward Model', },
        { Date: '2023-07', keywords: 'LLaMA 2', Institute: 'Meta', Paper: 'Llama 2: Open Foundation and Fine-Tuned Chat Models', },
        { Date: '2023-09', keywords: null, Institute: null, Paper: 'A Survey of Large Language Models', },
      ],
      searchQuery: "",
      currentPage: 1,
      rowsPerPage: 10,
      sortColumn: "",
      sortAsc: true
    };
  },
  computed: {
    filteredData() {
      if (!this.searchQuery) {
        return this.tableData;
      }
      const query = this.searchQuery.toLowerCase();
      return this.tableData.filter(row =>
          Object.values(row).some(value =>
              String(value).toLowerCase().includes(query)
          )
      );
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.rowsPerPage;
      return this.filteredData.slice(start, start + this.rowsPerPage);
    },
    totalPages() {
      return Math.ceil(this.filteredData.length / this.rowsPerPage);
    }
  },
  methods: {
    sortTable(column) {
      if (this.sortColumn === column) {
        this.sortAsc = !this.sortAsc;
      } else {
        this.sortAsc = true;
      }
      this.sortColumn = column;
      this.tableData.sort((a, b) => {
        if (a[column] < b[column]) return this.sortAsc ? -1 : 1;
        if (a[column] > b[column]) return this.sortAsc ? 1 : -1;
        return 0;
      });
    },
    filterTable() {
      this.currentPage = 1; // Reset to first page after filtering
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  },
};
</script>

<style scoped>
.table-container {
  max-width: 100%;
  width: 100%;
  margin: auto;
  font-family: Arial, sans-serif;
  overflow: auto;
}

.controls {
  margin-bottom: 10px;
}

.search-bar {
  padding: 8px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.professional-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.professional-table th, .professional-table td {
  padding: 12px 15px;
  text-align: left;
  border: 1px solid #ddd;
}

.date-td {
  min-width: 90px;
}

.keyword-td {
  min-width: 100px;
}

.institute-td {
  min-width: 90px;
}

.professional-table th {
  cursor: pointer;
  background-color: #f4f4f4;
}

.professional-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.pagination button {
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

@media screen and (max-width: 500px) {
  .table-container {
    padding: 5px;
  }
}
</style>
