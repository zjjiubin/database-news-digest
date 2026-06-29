# 数据库研究追踪简报

- 生成时间：2026-06-29 05:27:54 UTC
- 跟踪渠道：arXiv cs.DB、PVLDB、PACMMOD、ICDE、CIDR、DBLP
- 本次纳入论文：78 篇
- 来源分布：arXiv cs.DB 35 篇；PVLDB 22 篇；PACMMOD 15 篇；CIDR 6 篇

## 本期最值得优先阅读

1. [Breaking the Isolation-Freshness Trade-off: Joint Adaptive Storage Optimization for HTAP Systems](https://www.vldb.org/pvldb/vol19/p1142-ding.pdf)
   - 来源：PVLDB | 日期：2026-02-01 | 评分：29 | 分类：存储引擎、查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，带基准测试，有实验评估，贴近真实场景
   - 摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
2. [Sample-based Distinct Cardinality Estimation for Multiple Attributes in Multi-Dataset Queries](https://www.vldb.org/pvldb/vol19/p1115-mahin.pdf)
   - 来源：PVLDB | 日期：2026-02-01 | 评分：23 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：带基准测试，有实验评估，贴近真实场景，涉及基数估计
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
3. [L3: A GPU-Native Co-Designed Data Format for Learned Lossless Lightweight Compression](https://dl.acm.org/doi/pdf/10.1145/3802078)
   - 来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 分类：存储引擎、查询优化、OLAP / 分析执行
   - 为什么值得看：关注吞吐，关注延迟，涉及压缩
   - 摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。建议先看问题定义和实验设置。
4. [O3-LSM: Maximizing Disaggregated LSM Write Performance via Three-Layer Offloading](https://dl.acm.org/doi/pdf/10.1145/3802093)
   - 来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 分类：存储引擎、查询优化
   - 为什么值得看：有实验评估，关注吞吐，关注延迟，涉及连接处理
   - 摘要判断：这篇工作主要落在 存储引擎、查询优化。摘要里有较强实验评估信号。
5. [REMOP: REmote-Memory-aware OPerator Optimization](https://arxiv.org/pdf/2606.19576v1.pdf)
   - 来源：arXiv cs.DB | 日期：2026-06-17 | 评分：22 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：带基准测试，有实验评估，关注延迟，涉及代价模型
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
6. [SemCEB: A Cardinality Estimation Benchmark for Semantic Operators](https://arxiv.org/pdf/2606.23081v1.pdf)
   - 来源：arXiv cs.DB | 日期：2026-06-22 | 评分：22 | 分类：查询优化
   - 为什么值得看：有系统实现，带基准测试，贴近真实场景，关注延迟
   - 摘要判断：这篇工作主要落在 查询优化。更偏系统实现。
7. [Robust Predicate Transfer with Dynamic Execution](https://www.vldb.org/pvldb/vol19/p1278-qiao.pdf)
   - 来源：PVLDB | 日期：2026-02-01 | 评分：20 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，带基准测试，涉及连接处理
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
8. [Abacus: A Cost-Based Optimizer for Semantic Operator Systems](https://www.vldb.org/pvldb/vol19/p1060-russo.pdf)
   - 来源：PVLDB | 日期：2026-01-01 | 评分：19 | 分类：查询优化
   - 为什么值得看：有系统实现，带基准测试，关注延迟，涉及连接处理
   - 摘要判断：这篇工作主要落在 查询优化。更偏系统实现。

## 存储引擎

- [Breaking the Isolation-Freshness Trade-off: Joint Adaptive Storage Optimization for HTAP Systems](https://www.vldb.org/pvldb/vol19/p1142-ding.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：29 | 作者：Zhenghao Ding, Xinyi Zhang, Chao Zhang, Yishen Sun
  为什么重要：有系统实现，带基准测试，有实验评估，贴近真实场景
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
- [L3: A GPU-Native Co-Designed Data Format for Learned Lossless Lightweight Compression](https://dl.acm.org/doi/pdf/10.1145/3802078)
  来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 作者：Youyang Xia, Feng Zhang, Junda Pan, Yihao Liu
  为什么重要：关注吞吐，关注延迟，涉及压缩
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。建议先看问题定义和实验设置。
- [O3-LSM: Maximizing Disaggregated LSM Write Performance via Three-Layer Offloading](https://dl.acm.org/doi/pdf/10.1145/3802093)
  来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 作者：Qi Lin, Gangqi Huang, Te Guo, Chang Guo
  为什么重要：有实验评估，关注吞吐，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 存储引擎、查询优化。摘要里有较强实验评估信号。
- [Trustworthy Self-Composable Big-Data-as-a-Service: An LLM-Orchestrated Multi-Agent Framework for Automated Data Engineering, AutoML, MLOps Deployment, and Drift-Aware Lifecycle Optimization](https://arxiv.org/pdf/2606.17915v1.pdf)
  来源：arXiv cs.DB | 日期：2026-06-16 | 评分：19 | 作者：Aueaphum Aueawatthanaphisut, Badri Raj Lamichhane
  为什么重要：有系统实现，有原型实现，带基准测试，有实验评估
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [Cache-Aware I/O Cost Modeling for Disk-Based Learned Indexes](https://arxiv.org/pdf/2606.21924v1.pdf)
  来源：arXiv cs.DB | 日期：2026-06-20 | 评分：19 | 作者：Zhanwei Shi, Meng Zhang, Guangyi Zhang, Sha Hu
  为什么重要：带基准测试，关注吞吐，涉及代价模型，涉及连接处理
  摘要判断：这篇工作主要落在 存储引擎、查询优化。摘要里有较强实验评估信号。
- [SVFusion: A CPU-GPU Co-Processing Architecture for Large-Scale Real-Time Vector Search](https://www.vldb.org/pvldb/vol19/p1074-yang.pdf)
  来源：PVLDB | 日期：2026-01-01 | 评分：18 | 作者：Yuchen Peng, Dingyu Yang, Zhongle Xie, Ji Sun
  为什么重要：有系统实现，关注吞吐，关注延迟
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [Terark-DS: A High-Performance and Storage-Efficient Key-Value Separation Storage Engine on Disaggregated Storage](https://www.vldb.org/pvldb/vol19/p822-zhang.pdf)
  来源：PVLDB | 日期：2026-01-01 | 评分：18 | 作者：Jianshun Zhang, Xun Deng, Fang Wang, Jiaxin Ou
  为什么重要：有系统实现，关注吞吐，涉及解耦式架构
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [LiBox: A Learned Index as an Array to Minimize Last-Mile Search](https://www.vldb.org/pvldb/vol19/p836-jiang.pdf)
  来源：PVLDB | 日期：2026-01-01 | 评分：17 | 作者：Jian Zhou, Luna Wang, Shuaihua Zhao, Chen Zhong
  为什么重要：有实验评估，涉及连接处理
  摘要判断：这篇工作主要落在 存储引擎、查询优化。摘要里有较强实验评估信号。
- [DBAIOps: A Reasoning LLM-Enhanced Database Operation and Maintenance System using Knowledge Graphs](https://www.vldb.org/pvldb/vol19/p1319-zhou.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：17 | 作者：Wei Zhou, Peng Sun, Xuanhe Zhou, Qianglei Zang
  为什么重要：有系统实现，有实验评估，贴近真实场景
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [LINE: A Learned Index with Group-Enhanced Leaves and Cache-Optimized Inner Tree](https://dl.acm.org/doi/pdf/10.1145/3802080)
  来源：PACMMOD | 日期：2026-05-18 | 评分：16 | 作者：Leying Chen, Shimin Chen
  为什么重要：贴近真实场景，关注延迟
  摘要判断：这篇工作主要落在 存储引擎。和真实业务或生产环境关联较强。

## 查询优化

- [Breaking the Isolation-Freshness Trade-off: Joint Adaptive Storage Optimization for HTAP Systems](https://www.vldb.org/pvldb/vol19/p1142-ding.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：29 | 作者：Zhenghao Ding, Xinyi Zhang, Chao Zhang, Yishen Sun
  为什么重要：有系统实现，带基准测试，有实验评估，贴近真实场景
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
- [Sample-based Distinct Cardinality Estimation for Multiple Attributes in Multi-Dataset Queries](https://www.vldb.org/pvldb/vol19/p1115-mahin.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：23 | 作者：Mehnaz Tabassum Mahin, Michael J. Carey, Vassilis J. Tsotras
  为什么重要：带基准测试，有实验评估，贴近真实场景，涉及基数估计
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [L3: A GPU-Native Co-Designed Data Format for Learned Lossless Lightweight Compression](https://dl.acm.org/doi/pdf/10.1145/3802078)
  来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 作者：Youyang Xia, Feng Zhang, Junda Pan, Yihao Liu
  为什么重要：关注吞吐，关注延迟，涉及压缩
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。建议先看问题定义和实验设置。
- [O3-LSM: Maximizing Disaggregated LSM Write Performance via Three-Layer Offloading](https://dl.acm.org/doi/pdf/10.1145/3802093)
  来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 作者：Qi Lin, Gangqi Huang, Te Guo, Chang Guo
  为什么重要：有实验评估，关注吞吐，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 存储引擎、查询优化。摘要里有较强实验评估信号。
- [REMOP: REmote-Memory-aware OPerator Optimization](https://arxiv.org/pdf/2606.19576v1.pdf)
  来源：arXiv cs.DB | 日期：2026-06-17 | 评分：22 | 作者：Shiquan Zhang, Yunhao Mao, Yuqiu Zhang, Gengrui Zhang
  为什么重要：带基准测试，有实验评估，关注延迟，涉及代价模型
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [SemCEB: A Cardinality Estimation Benchmark for Semantic Operators](https://arxiv.org/pdf/2606.23081v1.pdf)
  来源：arXiv cs.DB | 日期：2026-06-22 | 评分：22 | 作者：Andreas Zimmerer, Claudius Kühn, Yang Li, Mihail Stoian
  为什么重要：有系统实现，带基准测试，贴近真实场景，关注延迟
  摘要判断：这篇工作主要落在 查询优化。更偏系统实现。
- [Robust Predicate Transfer with Dynamic Execution](https://www.vldb.org/pvldb/vol19/p1278-qiao.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：20 | 作者：Yiming Qiao, Peter Boncz, Hailong Zhang
  为什么重要：有系统实现，带基准测试，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Abacus: A Cost-Based Optimizer for Semantic Operator Systems](https://www.vldb.org/pvldb/vol19/p1060-russo.pdf)
  来源：PVLDB | 日期：2026-01-01 | 评分：19 | 作者：Matthew Russo, Chunwei Liu, Sivaprasad Sudhir, Gerardo Vitagliano
  为什么重要：有系统实现，带基准测试，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化。更偏系统实现。
- [MUFASA: Fast and Accurate Multivariate Time-Series Clustering](https://dl.acm.org/doi/pdf/10.1145/3802090)
  来源：PACMMOD | 日期：2026-05-18 | 评分：19 | 作者：Hui Li, John Paparrizos
  为什么重要：带基准测试，有实验评估，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [Cache-Aware I/O Cost Modeling for Disk-Based Learned Indexes](https://arxiv.org/pdf/2606.21924v1.pdf)
  来源：arXiv cs.DB | 日期：2026-06-20 | 评分：19 | 作者：Zhanwei Shi, Meng Zhang, Guangyi Zhang, Sha Hu
  为什么重要：带基准测试，关注吞吐，涉及代价模型，涉及连接处理
  摘要判断：这篇工作主要落在 存储引擎、查询优化。摘要里有较强实验评估信号。

## OLAP / 分析执行

- [Breaking the Isolation-Freshness Trade-off: Joint Adaptive Storage Optimization for HTAP Systems](https://www.vldb.org/pvldb/vol19/p1142-ding.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：29 | 作者：Zhenghao Ding, Xinyi Zhang, Chao Zhang, Yishen Sun
  为什么重要：有系统实现，带基准测试，有实验评估，贴近真实场景
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
- [Sample-based Distinct Cardinality Estimation for Multiple Attributes in Multi-Dataset Queries](https://www.vldb.org/pvldb/vol19/p1115-mahin.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：23 | 作者：Mehnaz Tabassum Mahin, Michael J. Carey, Vassilis J. Tsotras
  为什么重要：带基准测试，有实验评估，贴近真实场景，涉及基数估计
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [L3: A GPU-Native Co-Designed Data Format for Learned Lossless Lightweight Compression](https://dl.acm.org/doi/pdf/10.1145/3802078)
  来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 作者：Youyang Xia, Feng Zhang, Junda Pan, Yihao Liu
  为什么重要：关注吞吐，关注延迟，涉及压缩
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。建议先看问题定义和实验设置。
- [REMOP: REmote-Memory-aware OPerator Optimization](https://arxiv.org/pdf/2606.19576v1.pdf)
  来源：arXiv cs.DB | 日期：2026-06-17 | 评分：22 | 作者：Shiquan Zhang, Yunhao Mao, Yuqiu Zhang, Gengrui Zhang
  为什么重要：带基准测试，有实验评估，关注延迟，涉及代价模型
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [Robust Predicate Transfer with Dynamic Execution](https://www.vldb.org/pvldb/vol19/p1278-qiao.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：20 | 作者：Yiming Qiao, Peter Boncz, Hailong Zhang
  为什么重要：有系统实现，带基准测试，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [MUFASA: Fast and Accurate Multivariate Time-Series Clustering](https://dl.acm.org/doi/pdf/10.1145/3802090)
  来源：PACMMOD | 日期：2026-05-18 | 评分：19 | 作者：Hui Li, John Paparrizos
  为什么重要：带基准测试，有实验评估，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [Deep Research is the New Analytics System: Towards Building the Runtime for AI-Driven Analytics.](https://arxiv.org/pdf/2509.02751)
  来源：CIDR | 日期：2025-09-02 | 评分：18 | 作者：Matthew Russo, Tim Kraska
  为什么重要：有系统实现，有原型实现
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [TurboLynx: Schemaless Graph Engine Strikes Back for General-Purpose Analytics](https://www.vldb.org/pvldb/vol19/p1250-han.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：18 | 作者：Taesung Lee, Jaehyun Ha, Byungchul Tak, Wook-Shin Han
  为什么重要：有系统实现，有实验评估
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Factorized and Vectorized Execution: Optimizing Analytical and Semantic Queries over Relations](https://dl.acm.org/doi/pdf/10.1145/3802055)
  来源：PACMMOD | 日期：2026-05-18 | 评分：18 | 作者：Sunny Yasser, Anas Dorbani, Amine Mhedhbi
  为什么重要：涉及向量化执行，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。适合关注分析执行链路。
- [Translytical Processing via DB-OS Co-designed Buffer: Cross-Engine Isolation and Tunable Update Visibility for HTAP](https://dl.acm.org/doi/pdf/10.1145/3802123)
  来源：PACMMOD | 日期：2026-05-18 | 评分：18 | 作者：Dongkwang ‍Kim, Keonwook Park, Cheolmin Choi, Hyungsoo Jung
  为什么重要：有系统实现，关注延迟，涉及向量化执行
  摘要判断：这篇工作主要落在 OLAP / 分析执行。更偏系统实现。

## 说明

- PVLDB 只输出 VLDB 官方域名链接；若没有可验证 PDF，则回退到对应 volume 的官方 contributions 页面。
- PACMMOD 使用 OpenAlex 摘要，并根据 DOI 生成 ACM PDF 直链。
- ICDE 与 CIDR 通过 DBLP 发现最新届次，再用 DOI/标题到 OpenAlex 补摘要。
- 当前排序依据：来源权重、和你关注方向的相关度、系统实现/实验/生产信号。
- 标题保留原文，报告说明统一使用中文。
