import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {
    Typography,
    TextField,
    Button,
    Grid,
    Card,
    CardHeader,
    CardContent,
    FormControl
} from "@material-ui/core";

const Example = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [articles, setArticles] = useState([]);
    const [deleteId, setDeleteId] = useState(null);

    const handleTitleInputChanges = (e) => {
        setTitle(e.target.value);
    };

    const handleBodyInputChanges = (e) => {
        setBody(e.target.value);
    };

    const sendArticle = (keyCode) => {
        if(keyCode === 13) {
            let params = {
                title: title,
                body: body,
            };

            axios
                .post("/article", params)
                .then((Response) => {
                    console.log(Response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    useEffect(() => {
        // const getArticles = async () => {
        //     const response = await axios(
        //         "/article",
        //     );

        //     setArticles(response.data);
        // };

        // getArticles();

	axios
	    .get("/article")
	    .then((Response) => {
		if(Response.data.success){
		    setArticles(Response.data);
		}else{
		    console.log("ERROR");
		}
	    })
	    .catch((error) => {
		console.log(error);
	    });
    }, []);

    useEffect(() => {
        const deleteArticles = async () => {
            console.log("DELETE!");
            axios
                .delete(`/article/${deleteId}`)
                .then((Response) => {
                    console.log(Response);
                })
                .catch((error) => {
                    console.log(error)
                });
        };

        if(deleteId) {
            deleteArticles();
        }
    }, [deleteId]);

    return(
        <div>
            <Grid container justify="center" spacing={2}>
                <Grid item xs={12}>
                    <Typography align="center" variant="h1">
                        Hooks!
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                        <TextField label="title" margin="normal"
                                   onChange={(e) => handleTitleInputChanges(e)}/>
                </Grid>
                <Grid item xs={1}>
                    <TextField label="body" margin="normal"
                               onChange={(e) => handleBodyInputChanges(e)}
                               onKeyDown={(e) => sendArticle(e.keyCode)} />
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" color="primary" onClick={() => sendArticle(13)}>
                        POST!
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                { articles.map((article, key) => {
                    return(
                        <Grid item xs={3} key={key}>
                            <Card>
                                <CardHeader title={article.title}>
                                </CardHeader>
                                <CardContent>
                                    <p>{ article.body }</p>
                                    <Button variant="contained" color="secondary" onClick={() => setDeleteId(article.id)}>
                                        DELETE!
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
};

if (document.getElementById('example')) {
    ReactDOM.render(<Example/>, document.getElementById('example'));
}
