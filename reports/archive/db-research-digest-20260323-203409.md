# 数据库研究追踪简报

- 生成时间：2026-03-23 20:34:09 CST
- 跟踪渠道：arXiv cs.DB、PVLDB、PACMMOD、ICDE、CIDR、DBLP
- 本次纳入论文：83 篇
- 来源分布：arXiv cs.DB 38 篇；PACMMOD 20 篇；PVLDB 19 篇；ICDE 6 篇

## 本期最值得优先阅读

1. [GPU Acceleration of SQL Analytics on Compressed Data](https://www.vldb.org/pvldb/vol19/p320-sen.pdf)
   - 来源：PVLDB | 日期：2025-11-01 | 评分：21 | 分类：OLAP / 分析执行
   - 为什么值得看：有系统实现，有实验评估，贴近真实场景，带生产环境信号
   - 摘要判断：这篇工作主要落在 OLAP / 分析执行。更偏系统实现。
2. [Shard: A Scalable and Resize-Optimized Hash Index on Disaggregated Memory](https://doi.org/10.14778/3785297.3785309)
   - 来源：PVLDB | 日期：2025-12-01 | 评分：21 | 分类：存储引擎
   - 为什么值得看：有系统实现，有实验评估，关注吞吐，关注延迟
   - 摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
3. [NeurStore: Efficient In-database Deep Learning Model Management System](https://doi.org/10.1145/3769809)
   - 来源：PACMMOD | 日期：2025-12-04 | 评分：21 | 分类：存储引擎、OLAP / 分析执行
   - 为什么值得看：有系统实现，有实验评估，关注吞吐，涉及压缩
   - 摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
4. [Meerkat: Scalable, Network-Aware Failure Recovery for the Internet of Things](https://doi.org/10.14778/3778092.3778094)
   - 来源：PVLDB | 日期：2025-11-01 | 评分：20 | 分类：存储引擎、查询优化
   - 为什么值得看：关注吞吐，关注延迟，涉及连接处理
   - 摘要判断：这篇工作主要落在 存储引擎、查询优化。建议先看问题定义和实验设置。
5. [Vodka: Rethink Benchmarking Philosophy in HTAP Systems](https://doi.org/10.14778/3778092.3778107)
   - 来源：PVLDB | 日期：2025-11-01 | 评分：20 | 分类：存储引擎、OLAP / 分析执行
   - 为什么值得看：有系统实现，带基准测试，有实验评估
   - 摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
6. [TranSQL + : Serving Large Language Models with SQL on Low-Resource Hardware](https://doi.org/10.1145/3769836)
   - 来源：PACMMOD | 日期：2025-12-04 | 评分：20 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：关注延迟，涉及向量化执行，涉及连接处理
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。适合关注分析执行链路。
7. [LHGstore: An In-Memory Learned Graph Storage for Fast Updates and Analytics](https://arxiv.org/abs/2603.11596v1)
   - 来源：arXiv cs.DB | 日期：2026-03-12 | 评分：20 | 分类：存储引擎、OLAP / 分析执行
   - 为什么值得看：有系统实现，贴近真实场景，关注吞吐，关注延迟
   - 摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
8. [Efficient Methods for Accurate Sparse Trajectory Recovery and Map Matching.](https://doi.org/10.1109/ICDE65448.2025.00034)
   - 来源：ICDE | 日期：2025-05-19 | 评分：19 | 分类：存储引擎、查询优化
   - 为什么值得看：有系统实现，有实验评估，贴近真实场景
   - 摘要判断：这篇工作主要落在 存储引擎、查询优化。更偏系统实现。

## 存储引擎

- [Shard: A Scalable and Resize-Optimized Hash Index on Disaggregated Memory](https://doi.org/10.14778/3785297.3785309)
  来源：PVLDB | 日期：2025-12-01 | 评分：21 | 作者：Hantian Zha, Teng Ma, Baotong Lu, Yuansen Wang
  为什么重要：有系统实现，有实验评估，关注吞吐，关注延迟
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [NeurStore: Efficient In-database Deep Learning Model Management System](https://doi.org/10.1145/3769809)
  来源：PACMMOD | 日期：2025-12-04 | 评分：21 | 作者：Shulin Xiang, Sheng Wang, Xiaokui Xiao, Cong Yue
  为什么重要：有系统实现，有实验评估，关注吞吐，涉及压缩
  摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
- [Meerkat: Scalable, Network-Aware Failure Recovery for the Internet of Things](https://doi.org/10.14778/3778092.3778094)
  来源：PVLDB | 日期：2025-11-01 | 评分：20 | 作者：Anastasiia Kozar, Ankit Chaudhary, Steffen Zeuch, Volker Markl
  为什么重要：关注吞吐，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 存储引擎、查询优化。建议先看问题定义和实验设置。
- [Vodka: Rethink Benchmarking Philosophy in HTAP Systems](https://doi.org/10.14778/3778092.3778107)
  来源：PVLDB | 日期：2025-11-01 | 评分：20 | 作者：Zirui Hu, Siyang Weng, Zhicheng Pan, Rong Zhang
  为什么重要：有系统实现，带基准测试，有实验评估
  摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
- [LHGstore: An In-Memory Learned Graph Storage for Fast Updates and Analytics](https://arxiv.org/abs/2603.11596v1)
  来源：arXiv cs.DB | 日期：2026-03-12 | 评分：20 | 作者：Pengpeng Qiao, Zhiwei Zhang, Xinzhou Wang, Zhetao Li
  为什么重要：有系统实现，贴近真实场景，关注吞吐，关注延迟
  摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
- [Efficient Methods for Accurate Sparse Trajectory Recovery and Map Matching.](https://doi.org/10.1109/ICDE65448.2025.00034)
  来源：ICDE | 日期：2025-05-19 | 评分：19 | 作者：Wei Tian, Jieming Shi 0001, Man Lung Yiu
  为什么重要：有系统实现，有实验评估，贴近真实场景
  摘要判断：这篇工作主要落在 存储引擎、查询优化。更偏系统实现。
- [OOCC: One-Round Optimistic Concurrency Control for Read-Only Disaggregated Transactions.](https://doi.org/10.1109/ICDE65448.2025.00025)
  来源：ICDE | 日期：2025-05-19 | 评分：19 | 作者：Hao Wu, Mingxing Zhang, Kang Chen, Xia Liao
  为什么重要：贴近真实场景，关注吞吐，关注延迟，涉及解耦式架构
  摘要判断：这篇工作主要落在 存储引擎。和真实业务或生产环境关联较强。
- [Brook-2PL: Tolerating High Contention Workloads with A Deadlock-Free Two-Phase Locking Protocol](https://doi.org/10.1145/3769767)
  来源：PACMMOD | 日期：2025-12-04 | 评分：19 | 作者：Farzad Habibi, Juncheng Fang, Tania Lorido-Botrán, Faisal Nawab
  为什么重要：有系统实现，带基准测试，有实验评估，关注延迟
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [DAG of DAGs: Order-Fairness Made Practical](https://doi.org/10.1145/3769777)
  来源：PACMMOD | 日期：2025-12-04 | 评分：19 | 作者：Heena Nagda, Sidharth Sankhe, Sakshi Sinha, Keon Attarha
  为什么重要：有系统实现，有原型实现，有实验评估，关注吞吐
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [A Workload-Aware Encrypted Index for Efficient Privacy-Preserving Range Queries](https://doi.org/10.14778/3785297.3785313)
  来源：PVLDB | 日期：2025-12-01 | 评分：17 | 作者：Dong Wang, Ningning Cui, Jin Li, Jianzhong Qi
  为什么重要：涉及代价模型
  摘要判断：这篇工作主要落在 存储引擎、查询优化。对优化器核心决策较有参考价值。

## 查询优化

- [Meerkat: Scalable, Network-Aware Failure Recovery for the Internet of Things](https://doi.org/10.14778/3778092.3778094)
  来源：PVLDB | 日期：2025-11-01 | 评分：20 | 作者：Anastasiia Kozar, Ankit Chaudhary, Steffen Zeuch, Volker Markl
  为什么重要：关注吞吐，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 存储引擎、查询优化。建议先看问题定义和实验设置。
- [TranSQL + : Serving Large Language Models with SQL on Low-Resource Hardware](https://doi.org/10.1145/3769836)
  来源：PACMMOD | 日期：2025-12-04 | 评分：20 | 作者：Wenbo Sun, Qiming Guo, Wenlu Wang, Rihan Hai
  为什么重要：关注延迟，涉及向量化执行，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。适合关注分析执行链路。
- [Efficient Methods for Accurate Sparse Trajectory Recovery and Map Matching.](https://doi.org/10.1109/ICDE65448.2025.00034)
  来源：ICDE | 日期：2025-05-19 | 评分：19 | 作者：Wei Tian, Jieming Shi 0001, Man Lung Yiu
  为什么重要：有系统实现，有实验评估，贴近真实场景
  摘要判断：这篇工作主要落在 存储引擎、查询优化。更偏系统实现。
- [FlowLog: Efficient and Extensible Datalog via Incrementality](https://doi.org/10.14778/3778092.3778098)
  来源：PVLDB | 日期：2025-11-01 | 评分：19 | 作者：Hangdong Zhao, Zhenghong Yu, Srinag Rao, Simon Frisk
  为什么重要：有系统实现，有实验评估，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Triangle Counting in Hypergraph Streams: A Complete and Practical Approach](https://doi.org/10.1145/3769837)
  来源：PACMMOD | 日期：2025-12-04 | 评分：19 | 作者：Lingkai Meng, Long Yuan, Xuemin Lin, Wenjie Zhang
  为什么重要：贴近真实场景，关注吞吐
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。和真实业务或生产环境关联较强。
- [Aegis: A Correlation-Based Data Masking Advisor for Data Sharing Ecosystems](https://doi.org/10.1145/3769757)
  来源：PACMMOD | 日期：2025-12-04 | 评分：18 | 作者：Omar Islam Laskar, Fatemeh Ramezani Khozestani, Ishika Nankani, Sohrab Namazi Nia
  为什么重要：有系统实现，有实验评估，贴近真实场景，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化。更偏系统实现。
- [Sema: A High-performance System for LLM-based Semantic Query Processing](https://arxiv.org/abs/2603.11622v1)
  来源：arXiv cs.DB | 日期：2026-03-12 | 评分：18 | 作者：Kangkang Qi, Dongyang Xie, Wenbo Li, Hao Zhang
  为什么重要：有系统实现，关注延迟，涉及代价模型
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Aquila: A High-Concurrency System for Incremental Graph Query](https://doi.org/10.14778/3778092.3778106)
  来源：PVLDB | 日期：2025-11-01 | 评分：17 | 作者：Ziqi Zou, Hao Helen Zhang (15105980), Jiaxin Yao, Kangfei Zhao
  为什么重要：有系统实现，贴近真实场景，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化。更偏系统实现。
- [A Workload-Aware Encrypted Index for Efficient Privacy-Preserving Range Queries](https://doi.org/10.14778/3785297.3785313)
  来源：PVLDB | 日期：2025-12-01 | 评分：17 | 作者：Dong Wang, Ningning Cui, Jin Li, Jianzhong Qi
  为什么重要：涉及代价模型
  摘要判断：这篇工作主要落在 存储引擎、查询优化。对优化器核心决策较有参考价值。
- [Augmenting Social Influence of Uncertain Seeds via Probabilistic Link Insertion](https://doi.org/10.14778/3785297.3785314)
  来源：PVLDB | 日期：2025-12-01 | 评分：17 | 作者：Xianhao Chen, Jie Tang
  为什么重要：有系统实现，贴近真实场景，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化。更偏系统实现。

## OLAP / 分析执行

- [GPU Acceleration of SQL Analytics on Compressed Data](https://www.vldb.org/pvldb/vol19/p320-sen.pdf)
  来源：PVLDB | 日期：2025-11-01 | 评分：21 | 作者：Zezhou Huang, Krystian Sakowski, Hans Lehnert, Wei Cui
  为什么重要：有系统实现，有实验评估，贴近真实场景，带生产环境信号
  摘要判断：这篇工作主要落在 OLAP / 分析执行。更偏系统实现。
- [NeurStore: Efficient In-database Deep Learning Model Management System](https://doi.org/10.1145/3769809)
  来源：PACMMOD | 日期：2025-12-04 | 评分：21 | 作者：Shulin Xiang, Sheng Wang, Xiaokui Xiao, Cong Yue
  为什么重要：有系统实现，有实验评估，关注吞吐，涉及压缩
  摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
- [Vodka: Rethink Benchmarking Philosophy in HTAP Systems](https://doi.org/10.14778/3778092.3778107)
  来源：PVLDB | 日期：2025-11-01 | 评分：20 | 作者：Zirui Hu, Siyang Weng, Zhicheng Pan, Rong Zhang
  为什么重要：有系统实现，带基准测试，有实验评估
  摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
- [TranSQL + : Serving Large Language Models with SQL on Low-Resource Hardware](https://doi.org/10.1145/3769836)
  来源：PACMMOD | 日期：2025-12-04 | 评分：20 | 作者：Wenbo Sun, Qiming Guo, Wenlu Wang, Rihan Hai
  为什么重要：关注延迟，涉及向量化执行，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。适合关注分析执行链路。
- [LHGstore: An In-Memory Learned Graph Storage for Fast Updates and Analytics](https://arxiv.org/abs/2603.11596v1)
  来源：arXiv cs.DB | 日期：2026-03-12 | 评分：20 | 作者：Pengpeng Qiao, Zhiwei Zhang, Xinzhou Wang, Zhetao Li
  为什么重要：有系统实现，贴近真实场景，关注吞吐，关注延迟
  摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
- [FlowLog: Efficient and Extensible Datalog via Incrementality](https://doi.org/10.14778/3778092.3778098)
  来源：PVLDB | 日期：2025-11-01 | 评分：19 | 作者：Hangdong Zhao, Zhenghong Yu, Srinag Rao, Simon Frisk
  为什么重要：有系统实现，有实验评估，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Triangle Counting in Hypergraph Streams: A Complete and Practical Approach](https://doi.org/10.1145/3769837)
  来源：PACMMOD | 日期：2025-12-04 | 评分：19 | 作者：Lingkai Meng, Long Yuan, Xuemin Lin, Wenjie Zhang
  为什么重要：贴近真实场景，关注吞吐
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。和真实业务或生产环境关联较强。
- [Sema: A High-performance System for LLM-based Semantic Query Processing](https://arxiv.org/abs/2603.11622v1)
  来源：arXiv cs.DB | 日期：2026-03-12 | 评分：18 | 作者：Kangkang Qi, Dongyang Xie, Wenbo Li, Hao Zhang
  为什么重要：有系统实现，关注延迟，涉及代价模型
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [CounterSnake: A Lossless and Generalized Compression Framework for Diverse Sketches](https://doi.org/10.14778/3785297.3785316)
  来源：PVLDB | 日期：2025-12-01 | 评分：17 | 作者：Xunpeng Liu, Qun Huang, Yaojing Wang, Lihua Miao
  为什么重要：关注吞吐，关注延迟，涉及压缩
  摘要判断：这篇工作主要落在 OLAP / 分析执行。建议先看问题定义和实验设置。
- [MAVIS: Materialized View for Subgraph Matching](https://doi.org/10.1145/3769806)
  来源：PACMMOD | 日期：2025-12-04 | 评分：16 | 作者：Lisheng Cao, Xiangyang Gou, Lei Zou, Wenjie Zhang
  为什么重要：有系统实现，贴近真实场景
  摘要判断：这篇工作主要落在 OLAP / 分析执行。更偏系统实现。

## 说明

- PVLDB 与 PACMMOD 直接使用 OpenAlex 的期刊源元数据和摘要。
- ICDE 与 CIDR 通过 DBLP 发现最新届次，再用 DOI/标题到 OpenAlex 补摘要。
- 当前排序依据：来源权重、和你关注方向的相关度、系统实现/实验/生产信号。
- 标题保留原文，报告说明统一使用中文。
