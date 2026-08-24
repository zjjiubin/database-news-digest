# 数据库研究追踪简报

- 生成时间：2026-08-24 02:20:22 UTC
- 跟踪渠道：arXiv cs.DB、PVLDB、PACMMOD、ICDE、CIDR、DBLP
- 本次纳入论文：65 篇
- 来源分布：arXiv cs.DB 24 篇；PVLDB 20 篇；PACMMOD 15 篇；CIDR 6 篇

## 本期最值得优先阅读

1. [L3: A GPU-Native Co-Designed Data Format for Learned Lossless Lightweight Compression](https://dl.acm.org/doi/pdf/10.1145/3802078)
   - 来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 分类：存储引擎、查询优化、OLAP / 分析执行
   - 为什么值得看：关注吞吐，关注延迟，涉及压缩
   - 摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。建议先看问题定义和实验设置。
2. [O3-LSM: Maximizing Disaggregated LSM Write Performance via Three-Layer Offloading](https://dl.acm.org/doi/pdf/10.1145/3802093)
   - 来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 分类：存储引擎、查询优化
   - 为什么值得看：有实验评估，关注吞吐，关注延迟，涉及连接处理
   - 摘要判断：这篇工作主要落在 存储引擎、查询优化。摘要里有较强实验评估信号。
3. [Subgraph Enumeration: Beyond Tree Decomposition](https://www.vldb.org/pvldb/vol19/p2303-li.pdf)
   - 来源：PVLDB | 日期：2026-05-01 | 评分：20 | 分类：查询优化
   - 为什么值得看：有系统实现，有实验评估，贴近真实场景，涉及代价模型
   - 摘要判断：这篇工作主要落在 查询优化。更偏系统实现。
4. [Multimodal Knowledge Graph Completion via Relation-Aware Negative Sampling with Diffusion-Based Interpolation](https://www.vldb.org/pvldb/vol19/p1949-li.pdf)
   - 来源：PVLDB | 日期：2026-05-01 | 评分：19 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：带基准测试，涉及基数估计
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
5. [Redbench: Workload Synthesis from Cloud Traces](https://www.vldb.org/pvldb/vol19/p2113-wehrstein.pdf)
   - 来源：PVLDB | 日期：2026-05-01 | 评分：19 | 分类：OLAP / 分析执行
   - 为什么值得看：有系统实现，带基准测试，有实验评估，贴近真实场景
   - 摘要判断：这篇工作主要落在 OLAP / 分析执行。更偏系统实现。
6. [MUFASA: Fast and Accurate Multivariate Time-Series Clustering](https://dl.acm.org/doi/pdf/10.1145/3802090)
   - 来源：PACMMOD | 日期：2026-05-18 | 评分：19 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：带基准测试，有实验评估，涉及连接处理
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
7. [ScaleSense: Cost-Intelligent Scaling Framework via Learned Resource Estimation in Alibaba AnalyticDB](https://arxiv.org/pdf/2608.07945v1.pdf)
   - 来源：arXiv cs.DB | 日期：2026-08-08 | 评分：19 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有实验评估，带生产环境信号，关注延迟，涉及连接处理
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
8. [Deep Research is the New Analytics System: Towards Building the Runtime for AI-Driven Analytics.](https://arxiv.org/pdf/2509.02751)
   - 来源：CIDR | 日期：2025-09-02 | 评分：18 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，有原型实现
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。

## 存储引擎

- [L3: A GPU-Native Co-Designed Data Format for Learned Lossless Lightweight Compression](https://dl.acm.org/doi/pdf/10.1145/3802078)
  来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 作者：Youyang Xia, Feng Zhang, Junda Pan, Yihao Liu
  为什么重要：关注吞吐，关注延迟，涉及压缩
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。建议先看问题定义和实验设置。
- [O3-LSM: Maximizing Disaggregated LSM Write Performance via Three-Layer Offloading](https://dl.acm.org/doi/pdf/10.1145/3802093)
  来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 作者：Qi Lin, Gangqi Huang, Te Guo, Chang Guo
  为什么重要：有实验评估，关注吞吐，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 存储引擎、查询优化。摘要里有较强实验评估信号。
- [Swan: Hybrid MVCC Management for Efficient Transaction Processing in LSM-Tree-Based Key-Value Stores](https://www.vldb.org/pvldb/vol19/p1977-guo.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：18 | 作者：Yang Guo, Jin Xue, Zili Shao
  为什么重要：有系统实现，有原型实现，关注延迟
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [Dynamic Read & Write Optimization with TurtleKV](https://www.vldb.org/pvldb/vol19/p1907-astolfi.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：16 | 作者：Tony Astolfi, Vidya Silai, Darby Huye, Lan Liu
  为什么重要：有系统实现，有原型实现
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [High-Performance DBMSs with io_uring: When and How to Use It](https://www.vldb.org/pvldb/vol19/p2317-jasny.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：16 | 作者：Matthias Jasny, Muhammad El-Hindi, Tobias Ziegler, Viktor Leis
  为什么重要：有系统实现，关注吞吐
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [Kirin: Efficient In-Storage Learned Compaction for LSM-Trees via System-Algorithm Co-Design](https://www.vldb.org/pvldb/vol19/p1991-wang.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：16 | 作者：Guifeng Wang, Shengan Zheng, Penghao Sun, Pu Jin
  为什么重要：关注吞吐，关注延迟
  摘要判断：这篇工作主要落在 存储引擎。建议先看问题定义和实验设置。
- [LINE: A Learned Index with Group-Enhanced Leaves and Cache-Optimized Inner Tree](https://dl.acm.org/doi/pdf/10.1145/3802080)
  来源：PACMMOD | 日期：2026-05-18 | 评分：16 | 作者：Leying Chen, Shimin Chen
  为什么重要：贴近真实场景，关注延迟
  摘要判断：这篇工作主要落在 存储引擎。和真实业务或生产环境关联较强。
- [Building An Integrated Vector Database System in PostgreSQL](https://arxiv.org/pdf/2608.15994v1.pdf)
  来源：arXiv cs.DB | 日期：2026-08-17 | 评分：15 | 作者：Jiayi Liu, Te Guo, Jianguo Wang
  为什么重要：有系统实现，贴近真实场景，关注吞吐
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [HarborMaster: Rollback Detection for Trusted Distributed Computing](https://www.vldb.org/pvldb/vol19/p2126-mishra.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：14 | 作者：Shubham Mishra, Alexander Thomas, Nurzhan Abdrassilov, Kaiyuan Chen
  为什么重要：有系统实现
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [A Multi-tenant Relational OLTP Database at Salesforce.](https://link.springer.com/content/pdf/10.1007/s13222-010-0033-3.pdf)
  来源：CIDR | 日期：2010-11-05 | 评分：13 | 作者：Vaibhav Arora, Subho Chatterjee, Terry Chong, Thomas Fanghaenel
  为什么重要：有系统实现
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。

## 查询优化

- [L3: A GPU-Native Co-Designed Data Format for Learned Lossless Lightweight Compression](https://dl.acm.org/doi/pdf/10.1145/3802078)
  来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 作者：Youyang Xia, Feng Zhang, Junda Pan, Yihao Liu
  为什么重要：关注吞吐，关注延迟，涉及压缩
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。建议先看问题定义和实验设置。
- [O3-LSM: Maximizing Disaggregated LSM Write Performance via Three-Layer Offloading](https://dl.acm.org/doi/pdf/10.1145/3802093)
  来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 作者：Qi Lin, Gangqi Huang, Te Guo, Chang Guo
  为什么重要：有实验评估，关注吞吐，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 存储引擎、查询优化。摘要里有较强实验评估信号。
- [Subgraph Enumeration: Beyond Tree Decomposition](https://www.vldb.org/pvldb/vol19/p2303-li.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：20 | 作者：Qiyan Li, Jeffrey Xu Yu, Zongyan He
  为什么重要：有系统实现，有实验评估，贴近真实场景，涉及代价模型
  摘要判断：这篇工作主要落在 查询优化。更偏系统实现。
- [Multimodal Knowledge Graph Completion via Relation-Aware Negative Sampling with Diffusion-Based Interpolation](https://www.vldb.org/pvldb/vol19/p1949-li.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：19 | 作者：Qian Ma, Linfei Dai, Zhongming Yao, Yu Gu
  为什么重要：带基准测试，涉及基数估计
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [MUFASA: Fast and Accurate Multivariate Time-Series Clustering](https://dl.acm.org/doi/pdf/10.1145/3802090)
  来源：PACMMOD | 日期：2026-05-18 | 评分：19 | 作者：Hui Li, John Paparrizos
  为什么重要：带基准测试，有实验评估，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [ScaleSense: Cost-Intelligent Scaling Framework via Learned Resource Estimation in Alibaba AnalyticDB](https://arxiv.org/pdf/2608.07945v1.pdf)
  来源：arXiv cs.DB | 日期：2026-08-08 | 评分：19 | 作者：Yifan Wu, Yuhan Li, Zhenhua Wang, Ke Chen
  为什么重要：有实验评估，带生产环境信号，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [Deep Research is the New Analytics System: Towards Building the Runtime for AI-Driven Analytics.](https://arxiv.org/pdf/2509.02751)
  来源：CIDR | 日期：2025-09-02 | 评分：18 | 作者：Matthew Russo, Tim Kraska
  为什么重要：有系统实现，有原型实现
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [BaCon: Efficient Batch Processing of Counting Queries](https://www.vldb.org/pvldb/vol19/p2508-liu.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：18 | 作者：Yuxi Liu, Xiao Hu, Pankaj Agarwal, Jun Yang
  为什么重要：有系统实现，有实验评估，涉及基数估计，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化。更偏系统实现。
- [Compass: SLO-Aware Query Planner for Compound AI Serving at Scale](https://www.vldb.org/pvldb/vol19/p1921-lai.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：18 | 作者：Banruo Liu, Wei‐Yu Lin, Minghao Fang, Yihan Jiang
  为什么重要：有实验评估，贴近真实场景，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化。摘要里有较强实验评估信号。
- [Testing Graph Databases via Transformations Between Fixed-Length and Variable-Length Queries](https://www.vldb.org/pvldb/vol19/p2234-gui.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：18 | 作者：Jinxin Gui, Yuanhong Lan, Longlong Lu, Yifei Lu
  为什么重要：有系统实现，有实验评估，贴近真实场景，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化。更偏系统实现。

## OLAP / 分析执行

- [L3: A GPU-Native Co-Designed Data Format for Learned Lossless Lightweight Compression](https://dl.acm.org/doi/pdf/10.1145/3802078)
  来源：PACMMOD | 日期：2026-05-18 | 评分：23 | 作者：Youyang Xia, Feng Zhang, Junda Pan, Yihao Liu
  为什么重要：关注吞吐，关注延迟，涉及压缩
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。建议先看问题定义和实验设置。
- [Multimodal Knowledge Graph Completion via Relation-Aware Negative Sampling with Diffusion-Based Interpolation](https://www.vldb.org/pvldb/vol19/p1949-li.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：19 | 作者：Qian Ma, Linfei Dai, Zhongming Yao, Yu Gu
  为什么重要：带基准测试，涉及基数估计
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [Redbench: Workload Synthesis from Cloud Traces](https://www.vldb.org/pvldb/vol19/p2113-wehrstein.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：19 | 作者：Johannes Wehrstein, Roman Heinrich, Mihail Stoian, Skander Krid
  为什么重要：有系统实现，带基准测试，有实验评估，贴近真实场景
  摘要判断：这篇工作主要落在 OLAP / 分析执行。更偏系统实现。
- [MUFASA: Fast and Accurate Multivariate Time-Series Clustering](https://dl.acm.org/doi/pdf/10.1145/3802090)
  来源：PACMMOD | 日期：2026-05-18 | 评分：19 | 作者：Hui Li, John Paparrizos
  为什么重要：带基准测试，有实验评估，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [ScaleSense: Cost-Intelligent Scaling Framework via Learned Resource Estimation in Alibaba AnalyticDB](https://arxiv.org/pdf/2608.07945v1.pdf)
  来源：arXiv cs.DB | 日期：2026-08-08 | 评分：19 | 作者：Yifan Wu, Yuhan Li, Zhenhua Wang, Ke Chen
  为什么重要：有实验评估，带生产环境信号，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [Deep Research is the New Analytics System: Towards Building the Runtime for AI-Driven Analytics.](https://arxiv.org/pdf/2509.02751)
  来源：CIDR | 日期：2025-09-02 | 评分：18 | 作者：Matthew Russo, Tim Kraska
  为什么重要：有系统实现，有原型实现
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Factorized and Vectorized Execution: Optimizing Analytical and Semantic Queries over Relations](https://dl.acm.org/doi/pdf/10.1145/3802055)
  来源：PACMMOD | 日期：2026-05-18 | 评分：18 | 作者：Sunny Yasser, Anas Dorbani, Amine Mhedhbi
  为什么重要：涉及向量化执行，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。适合关注分析执行链路。
- [Translytical Processing via DB-OS Co-designed Buffer: Cross-Engine Isolation and Tunable Update Visibility for HTAP](https://dl.acm.org/doi/pdf/10.1145/3802123)
  来源：PACMMOD | 日期：2026-05-18 | 评分：18 | 作者：Dongkwang ‍Kim, Keonwook Park, Cheolmin Choi, Hyungsoo Jung
  为什么重要：有系统实现，关注延迟，涉及向量化执行
  摘要判断：这篇工作主要落在 OLAP / 分析执行。更偏系统实现。
- [Workload-Aware Incremental Reclustering in Cloud Data Warehouses](https://dl.acm.org/doi/pdf/10.1145/3802127)
  来源：PACMMOD | 日期：2026-05-18 | 评分：18 | 作者：Yipeng Liu, Renfei Zhou, Jiaqi Yan, Huanchen Zhang
  为什么重要：有原型实现，带基准测试，贴近真实场景
  摘要判断：这篇工作主要落在 OLAP / 分析执行。更偏系统实现。
- [PystachIO: Efficient Distributed GPU Query Processing with PyTorch over Fast Networks & Fast Storage](https://www.vldb.org/pvldb/vol19/p2494-boeschen.pdf)
  来源：PVLDB | 日期：2026-05-01 | 评分：17 | 作者：Jigao Luo, Nils Boeschen, Muhammad El-Hindi, Carsten Binnig
  为什么重要：有系统实现，有原型实现，有实验评估
  摘要判断：这篇工作主要落在 OLAP / 分析执行。更偏系统实现。

## 说明

- PVLDB 只输出 VLDB 官方域名链接；若没有可验证 PDF，则回退到对应 volume 的官方 contributions 页面。
- PACMMOD 使用 OpenAlex 摘要，并根据 DOI 生成 ACM PDF 直链。
- ICDE 与 CIDR 通过 DBLP 发现最新届次，再用 DOI/标题到 OpenAlex 补摘要。
- 当前排序依据：来源权重、和你关注方向的相关度、系统实现/实验/生产信号。
- 标题保留原文，报告说明统一使用中文。
