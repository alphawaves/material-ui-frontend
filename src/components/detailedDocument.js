import React, { Component } from 'react'
import CopyToClipboard from 'copy-to-clipboard'

class DetailedDocument extends Component {
  render() {

    const document = {
      hash: 'hash',
      title: 'title',
      description: 'description',
      issuer: 'issuer',
      receiver: 'receiver'
    }
    return (
        <React.Fragment>
        <div
          className="card shadow bg-white rounded flex-row"
          style={{
            padding: "100px",
            position: "absolute",
            width: "100%",
            left: 0
          }}
        >
          <img
            src={"http://localhost:8080/thumbnails/" + document.hash + ".png"}
            className="card-img-left"
            alt="Document"
            height="600"
            width="500"
          />
          <div
            className="card-details-container card-body"
            // style={imageContainerStyle}
          >
            {/* <h1>Detailed Document: {document.hash} </h1> */}
            <h3 className="card-title" style={{ display: "inline-block" }}>
              {document.title}
            </h3>
            <CopyToClipboard
              text={document.hash}
              style={{ display: "inline-block", float: "right" }}
            >
              <button className="btn btn-light"> Copy Hash</button>
            </CopyToClipboard>
            <div style={{ display: "inline-block", float: "right" }}>
              <a href={document.url} className="btn btn-primary card-link">
                Download
              </a>
            </div>
            <div>
              <p>{document.description}</p>
            </div>
            <div>
              <div style={{ display: "inline-block", marginTop: "100px" }}>
                <h5>Issued By: </h5>
                {/* <Entity data={document.issuer} /> */}
              </div>

              {document.receiver &&
                document.receiver.blockchainAddress !== 'empty_address' && (
                  <div style={{ display: "inline-block" }}>
                    <h5>Received By:</h5>
                    {/* <Entity data={document.receiver} /> */}
                  </div>
                )}

              {/* <div>
                {document.receiver &&
                  document.issuer &&
                  (document.receiver.blockchainAddress === empty_address && (
                    <IssueForm
                      issuer={document.issuer.blockchainAddress}
                      docHash={document.hash}
                    />
                  ))}
              </div> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default DetailedDocument