export default function Experience() {
  return (
    <div className="section reveal" id="experience">
      <h2>Experience</h2>

      <div className="card">
        <h3>Software/Data Engineer – Backend Developer</h3>
        <p>Tautelary Inc. | jan 2025 – present</p>

        <ul>
          <li>Modernized 15+ legacy Cloudera, Hue, Hadoop, and Hive-based analytical workflows by migrating data access and validation processes to AWS, reducing dependency on legacy querying platforms by 40% and improving cloud-based data availability.</li>
          <li>Built governed data access patterns using SageMaker, Athena, S3, and Glue Data Catalog, enabling teams to validate and query cloud-based datasets more securely and consistently across multi-account AWS environments.</li>
          <li>Validated 50+ migrated datasets by reconciling record counts, schema alignment, null handling, duplicate checks, and business-rule accuracy, reducing source-to-target defects by 30% before business consumption.</li>
          <li>Implemented near real-time S3-to-Snowflake ingestion using Snow pipe auto-ingest, enabling newly landed curated files in Amazon S3 to load automatically into Snowflake and improving data freshness for business reporting.</li>
        </ul>
      </div>

      <div className="card">
        <h3>Software/Data Developer</h3>
        <p>Cognizant Technology Solutions, Hyderabad | Nov 2020 – May 2023</p>

        <ul>
          <li>Engineered Spark-driven migration pipelines on GCP Dataproc to process 10M+ card transaction and rebates records from RDH, FRS, Oracle, DB2, and legacy systems into raw, silver, and gold layers, improving data consistency and reporting reliability.</li>
          <li>Built Big Query validation reports across 30+ migration datasets to verify record counts, duplicate handling, null values, schema consistency, and business-rule accuracy before publishing trusted datasets to downstream analytics teams</li>
          <li>Optimized large-scale Spark workloads using AQE, broadcast joins, hash joins, partitioning, and caching strategies, improving batch processing performance by 40% for high-volume financial transaction pipelines.</li>
        </ul>
      </div>
    </div>
  );
}