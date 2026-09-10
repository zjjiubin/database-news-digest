# 数据库研究追踪简报

- 生成时间：2026-09-10 05:32:59 UTC
- 跟踪渠道：arXiv cs.DB、PVLDB、PACMMOD、ICDE、CIDR、DBLP
- 本次纳入论文：77 篇
- 来源分布：arXiv cs.DB 37 篇；PACMMOD 20 篇；PVLDB 20 篇

## 本期最值得优先阅读

1. [KVD rive: A Holistic Multi-Tier KV Cache Management System for Long-Context LLM Inference](https://dl.acm.org/doi/pdf/10.1145/3802077)
   - 来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 分类：查询优化
   - 为什么值得看：有系统实现，有原型实现，带基准测试，关注吞吐
   - 摘要判断：这篇工作主要落在 查询优化。更偏系统实现。
2. [Tidehunter: Large-Value Storage with Minimal Data Relocation](https://www.vldb.org/pvldb/vol19/p3786-zablotchi.pdf)
   - 来源：PVLDB | 日期：2026-07-01 | 评分：23 | 分类：存储引擎
   - 为什么值得看：有系统实现，贴近真实场景，带生产环境信号，关注吞吐
   - 摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
3. [DBRepro: Automated Database Synthesis via a Hybrid Constraint-Solving Approach for Reproducing Slow Queries](https://arxiv.org/pdf/2608.27822v1.pdf)
   - 来源：arXiv cs.DB | 日期：2026-08-28 | 评分：23 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，贴近真实场景，带生产环境信号，关注延迟
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
4. [A Backend-Agnostic Compiler for Approximate Query Processing with Probabilistic Tensor Algebra](https://dl.acm.org/doi/pdf/10.1145/3802003)
   - 来源：PACMMOD | 日期：2026-05-18 | 评分：22 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，贴近真实场景，关注延迟，涉及连接处理
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
5. [Bridging the Gap: Cardinality Estimation for Semantic Queries on Unstructured Data](https://dl.acm.org/doi/pdf/10.1145/3802024)
   - 来源：PACMMOD | 日期：2026-05-18 | 评分：22 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有实验评估，贴近真实场景，关注延迟，涉及基数估计
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
6. [Benchmarking the Full Pipeline of Materialized-View-Based Query Rewriting](https://www.vldb.org/pvldb/vol19/p3772-miao.pdf)
   - 来源：PVLDB | 日期：2026-07-01 | 评分：21 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，带基准测试，有实验评估，涉及连接处理
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
7. [Sema: A High-Performance System for LLM-Based Semantic Query Processing](https://www.vldb.org/pvldb/vol19/p3231-zhao.pdf)
   - 来源：PVLDB | 日期：2026-07-01 | 评分：21 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，关注延迟，涉及代价模型
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
8. [ByteX: A Unified AI Search Engine at ByteDance](https://arxiv.org/pdf/2608.30607v2.pdf)
   - 来源：arXiv cs.DB | 日期：2026-08-31 | 评分：20 | 分类：存储引擎
   - 为什么值得看：有系统实现，带基准测试，带生产环境信号，关注吞吐
   - 摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。

## 存储引擎

- [Tidehunter: Large-Value Storage with Minimal Data Relocation](https://www.vldb.org/pvldb/vol19/p3786-zablotchi.pdf)
  来源：PVLDB | 日期：2026-07-01 | 评分：23 | 作者：Andrey Chursin, Lefteris Kokoris-Kogias, Alex Orlov, Alberto Sonnino
  为什么重要：有系统实现，贴近真实场景，带生产环境信号，关注吞吐
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [ByteX: A Unified AI Search Engine at ByteDance](https://arxiv.org/pdf/2608.30607v2.pdf)
  来源：arXiv cs.DB | 日期：2026-08-31 | 评分：20 | 作者：Yao Tian, Yuncheng Lu, Liyao Xiong, Yuming Xu
  为什么重要：有系统实现，带基准测试，带生产环境信号，关注吞吐
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [Epoch-based Optimistic Concurrency Control in Geo-replicated Databases](https://dl.acm.org/doi/pdf/10.1145/3802052)
  来源：PACMMOD | 日期：2026-05-18 | 评分：19 | 作者：Yunhao Mao, Harunari Takata, Michail Bachras, Yuqiu Zhang
  为什么重要：带基准测试，有实验评估，关注吞吐，关注延迟
  摘要判断：这篇工作主要落在 存储引擎。摘要里有较强实验评估信号。
- [Dial: A Knowledge-Grounded Dialect-Specific NL2SQL System](https://www.vldb.org/pvldb/vol19/p3718-zhou.pdf)
  来源：PVLDB | 日期：2026-07-01 | 评分：19 | 作者：Xiang Zhang, Hongming Xu, Le Zhou, Wei Zhou
  为什么重要：有系统实现，带基准测试
  摘要判断：这篇工作主要落在 存储引擎、查询优化。更偏系统实现。
- [How Much Can RocksDB Chew? Achieving Near-Zero Write Stalls with Sustainable RocksDB](https://www.vldb.org/pvldb/vol19/p3202-shin.pdf)
  来源：PVLDB | 日期：2026-07-01 | 评分：19 | 作者：Hojin Shin, Yongmin Lee, Seehwan Yoo, Jongmoo Choi
  为什么重要：有系统实现，有实验评估，关注吞吐，关注延迟
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [Worst-Case Optimal BGPs on Temporal Graphs](https://www.vldb.org/pvldb/vol19/p3174-reutter.pdf)
  来源：PVLDB | 日期：2026-07-01 | 评分：19 | 作者：Diego Arroyuelo, A. Hogan, Gonzalo Navarro, Juan Reutter
  为什么重要：有实验评估，贴近真实场景，涉及连接处理
  摘要判断：这篇工作主要落在 存储引擎、查询优化。摘要里有较强实验评估信号。
- [Remora: Scale-Out Deterministic Execution for Smart Contracts](https://www.vldb.org/pvldb/vol19/p3076-liu.pdf)
  来源：PVLDB | 日期：2026-07-01 | 评分：18 | 作者：Zhengqing Liu, Alberto Sonnino, Igor Zablotchi, Eleftherios Kokoris-Kogias
  为什么重要：贴近真实场景，关注吞吐，关注延迟
  摘要判断：这篇工作主要落在 存储引擎。和真实业务或生产环境关联较强。
- [ContextPipe: Database-Inspired Context Assembly for Long-Horizon Agents](https://arxiv.org/pdf/2609.00749v1.pdf)
  来源：arXiv cs.DB | 日期：2026-09-01 | 评分：18 | 作者：Peng Xu, Zuyu Zhang, Yuze Sun, Feng Tian
  为什么重要：有系统实现，有实验评估，带生产环境信号
  摘要判断：这篇工作主要落在 存储引擎、查询优化。更偏系统实现。
- [IBLTs Measure Before They Decode: Self-Sizing Set Reconciliation for Database Consistency Verification](https://arxiv.org/pdf/2608.26537v2.pdf)
  来源：arXiv cs.DB | 日期：2026-08-27 | 评分：16 | 作者：Min Wu, Ji Qi, Zhengsheng Ye, Chengdui Luo
  为什么重要：有系统实现，带生产环境信号，涉及基数估计
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [Decoupling Disaggregated Memory Optimizations from Indexing: A Compiler-Runtime Approach](https://arxiv.org/pdf/2609.02669v2.pdf)
  来源：arXiv cs.DB | 日期：2026-09-02 | 评分：16 | 作者：Xinpeng Zhao, Zeling Long, Chaichon Wongkham, Srijan Srivastava
  为什么重要：贴近真实场景，涉及解耦式架构
  摘要判断：这篇工作主要落在 存储引擎、查询优化。和真实业务或生产环境关联较强。

## 查询优化

- [KVD rive: A Holistic Multi-Tier KV Cache Management System for Long-Context LLM Inference](https://dl.acm.org/doi/pdf/10.1145/3802077)
  来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 作者：Jian Lin, Jiazhi Mi, Zicong Hong, Haodong Wang
  为什么重要：有系统实现，有原型实现，带基准测试，关注吞吐
  摘要判断：这篇工作主要落在 查询优化。更偏系统实现。
- [DBRepro: Automated Database Synthesis via a Hybrid Constraint-Solving Approach for Reproducing Slow Queries](https://arxiv.org/pdf/2608.27822v1.pdf)
  来源：arXiv cs.DB | 日期：2026-08-28 | 评分：23 | 作者：Zhaoyang Zhang, Shuang Liu, Dengfeng Xu, Wei Lu
  为什么重要：有系统实现，贴近真实场景，带生产环境信号，关注延迟
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [A Backend-Agnostic Compiler for Approximate Query Processing with Probabilistic Tensor Algebra](https://dl.acm.org/doi/pdf/10.1145/3802003)
  来源：PACMMOD | 日期：2026-05-18 | 评分：22 | 作者：Jingwen Pan, James Cheney, Amir Shaikhha
  为什么重要：有系统实现，贴近真实场景，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Bridging the Gap: Cardinality Estimation for Semantic Queries on Unstructured Data](https://dl.acm.org/doi/pdf/10.1145/3802024)
  来源：PACMMOD | 日期：2026-05-18 | 评分：22 | 作者：Shihui Xu, Yi-Xiang Wang, G Li
  为什么重要：有实验评估，贴近真实场景，关注延迟，涉及基数估计
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [Benchmarking the Full Pipeline of Materialized-View-Based Query Rewriting](https://www.vldb.org/pvldb/vol19/p3772-miao.pdf)
  来源：PVLDB | 日期：2026-07-01 | 评分：21 | 作者：Xinjie Hu, Zhengjie Miao
  为什么重要：有系统实现，带基准测试，有实验评估，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Sema: A High-Performance System for LLM-Based Semantic Query Processing](https://www.vldb.org/pvldb/vol19/p3231-zhao.pdf)
  来源：PVLDB | 日期：2026-07-01 | 评分：21 | 作者：Kangkang Qi, Dongyang Xie, Wenbo Li, Hao Zhang
  为什么重要：有系统实现，关注延迟，涉及代价模型
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Dial: A Knowledge-Grounded Dialect-Specific NL2SQL System](https://www.vldb.org/pvldb/vol19/p3718-zhou.pdf)
  来源：PVLDB | 日期：2026-07-01 | 评分：19 | 作者：Xiang Zhang, Hongming Xu, Le Zhou, Wei Zhou
  为什么重要：有系统实现，带基准测试
  摘要判断：这篇工作主要落在 存储引擎、查询优化。更偏系统实现。
- [Worst-Case Optimal BGPs on Temporal Graphs](https://www.vldb.org/pvldb/vol19/p3174-reutter.pdf)
  来源：PVLDB | 日期：2026-07-01 | 评分：19 | 作者：Diego Arroyuelo, A. Hogan, Gonzalo Navarro, Juan Reutter
  为什么重要：有实验评估，贴近真实场景，涉及连接处理
  摘要判断：这篇工作主要落在 存储引擎、查询优化。摘要里有较强实验评估信号。
- [Accelerating Approximate Analytical Join Queries over Unstructured Data with Statistical Guarantees](https://dl.acm.org/doi/pdf/10.1145/3802004)
  来源：PACMMOD | 日期：2026-05-18 | 评分：18 | 作者：Yuxuan Zhu, Tengjun Jin, Chenghao Mo, Daniel Kang
  为什么重要：贴近真实场景，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。和真实业务或生产环境关联较强。
- [SmartRabbit : An Interactive Query Processor](https://dl.acm.org/doi/pdf/10.1145/3802112)
  来源：PACMMOD | 日期：2026-05-18 | 评分：18 | 作者：Pratyoy Das, Martin Boissier, Kyoungmin Kim, Sharad Mehrotra
  为什么重要：有系统实现，带基准测试，关注延迟
  摘要判断：这篇工作主要落在 查询优化。更偏系统实现。

## OLAP / 分析执行

- [DBRepro: Automated Database Synthesis via a Hybrid Constraint-Solving Approach for Reproducing Slow Queries](https://arxiv.org/pdf/2608.27822v1.pdf)
  来源：arXiv cs.DB | 日期：2026-08-28 | 评分：23 | 作者：Zhaoyang Zhang, Shuang Liu, Dengfeng Xu, Wei Lu
  为什么重要：有系统实现，贴近真实场景，带生产环境信号，关注延迟
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [A Backend-Agnostic Compiler for Approximate Query Processing with Probabilistic Tensor Algebra](https://dl.acm.org/doi/pdf/10.1145/3802003)
  来源：PACMMOD | 日期：2026-05-18 | 评分：22 | 作者：Jingwen Pan, James Cheney, Amir Shaikhha
  为什么重要：有系统实现，贴近真实场景，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Bridging the Gap: Cardinality Estimation for Semantic Queries on Unstructured Data](https://dl.acm.org/doi/pdf/10.1145/3802024)
  来源：PACMMOD | 日期：2026-05-18 | 评分：22 | 作者：Shihui Xu, Yi-Xiang Wang, G Li
  为什么重要：有实验评估，贴近真实场景，关注延迟，涉及基数估计
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [Benchmarking the Full Pipeline of Materialized-View-Based Query Rewriting](https://www.vldb.org/pvldb/vol19/p3772-miao.pdf)
  来源：PVLDB | 日期：2026-07-01 | 评分：21 | 作者：Xinjie Hu, Zhengjie Miao
  为什么重要：有系统实现，带基准测试，有实验评估，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Sema: A High-Performance System for LLM-Based Semantic Query Processing](https://www.vldb.org/pvldb/vol19/p3231-zhao.pdf)
  来源：PVLDB | 日期：2026-07-01 | 评分：21 | 作者：Kangkang Qi, Dongyang Xie, Wenbo Li, Hao Zhang
  为什么重要：有系统实现，关注延迟，涉及代价模型
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [MFTune: An Efficient Multi-Fidelity Framework for Spark SQL Configuration Tuning](https://www.vldb.org/pvldb/vol19/p3649-xu.pdf)
  来源：PVLDB | 日期：2026-07-01 | 评分：19 | 作者：Beicheng Xu, Lingching Tung, Yuchen Wang, Yupeng Lu
  为什么重要：有系统实现，带基准测试，有实验评估，涉及压缩
  摘要判断：这篇工作主要落在 OLAP / 分析执行。更偏系统实现。
- [Accelerating Approximate Analytical Join Queries over Unstructured Data with Statistical Guarantees](https://dl.acm.org/doi/pdf/10.1145/3802004)
  来源：PACMMOD | 日期：2026-05-18 | 评分：18 | 作者：Yuxuan Zhu, Tengjun Jin, Chenghao Mo, Daniel Kang
  为什么重要：贴近真实场景，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。和真实业务或生产环境关联较强。
- [Translytical Processing via DB-OS Co-designed Buffer: Cross-Engine Isolation and Tunable Update Visibility for HTAP](https://dl.acm.org/doi/pdf/10.1145/3802123)
  来源：PACMMOD | 日期：2026-05-18 | 评分：18 | 作者：Dongkwang ‍Kim, Keonwook Park, Cheolmin Choi, Hyungsoo Jung
  为什么重要：有系统实现，关注延迟，涉及向量化执行
  摘要判断：这篇工作主要落在 OLAP / 分析执行。更偏系统实现。
- [Workload-Aware Incremental Reclustering in Cloud Data Warehouses](https://dl.acm.org/doi/pdf/10.1145/3802127)
  来源：PACMMOD | 日期：2026-05-18 | 评分：18 | 作者：Yipeng Liu, Renfei Zhou, Jiaqi Yan, Huanchen Zhang
  为什么重要：有原型实现，带基准测试，贴近真实场景
  摘要判断：这篇工作主要落在 OLAP / 分析执行。更偏系统实现。
- [100x Cost & Latency Reduction: Performance Analysis of AI Query Approximation using Lightweight Proxy Models: [Experiments & Analysis]](https://dl.acm.org/doi/pdf/10.1145/3802002)
  来源：PACMMOD | 日期：2026-05-18 | 评分：17 | 作者：Yeounoh Chung, Rushabh Desai, Jian He, Yu Xiao
  为什么重要：带基准测试，有实验评估，关注延迟
  摘要判断：这篇工作主要落在 OLAP / 分析执行。摘要里有较强实验评估信号。

## 说明

- PVLDB 只输出 VLDB 官方域名链接；若没有可验证 PDF，则回退到对应 volume 的官方 contributions 页面。
- PACMMOD 使用 OpenAlex 摘要，并根据 DOI 生成 ACM PDF 直链。
- ICDE 与 CIDR 通过 DBLP 发现最新届次，再用 DOI/标题到 OpenAlex 补摘要。
- 当前排序依据：来源权重、和你关注方向的相关度、系统实现/实验/生产信号。
- 标题保留原文，报告说明统一使用中文。
