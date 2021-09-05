import React, { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_JOBS, GET_JOBSEEKER } from "../graphql/query";
import UserContext from "../context/userContext";
import { Row, Col, Pagination, Spin, Empty } from "antd";
import moment from "moment";

function InterestJob() {
  const [current, setCurrent] = useState(1);
  const [jobsPerPage] = useState(2);

  const { user } = useContext(UserContext);

  // === get jobseeker info(interest) ===
  const { loading: seekerLoading, data: seekerData } = user
    ? useQuery(GET_JOBSEEKER, {
        variables: { id: user && user.id },
      })
    : "";

  // === get all jobs ===
  const { loading, data } = useQuery(GET_JOBS);

  if (loading || seekerLoading) {
    return (
      <center className="loading-data">
        <Spin size="large" />
      </center>
    );
  }
  // === filter jobs for jobseeker's interest only ===
  let interestJobs;
  if (user && user.role === "jobseeker") {
    interestJobs =
      data &&
      data.get_jobs.filter((res) => {
        const { type } = res;
        let match = false;
        type.forEach((t) => {
          user &&
            seekerData.get_jobseeker.interest.forEach((j) => {
              if (t === j) {
                match = true;
              }
            });
        });
        if (match) {
          return res;
        }
      });
  }

  // === get curent jobs depend on jobsPerPage ===
  const indexOfLastPost = current * jobsPerPage;
  const indexOfFirstPost = indexOfLastPost - jobsPerPage;
  const currentJobs =
    interestJobs && interestJobs.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <Row wrap={true} gutter={[0, 5]}>
        {user && user.role === "jobseeker" ? (
          currentJobs.map((res) => {
            const { position, company, createdAt, id } = res;
            return (
              <Col key={id} xs={24} sm={24} md={14}>
                <Row
                  className="job-card"
                  align="middle"
                  justify="space-between"
                >
                  <Col>
                    <a
                      href={`/open-opportunities/detail/${id}`}
                      className="position"
                    >
                      {position}
                    </a>
                    <br />
                    <a
                      href={`/open-opportunities/${company.name.toLowerCase()}`}
                      className="company"
                    >
                      {company.name}
                    </a>
                    <br />
                    <p className="city">{company.city}</p>
                  </Col>
                  <Col>
                    <p className="date">
                      {" "}
                      {moment.unix(createdAt / 1000).format("YYYY-MM-DD")}
                    </p>
                    <button className="apply-btn">
                      <a href={`/open-opportunities/detail/${id}`}>Apply Now</a>
                    </button>
                  </Col>
                </Row>
              </Col>
            );
          })
        ) : (
          <>
            <div className="no-data">
              <Empty
                description={
                  <p>
                    Please{" "}
                    <a href="/open-opportunities/jobseeker/signin">sign in</a> /{" "}
                    <a href="open-opportunities/jobseeker/signup">register</a>{" "}
                    as jobseeker to view your job interest!
                  </p>
                }
              />
            </div>
          </>
        )}
      </Row>
      {/* === pagination === */}
      {user && user.role === "jobseeker" ? (
        <Pagination
          onChange={(page) => setCurrent(page)}
          size="small"
          pageSize={jobsPerPage}
          total={interestJobs.length}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default InterestJob;
