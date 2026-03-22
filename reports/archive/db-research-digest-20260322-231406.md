# Database Research Digest

- Run time: 2026-03-22 23:14:06 CST
- Sources this run: arXiv cs.DB
- Candidate papers fetched: 18

## Top 5 This Run

1. [Sema: A High-performance System for LLM-based Semantic Query Processing](https://arxiv.org/abs/2603.11622v1)
   - arXiv cs.DB | 2026-03-12 | score 16 | query optimization, olap
   - Why it stands out: system, latency, cost model
   - Summary: The integration of Large Language Models (LLMs) into data analytics has unlocked powerful capabilities for reasoning over bulk structured and unstructured data. However, existing systems typically rely on either DataFrame primitives,...
2. [MICRO: A Lightweight Middleware for Optimizing Cross-store Cross-model Graph-Relation Joins [Technical Report]](https://arxiv.org/abs/2603.13835v1)
   - arXiv cs.DB | 2026-03-14 | score 14 | query optimization
   - Why it stands out: system, benchmark, real-world, join
   - Summary: Modern data applications increasingly involve heterogeneous data managed in different models and stored across disparate database engines, often deployed as separate installs. Limited research has addressed cross-model query processing...
3. [Nova: Scalable Streaming Join Placement and Parallelization in Resource-Constrained Geo-Distributed Environments](https://arxiv.org/abs/2603.15453v1)
   - arXiv cs.DB | 2026-03-16 | score 14 | query optimization
   - Why it stands out: real-world, throughput, latency, join
   - Summary: Real-time data processing in large geo-distributed applications, like the Internet of Things (IoT), increasingly shifts computation from the cloud to the network edge to reduce latency and mitigate network congestion. In this setting,...
4. [Practical MCTS-based Query Optimization: A Reproducibility Study and new MCTS algorithm for complex queries](https://arxiv.org/abs/2603.16474v1)
   - arXiv cs.DB | 2026-03-17 | score 14 | query optimization
   - Why it stands out: benchmark, real-world, cost model, join
   - Summary: Monte Carlo Tree Search (MCTS) has been proposed as a transformative approach to join-order optimization in database query processing, with recent frameworks such as AlphaJoin and HyperQO claiming to outperform traditional methods....
5. [MFTune: An Efficient Multi-fidelity Framework for Spark SQL Configuration Tuning](https://arxiv.org/abs/2603.16450v1)
   - arXiv cs.DB | 2026-03-17 | score 13 | olap
   - Why it stands out: system, benchmark, evaluation, compression
   - Summary: Apache Spark SQL is a cornerstone of modern big data analytics.However,optimizing Spark SQL performance is challenging due to its vast configuration space and the prohibitive cost of evaluating massive workloads. Existing tuning methods...

## Storage Engine

- [Concurrency Control as a Service](https://arxiv.org/abs/2603.13897v1)
  Source: arXiv cs.DB | Date: 2026-03-14 | Score: 11 | Authors: Weixing Zhou, Yanfeng Zhang, Xinji Zhou, Zhiyou Wang
  Why it matters: throughput, latency
  Abstract summary: Existing disaggregated databases separate execution and storage layers, enabling independent and elastic scaling of resources. In most cases, this design makes transaction concurrency control (CC) a critical bottleneck, which demands...
- [Bounding the Fragmentation of B-Trees Subject to Batched Insertions](https://arxiv.org/abs/2603.12211v1)
  Source: arXiv cs.DB | Date: 2026-03-12 | Score: 7 | Authors: Michael A. Bender, Aaron Bernstein, Nairen Cao, Alex Conway
  Why it matters: high topical relevance
  Abstract summary: The issue of internal fragmentation in data structures is a fundamental challenge in database design. A seminal result of Yao in this field shows that evenly splitting the leaves of a B-tree against a workload of uniformly random...

## Query Optimization

- [Sema: A High-performance System for LLM-based Semantic Query Processing](https://arxiv.org/abs/2603.11622v1)
  Source: arXiv cs.DB | Date: 2026-03-12 | Score: 16 | Authors: Kangkang Qi, Dongyang Xie, Wenbo Li, Hao Zhang
  Why it matters: system, latency, cost model
  Abstract summary: The integration of Large Language Models (LLMs) into data analytics has unlocked powerful capabilities for reasoning over bulk structured and unstructured data. However, existing systems typically rely on either DataFrame primitives,...
- [MICRO: A Lightweight Middleware for Optimizing Cross-store Cross-model Graph-Relation Joins [Technical Report]](https://arxiv.org/abs/2603.13835v1)
  Source: arXiv cs.DB | Date: 2026-03-14 | Score: 14 | Authors: Xiuwen Zheng, Arun Kumar, Amarnath Gupta
  Why it matters: system, benchmark, real-world, join
  Abstract summary: Modern data applications increasingly involve heterogeneous data managed in different models and stored across disparate database engines, often deployed as separate installs. Limited research has addressed cross-model query processing...
- [Nova: Scalable Streaming Join Placement and Parallelization in Resource-Constrained Geo-Distributed Environments](https://arxiv.org/abs/2603.15453v1)
  Source: arXiv cs.DB | Date: 2026-03-16 | Score: 14 | Authors: Xenofon Chatziliadis, Eleni Tzirita Zacharatou, Samira Akili, Alphan Eracar
  Why it matters: real-world, throughput, latency, join
  Abstract summary: Real-time data processing in large geo-distributed applications, like the Internet of Things (IoT), increasingly shifts computation from the cloud to the network edge to reduce latency and mitigate network congestion. In this setting,...
- [Practical MCTS-based Query Optimization: A Reproducibility Study and new MCTS algorithm for complex queries](https://arxiv.org/abs/2603.16474v1)
  Source: arXiv cs.DB | Date: 2026-03-17 | Score: 14 | Authors: Vladimir Burlakov, Alena Rybakina, Sergey Kudashev, Konstantin Gilev
  Why it matters: benchmark, real-world, cost model, join
  Abstract summary: Monte Carlo Tree Search (MCTS) has been proposed as a transformative approach to join-order optimization in database query processing, with recent frameworks such as AlphaJoin and HyperQO claiming to outperform traditional methods....
- [AgenticScholar: Agentic Data Management with Pipeline Orchestration for Scholarly Corpora](https://arxiv.org/abs/2603.13774v1)
  Source: arXiv cs.DB | Date: 2026-03-14 | Score: 12 | Authors: Hai Lan, Tingting Wang, Zhifeng Bao, Guoliang Li
  Why it matters: system
  Abstract summary: Managing the rapidly growing scholarly corpus poses significant challenges in representation, reasoning, and efficient analysis. An ideal system should unify structured knowledge management, agentic planning, and interpretable execution...
- [Succinct Structure Representations for Efficient Query Optimization](https://arxiv.org/abs/2603.15465v1)
  Source: arXiv cs.DB | Date: 2026-03-16 | Score: 11 | Authors: Zhekai Jiang, Qichen Wang, Christoph Koch
  Why it matters: evaluation, real-world, join
  Abstract summary: Structural decomposition methods offer powerful theoretical guarantees for join evaluation, yet they are rarely used in real-world query optimizers. A major reason is the difficulty of combining cost-based plan search and structure-based...
- [Towards Output-Optimal Uniform Sampling and Approximate Counting for Join-Project Queries](https://arxiv.org/abs/2603.12560v1)
  Source: arXiv cs.DB | Date: 2026-03-13 | Score: 10 | Authors: Xiao Hu, Jinchao Huang
  Why it matters: real-world, join
  Abstract summary: Uniform sampling and approximate counting are fundamental primitives for modern database applications, ranging from query optimization to approximate query processing. While recent breakthroughs have established optimal sampling and...
- [Halo: Domain-Aware Query Optimization for Long-Context Question Answering](https://arxiv.org/abs/2603.17668v1)
  Source: arXiv cs.DB | Date: 2026-03-18 | Score: 10 | Authors: Pramod Chunduri, Francisco Romero, Ali Payani, Kexin Rong
  Why it matters: system, evaluation
  Abstract summary: Long-context question answering (QA) over lengthy documents is critical for applications such as financial analysis, legal review, and scientific research. Current approaches, such as processing entire documents via a single LLM call or...

## Olap

- [Sema: A High-performance System for LLM-based Semantic Query Processing](https://arxiv.org/abs/2603.11622v1)
  Source: arXiv cs.DB | Date: 2026-03-12 | Score: 16 | Authors: Kangkang Qi, Dongyang Xie, Wenbo Li, Hao Zhang
  Why it matters: system, latency, cost model
  Abstract summary: The integration of Large Language Models (LLMs) into data analytics has unlocked powerful capabilities for reasoning over bulk structured and unstructured data. However, existing systems typically rely on either DataFrame primitives,...
- [MFTune: An Efficient Multi-fidelity Framework for Spark SQL Configuration Tuning](https://arxiv.org/abs/2603.16450v1)
  Source: arXiv cs.DB | Date: 2026-03-17 | Score: 13 | Authors: Beicheng Xu, Lingching Tung, Yuchen Wang, Yupeng Lu
  Why it matters: system, benchmark, evaluation, compression
  Abstract summary: Apache Spark SQL is a cornerstone of modern big data analytics.However,optimizing Spark SQL performance is challenging due to its vast configuration space and the prohibitive cost of evaluating massive workloads. Existing tuning methods...
- [AgenticScholar: Agentic Data Management with Pipeline Orchestration for Scholarly Corpora](https://arxiv.org/abs/2603.13774v1)
  Source: arXiv cs.DB | Date: 2026-03-14 | Score: 12 | Authors: Hai Lan, Tingting Wang, Zhifeng Bao, Guoliang Li
  Why it matters: system
  Abstract summary: Managing the rapidly growing scholarly corpus poses significant challenges in representation, reasoning, and efficient analysis. An ideal system should unify structured knowledge management, agentic planning, and interpretable execution...
- [100x Cost & Latency Reduction: Performance Analysis of AI Query Approximation using Lightweight Proxy Models](https://arxiv.org/abs/2603.15970v2)
  Source: arXiv cs.DB | Date: 2026-03-16 | Score: 12 | Authors: Yeounoh Chung, Rushabh Desai, Jian He, Yu Xiao
  Why it matters: benchmark, evaluation, latency
  Abstract summary: Several data warehouse and database providers have recently introduced extensions to SQL called AI Queries, enabling users to specify functions and conditions in SQL that are evaluated by LLMs, thereby broadening significantly the kinds...
- [Accelerating Approximate Analytical Join Queries over Unstructured Data with Statistical Guarantees](https://arxiv.org/abs/2603.16153v1)
  Source: arXiv cs.DB | Date: 2026-03-17 | Score: 10 | Authors: Yuxuan Zhu, Tengjun Jin, Chenghao Mo, Daniel Kang
  Why it matters: real-world, join
  Abstract summary: Analytical join queries over unstructured data are increasingly prevalent in data analytics. Applying machine learning (ML) models to label every pair in the cross product of tables can achieve state-of-the-art accuracy, but the cost of...
- [Work Sharing and Offloading for Efficient Approximate Threshold-based Vector Join](https://arxiv.org/abs/2603.16360v1)
  Source: arXiv cs.DB | Date: 2026-03-17 | Score: 10 | Authors: Kyoungmin Kim, Lennart Roth, Liang Liang, Anastasia Ailamaki
  Why it matters: system, join
  Abstract summary: Vector joins - finding all vector pairs between a set of query and data vectors whose distances are below a given threshold - are fundamental to modern vector and vector-relational database systems that power multimodal retrieval and...
- [SIMD-PAC-DB: Pretty Performant PAC Privacy](https://arxiv.org/abs/2603.15023v3)
  Source: arXiv cs.DB | Date: 2026-03-16 | Score: 9 | Authors: Ilaria Battiston, Dandan Yuan, Xiaochen Zhu, Peter Boncz
  Why it matters: system
  Abstract summary: This work presents a highly optimized implementation of PAC-DB, a recent and promising database privacy model. We prove that our SIMD-PAC-DB can compute the same privatized answer with just a single query, instead of the 128 stochastic...
- [Confidential Databases Without Cryptographic Mappings](https://arxiv.org/abs/2603.18836v1)
  Source: arXiv cs.DB | Date: 2026-03-19 | Score: 9 | Authors: Wenxuan Huang, Zhanbo Wang, Mingyu Li
  Why it matters: benchmark
  Abstract summary: Confidential databases (CDBs) are essential for enabling secure queries over sensitive data in untrusted cloud environments using confidential computing hardware. While adoption is growing, widespread deployment is hindered by high...

## Notes

- Current version uses abstract-based classification and ranking.
- Next expansion targets: PVLDB, PACMMOD/SIGMOD, ICDE, CIDR, DBLP.
- This run keeps only papers that matched at least one of the three focus directions.
