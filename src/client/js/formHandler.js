function handleSubmit(event) {
    event.preventDefault();

    // Get the url from the user
    let url = document.getElementById('url').value;
    
    // Check the URL
    
    if(Client.checkForURL(url)) {
    
    postData('/addData', {url: url})
    .then(res => {
        document.getElementById('polarity').innerHTML = res.score_tag;
        document.getElementById('agreement').innerHTML = res.agreement;
        document.getElementById('subjectivity').innerHTML = res.subjectivity;
        document.getElementById('confidence').innerHTML = res.confidence;
        document.getElementById('irony').innerHTML = res.irony;
    })
} else {
    alert('Please insert a valid url');
}
}

/* Function to POST data */
const postData = async (url = '', data = {}) => {
    console.log(data);

    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await res.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};


export { handleSubmit }