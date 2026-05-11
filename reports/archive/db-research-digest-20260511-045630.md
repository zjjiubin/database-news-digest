# 数据库研究追踪简报

- 生成时间：2026-05-11 04:56:30 UTC
- 跟踪渠道：arXiv cs.DB、PVLDB、PACMMOD、ICDE、CIDR、DBLP
- 本次纳入论文：81 篇
- 来源分布：arXiv cs.DB 30 篇；PVLDB 22 篇；PACMMOD 17 篇；CIDR 6 篇；ICDE 6 篇

## 本期最值得优先阅读

1. [Breaking the Isolation-Freshness Trade-off: Joint Adaptive Storage Optimization for HTAP Systems](https://www.vldb.org/pvldb/vol19/p1142-ding.pdf)
   - 来源：PVLDB | 日期：2026-02-01 | 评分：29 | 分类：存储引擎、查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，带基准测试，有实验评估，贴近真实场景
   - 摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
2. [Sample-based Distinct Cardinality Estimation for Multiple Attributes in Multi-Dataset Queries](https://www.vldb.org/pvldb/vol19/p1115-mahin.pdf)
   - 来源：PVLDB | 日期：2026-02-01 | 评分：23 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：带基准测试，有实验评估，贴近真实场景，涉及基数估计
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
3. [Decentralized Stratified Sampling for Low-Latency Approximate Geospatial Data Stream Processing in Edge-Cloud Architectures](https://arxiv.org/pdf/2605.01922v1.pdf)
   - 来源：arXiv cs.DB | 日期：2026-05-03 | 评分：21 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，有原型实现，贴近真实场景，关注延迟
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
4. [Robust Predicate Transfer with Dynamic Execution](https://www.vldb.org/pvldb/vol19/p1278-qiao.pdf)
   - 来源：PVLDB | 日期：2026-02-01 | 评分：20 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，带基准测试，涉及连接处理
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
5. [Index-Assisted Stratified Sampling for Online Aggregation](https://arxiv.org/pdf/2604.28141v1.pdf)
   - 来源：arXiv cs.DB | 日期：2026-04-30 | 评分：20 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，贴近真实场景，关注延迟，涉及代价模型
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
6. [Efficient Methods for Accurate Sparse Trajectory Recovery and Map Matching.](https://arxiv.org/pdf/2508.10460)
   - 来源：ICDE | 日期：2025-05-19 | 评分：19 | 分类：存储引擎、查询优化
   - 为什么值得看：有系统实现，有实验评估，贴近真实场景
   - 摘要判断：这篇工作主要落在 存储引擎、查询优化。更偏系统实现。
7. [OOCC: One-Round Optimistic Concurrency Control for Read-Only Disaggregated Transactions.](https://doi.org/10.1109/ICDE65448.2025.00025)
   - 来源：ICDE | 日期：2025-05-19 | 评分：19 | 分类：存储引擎
   - 为什么值得看：贴近真实场景，关注吞吐，关注延迟，涉及解耦式架构
   - 摘要判断：这篇工作主要落在 存储引擎。和真实业务或生产环境关联较强。
8. [Abacus: A Cost-Based Optimizer for Semantic Operator Systems](https://www.vldb.org/pvldb/vol19/p1060-russo.pdf)
   - 来源：PVLDB | 日期：2026-01-01 | 评分：19 | 分类：查询优化
   - 为什么值得看：有系统实现，带基准测试，关注延迟，涉及连接处理
   - 摘要判断：这篇工作主要落在 查询优化。更偏系统实现。

## 存储引擎

- [Breaking the Isolation-Freshness Trade-off: Joint Adaptive Storage Optimization for HTAP Systems](https://www.vldb.org/pvldb/vol19/p1142-ding.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：29 | 作者：Zhenghao Ding, Xinyi Zhang, Chao Zhang, Yishen Sun
  为什么重要：有系统实现，带基准测试，有实验评估，贴近真实场景
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
- [Efficient Methods for Accurate Sparse Trajectory Recovery and Map Matching.](https://arxiv.org/pdf/2508.10460)
  来源：ICDE | 日期：2025-05-19 | 评分：19 | 作者：Wei Tian, Jieming Shi 0001, Man Lung Yiu
  为什么重要：有系统实现，有实验评估，贴近真实场景
  摘要判断：这篇工作主要落在 存储引擎、查询优化。更偏系统实现。
- [OOCC: One-Round Optimistic Concurrency Control for Read-Only Disaggregated Transactions.](https://doi.org/10.1109/ICDE65448.2025.00025)
  来源：ICDE | 日期：2025-05-19 | 评分：19 | 作者：Hao Wu, Mingxing Zhang, Kang Chen, Xia Liao
  为什么重要：贴近真实场景，关注吞吐，关注延迟，涉及解耦式架构
  摘要判断：这篇工作主要落在 存储引擎。和真实业务或生产环境关联较强。
- [SVFusion: A CPU-GPU Co-Processing Architecture for Large-Scale Real-Time Vector Search](https://www.vldb.org/pvldb/vol19/p1074-yang.pdf)
  来源：PVLDB | 日期：2026-01-01 | 评分：18 | 作者：Yuchen Peng, Dingyu Yang, Zhongle Xie, Ji Sun
  为什么重要：有系统实现，关注吞吐，关注延迟
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [Terark-DS: A High-Performance and Storage-Efficient Key-Value Separation Storage Engine on Disaggregated Storage](https://www.vldb.org/pvldb/vol19/p822-zhang.pdf)
  来源：PVLDB | 日期：2026-01-01 | 评分：18 | 作者：Jianshun Zhang, Xun Deng, Fang Wang, Jiaxin Ou
  为什么重要：有系统实现，关注吞吐，涉及解耦式架构
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [HIRE: A Hybrid Learned Index for Robust and Efficient Performance under Mixed Workloads](https://dl.acm.org/doi/pdf/10.1145/3786657)
  来源：PACMMOD | 日期：2026-04-02 | 评分：18 | 作者：Xinyi Zhang, Liang Liang, Anastasia Ailamaki, Jianliang Xu
  为什么重要：贴近真实场景，关注吞吐，关注延迟
  摘要判断：这篇工作主要落在 存储引擎。和真实业务或生产环境关联较强。
- [LiveBin: A Localized and Version-Aware Binned Scan Index](https://dl.acm.org/doi/pdf/10.1145/3786664)
  来源：PACMMOD | 日期：2026-04-02 | 评分：18 | 作者：Zikang Liu, Linwei Li, F. F. Ye, Zhenying He
  为什么重要：有系统实现，有实验评估
  摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
- [LiBox: A Learned Index as an Array to Minimize Last-Mile Search](https://www.vldb.org/pvldb/vol19/p836-jiang.pdf)
  来源：PVLDB | 日期：2026-01-01 | 评分：17 | 作者：Jian Zhou, Luna Wang, Shuaihua Zhao, Chen Zhong
  为什么重要：有实验评估，涉及连接处理
  摘要判断：这篇工作主要落在 存储引擎、查询优化。摘要里有较强实验评估信号。
- [DBAIOps: A Reasoning LLM-Enhanced Database Operation and Maintenance System using Knowledge Graphs](https://www.vldb.org/pvldb/vol19/p1319-zhou.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：17 | 作者：Wei Zhou, Peng Sun, Xuanhe Zhou, Qianglei Zang
  为什么重要：有系统实现，有实验评估，贴近真实场景
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [Health System Scale Semantic Search Across Unstructured Clinical Notes](https://arxiv.org/pdf/2604.25605v1.pdf)
  来源：arXiv cs.DB | 日期：2026-04-28 | 评分：16 | 作者：Faith Wavinya Mutinda, Spandana Makeneni, Anna Lin, Shivaji Dutta
  为什么重要：有系统实现，带基准测试，有实验评估，关注延迟
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。

## 查询优化

- [Breaking the Isolation-Freshness Trade-off: Joint Adaptive Storage Optimization for HTAP Systems](https://www.vldb.org/pvldb/vol19/p1142-ding.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：29 | 作者：Zhenghao Ding, Xinyi Zhang, Chao Zhang, Yishen Sun
  为什么重要：有系统实现，带基准测试，有实验评估，贴近真实场景
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
- [Sample-based Distinct Cardinality Estimation for Multiple Attributes in Multi-Dataset Queries](https://www.vldb.org/pvldb/vol19/p1115-mahin.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：23 | 作者：Mehnaz Tabassum Mahin, Michael J. Carey, Vassilis J. Tsotras
  为什么重要：带基准测试，有实验评估，贴近真实场景，涉及基数估计
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [Decentralized Stratified Sampling for Low-Latency Approximate Geospatial Data Stream Processing in Edge-Cloud Architectures](https://arxiv.org/pdf/2605.01922v1.pdf)
  来源：arXiv cs.DB | 日期：2026-05-03 | 评分：21 | 作者：Isam Mashhour Al Jawarneh, Lorenzo Felletti, Luca Foschini, Paolo Bellavista
  为什么重要：有系统实现，有原型实现，贴近真实场景，关注延迟
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Robust Predicate Transfer with Dynamic Execution](https://www.vldb.org/pvldb/vol19/p1278-qiao.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：20 | 作者：Yiming Qiao, Peter Boncz, Hailong Zhang
  为什么重要：有系统实现，带基准测试，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Index-Assisted Stratified Sampling for Online Aggregation](https://arxiv.org/pdf/2604.28141v1.pdf)
  来源：arXiv cs.DB | 日期：2026-04-30 | 评分：20 | 作者：Yunnan Yu, Zhuoyue Zhao
  为什么重要：有系统实现，贴近真实场景，关注延迟，涉及代价模型
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Efficient Methods for Accurate Sparse Trajectory Recovery and Map Matching.](https://arxiv.org/pdf/2508.10460)
  来源：ICDE | 日期：2025-05-19 | 评分：19 | 作者：Wei Tian, Jieming Shi 0001, Man Lung Yiu
  为什么重要：有系统实现，有实验评估，贴近真实场景
  摘要判断：这篇工作主要落在 存储引擎、查询优化。更偏系统实现。
- [Abacus: A Cost-Based Optimizer for Semantic Operator Systems](https://www.vldb.org/pvldb/vol19/p1060-russo.pdf)
  来源：PVLDB | 日期：2026-01-01 | 评分：19 | 作者：Matthew Russo, Chunwei Liu, Sivaprasad Sudhir, Gerardo Vitagliano
  为什么重要：有系统实现，带基准测试，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化。更偏系统实现。
- [GenRewrite: Query Rewriting via Large Language Models](https://dl.acm.org/doi/pdf/10.1145/3786684)
  来源：PACMMOD | 日期：2026-04-02 | 评分：19 | 作者：Jie Liu, Barzan Mozafari
  为什么重要：有系统实现，带基准测试
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Deep Research is the New Analytics System: Towards Building the Runtime for AI-Driven Analytics.](https://arxiv.org/pdf/2509.02751)
  来源：CIDR | 日期：2025-09-02 | 评分：18 | 作者：Matthew Russo, Tim Kraska
  为什么重要：有系统实现，有原型实现
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [TurboLynx: Schemaless Graph Engine Strikes Back for General-Purpose Analytics](https://www.vldb.org/pvldb/vol19/p1250-han.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：18 | 作者：Taesung Lee, Jaehyun Ha, Byungchul Tak, Wook-Shin Han
  为什么重要：有系统实现，有实验评估
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。

## OLAP / 分析执行

- [Breaking the Isolation-Freshness Trade-off: Joint Adaptive Storage Optimization for HTAP Systems](https://www.vldb.org/pvldb/vol19/p1142-ding.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：29 | 作者：Zhenghao Ding, Xinyi Zhang, Chao Zhang, Yishen Sun
  为什么重要：有系统实现，带基准测试，有实验评估，贴近真实场景
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
- [Sample-based Distinct Cardinality Estimation for Multiple Attributes in Multi-Dataset Queries](https://www.vldb.org/pvldb/vol19/p1115-mahin.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：23 | 作者：Mehnaz Tabassum Mahin, Michael J. Carey, Vassilis J. Tsotras
  为什么重要：带基准测试，有实验评估，贴近真实场景，涉及基数估计
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [Decentralized Stratified Sampling for Low-Latency Approximate Geospatial Data Stream Processing in Edge-Cloud Architectures](https://arxiv.org/pdf/2605.01922v1.pdf)
  来源：arXiv cs.DB | 日期：2026-05-03 | 评分：21 | 作者：Isam Mashhour Al Jawarneh, Lorenzo Felletti, Luca Foschini, Paolo Bellavista
  为什么重要：有系统实现，有原型实现，贴近真实场景，关注延迟
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Robust Predicate Transfer with Dynamic Execution](https://www.vldb.org/pvldb/vol19/p1278-qiao.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：20 | 作者：Yiming Qiao, Peter Boncz, Hailong Zhang
  为什么重要：有系统实现，带基准测试，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Index-Assisted Stratified Sampling for Online Aggregation](https://arxiv.org/pdf/2604.28141v1.pdf)
  来源：arXiv cs.DB | 日期：2026-04-30 | 评分：20 | 作者：Yunnan Yu, Zhuoyue Zhao
  为什么重要：有系统实现，贴近真实场景，关注延迟，涉及代价模型
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [GenRewrite: Query Rewriting via Large Language Models](https://dl.acm.org/doi/pdf/10.1145/3786684)
  来源：PACMMOD | 日期：2026-04-02 | 评分：19 | 作者：Jie Liu, Barzan Mozafari
  为什么重要：有系统实现，带基准测试
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Deep Research is the New Analytics System: Towards Building the Runtime for AI-Driven Analytics.](https://arxiv.org/pdf/2509.02751)
  来源：CIDR | 日期：2025-09-02 | 评分：18 | 作者：Matthew Russo, Tim Kraska
  为什么重要：有系统实现，有原型实现
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [TurboLynx: Schemaless Graph Engine Strikes Back for General-Purpose Analytics](https://www.vldb.org/pvldb/vol19/p1250-han.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：18 | 作者：Taesung Lee, Jaehyun Ha, Byungchul Tak, Wook-Shin Han
  为什么重要：有系统实现，有实验评估
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [LiveBin: A Localized and Version-Aware Binned Scan Index](https://dl.acm.org/doi/pdf/10.1145/3786664)
  来源：PACMMOD | 日期：2026-04-02 | 评分：18 | 作者：Zikang Liu, Linwei Li, F. F. Ye, Zhenying He
  为什么重要：有系统实现，有实验评估
  摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
- [Spark Policy Toolkit: Semantic Contracts and Scalable Execution for Policy Learning in Spark](https://arxiv.org/pdf/2604.25061v1.pdf)
  来源：arXiv cs.DB | 日期：2026-04-27 | 评分：17 | 作者：Zeyu Bai
  为什么重要：有系统实现，有实验评估，关注吞吐，涉及向量化执行
  摘要判断：这篇工作主要落在 OLAP / 分析执行。更偏系统实现。

## 说明

- PVLDB 只输出 VLDB 官方域名链接；若没有可验证 PDF，则回退到对应 volume 的官方 contributions 页面。
- PACMMOD 使用 OpenAlex 摘要，并根据 DOI 生成 ACM PDF 直链。
- ICDE 与 CIDR 通过 DBLP 发现最新届次，再用 DOI/标题到 OpenAlex 补摘要。
- 当前排序依据：来源权重、和你关注方向的相关度、系统实现/实验/生产信号。
- 标题保留原文，报告说明统一使用中文。
