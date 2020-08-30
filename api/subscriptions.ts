const registerSubscriber = ({ response }: { response: any }) => {
    response.body = {
        success: true,
        data: []
    }
}

export {registerSubscriber}