import mouse from '../styles/components/mouseFollow.module.css'


export default function MouseFollow() {
    return (
        <div className={`${mouse.global}`}><div className={`${mouse.subGlobal}`}></div></div>
    );
}