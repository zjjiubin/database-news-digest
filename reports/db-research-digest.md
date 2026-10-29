# 数据库研究追踪简报

- 生成时间：2026-10-29 06:43:21 UTC
- 跟踪渠道：arXiv cs.DB、PVLDB、PACMMOD、ICDE、CIDR、DBLP
- 本次纳入论文：75 篇
- 来源分布：arXiv cs.DB 35 篇；PVLDB 21 篇；PACMMOD 19 篇

## 本期最值得优先阅读

1. [Why We Created Yet Another Memory Framework: Understanding MGA's Role in Next-Gen Database Systems](https://www.vldb.org/pvldb/vol19/p4413-sitpal.pdf)
   - 来源：PVLDB | 日期：2026-08-01 | 评分：23 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，带生产环境信号，关注延迟，涉及连接处理
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
2. [OceanBase Bacchus: A High-Performance and Scalable Cloud-Native Shared Storage Architecture for Multi-Cloud](https://www.vldb.org/pvldb/vol19/p4089-xu.pdf)
   - 来源：PVLDB | 日期：2026-08-01 | 评分：22 | 分类：存储引擎、OLAP / 分析执行
   - 为什么值得看：有系统实现，带生产环境信号，涉及解耦式架构
   - 摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
3. [One Ring to Shuffle Them All: Scalable Intra-Process Data Redistribution with Ring-Buffer Shuffle in Redpanda Oxla](https://www.vldb.org/pvldb/volumes/19/contributions)
   - 来源：PVLDB | 日期：2026-08-01 | 评分：22 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，有实验评估，带生产环境信号，涉及连接处理
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
4. [ScaleSense: Cost-Intelligent Scaling Framework via Learned Resource Estimation in Alibaba AnalyticDB](https://www.vldb.org/pvldb/vol19/p4063-wu.pdf)
   - 来源：PVLDB | 日期：2026-08-01 | 评分：22 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有实验评估，带生产环境信号，关注延迟，涉及连接处理
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
5. [E-LQO: A Comprehensive Energy Evaluation Framework for Learned Query Optimization](https://dl.acm.org/doi/pdf/10.1145/3837107)
   - 来源：PACMMOD | 日期：2026-09-24 | 评分：22 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，带基准测试，有实验评估，关注延迟
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
6. [EASE: Resource-aware Query Scheduling across Heterogeneous Cloud Compute Services](https://dl.acm.org/doi/pdf/10.1145/3837108)
   - 来源：PACMMOD | 日期：2026-09-24 | 评分：22 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，有实验评估，关注延迟，涉及代价模型
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
7. [Exploiting Structural Properties for Efficient Constraint-Aware HNSW Hyperparameter Tuning](https://dl.acm.org/doi/pdf/10.1145/3837111)
   - 来源：PACMMOD | 日期：2026-09-24 | 评分：22 | 分类：查询优化
   - 为什么值得看：有系统实现，带生产环境信号，关注吞吐，关注延迟
   - 摘要判断：这篇工作主要落在 查询优化。更偏系统实现。
8. [Demonstrating GenDB: Instance-Optimized and Customized Query Processing Code Generation via LLM Agents](https://www.vldb.org/pvldb/vol19/p4602-lao.pdf)
   - 来源：PVLDB | 日期：2026-08-01 | 评分：21 | 分类：查询优化、OLAP / 分析执行
   - 为什么值得看：有系统实现，有原型实现，带基准测试
   - 摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。

## 存储引擎

- [OceanBase Bacchus: A High-Performance and Scalable Cloud-Native Shared Storage Architecture for Multi-Cloud](https://www.vldb.org/pvldb/vol19/p4089-xu.pdf)
  来源：PVLDB | 日期：2026-08-01 | 评分：22 | 作者：Quanqing Xu, Mingqiang Zhuang, Chuanhui Yang, Quanwei Wan
  为什么重要：有系统实现，带生产环境信号，涉及解耦式架构
  摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
- [Future-Proof Data Systems](https://www.vldb.org/pvldb/vol19/p4965-giceva.pdf)
  来源：PVLDB | 日期：2026-08-01 | 评分：20 | 作者：Jana Giceva
  为什么重要：有系统实现
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
- [IORM: Hierarchical I/O Governance for Thousands of Consolidated Databases on Oracle Exadata](https://www.vldb.org/pvldb/vol19/p4440-chowdhury.pdf)
  来源：PVLDB | 日期：2026-08-01 | 评分：20 | 作者：Rajarshi Chowdhury, Akshay Shah, Zakaria Alrmaih, Chenhao Guo
  为什么重要：有系统实现，有实验评估，带生产环境信号，关注延迟
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [HeraDB: Towards Real-time Analysis of Transaction-Centric HTAP with CPU-GPU Hybrid Query Execution](https://dl.acm.org/doi/pdf/10.1145/3837115)
  来源：PACMMOD | 日期：2026-09-24 | 评分：20 | 作者：Zeshun Peng, Qincheng Cai, Siyuan Wei, Weixing Zhou
  为什么重要：有实验评估，关注吞吐，关注延迟
  摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。摘要里有较强实验评估信号。
- [Real-Time SQL Plan Management in Oracle](https://www.vldb.org/pvldb/vol19/p4169-kunjibettu.pdf)
  来源：PVLDB | 日期：2026-08-01 | 评分：17 | 作者：Sunil Chakkappen, Mohamed Ziauddin, Hong Su, Shreya Kunjibettu
  为什么重要：有系统实现，带生产环境信号
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [Near-Optimal Per-Key Streaming Quantile Estimation](https://dl.acm.org/doi/pdf/10.1145/3837118)
  来源：PACMMOD | 日期：2026-09-24 | 评分：17 | 作者：Jiarui Guo, Feiyu Wang, Zhuochen Fan, Tong Yang
  为什么重要：关注延迟
  摘要判断：这篇工作主要落在 存储引擎、查询优化。建议先看问题定义和实验设置。
- [PrairieFire: Igniting High-Throughput Updates in Large-Scale Approximate Nearest Neighbor Search](https://arxiv.org/pdf/2610.23232v1.pdf)
  来源：arXiv cs.DB | 日期：2026-10-16 | 评分：17 | 作者：Yuchen Huang, Baiteng Ma, Yiping Sun, Xiao Chen
  为什么重要：有系统实现，有实验评估，带生产环境信号，关注吞吐
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [PRDCC: PRedictive Deterministic Concurrency Control under High Contention](https://dl.acm.org/doi/pdf/10.1145/3837121)
  来源：PACMMOD | 日期：2026-09-24 | 评分：16 | 作者：Yu Yan, Zhiyu Dai, Zekai Lv, Sijia Cheng
  为什么重要：有系统实现，关注吞吐
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [MetaDB: Putting File-System Structure Back into Distributed Databases](https://arxiv.org/pdf/2610.32247v1.pdf)
  来源：arXiv cs.DB | 日期：2026-10-23 | 评分：16 | 作者：Zebin Ren, Biao Cao, Kang Chen, Zhihui Yin
  为什么重要：有系统实现，带生产环境信号，关注吞吐
  摘要判断：这篇工作主要落在 存储引擎。更偏系统实现。
- [Back to the Future: The Evolving Universal Relation Model](https://arxiv.org/pdf/2610.36833v1.pdf)
  来源：arXiv cs.DB | 日期：2026-10-27 | 评分：16 | 作者：Nan Tang, Haixun Wang
  为什么重要：涉及连接处理
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。和事务/并发控制设计相关。

## 查询优化

- [Why We Created Yet Another Memory Framework: Understanding MGA's Role in Next-Gen Database Systems](https://www.vldb.org/pvldb/vol19/p4413-sitpal.pdf)
  来源：PVLDB | 日期：2026-08-01 | 评分：23 | 作者：Vikramraj Sitpal, Pei Li, Shubham Kumar, Somansh Reddy Satish
  为什么重要：有系统实现，带生产环境信号，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [One Ring to Shuffle Them All: Scalable Intra-Process Data Redistribution with Ring-Buffer Shuffle in Redpanda Oxla](https://www.vldb.org/pvldb/volumes/19/contributions)
  来源：PVLDB | 日期：2026-08-01 | 评分：22 | 作者：Adam Szymański, Tyler Akidau
  为什么重要：有系统实现，有实验评估，带生产环境信号，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [ScaleSense: Cost-Intelligent Scaling Framework via Learned Resource Estimation in Alibaba AnalyticDB](https://www.vldb.org/pvldb/vol19/p4063-wu.pdf)
  来源：PVLDB | 日期：2026-08-01 | 评分：22 | 作者：Yifan Wu, Yuhan Li, Zhenhua Wang, Ke Chen
  为什么重要：有实验评估，带生产环境信号，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [E-LQO: A Comprehensive Energy Evaluation Framework for Learned Query Optimization](https://dl.acm.org/doi/pdf/10.1145/3837107)
  来源：PACMMOD | 日期：2026-09-24 | 评分：22 | 作者：Zibo Liang, Quanqing Xu, Xu Chen, Junming Chen
  为什么重要：有系统实现，带基准测试，有实验评估，关注延迟
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [EASE: Resource-aware Query Scheduling across Heterogeneous Cloud Compute Services](https://dl.acm.org/doi/pdf/10.1145/3837108)
  来源：PACMMOD | 日期：2026-09-24 | 评分：22 | 作者：Wenbo Li, Haoqiong Bian, Chao Zhang, Guoliang Li
  为什么重要：有系统实现，有实验评估，关注延迟，涉及代价模型
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Exploiting Structural Properties for Efficient Constraint-Aware HNSW Hyperparameter Tuning](https://dl.acm.org/doi/pdf/10.1145/3837111)
  来源：PACMMOD | 日期：2026-09-24 | 评分：22 | 作者：Geon Choi, Hoeun Lee, Jaeyoung Do
  为什么重要：有系统实现，带生产环境信号，关注吞吐，关注延迟
  摘要判断：这篇工作主要落在 查询优化。更偏系统实现。
- [Demonstrating GenDB: Instance-Optimized and Customized Query Processing Code Generation via LLM Agents](https://www.vldb.org/pvldb/vol19/p4602-lao.pdf)
  来源：PVLDB | 日期：2026-08-01 | 评分：21 | 作者：Jiale Lao, Immanuel Trummer
  为什么重要：有系统实现，有原型实现，带基准测试
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Future-Proof Data Systems](https://www.vldb.org/pvldb/vol19/p4965-giceva.pdf)
  来源：PVLDB | 日期：2026-08-01 | 评分：20 | 作者：Jana Giceva
  为什么重要：有系统实现
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
- [StaleFlow: Staleness-Aware Data Management for Mitigating Data Skewness in Fully Disaggregated RL Post-Training](https://dl.acm.org/doi/pdf/10.1145/3837125)
  来源：PACMMOD | 日期：2026-09-24 | 评分：20 | 作者：Haoyang Li, Sheng Lin, Fangcheng Fu, Yuming Zhou
  为什么重要：有系统实现，有实验评估，关注吞吐，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化。更偏系统实现。
- [Carnot: Interpretable, Interactive, and Optimized Execution of Deep Research Queries](https://www.vldb.org/pvldb/vol19/p4642-russo.pdf)
  来源：PVLDB | 日期：2026-08-01 | 评分：19 | 作者：Matthew Russo, Yash Agarwal, Tianyu Li, Zhuohan Gu
  为什么重要：有系统实现，关注延迟
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。

## OLAP / 分析执行

- [Why We Created Yet Another Memory Framework: Understanding MGA's Role in Next-Gen Database Systems](https://www.vldb.org/pvldb/vol19/p4413-sitpal.pdf)
  来源：PVLDB | 日期：2026-08-01 | 评分：23 | 作者：Vikramraj Sitpal, Pei Li, Shubham Kumar, Somansh Reddy Satish
  为什么重要：有系统实现，带生产环境信号，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [OceanBase Bacchus: A High-Performance and Scalable Cloud-Native Shared Storage Architecture for Multi-Cloud](https://www.vldb.org/pvldb/vol19/p4089-xu.pdf)
  来源：PVLDB | 日期：2026-08-01 | 评分：22 | 作者：Quanqing Xu, Mingqiang Zhuang, Chuanhui Yang, Quanwei Wan
  为什么重要：有系统实现，带生产环境信号，涉及解耦式架构
  摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。更偏系统实现。
- [One Ring to Shuffle Them All: Scalable Intra-Process Data Redistribution with Ring-Buffer Shuffle in Redpanda Oxla](https://www.vldb.org/pvldb/volumes/19/contributions)
  来源：PVLDB | 日期：2026-08-01 | 评分：22 | 作者：Adam Szymański, Tyler Akidau
  为什么重要：有系统实现，有实验评估，带生产环境信号，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [ScaleSense: Cost-Intelligent Scaling Framework via Learned Resource Estimation in Alibaba AnalyticDB](https://www.vldb.org/pvldb/vol19/p4063-wu.pdf)
  来源：PVLDB | 日期：2026-08-01 | 评分：22 | 作者：Yifan Wu, Yuhan Li, Zhenhua Wang, Ke Chen
  为什么重要：有实验评估，带生产环境信号，关注延迟，涉及连接处理
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。摘要里有较强实验评估信号。
- [E-LQO: A Comprehensive Energy Evaluation Framework for Learned Query Optimization](https://dl.acm.org/doi/pdf/10.1145/3837107)
  来源：PACMMOD | 日期：2026-09-24 | 评分：22 | 作者：Zibo Liang, Quanqing Xu, Xu Chen, Junming Chen
  为什么重要：有系统实现，带基准测试，有实验评估，关注延迟
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [EASE: Resource-aware Query Scheduling across Heterogeneous Cloud Compute Services](https://dl.acm.org/doi/pdf/10.1145/3837108)
  来源：PACMMOD | 日期：2026-09-24 | 评分：22 | 作者：Wenbo Li, Haoqiong Bian, Chao Zhang, Guoliang Li
  为什么重要：有系统实现，有实验评估，关注延迟，涉及代价模型
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Demonstrating GenDB: Instance-Optimized and Customized Query Processing Code Generation via LLM Agents](https://www.vldb.org/pvldb/vol19/p4602-lao.pdf)
  来源：PVLDB | 日期：2026-08-01 | 评分：21 | 作者：Jiale Lao, Immanuel Trummer
  为什么重要：有系统实现，有原型实现，带基准测试
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。
- [Future-Proof Data Systems](https://www.vldb.org/pvldb/vol19/p4965-giceva.pdf)
  来源：PVLDB | 日期：2026-08-01 | 评分：20 | 作者：Jana Giceva
  为什么重要：有系统实现
  摘要判断：这篇工作主要落在 存储引擎、查询优化、OLAP / 分析执行。更偏系统实现。
- [HeraDB: Towards Real-time Analysis of Transaction-Centric HTAP with CPU-GPU Hybrid Query Execution](https://dl.acm.org/doi/pdf/10.1145/3837115)
  来源：PACMMOD | 日期：2026-09-24 | 评分：20 | 作者：Zeshun Peng, Qincheng Cai, Siyuan Wei, Weixing Zhou
  为什么重要：有实验评估，关注吞吐，关注延迟
  摘要判断：这篇工作主要落在 存储引擎、OLAP / 分析执行。摘要里有较强实验评估信号。
- [Carnot: Interpretable, Interactive, and Optimized Execution of Deep Research Queries](https://www.vldb.org/pvldb/vol19/p4642-russo.pdf)
  来源：PVLDB | 日期：2026-08-01 | 评分：19 | 作者：Matthew Russo, Yash Agarwal, Tianyu Li, Zhuohan Gu
  为什么重要：有系统实现，关注延迟
  摘要判断：这篇工作主要落在 查询优化、OLAP / 分析执行。更偏系统实现。

## 说明

- PVLDB 只输出 VLDB 官方域名链接；若没有可验证 PDF，则回退到对应 volume 的官方 contributions 页面。
- PACMMOD 使用 OpenAlex 摘要，并根据 DOI 生成 ACM PDF 直链。
- ICDE 与 CIDR 通过 DBLP 发现最新届次，再用 DOI/标题到 OpenAlex 补摘要。
- 当前排序依据：来源权重、和你关注方向的相关度、系统实现/实验/生产信号。
- 标题保留原文，报告说明统一使用中文。
