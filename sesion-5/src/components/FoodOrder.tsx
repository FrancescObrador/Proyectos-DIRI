import React, { MouseEventHandler, useState } from 'react';
import { MenuItem } from '../entities/entities';

interface FoodOrderProps {
    food: MenuItem;
    onQuantityUpdated(id: number, quantity: number): void;
    onReturnToMenu: MouseEventHandler<HTMLButtonElement> | undefined;
}

const FoodOrder = (props: FoodOrderProps) => {
    const [quantity, setQuantity] = useState<number>(1);

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(newQuantity);
        props.onQuantityUpdated(props.food.id, newQuantity);
    };

    const total = quantity * props.food.price;

    return (
        <>
            <div>Total: {total}</div>
            <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
            />
            <button onClick={props.onReturnToMenu}>Enviar pedido</button>
        </>
    );
};

export default FoodOrder;