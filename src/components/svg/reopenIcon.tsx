import React from "react";

type ReopenIconPropsType = { height: number; width: number };

const ReopenIcon = ({ width, height }: ReopenIconPropsType) => {
    return (
        <svg
            width={width}
            height={height} 
            viewBox="0 0 14 15" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M6.99129 14.5086C5.13528 14.5086 3.5421 13.8889 2.21174 12.6494C0.881383 11.4099 0.144819 9.88158 0.00204933 8.06451C-0.0109298 7.90876 0.0377418 7.77248 0.148064 7.65567C0.258386 7.53886 0.397126 7.48045 0.564284 7.48045C0.721604 7.48045 0.855425 7.53561 0.965747 7.64594C1.07607 7.75626 1.14421 7.89578 1.17017 8.06451C1.31294 9.55711 1.93593 10.8096 3.03916 11.822C4.14238 12.8343 5.45976 13.3405 6.99129 13.3405C8.61831 13.3405 9.9985 12.7738 11.1319 11.6405C12.2652 10.5071 12.8319 9.12694 12.8319 7.49992C12.8319 5.8729 12.2652 4.49271 11.1319 3.35935C9.9985 2.226 8.61831 1.65933 6.99129 1.65933C6.09573 1.65933 5.25858 1.85726 4.47984 2.25312C3.70109 2.64898 3.01969 3.18437 2.43563 3.85929H3.87631C4.04179 3.85929 4.18051 3.91558 4.29245 4.02818C4.4044 4.14078 4.46037 4.28031 4.46037 4.44675C4.46037 4.61321 4.4044 4.7516 4.29245 4.86192C4.18051 4.97224 4.04179 5.0274 3.87631 5.0274H0.99495C0.829466 5.0274 0.690752 4.97143 0.578808 4.85949C0.466863 4.74754 0.410891 4.60883 0.410891 4.44334V1.56199C0.410891 1.3965 0.467188 1.25779 0.579781 1.14584C0.692388 1.0339 0.831913 0.977927 0.998357 0.977927C1.16481 0.977927 1.3032 1.0339 1.41353 1.14584C1.52385 1.25779 1.57901 1.3965 1.57901 1.56199V3.0416C2.2669 2.2369 3.0795 1.61066 4.01679 1.16288C4.95409 0.7151 5.94559 0.491211 6.99129 0.491211C7.96472 0.491211 8.8765 0.676163 9.72663 1.04607C10.5768 1.41597 11.3166 1.91567 11.9461 2.54515C12.5755 3.17464 13.0752 3.91445 13.4451 4.76458C13.815 5.61471 14 6.52649 14 7.49992C14 8.47335 13.815 9.38513 13.4451 10.2353C13.0752 11.0854 12.5755 11.8252 11.9461 12.4547C11.3166 13.0842 10.5768 13.5839 9.72663 13.9538C8.8765 14.3237 7.96472 14.5086 6.99129 14.5086ZM6.99043 8.96007C6.58865 8.96007 6.24499 8.81701 5.95945 8.5309C5.67391 8.24478 5.53114 7.90083 5.53114 7.49906C5.53114 7.09728 5.6742 6.75362 5.96031 6.46808C6.24643 6.18254 6.59038 6.03977 6.99215 6.03977C7.39393 6.03977 7.73759 6.18283 8.02313 6.46894C8.30867 6.75506 8.45144 7.09901 8.45144 7.50078C8.45144 7.90256 8.30838 8.24622 8.02227 8.53176C7.73615 8.8173 7.3922 8.96007 6.99043 8.96007Z" 
                fill="currentColor"
            />
        </svg>
    );
};

export default ReopenIcon;

ReopenIcon.defaultProps = {
    width: "14",
    height: "15",
};