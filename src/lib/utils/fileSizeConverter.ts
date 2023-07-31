export const fromBytes = (bytes:number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
export const toBytes = (expression: string) => {
    const sizes = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const identifier = expression.substring(expression.length -2);
    let num = parseFloat(expression.substring(0, expression.length -2));
    for(let i=0; i <= sizes.findIndex(x => x === identifier); i++){
        num = num * 1024;
    }
    return num;
}