export default function Sleep(milliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}