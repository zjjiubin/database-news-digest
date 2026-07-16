# 数据库研究追踪简报

- 生成时间：2026-07-16 03:57:56 UTC
- 跟踪渠道：arXiv cs.DB、PVLDB、PACMMOD、ICDE、CIDR、DBLP
- 本次纳入论文：86 篇
- 来源分布：arXiv cs.DB 45 篇；PVLDB 20 篇；PACMMOD 15 篇；CIDR 6 篇

## 本期最值得优先阅读

1. [Breaking the Isolation-Freshness Trade-off: Joint Adaptive Storage Optimization for HTAP Systems](https://www.vldb.org/pvldb/vol19/p1142-ding.pdf)
   - 来源：PVLDB | 日期：2026-02-01 | 评分：29 | 分类：存储引擎、查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，带基准测试，有实验评估，贴近真实场景
   - 摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
2. [AQD: Online Adaptive Query Dispatcher for HTAP Databases](https://www.vldb.org/pvldb/vol19/p1586-wu.pdf)
   - 来源：PVLDB | 日期：2026-03-01 | 评分：26 | 分类：存储引擎、查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，带基准测试，贴近真实场景，关注延迟
   - 摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
3. [Sample-based Distinct Cardinality Estimation for Multiple Attributes in Multi-Dataset Queries](https://www.vldb.org/pvldb/vol19/p1115-mahin.pdf)
   - 来源：PVLDB | 日期：2026-02-01 | 评分：23 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：带基准测试，有实验评估，贴近真实场景，涉及基数估计
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
4. [L3: A GPU-Native Co-Designed Data Format for Learned Lossless Lightweight Compression](https://dl.acm.org/doi/pdf/10.1145/3802078)
   - 来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 分类：存储引擎、查询优化、OLAP / 分析执行
   - 为什么值得看：关注吞吐，关注延迟，涉及压缩
   - 摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。建议先看问题定义和实验设置。
5. [O3-LSM: Maximizing Disaggregated LSM Write Performance via Three-Layer Offloading](https://dl.acm.org/doi/pdf/10.1145/3802093)
   - 来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 分类：存储引擎、查询优化
   - 为什么值得看：有实验评估，关注吞吐，关注延迟，涉及连接处理
   - 摘要判断：这篇工作主要落在 存储引擎、查询优化。摘要里有较强实验评估信号。
6. [How to Write to SSDs](https://www.vldb.org/pvldb/vol19/p1469-lee.pdf)
   - 来源：PVLDB | 日期：2026-03-01 | 评分：21 | 分类：存储引擎、OLAP / 分析执行
   - 为什么值得看：有系统实现，带基准测试，关注吞吐
   - 摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
7. [TSAI-MetaFraud: A Benchmark Dataset for Financial Fraud Transaction and Behavioral Risk Detection in Metaverse Ecosystems](https://arxiv.org/pdf/2607.09528v1.pdf)
   - 来源：arXiv cs.DB | 日期：2026-07-10 | 评分：21 | 分类：存储引擎、查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，带基准测试，有实验评估，涉及连接处理
   - 摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
8. [PRomop: A Decision-Ready Longitudinal Patient Health Record on the OMOP Common Data Model](https://arxiv.org/pdf/2607.13947v1.pdf)
   - 来源：arXiv cs.DB | 日期：2026-07-15 | 评分：21 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，带基准测试，有实验评估，带生产环境信号
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。

## 存储引擎

- [Breaking the Isolation-Freshness Trade-off: Joint Adaptive Storage Optimization for HTAP Systems](https://www.vldb.org/pvldb/vol19/p1142-ding.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：29 | 作者：Zhenghao Ding, Xinyi Zhang, Chao Zhang, Yishen Sun
  为什么重要：有系统实现，带基准测试，有实验评估，贴近真实场景
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
- [AQD: Online Adaptive Query Dispatcher for HTAP Databases](https://www.vldb.org/pvldb/vol19/p1586-wu.pdf)
  来源：PVLDB | 日期：2026-03-01 | 评分：26 | 作者：Yang Wu, Tongliang Li, Xuanhe Zhou, Jianying Wang
  为什么重要：有系统实现，带基准测试，贴近真实场景，关注延迟
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
- [L3: A GPU-Native Co-Designed Data Format for Learned Lossless Lightweight Compression](https://dl.acm.org/doi/pdf/10.1145/3802078)
  来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 作者：Youyang Xia, Feng Zhang, Junda Pan, Yihao Liu
  为什么重要：关注吞吐，关注延迟，涉及压缩
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。建议先看问题定义和实验设置。
- [O3-LSM: Maximizing Disaggregated LSM Write Performance via Three-Layer Offloading](https://dl.acm.org/doi/pdf/10.1145/3802093)
  来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 作者：Qi Lin, Gangqi Huang, Te Guo, Chang Guo
  为什么重要：有实验评估，关注吞吐，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 存储引擎、查询优化。摘要里有较强实验评估信号。
- [How to Write to SSDs](https://www.vldb.org/pvldb/vol19/p1469-lee.pdf)
  来源：PVLDB | 日期：2026-03-01 | 评分：21 | 作者：Bohyun Lee, Tobias Ziegler, Viktor Leis
  为什么重要：有系统实现，带基准测试，关注吞吐
  摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
- [TSAI-MetaFraud: A Benchmark Dataset for Financial Fraud Transaction and Behavioral Risk Detection in Metaverse Ecosystems](https://arxiv.org/pdf/2607.09528v1.pdf)
  来源：arXiv cs.DB | 日期：2026-07-10 | 评分：21 | 作者：Refat Ishrak Hemel, Ehsan Hallaji, Roozbeh Razavi-Far
  为什么重要：有系统实现，带基准测试，有实验评估，涉及连接处理
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
- [DBAIOps: A Reasoning LLM-Enhanced Database Operation and Maintenance System using Knowledge Graphs](https://www.vldb.org/pvldb/vol19/p1319-zhou.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：17 | 作者：Wei Zhou, Peng Sun, Xuanhe Zhou, Qianglei Zang
  为什么重要：有系统实现，有实验评估，贴近真实场景
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [LINE: A Learned Index with Group-Enhanced Leaves and Cache-Optimized Inner Tree](https://dl.acm.org/doi/pdf/10.1145/3802080)
  来源：PACMMOD | 日期：2026-05-18 | 评分：16 | 作者：Leying Chen, Shimin Chen
  为什么重要：贴近真实场景，关注延迟
  摘要判断：这篇工作主要落在 存储引擎。和真实业务或生产环境关联较强。
- [Cassandra: Consensus with Partial Progress via Robust Partitionable View Synchronization](https://arxiv.org/pdf/2607.02856v1.pdf)
  来源：arXiv cs.DB | 日期：2026-07-03 | 评分：16 | 作者：Shaokang Xie, Dakai Kang, Junchao Chen, Suyash Gupta
  为什么重要：有系统实现，有实验评估，关注吞吐，关注延迟
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [Pisco: An Isolation Bug Case Reduction and Deduplication Framework](https://www.vldb.org/pvldb/vol19/p1413-weng.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：15 | 作者：Siyang Weng, Hongyu Yang, Zirui Hu, Rong Zhang
  为什么重要：带生产环境信号
  摘要判断：这篇工作主要落在 存储引擎。和真实业务或生产环境关联较强。

## 查询优化

- [Breaking the Isolation-Freshness Trade-off: Joint Adaptive Storage Optimization for HTAP Systems](https://www.vldb.org/pvldb/vol19/p1142-ding.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：29 | 作者：Zhenghao Ding, Xinyi Zhang, Chao Zhang, Yishen Sun
  为什么重要：有系统实现，带基准测试，有实验评估，贴近真实场景
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
- [AQD: Online Adaptive Query Dispatcher for HTAP Databases](https://www.vldb.org/pvldb/vol19/p1586-wu.pdf)
  来源：PVLDB | 日期：2026-03-01 | 评分：26 | 作者：Yang Wu, Tongliang Li, Xuanhe Zhou, Jianying Wang
  为什么重要：有系统实现，带基准测试，贴近真实场景，关注延迟
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
- [TSAI-MetaFraud: A Benchmark Dataset for Financial Fraud Transaction and Behavioral Risk Detection in Metaverse Ecosystems](https://arxiv.org/pdf/2607.09528v1.pdf)
  来源：arXiv cs.DB | 日期：2026-07-10 | 评分：21 | 作者：Refat Ishrak Hemel, Ehsan Hallaji, Roozbeh Razavi-Far
  为什么重要：有系统实现，带基准测试，有实验评估，涉及连接处理
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
- [PRomop: A Decision-Ready Longitudinal Patient Health Record on the OMOP Common Data Model](https://arxiv.org/pdf/2607.13947v1.pdf)
  来源：arXiv cs.DB | 日期：2026-07-15 | 评分：21 | 作者：Adam Blum, Louis Ferger-Andrews
  为什么重要：有系统实现，带基准测试，有实验评估，带生产环境信号
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Robust Predicate Transfer with Dynamic Execution](https://www.vldb.org/pvldb/vol19/p1278-qiao.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：20 | 作者：Yiming Qiao, Peter Boncz, Hailong Zhang
  为什么重要：有系统实现，带基准测试，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [From Single to Multiple Attributes: Experimental Insights on Sampling-Based Distinct Combination Estimation in GROUP-BY Queries](https://arxiv.org/pdf/2607.00868v1.pdf)
  来源：arXiv cs.DB | 日期：2026-07-01 | 评分：20 | 作者：Yujie Zhang, Xiaochun Yang, Bin Wang, Yuan Sui
  为什么重要：带基准测试，有实验评估，贴近真实场景，涉及基数估计
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [I/O Optimizations for Graph-Based Disk-Resident Approximate Nearest Neighbor Search: A Design Space Exploration](https://www.vldb.org/pvldb/vol19/p1484-li.pdf)
  来源：PVLDB | 日期：2026-03-01 | 评分：19 | 作者：Liang Li, Shufeng Gong, Yanan Yang, Yiduo Wang
  为什么重要：有系统实现，关注吞吐，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化。更偏系统实现。

## OLAP / 分析执行

- [Breaking the Isolation-Freshness Trade-off: Joint Adaptive Storage Optimization for HTAP Systems](https://www.vldb.org/pvldb/vol19/p1142-ding.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：29 | 作者：Zhenghao Ding, Xinyi Zhang, Chao Zhang, Yishen Sun
  为什么重要：有系统实现，带基准测试，有实验评估，贴近真实场景
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
- [AQD: Online Adaptive Query Dispatcher for HTAP Databases](https://www.vldb.org/pvldb/vol19/p1586-wu.pdf)
  来源：PVLDB | 日期：2026-03-01 | 评分：26 | 作者：Yang Wu, Tongliang Li, Xuanhe Zhou, Jianying Wang
  为什么重要：有系统实现，带基准测试，贴近真实场景，关注延迟
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
- [Sample-based Distinct Cardinality Estimation for Multiple Attributes in Multi-Dataset Queries](https://www.vldb.org/pvldb/vol19/p1115-mahin.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：23 | 作者：Mehnaz Tabassum Mahin, Michael J. Carey, Vassilis J. Tsotras
  为什么重要：带基准测试，有实验评估，贴近真实场景，涉及基数估计
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [L3: A GPU-Native Co-Designed Data Format for Learned Lossless Lightweight Compression](https://dl.acm.org/doi/pdf/10.1145/3802078)
  来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 作者：Youyang Xia, Feng Zhang, Junda Pan, Yihao Liu
  为什么重要：关注吞吐，关注延迟，涉及压缩
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。建议先看问题定义和实验设置。
- [How to Write to SSDs](https://www.vldb.org/pvldb/vol19/p1469-lee.pdf)
  来源：PVLDB | 日期：2026-03-01 | 评分：21 | 作者：Bohyun Lee, Tobias Ziegler, Viktor Leis
  为什么重要：有系统实现，带基准测试，关注吞吐
  摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
- [TSAI-MetaFraud: A Benchmark Dataset for Financial Fraud Transaction and Behavioral Risk Detection in Metaverse Ecosystems](https://arxiv.org/pdf/2607.09528v1.pdf)
  来源：arXiv cs.DB | 日期：2026-07-10 | 评分：21 | 作者：Refat Ishrak Hemel, Ehsan Hallaji, Roozbeh Razavi-Far
  为什么重要：有系统实现，带基准测试，有实验评估，涉及连接处理
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
- [PRomop: A Decision-Ready Longitudinal Patient Health Record on the OMOP Common Data Model](https://arxiv.org/pdf/2607.13947v1.pdf)
  来源：arXiv cs.DB | 日期：2026-07-15 | 评分：21 | 作者：Adam Blum, Louis Ferger-Andrews
  为什么重要：有系统实现，带基准测试，有实验评估，带生产环境信号
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Robust Predicate Transfer with Dynamic Execution](https://www.vldb.org/pvldb/vol19/p1278-qiao.pdf)
  来源：PVLDB | 日期：2026-02-01 | 评分：20 | 作者：Yiming Qiao, Peter Boncz, Hailong Zhang
  为什么重要：有系统实现，带基准测试，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [From Single to Multiple Attributes: Experimental Insights on Sampling-Based Distinct Combination Estimation in GROUP-BY Queries](https://arxiv.org/pdf/2607.00868v1.pdf)
  来源：arXiv cs.DB | 日期：2026-07-01 | 评分：20 | 作者：Yujie Zhang, Xiaochun Yang, Bin Wang, Yuan Sui
  为什么重要：带基准测试，有实验评估，贴近真实场景，涉及基数估计
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [Scalable GPU Acceleration of Scalar Functions in Analytical Databases: Compilation, Benchmarking, and Optimization](https://www.vldb.org/pvldb/vol19/p1441-rajan.pdf)
  来源：PVLDB | 日期：2026-03-01 | 评分：19 | 作者：Kaushik Rajan, Sampath Rajendra, Momin Al-Ghosien, Nicolas Bruno
  为什么重要：有系统实现，带基准测试，带生产环境信号
  摘要判断：这篇工作主要落在 OLAP / 分析执行。更偏系统实现。

## 说明

- PVLDB 只输出 VLDB 官方域名链接；若没有可验证 PDF，则回退到对应 volume 的官方 contributions 页面。
- PACMMOD 使用 OpenAlex 摘要，并根据 DOI 生成 ACM PDF 直链。
- ICDE 与 CIDR 通过 DBLP 发现最新届次，再用 DOI/标题到 OpenAlex 补摘要。
- 当前排序依据：来源权重、和你关注方向的相关度、系统实现/实验/生产信号。
- 标题保留原文，报告说明统一使用中文。
