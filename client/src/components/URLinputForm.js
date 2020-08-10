import React, { useState } from "react";
import URLInput from "./URLInput";
import Loader from "react-loader-spinner";
import Button from "@material-ui/core/Button";
import ShortenURL from "./ShortenURL";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import LinkPreview from "./Preview/LinkPreview";
import validUrl from "valid-url";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-block",
    flexWrap: "wrap",
    marginTop: "10%",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  wrapper: {
    display: "inline-block",
    width: "50%",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  BTN: {
    margin: "10px",
  },
}));

const URLinputForm = () => {
  const classes = useStyles();
  const { promiseInProgress } = usePromiseTracker();
  const [LongURL, setLongURL] = useState("");
  const [ShortURL, setShortURL] = useState("");
  const [chartData, setChartData] = useState([]);
  const [hasShort, setHasShort] = useState(false);
  const [preview, setPreview] = useState({
    title: null,
    description: null,
    domain: null,
    image: null,
  });
  const handelLongURLChange = (e) => {
    // console.log(e.target.value);
    setLongURL(e.target.value);
    // if (validUrl.isUri(LongURL)) {
    //   console.log("Looks like an URI");
    // } else {
    //   console.log("Not a URI");
    // }
  };

  //   const handelShortURLchange = (e) => {
  //     setShortURL(e.target.value);
  //   };

  const onSubmitBTNClick = () => {
    axios
      .post("http://localhost:5000/api/url/shorten", {
        longUrl: LongURL,
      })
      .then(function (response) {
        // console.log(response);
        const shortURL = response.data.url.shortUrl;
        const chartData = response.data.url.visitedCount;
        // const preview = response.data.preview;
        setShortURL(shortURL);
        setChartData(chartData);
        // setPreview(preview);
        setHasShort(true);
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.status === 401) {
            setShortURL("Invalid Long URL");
          } else if (error.response.status === 500) {
            setShortURL("Server error");
          }
        } else {
          setShortURL("Connection error");
        }
      });
  };
  const onGetLinkPreview = () => {
    // console.log(LongURL);
    if (LongURL) {
      trackPromise(
        axios
          .post("http://localhost:5000/api/url/preview", {
            longUrl: LongURL,
          })
          .then(function (response) {
            // console.log(response);
            const preview = response.data.preview;
            setPreview(preview);
          })
          .catch(function (error) {
            const errorView = {};
            if (error.response) {
              if (error.response.status === 401) {
                errorView.title = "Invalid Long URL";
                // setPreview(errorView);
              } else if (error.response.status === 500) {
                errorView.title = "Server error";
              }
            } else {
              errorView.title = "Server error";
              //   setShortURL("Connection error");
            }
            setPreview(errorView);
          })
      );
    }
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.root}>
        <URLInput
          onURLChange={handelLongURLChange}
          onURLSubmit={onSubmitBTNClick}
          value={LongURL}
          setURL={setLongURL}
        />
        <div className={classes.BTN}>
          <Button onClick={onGetLinkPreview}>Preview Page</Button>
        </div>
        {hasShort ? <ShortenURL value={ShortURL} data={chartData} /> : null}
      </Paper>
      {preview.title != null ? (
        <LinkPreview
          title={preview.title}
          description={preview.description}
          domain={preview.domain}
          image={preview.image}
        />
      ) : (
        promiseInProgress && (
          <Loader type="ThreeDots" color="#757573" height={90} width={90} />
        )
      )}
    </div>
  );
};

export default URLinputForm;
