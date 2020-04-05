export const is404 = function(err)
{
    return isErrorWithResponseandStatus(err) && 404 === err.response.status;
};

export const is422 = function(err)
{
    return isErrorWithResponseandStatus(err) && 422 === err.response.status;
}

const isErrorWithResponseandStatus = function(err){
    return err.response && err.response.status;
}
