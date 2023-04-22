import { observer } from "mobx-react";

import Brand from "src/asset/brand.svg";

import s from "./Footer.module.scss";

export default observer(function Footer() {
    const handleClick = (url: string) => {
        window.open(url, "_target");
    };

    return (
        <div className={s.wrap}>
            <div className={s.Container}>
                <div className={s.brandIcon}>
                    <img src={Brand} alt="" />
                </div>
                <div className={s.rightPart}>
                    <div className={s.links}>
                        <p
                            onClick={() =>
                                document
                                    .querySelector("#Banner")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            Home
                        </p>
                        <p onClick={() => handleClick("https://app.erd.xyz")}>
                            Product
                        </p>
                        <p
                            onClick={() =>
                                handleClick("https://github.com/Ethereum-ERD")
                            }
                        >
                            Contract
                        </p>
                    </div>
                    <div className={s.medias}>
                        <div
                            onClick={() =>
                                handleClick("https://twitter.com/Ethereum_ERD")
                            }
                        >
                            <svg
                                width="20"
                                height="18"
                                viewBox="0 0 20 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.2896 17.3578C13.8368 17.3578 17.9648 10.9263 17.9648 5.34897C17.9648 5.1663 17.9648 4.98444 17.9527 4.80342C18.7559 4.20594 19.4491 3.46617 20 2.61873C19.2511 2.96022 18.4568 3.18406 17.6432 3.28278C18.4999 2.75536 19.141 1.92573 19.4473 0.948325C18.6418 1.43999 17.7605 1.78646 16.8416 1.97279C16.2229 1.29613 15.4046 0.848075 14.5135 0.69794C13.6222 0.547806 12.7079 0.703966 11.9116 1.14226C11.1154 1.58054 10.4818 2.27654 10.1089 3.12251C9.73605 3.96849 9.64461 4.91729 9.8488 5.82211C8.21741 5.73794 6.62146 5.30185 5.16455 4.54216C3.70762 3.78247 2.4223 2.71615 1.392 1.41242C0.867274 2.34156 0.70656 3.44147 0.942582 4.48821C1.17861 5.53495 1.79361 6.44981 2.6624 7.04652C2.00936 7.02684 1.37054 6.84563 0.8 6.51825V6.57174C0.800259 7.54618 1.12821 8.49052 1.72822 9.24462C2.32824 9.9987 3.16339 10.5161 4.092 10.7091C3.4879 10.8785 2.85406 10.9033 2.2392 10.7815C2.50151 11.62 3.01203 12.3533 3.69936 12.8789C4.38671 13.4043 5.21653 13.6958 6.0728 13.7125C5.22204 14.4003 4.24776 14.9089 3.20572 15.2091C2.1637 15.5092 1.07434 15.5952 0 15.4619C1.87652 16.7005 4.05994 17.3574 6.2896 17.3544"
                                    fill="#666"
                                />
                            </svg>
                        </div>
                        <div
                            onClick={() =>
                                handleClick("https://github.com/Ethereum-ERD")
                            }
                        >
                            <svg
                                width="22"
                                height="20"
                                viewBox="0 0 22 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21.617 12.3528L10.9794 20L0.34193 12.3528C0.199323 12.249 0.0935413 12.1033 0.03972 11.9365C-0.0141013 11.7697 -0.0132053 11.5903 0.042282 11.424L1.26085 7.6893L3.69798 0.269241C3.72162 0.208789 3.75926 0.15465 3.80786 0.111167C3.887 0.0396593 3.99032 0 4.09752 0C4.20472 0 4.30803 0.0396593 4.38717 0.111167C4.4385 0.160238 4.47632 0.221446 4.49705 0.289012L6.93418 7.6893H15.0247L17.4618 0.269241C17.4854 0.208789 17.523 0.15465 17.5717 0.111167C17.6508 0.0396593 17.7542 0 17.8613 0C17.9686 0 18.0718 0.0396593 18.1509 0.111167C18.2023 0.160238 18.2401 0.221446 18.2609 0.289012L20.698 7.70905L21.9665 11.424C22.017 11.5954 22.0103 11.7784 21.9472 11.9457C21.8843 12.113 21.7684 12.2557 21.617 12.3528Z"
                                    fill="#666"
                                />
                            </svg>
                        </div>
                        <div
                            onClick={() =>
                                handleClick("https://discord.gg/A8heyMV6qC")
                            }
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.8516 0C18.0233 0 18.9683 0.9475 19.0241 2.0625V20L16.7933 18.1058L15.5683 16.9908L14.2316 15.8258L14.79 17.6633H3.09164C1.92331 17.6633 0.974976 16.7758 0.974976 15.6V2.06667C0.974976 0.951667 1.92498 0.0025 3.09581 0.0025H16.8458L16.8516 0ZM11.7533 4.73583H11.7283L11.56 4.9025C13.2875 5.4025 14.1233 6.18333 14.1233 6.18333C13.01 5.62667 12.0066 5.34833 11.0033 5.23583C10.2783 5.12333 9.55331 5.1825 8.94081 5.23583H8.77414C8.38248 5.23583 7.54914 5.4025 6.43248 5.84833C6.04331 6.0175 5.81998 6.12833 5.81998 6.12833C5.81998 6.12833 6.65498 5.29333 8.49498 4.8475L8.38247 4.735C8.38247 4.735 6.98914 4.68167 5.48498 5.79333C5.48498 5.79333 3.98081 8.41333 3.98081 11.6433C3.98081 11.6433 4.81414 13.0933 7.09998 13.1483C7.09998 13.1483 7.43331 12.7042 7.77081 12.3133C6.48748 11.9233 5.98748 11.1433 5.98748 11.1433C5.98748 11.1433 6.09914 11.1983 6.26664 11.31H6.31664C6.34164 11.31 6.35331 11.3225 6.36664 11.335V11.34C6.37998 11.3533 6.39164 11.365 6.41664 11.365C6.69164 11.4783 6.96664 11.59 7.19164 11.6983C7.67283 11.9043 8.17615 12.0542 8.69164 12.145C9.46664 12.2575 10.355 12.3117 11.3666 12.145C11.8666 12.0325 12.3666 11.9225 12.8666 11.6992C13.1916 11.5325 13.5916 11.3658 14.0308 11.085C14.0308 11.085 13.5308 11.865 12.1933 12.255C12.4683 12.6433 12.8558 13.0883 12.8558 13.0883C15.1425 13.0383 16.0308 11.5883 16.0808 11.65C16.0808 8.425 14.5683 5.8 14.5683 5.8C13.2058 4.78833 11.9308 4.75 11.7058 4.75L11.7525 4.73333L11.7533 4.73583ZM11.8933 8.41333C12.4791 8.41333 12.9516 8.91333 12.9516 9.52583C12.9516 10.1425 12.4766 10.6425 11.8933 10.6425C11.31 10.6425 10.835 10.1425 10.835 9.53083C10.8366 8.91417 11.3125 8.41583 11.8933 8.41583V8.41333ZM8.10748 8.41333C8.69081 8.41333 9.16248 8.91333 9.16248 9.52583C9.16248 10.1425 8.68748 10.6425 8.10414 10.6425C7.52081 10.6425 7.04581 10.1425 7.04581 9.53083C7.04581 8.91417 7.52081 8.41583 8.10414 8.41583L8.10748 8.41333Z"
                                    fill="#666"
                                />
                            </svg>
                        </div>
                        <div
                            onClick={() => handleClick("https://docs.erd.xyz/")}
                        >
                            <svg
                                width="16"
                                height="18"
                                viewBox="0 0 16 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.43821 12.6584H9.92666C10.2649 12.6584 10.5454 12.375 10.5454 12.0334C10.5454 11.6918 10.2649 11.4167 9.92666 11.4167H5.43821C5.09992 11.4167 4.8194 11.6918 4.8194 12.0334C4.8194 12.375 5.09992 12.6584 5.43821 12.6584ZM8.22698 7.25005H5.43821C5.09992 7.25005 4.8194 7.53339 4.8194 7.87505C4.8194 8.21673 5.09992 8.49173 5.43821 8.49173H8.22698C8.56527 8.49173 8.8458 8.21673 8.8458 7.87505C8.8458 7.53339 8.56527 7.25005 8.22698 7.25005ZM14.1152 6.52135C14.309 6.51911 14.5203 6.51668 14.7122 6.51668C14.9184 6.51668 15.0834 6.68335 15.0834 6.89168V13.5916C15.0834 15.6584 13.425 17.3334 11.3788 17.3334H4.81115C2.66592 17.3334 0.916748 15.575 0.916748 13.4084V4.42501C0.916748 2.35835 2.58342 0.666676 4.63787 0.666676H9.04381C9.25834 0.666676 9.42335 0.841676 9.42335 1.05001V3.73335C9.42335 5.25835 10.6693 6.50835 12.1792 6.51668C12.5318 6.51668 12.8428 6.51931 13.1148 6.52163C13.3265 6.52341 13.5147 6.52501 13.6808 6.52501C13.7983 6.52501 13.9505 6.52325 14.1152 6.52135ZM14.3427 5.30501C13.6644 5.30751 12.8649 5.30501 12.2899 5.29918C11.3773 5.29918 10.6257 4.54001 10.6257 3.61834V1.42168C10.6257 1.06251 11.0572 0.884175 11.3039 1.14334C11.7508 1.61273 12.3652 2.2581 12.9767 2.90036C13.5853 3.53975 14.191 4.17604 14.6257 4.63251C14.8665 4.88501 14.69 5.30418 14.3427 5.30501Z"
                                    fill="#666"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
