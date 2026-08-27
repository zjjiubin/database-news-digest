# 数据库研究追踪简报

- 生成时间：2026-08-27 10:52:28 UTC
- 跟踪渠道：arXiv cs.DB、PVLDB、PACMMOD、ICDE、CIDR、DBLP
- 本次纳入论文：69 篇
- 来源分布：arXiv cs.DB 24 篇；PACMMOD 20 篇；PVLDB 16 篇；CIDR 6 篇；ICDE 3 篇

## 本期最值得优先阅读

1. [KVD rive: A Holistic Multi-Tier KV Cache Management System for Long-Context LLM Inference](https://dl.acm.org/doi/pdf/10.1145/3802077)
   - 来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 分类：查询优化
   - 为什么值得看：有系统实现，有原型实现，带基准测试，关注吞吐
   - 摘要判断：这篇工作主要落在 查询优化。更偏系统实现。
2. [A Backend-Agnostic Compiler for Approximate Query Processing with Probabilistic Tensor Algebra](https://dl.acm.org/doi/pdf/10.1145/3802003)
   - 来源：PACMMOD | 日期：2026-05-18 | 评分：22 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，贴近真实场景，关注延迟，涉及连接处理
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
3. [Bridging the Gap: Cardinality Estimation for Semantic Queries on Unstructured Data](https://dl.acm.org/doi/pdf/10.1145/3802024)
   - 来源：PACMMOD | 日期：2026-05-18 | 评分：22 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有实验评估，贴近真实场景，关注延迟，涉及基数估计
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
4. [Subgraph Enumeration: Beyond Tree Decomposition](https://www.vldb.org/pvldb/vol19/p2303-li.pdf)
   - 来源：PVLDB | 日期：2026-05-01 | 评分：20 | 分类：查询优化
   - 为什么值得看：有系统实现，有实验评估，贴近真实场景，涉及代价模型
   - 摘要判断：这篇工作主要落在 查询优化。更偏系统实现。
5. [Why We Created Yet Another Memory Framework: Understanding MGA's Role in Next-Gen Database Systems](https://arxiv.org/pdf/2608.22853v1.pdf)
   - 来源：arXiv cs.DB | 日期：2026-08-24 | 评分：20 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，带生产环境信号，关注延迟，涉及连接处理
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
6. [Efficient, Scalable, and Fair Locking on Disaggregated Memory with Decentralized Coordination](https://www.vldb.org/pvldb/vol19/p2248-chen.pdf)
   - 来源：PVLDB | 日期：2026-05-01 | 评分：19 | 分类：存储引擎
   - 为什么值得看：有实验评估，贴近真实场景，关注吞吐，涉及解耦式架构
   - 摘要判断：这篇工作主要落在 存储引擎。摘要里有较强实验评估信号。
7. [Multimodal Knowledge Graph Completion via Relation-Aware Negative Sampling with Diffusion-Based Interpolation](https://www.vldb.org/pvldb/vol19/p1949-li.pdf)
   - 来源：PVLDB | 日期：2026-05-01 | 评分：19 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：带基准测试，涉及基数估计
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
8. [Redbench: Workload Synthesis from Cloud Traces](https://www.vldb.org/pvldb/vol19/p2113-wehrstein.pdf)
   - 来源：PVLDB | 日期：2026-05-01 | 评分：19 | 分类：OLAP / 分析执行
   - 为什么值得看：有系统实现，带基准测试，有实验评估，贴近真实场景
   - 摘要判断：这篇工作主要落在 OLAP / 分析执行。更偏系统实现。

## 存储引擎

- [Efficient, Scalable, and Fair Locking on Disaggregated Memory with Decentralized Coordination](https://www.vldb.org/pvldb/vol19/p2248-chen.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：19 | 作者：Hanze Zhang, Ke Cheng, Rong Chen, Xingda Wei
  为什么重要：有实验评估，贴近真实场景，关注吞吐，涉及解耦式架构
  摘要判断：这篇工作主要落在 存储引擎。摘要里有较强实验评估信号。
- [Epoch-based Optimistic Concurrency Control in Geo-replicated Databases](https://dl.acm.org/doi/pdf/10.1145/3802052)
  来源：PACMMOD | 日期：2026-05-18 | 评分：19 | 作者：Yunhao Mao, Harunari Takata, Michail Bachras, Yuqiu Zhang
  为什么重要：带基准测试，有实验评估，关注吞吐，关注延迟
  摘要判断：这篇工作主要落在 存储引擎。摘要里有较强实验评估信号。
- [Swan: Hybrid MVCC Management for Efficient Transaction Processing in LSM-Tree-Based Key-Value Stores](https://www.vldb.org/pvldb/vol19/p1977-guo.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：18 | 作者：Yang Guo, Jin Xue, Zili Shao
  为什么重要：有系统实现，有原型实现，关注延迟
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [BookRAG: A Hierarchical Structure-Aware Index-based Approach for Retrieval-Augmented Generation on Complex Documents](https://www.vldb.org/pvldb/vol19/p2358-wang.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：16 | 作者：Shu Wang, Yingli Zhou, Yixiang Fang
  为什么重要：带基准测试，贴近真实场景
  摘要判断：这篇工作主要落在 存储引擎。摘要里有较强实验评估信号。
- [High-Performance DBMSs with io_uring: When and How to Use It](https://www.vldb.org/pvldb/vol19/p2317-jasny.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：16 | 作者：Matthias Jasny, Muhammad El-Hindi, Tobias Ziegler, Viktor Leis
  为什么重要：有系统实现，关注吞吐
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [Building An Integrated Vector Database System in PostgreSQL](https://arxiv.org/pdf/2608.15994v1.pdf)
  来源：arXiv cs.DB | 日期：2026-08-17 | 评分：15 | 作者：Jiayi Liu, Te Guo, Jianguo Wang
  为什么重要：有系统实现，贴近真实场景，关注吞吐
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [HarborMaster: Rollback Detection for Trusted Distributed Computing](https://www.vldb.org/pvldb/vol19/p2126-mishra.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：14 | 作者：Shubham Mishra, Alexander Thomas, Nurzhan Abdrassilov, Kaiyuan Chen
  为什么重要：有系统实现
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [Accelerating Maximum Common Subgraph Computation by Exploiting Symmetries](https://dl.acm.org/doi/pdf/10.1145/3802005)
  来源：PACMMOD | 日期：2026-05-18 | 评分：14 | 作者：Buddhi Kothalawala, Henning Köehler, Muhammad Farhan
  为什么重要：带基准测试
  摘要判断：这篇工作主要落在 存储引擎。摘要里有较强实验评估信号。
- [Modeling Concurrency Control as a Learnable Function](https://dl.acm.org/doi/pdf/10.1145/3802088)
  来源：PACMMOD | 日期：2026-05-18 | 评分：14 | 作者：Haizhou Pan, Shaofeng Cai, Tien Tuan Anh Dinh, Yuncheng Wu
  为什么重要：关注吞吐
  摘要判断：这篇工作主要落在 存储引擎。和事务/并发控制设计相关。
- [On Self-Designing Learned Indexes](https://dl.acm.org/doi/pdf/10.1145/3802096)
  来源：PACMMOD | 日期：2026-05-18 | 评分：14 | 作者：Baofu Han, Guoyu Hu, Bing Li, Xiaokui Xiao
  为什么重要：关注吞吐
  摘要判断：这篇工作主要落在 存储引擎。建议先看问题定义和实验设置。

## 查询优化

- [KVD rive: A Holistic Multi-Tier KV Cache Management System for Long-Context LLM Inference](https://dl.acm.org/doi/pdf/10.1145/3802077)
  来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 作者：Jian Lin, Jiazhi Mi, Zicong Hong, Haodong Wang
  为什么重要：有系统实现，有原型实现，带基准测试，关注吞吐
  摘要判断：这篇工作主要落在 查询优化。更偏系统实现。
- [A Backend-Agnostic Compiler for Approximate Query Processing with Probabilistic Tensor Algebra](https://dl.acm.org/doi/pdf/10.1145/3802003)
  来源：PACMMOD | 日期：2026-05-18 | 评分：22 | 作者：Jingwen Pan, James Cheney, Amir Shaikhha
  为什么重要：有系统实现，贴近真实场景，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Bridging the Gap: Cardinality Estimation for Semantic Queries on Unstructured Data](https://dl.acm.org/doi/pdf/10.1145/3802024)
  来源：PACMMOD | 日期：2026-05-18 | 评分：22 | 作者：Shihui Xu, Yi-Xiang Wang, G Li
  为什么重要：有实验评估，贴近真实场景，关注延迟，涉及基数估计
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [Subgraph Enumeration: Beyond Tree Decomposition](https://www.vldb.org/pvldb/vol19/p2303-li.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：20 | 作者：Qiyan Li, Jeffrey Xu Yu, Zongyan He
  为什么重要：有系统实现，有实验评估，贴近真实场景，涉及代价模型
  摘要判断：这篇工作主要落在 查询优化。更偏系统实现。
- [Why We Created Yet Another Memory Framework: Understanding MGA's Role in Next-Gen Database Systems](https://arxiv.org/pdf/2608.22853v1.pdf)
  来源：arXiv cs.DB | 日期：2026-08-24 | 评分：20 | 作者：Vikramraj Sitpal, Pei Li, Shubham Kumar, Somansh Reddy Satish
  为什么重要：有系统实现，带生产环境信号，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Multimodal Knowledge Graph Completion via Relation-Aware Negative Sampling with Diffusion-Based Interpolation](https://www.vldb.org/pvldb/vol19/p1949-li.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：19 | 作者：Qian Ma, Linfei Dai, Zhongming Yao, Yu Gu
  为什么重要：带基准测试，涉及基数估计
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [Deep Research is the New Analytics System: Towards Building the Runtime for AI-Driven Analytics.](https://arxiv.org/pdf/2509.02751)
  来源：CIDR | 日期：2025-09-02 | 评分：18 | 作者：Matthew Russo, Tim Kraska
  为什么重要：有系统实现，有原型实现
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Compass: SLO-Aware Query Planner for Compound AI Serving at Scale](https://www.vldb.org/pvldb/vol19/p1921-lai.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：18 | 作者：Banruo Liu, Wei‐Yu Lin, Minghao Fang, Yihan Jiang
  为什么重要：有实验评估，贴近真实场景，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化。摘要里有较强实验评估信号。
- [Accelerating Approximate Analytical Join Queries over Unstructured Data with Statistical Guarantees](https://dl.acm.org/doi/pdf/10.1145/3802004)
  来源：PACMMOD | 日期：2026-05-18 | 评分：18 | 作者：Yuxuan Zhu, Tengjun Jin, Chenghao Mo, Daniel Kang
  为什么重要：贴近真实场景，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。和真实业务或生产环境关联较强。
- [SmartRabbit : An Interactive Query Processor](https://dl.acm.org/doi/pdf/10.1145/3802112)
  来源：PACMMOD | 日期：2026-05-18 | 评分：18 | 作者：Pratyoy Das, Martin Boissier, Kyoungmin Kim, Sharad Mehrotra
  为什么重要：有系统实现，带基准测试，关注延迟
  摘要判断：这篇工作主要落在 查询优化。更偏系统实现。

## OLAP / 分析执行

- [A Backend-Agnostic Compiler for Approximate Query Processing with Probabilistic Tensor Algebra](https://dl.acm.org/doi/pdf/10.1145/3802003)
  来源：PACMMOD | 日期：2026-05-18 | 评分：22 | 作者：Jingwen Pan, James Cheney, Amir Shaikhha
  为什么重要：有系统实现，贴近真实场景，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Bridging the Gap: Cardinality Estimation for Semantic Queries on Unstructured Data](https://dl.acm.org/doi/pdf/10.1145/3802024)
  来源：PACMMOD | 日期：2026-05-18 | 评分：22 | 作者：Shihui Xu, Yi-Xiang Wang, G Li
  为什么重要：有实验评估，贴近真实场景，关注延迟，涉及基数估计
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [Why We Created Yet Another Memory Framework: Understanding MGA's Role in Next-Gen Database Systems](https://arxiv.org/pdf/2608.22853v1.pdf)
  来源：arXiv cs.DB | 日期：2026-08-24 | 评分：20 | 作者：Vikramraj Sitpal, Pei Li, Shubham Kumar, Somansh Reddy Satish
  为什么重要：有系统实现，带生产环境信号，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Multimodal Knowledge Graph Completion via Relation-Aware Negative Sampling with Diffusion-Based Interpolation](https://www.vldb.org/pvldb/vol19/p1949-li.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：19 | 作者：Qian Ma, Linfei Dai, Zhongming Yao, Yu Gu
  为什么重要：带基准测试，涉及基数估计
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [Redbench: Workload Synthesis from Cloud Traces](https://www.vldb.org/pvldb/vol19/p2113-wehrstein.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：19 | 作者：Johannes Wehrstein, Roman Heinrich, Mihail Stoian, Skander Krid
  为什么重要：有系统实现，带基准测试，有实验评估，贴近真实场景
  摘要判断：这篇工作主要落在 OLAP / 分析执行。更偏系统实现。
- [Deep Research is the New Analytics System: Towards Building the Runtime for AI-Driven Analytics.](https://arxiv.org/pdf/2509.02751)
  来源：CIDR | 日期：2025-09-02 | 评分：18 | 作者：Matthew Russo, Tim Kraska
  为什么重要：有系统实现，有原型实现
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
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
- [Teach Your DBMS to LIKE Strings: Fast and General Pattern Matching for Wildcard Joins and Filters](https://arxiv.org/pdf/2608.23307v1.pdf)
  来源：arXiv cs.DB | 日期：2026-08-24 | 评分：18 | 作者：Lam-Duy Nguyen, Pascal Ginter, Duc-Tam Nguyen, Thomas Neumann
  为什么重要：有系统实现，带基准测试，有实验评估，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。

## 说明

- PVLDB 只输出 VLDB 官方域名链接；若没有可验证 PDF，则回退到对应 volume 的官方 contributions 页面。
- PACMMOD 使用 OpenAlex 摘要，并根据 DOI 生成 ACM PDF 直链。
- ICDE 与 CIDR 通过 DBLP 发现最新届次，再用 DOI/标题到 OpenAlex 补摘要。
- 当前排序依据：来源权重、和你关注方向的相关度、系统实现/实验/生产信号。
- 标题保留原文，报告说明统一使用中文。
