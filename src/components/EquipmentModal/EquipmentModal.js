import "./EquipmentModal.scss";
import closeIcon from "../../assets/icons/close-24px.svg";

function EquipmentModal({ item, setModal, offsetX, offsetY }) {
    const handleClick = () => {
        setModal(false);
    }
    console.log(item)
    return (
        <div className="equipment-card" style={{ top: `${offsetY}px`, right: `${offsetX}px` }}>
            <div className="equipment-card__close-container" onClick={handleClick}>
                <img className="equipment-card__close" src={closeIcon} alt="Close icon"/>
            </div>
            <div className="equipment-card__details">
                <span className="equipment-card__name">{item.brand} {item.name}</span>
                <img className="equipment-card__image" src={item.image1} alt={item.name} />
                <div className="equipment-card__button">
                    <a href={item.whereToBuy} target="_blank" rel="noreferrer" className="equipment-card__button-text">Buy Now</a>
                </div>
            </div>
        </div>
    );
}

export default EquipmentModal;