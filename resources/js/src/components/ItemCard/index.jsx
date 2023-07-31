import { Constants } from "../../common";
import { useState } from "react";

import { useAppContext } from "../../Context";

import "./css.css";

export default function Card({
    image,
    discount,
    sizes,
    name,
    lang,
    popupImage,
    ingredients,
    discount_unit,
}) {
    const [isOpen, setOpen] = useState(false);
    const { state } = useAppContext();
    const size = sizes[0];
    const ingred = ingredients[0];
    console.log(ingred);
    return (
        <div
            className="item-card"
          
        >
            <div style={{}}>
                <p
                    style={{
                        color: state.mode == "dark" ? "#fff" : "#000",
                        fontWeight: "bold",
                    }}
                >
                    {name[lang]}
                </p>
                <p
                    style={{
                        color: state.mode == "dark" ? "#BEBEBE" : "#515151",
                    }}
                >
                    {ingred?.name ? ingred.name[lang] : ""}
                </p>
            </div>

            <div
                style={{
                    borderLeft: "1px #E4E4E4 solid",
                    paddingLeft: "8px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "end",
                            color: state.mode == "dark" ? "#fff" : "#000",
                        }}
                    >
                        <span>
                            {size.discount_price
                                ? size.discount_price
                                : size.price}

                            {Constants.currency}
                        </span>
                    </div>
                    <div style={{ display: "flex" }}>
                        <span
                            className="text h-semibold"
                            style={{
                                color: "#A6A6A6",
                                textDecoration: "red line-through",
                            }}
                        >
                            <span>{size.price}</span>
                        </span>
                        <div className="percentage">
                            <span className="text b-medium">
                                <span>
                                    {discount}
                                    {discount_unit}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
