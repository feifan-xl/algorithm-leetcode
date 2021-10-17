
function GetNumberOfK(data, k) {
    // write code here
    let r = 0, l = data.length

    while(r <= l) {
        let mid = Math.floor((r + l) / 2)
        if (data[mid] < k) {
            l = mid - 1
        } else if (data[mid] > k) {
            r = mid + 1
        } else {
            //  r -> mid -> l
        }
    }
}
module.exports = {
    GetNumberOfK : GetNumberOfK
};
