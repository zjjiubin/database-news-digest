# 数据库研究追踪简报

- 生成时间：2026-04-16 04:12:58 UTC
- 跟踪渠道：arXiv cs.DB、PVLDB、PACMMOD、ICDE、CIDR、DBLP
- 本次纳入论文：75 篇
- 来源分布：arXiv cs.DB 33 篇；PVLDB 19 篇；PACMMOD 17 篇；ICDE 6 篇

## 本期最值得优先阅读

1. [SynQL: A Controllable and Scalable Rule-Based Framework for SQL Workload Synthesis for Performance Benchmarking](https://arxiv.org/pdf/2604.08021v1.pdf)
   - 来源：arXiv cs.DB | 日期：2026-04-09 | 评分：26 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，带基准测试，贴近真实场景，带生产环境信号
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
2. [GPU Acceleration of SQL Analytics on Compressed Data](https://www.vldb.org/pvldb/vol19/p320-sen.pdf)
   - 来源：PVLDB | 日期：2025-11-01 | 评分：21 | 分类：OLAP / 分析执行
   - 为什么值得看：有系统实现，有实验评估，贴近真实场景，带生产环境信号
   - 摘要判断：这篇工作主要落在 OLAP / 分析执行。更偏系统实现。
3. [Shard: A Scalable and Resize-Optimized Hash Index on Disaggregated Memory](https://www.vldb.org/pvldb/vol19/p684-zha.pdf)
   - 来源：PVLDB | 日期：2025-12-01 | 评分：21 | 分类：存储引擎
   - 为什么值得看：有系统实现，有实验评估，关注吞吐，关注延迟
   - 摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
4. [Meerkat: Scalable, Network-Aware Failure Recovery for the Internet of Things](https://www.vldb.org/pvldb/vol19/p306-kozar.pdf)
   - 来源：PVLDB | 日期：2025-11-01 | 评分：20 | 分类：存储引擎、查询优化
   - 为什么值得看：关注吞吐，关注延迟，涉及连接处理
   - 摘要判断：这篇工作主要落在 存储引擎、查询优化。建议先看问题定义和实验设置。
5. [Vodka: Rethink Benchmarking Philosophy in HTAP Systems](https://www.vldb.org/pvldb/vol19/p481-hu.pdf)
   - 来源：PVLDB | 日期：2025-11-01 | 评分：20 | 分类：存储引擎、OLAP / 分析执行
   - 为什么值得看：有系统实现，带基准测试，有实验评估
   - 摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
6. [Efficient Methods for Accurate Sparse Trajectory Recovery and Map Matching.](https://arxiv.org/pdf/2508.10460)
   - 来源：ICDE | 日期：2025-05-19 | 评分：19 | 分类：存储引擎、查询优化
   - 为什么值得看：有系统实现，有实验评估，贴近真实场景
   - 摘要判断：这篇工作主要落在 存储引擎、查询优化。更偏系统实现。
7. [OOCC: One-Round Optimistic Concurrency Control for Read-Only Disaggregated Transactions.](https://doi.org/10.1109/ICDE65448.2025.00025)
   - 来源：ICDE | 日期：2025-05-19 | 评分：19 | 分类：存储引擎
   - 为什么值得看：贴近真实场景，关注吞吐，关注延迟，涉及解耦式架构
   - 摘要判断：这篇工作主要落在 存储引擎。和真实业务或生产环境关联较强。
8. [FlowLog: Efficient and Extensible Datalog via Incrementality](https://www.vldb.org/pvldb/vol19/p361-zhao.pdf)
   - 来源：PVLDB | 日期：2025-11-01 | 评分：19 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，有实验评估，涉及连接处理
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。

## 存储引擎

- [Shard: A Scalable and Resize-Optimized Hash Index on Disaggregated Memory](https://www.vldb.org/pvldb/vol19/p684-zha.pdf)
  来源：PVLDB | 日期：2025-12-01 | 评分：21 | 作者：Hantian Zha, Teng Ma, Baotong Lu, Yuansen Wang
  为什么重要：有系统实现，有实验评估，关注吞吐，关注延迟
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [Meerkat: Scalable, Network-Aware Failure Recovery for the Internet of Things](https://www.vldb.org/pvldb/vol19/p306-kozar.pdf)
  来源：PVLDB | 日期：2025-11-01 | 评分：20 | 作者：Anastasiia Kozar, Ankit Chaudhary, Steffen Zeuch, Volker Markl
  为什么重要：关注吞吐，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 存储引擎、查询优化。建议先看问题定义和实验设置。
- [Vodka: Rethink Benchmarking Philosophy in HTAP Systems](https://www.vldb.org/pvldb/vol19/p481-hu.pdf)
  来源：PVLDB | 日期：2025-11-01 | 评分：20 | 作者：Zirui Hu, Siyang Weng, Zhicheng Pan, Rong Zhang
  为什么重要：有系统实现，带基准测试，有实验评估
  摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
- [Efficient Methods for Accurate Sparse Trajectory Recovery and Map Matching.](https://arxiv.org/pdf/2508.10460)
  来源：ICDE | 日期：2025-05-19 | 评分：19 | 作者：Wei Tian, Jieming Shi 0001, Man Lung Yiu
  为什么重要：有系统实现，有实验评估，贴近真实场景
  摘要判断：这篇工作主要落在 存储引擎、查询优化。更偏系统实现。
- [OOCC: One-Round Optimistic Concurrency Control for Read-Only Disaggregated Transactions.](https://doi.org/10.1109/ICDE65448.2025.00025)
  来源：ICDE | 日期：2025-05-19 | 评分：19 | 作者：Hao Wu, Mingxing Zhang, Kang Chen, Xia Liao
  为什么重要：贴近真实场景，关注吞吐，关注延迟，涉及解耦式架构
  摘要判断：这篇工作主要落在 存储引擎。和真实业务或生产环境关联较强。
- [HIRE: A Hybrid Learned Index for Robust and Efficient Performance under Mixed Workloads](https://dl.acm.org/doi/pdf/10.1145/3786657)
  来源：PACMMOD | 日期：2026-04-02 | 评分：18 | 作者：Xinyi Zhang, Liang Liang, Anastasia Ailamaki, Jianliang Xu
  为什么重要：贴近真实场景，关注吞吐，关注延迟
  摘要判断：这篇工作主要落在 存储引擎。和真实业务或生产环境关联较强。
- [LiveBin: A Localized and Version-Aware Binned Scan Index](https://dl.acm.org/doi/pdf/10.1145/3786664)
  来源：PACMMOD | 日期：2026-04-02 | 评分：18 | 作者：Zikang Liu, Linwei Li, F. F. Ye, Ze He
  为什么重要：有系统实现，有实验评估
  摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
- [A Workload-Aware Encrypted Index for Efficient Privacy-Preserving Range Queries](https://www.vldb.org/pvldb/vol19/p740-li.pdf)
  来源：PVLDB | 日期：2025-12-01 | 评分：17 | 作者：Dong Wang, Ningning Cui, Jin Li, Jianzhong Qi
  为什么重要：涉及代价模型
  摘要判断：这篇工作主要落在 存储引擎、查询优化。对优化器核心决策较有参考价值。
- [Fast Verification of Strong Database Isolation](https://www.vldb.org/pvldb/vol19/p563-wei.pdf)
  来源：PVLDB | 日期：2025-12-01 | 评分：17 | 作者：Zhiheng Cai, Si Liu, Hengfeng Wei, Yuxing Chen
  为什么重要：有系统实现，带基准测试，有实验评估
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [Chipmink: Efficient Delta Identification for Massive Object Graphs](https://www.vldb.org/pvldb/vol19/p603-chockchowwat.pdf)
  来源：PVLDB | 日期：2025-12-01 | 评分：16 | 作者：Supawit Chockchowwat, Sumay Thakurdesai, Zhaoheng Li, Matthew S. Krafczyk
  为什么重要：有系统实现，贴近真实场景
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。

## 查询优化

- [SynQL: A Controllable and Scalable Rule-Based Framework for SQL Workload Synthesis for Performance Benchmarking](https://arxiv.org/pdf/2604.08021v1.pdf)
  来源：arXiv cs.DB | 日期：2026-04-09 | 评分：26 | 作者：Kahan Mehta, Amit Mankodi
  为什么重要：有系统实现，带基准测试，贴近真实场景，带生产环境信号
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Meerkat: Scalable, Network-Aware Failure Recovery for the Internet of Things](https://www.vldb.org/pvldb/vol19/p306-kozar.pdf)
  来源：PVLDB | 日期：2025-11-01 | 评分：20 | 作者：Anastasiia Kozar, Ankit Chaudhary, Steffen Zeuch, Volker Markl
  为什么重要：关注吞吐，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 存储引擎、查询优化。建议先看问题定义和实验设置。
- [Efficient Methods for Accurate Sparse Trajectory Recovery and Map Matching.](https://arxiv.org/pdf/2508.10460)
  来源：ICDE | 日期：2025-05-19 | 评分：19 | 作者：Wei Tian, Jieming Shi 0001, Man Lung Yiu
  为什么重要：有系统实现，有实验评估，贴近真实场景
  摘要判断：这篇工作主要落在 存储引擎、查询优化。更偏系统实现。
- [FlowLog: Efficient and Extensible Datalog via Incrementality](https://www.vldb.org/pvldb/vol19/p361-zhao.pdf)
  来源：PVLDB | 日期：2025-11-01 | 评分：19 | 作者：Hangdong Zhao, Zhenghong Yu, Srinag Rao, Simon Frisk
  为什么重要：有系统实现，有实验评估，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [GenRewrite: Query Rewriting via Large Language Models](https://dl.acm.org/doi/pdf/10.1145/3786684)
  来源：PACMMOD | 日期：2026-04-02 | 评分：19 | 作者：Jie Liu, Barzan Mozafari
  为什么重要：有系统实现，带基准测试
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [DeepEye: A Steerable Self-driving Data Agent System](https://arxiv.org/pdf/2603.28889v1.pdf)
  来源：arXiv cs.DB | 日期：2026-03-30 | 评分：18 | 作者：Boyan Li, Yiran Peng, Yupeng Xie, Sirong Lu
  为什么重要：有系统实现，带生产环境信号，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Streaming Model Cascades for Semantic SQL](https://arxiv.org/pdf/2604.00660v1.pdf)
  来源：arXiv cs.DB | 日期：2026-04-01 | 评分：18 | 作者：Paweł Liskowski, Kyle Schmaus
  为什么重要：有系统实现，带生产环境信号，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [CorrBound: Cardinality Estimation Accounting for Inter- and Intra-relation Correlations](https://dl.acm.org/doi/pdf/10.1145/3786633)
  来源：PACMMOD | 日期：2026-04-02 | 评分：18 | 作者：Christoph Mayer, Haozhe Zhang, Mahmoud Abo Khamis, Kyle Deeds
  为什么重要：带基准测试，涉及基数估计，涉及压缩，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化。摘要里有较强实验评估信号。
- [Qualitative Join Discovery in Data Lakes using Examples](https://dl.acm.org/doi/pdf/10.1145/3786682)
  来源：PACMMOD | 日期：2026-04-02 | 评分：18 | 作者：Mir Mahathir Mohammad, El Kindi Rezig
  为什么重要：有系统实现，带基准测试，有实验评估，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化。更偏系统实现。
- [Aquila: A High-Concurrency System for Incremental Graph Query](https://www.vldb.org/pvldb/vol19/p468-zhao.pdf)
  来源：PVLDB | 日期：2025-11-01 | 评分：17 | 作者：Ziqi Zou, Hao Helen Zhang (15105980), Jiaxin Yao, Kangfei Zhao
  为什么重要：有系统实现，贴近真实场景，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化。更偏系统实现。

## OLAP / 分析执行

- [SynQL: A Controllable and Scalable Rule-Based Framework for SQL Workload Synthesis for Performance Benchmarking](https://arxiv.org/pdf/2604.08021v1.pdf)
  来源：arXiv cs.DB | 日期：2026-04-09 | 评分：26 | 作者：Kahan Mehta, Amit Mankodi
  为什么重要：有系统实现，带基准测试，贴近真实场景，带生产环境信号
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [GPU Acceleration of SQL Analytics on Compressed Data](https://www.vldb.org/pvldb/vol19/p320-sen.pdf)
  来源：PVLDB | 日期：2025-11-01 | 评分：21 | 作者：Zezhou Huang, Krystian Sakowski, Hans Lehnert, Wei Cui
  为什么重要：有系统实现，有实验评估，贴近真实场景，带生产环境信号
  摘要判断：这篇工作主要落在 OLAP / 分析执行。更偏系统实现。
- [Vodka: Rethink Benchmarking Philosophy in HTAP Systems](https://www.vldb.org/pvldb/vol19/p481-hu.pdf)
  来源：PVLDB | 日期：2025-11-01 | 评分：20 | 作者：Zirui Hu, Siyang Weng, Zhicheng Pan, Rong Zhang
  为什么重要：有系统实现，带基准测试，有实验评估
  摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
- [FlowLog: Efficient and Extensible Datalog via Incrementality](https://www.vldb.org/pvldb/vol19/p361-zhao.pdf)
  来源：PVLDB | 日期：2025-11-01 | 评分：19 | 作者：Hangdong Zhao, Zhenghong Yu, Srinag Rao, Simon Frisk
  为什么重要：有系统实现，有实验评估，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Enzyme: Incremental View Maintenance for Data Engineering](https://arxiv.org/pdf/2603.27775v1.pdf)
  来源：arXiv cs.DB | 日期：2026-03-29 | 评分：19 | 作者：Ritwik Yadav, Supun Abeysinghe, Min Yang, Jeffrey Helt
  为什么重要：有系统实现，带基准测试，带生产环境信号，关注吞吐
  摘要判断：这篇工作主要落在 OLAP / 分析执行。更偏系统实现。
- [GenRewrite: Query Rewriting via Large Language Models](https://dl.acm.org/doi/pdf/10.1145/3786684)
  来源：PACMMOD | 日期：2026-04-02 | 评分：19 | 作者：Jie Liu, Barzan Mozafari
  为什么重要：有系统实现，带基准测试
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [DeepEye: A Steerable Self-driving Data Agent System](https://arxiv.org/pdf/2603.28889v1.pdf)
  来源：arXiv cs.DB | 日期：2026-03-30 | 评分：18 | 作者：Boyan Li, Yiran Peng, Yupeng Xie, Sirong Lu
  为什么重要：有系统实现，带生产环境信号，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Streaming Model Cascades for Semantic SQL](https://arxiv.org/pdf/2604.00660v1.pdf)
  来源：arXiv cs.DB | 日期：2026-04-01 | 评分：18 | 作者：Paweł Liskowski, Kyle Schmaus
  为什么重要：有系统实现，带生产环境信号，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [LiveBin: A Localized and Version-Aware Binned Scan Index](https://dl.acm.org/doi/pdf/10.1145/3786664)
  来源：PACMMOD | 日期：2026-04-02 | 评分：18 | 作者：Zikang Liu, Linwei Li, F. F. Ye, Ze He
  为什么重要：有系统实现，有实验评估
  摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
- [CounterSnake: A Lossless and Generalized Compression Framework for Diverse Sketches](https://www.vldb.org/pvldb/vol19/p780-liu.pdf)
  来源：PVLDB | 日期：2025-12-01 | 评分：17 | 作者：Xunpeng Liu, Qun Huang, Yaojing Wang, Lihua Miao
  为什么重要：关注吞吐，关注延迟，涉及压缩
  摘要判断：这篇工作主要落在 OLAP / 分析执行。建议先看问题定义和实验设置。

## 说明

- PVLDB 只输出 VLDB 官方域名链接；若没有可验证 PDF，则回退到对应 volume 的官方 contributions 页面。
- PACMMOD 使用 OpenAlex 摘要，并根据 DOI 生成 ACM PDF 直链。
- ICDE 与 CIDR 通过 DBLP 发现最新届次，再用 DOI/标题到 OpenAlex 补摘要。
- 当前排序依据：来源权重、和你关注方向的相关度、系统实现/实验/生产信号。
- 标题保留原文，报告说明统一使用中文。
