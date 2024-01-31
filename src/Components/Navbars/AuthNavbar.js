import {
   
    Navbar,
    Nav,
    Button,
    Col,
    Row,
    Image,
    NavDropdown
 
} from "react-bootstrap";


const AuthNavbar = () => {
    return (

        <div className=" container-fluid">
            <Row>
                <Col>
                    <Navbar variant="light" expand="lg" sticky="top">
                        <Navbar.Brand href="/" className="p-2">
                            <svg width="131" height="40" viewBox="0 0 131 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.9377 8.81988V2.99798C38.9377 2.01366 38.1394 1.2124 37.1521 1.2124H30.2708C32.5696 1.2124 34.4332 3.07601 34.4332 5.37476V10.6055H37.1521C38.1364 10.6055 38.9377 9.8072 38.9377 8.81988Z" fill="#1D4FE9" />
                                <path d="M34.4332 19.9985H37.1521C38.1364 19.9985 38.9377 19.2003 38.9377 18.2129V12.391C38.9377 11.4067 38.1394 10.6055 37.1521 10.6055H34.4332V19.9985Z" fill="#EC1F04" />
                                <path d="M34.4332 29.3887H37.1521C38.1364 29.3887 38.9377 28.5904 38.9377 27.6031V21.7812C38.9377 20.7969 38.1394 19.9956 37.1521 19.9956H34.4332V29.3887Z" fill="#008A22" />
                                <path d="M34.4332 34.6194C34.4332 36.9181 32.5696 38.7817 30.2708 38.7817H37.1521C38.1364 38.7817 38.9377 37.9835 38.9377 36.9961V31.1743C38.9377 30.1899 38.1394 29.3887 37.1521 29.3887H34.4332V34.6194Z" fill="#FDFF93" />
                                <path d="M4.21636 10.2124H1.78857V20.5328H4.21636V10.2124Z" fill="#003366" />
                                <path d="M4.21636 22.9604H1.78857V33.2808H4.21636V22.9604Z" fill="#003366" />
                                <path d="M30.2708 0H7.16632C4.20136 0 1.78857 2.41278 1.78857 5.37775V7.78453H4.21636V5.37775C4.21636 3.75122 5.53979 2.42779 7.16632 2.42779H30.2708C31.8974 2.42779 33.2208 3.75122 33.2208 5.37775V34.6222C33.2208 36.2488 31.8974 37.5722 30.2708 37.5722H7.16632C5.92692 37.5722 4.86457 36.801 4.42943 35.7116H1.90261C2.40678 38.1574 4.57648 40 7.16932 40H30.2738C33.2388 40 35.6516 37.5872 35.6516 34.6222V5.37475C35.6456 2.40978 33.2358 0 30.2708 0Z" fill="#003366" />
                                <path d="M5.96594 21.2111H1.2154C0.546178 21.2111 0 20.6679 0 19.9957C0 19.3235 0.543177 18.7803 1.2154 18.7803H5.96594C6.63516 18.7803 7.18133 19.3235 7.18133 19.9957C7.18133 20.6679 6.63516 21.2111 5.96594 21.2111Z" fill="#003366" />
                                <path d="M7.23535 33.9591H1.2154C0.546178 33.9591 0 33.4159 0 32.7437C0 32.0715 0.543177 31.5283 1.2154 31.5283H7.23835C7.90757 31.5283 8.45375 32.0715 8.45375 32.7437C8.45375 33.4159 7.90757 33.9591 7.23535 33.9591Z" fill="#003366" />
                                <path d="M5.96594 8.46253H1.2154C0.546178 8.46253 0 7.91935 0 7.24713C0 6.57492 0.543177 6.03174 1.2154 6.03174H5.96594C6.63516 6.03174 7.18133 6.57492 7.18133 7.24713C7.18133 7.91935 6.63516 8.46253 5.96594 8.46253Z" fill="#003366" />
                                <path d="M53.6724 5.19482V6.6563H50.8125V14.4978H49.1079V6.6593H46.248V5.19482H53.6724Z" fill="#003366" />
                                <path d="M60.6917 5.19482H62.3813V14.4978H60.6917V10.3775H56.6524V14.4978H54.9629V5.19482H56.6524V8.91303H60.6917V5.19482Z" fill="#003366" />
                                <path d="M64.611 14.4978V5.19482H70.5829V6.63229H66.3005V8.92804H70.1118V10.3385H66.3005V13.0634H70.904V14.4978H64.611Z" fill="#003366" />
                                <path d="M47.1903 17.499H48.8799V26.799H47.1903V17.499Z" fill="#003366" />
                                <path d="M57.3786 26.799C57.0755 26.2889 56.7334 25.7397 56.3583 25.1545C55.9832 24.5693 55.593 23.9781 55.1909 23.3839C54.7888 22.7897 54.3777 22.2106 53.9635 21.6524C53.5464 21.0942 53.1503 20.59 52.7751 20.1429V26.799H51.1096V17.499H52.493C52.8502 17.8741 53.2343 18.3213 53.6484 18.8345C54.0595 19.3476 54.4737 19.8848 54.8908 20.437C55.308 20.9892 55.7101 21.5473 56.0972 22.1085C56.4873 22.6667 56.8325 23.1889 57.1386 23.672V17.499H58.8161V26.799H57.3786Z" fill="#003366" />
                                <path d="M67.5249 17.499V18.9605H64.665V26.799H62.9605V18.9605H60.1005V17.499H67.5249Z" fill="#003366" />
                                <path d="M68.8123 26.799V17.499H74.7843V18.9365H70.5019V21.2322H74.3131V22.6397H70.5019V25.3646H75.1054V26.802H68.8123V26.799Z" fill="#003366" />
                                <path d="M79.2408 17.4058C80.5822 17.4058 81.6085 17.6518 82.3198 18.144C83.031 18.6362 83.3881 19.3864 83.3881 20.3977C83.3881 21.6581 82.7669 22.5134 81.5215 22.9606C81.6896 23.1676 81.8846 23.4167 82.0977 23.7108C82.3137 24.0049 82.5328 24.326 82.7549 24.6711C82.98 25.0162 83.193 25.3673 83.4001 25.7305C83.6042 26.0936 83.7902 26.4477 83.9493 26.7988H82.0557C81.8846 26.4777 81.7015 26.1536 81.5065 25.8265C81.3084 25.4994 81.1104 25.1813 80.9093 24.8722C80.7082 24.5631 80.5072 24.272 80.3121 23.9989C80.114 23.7258 79.931 23.4827 79.7629 23.2667C79.6369 23.2757 79.5289 23.2787 79.4418 23.2787C79.3518 23.2787 79.2678 23.2787 79.1867 23.2787H78.3675V26.7958H76.6779V17.6308C77.0891 17.5408 77.5272 17.4808 77.9923 17.4508C78.4575 17.4208 78.8716 17.4058 79.2408 17.4058ZM79.3608 18.8672C79.0037 18.8672 78.6706 18.8792 78.3675 18.9062V21.9132H79.1057C79.5168 21.9132 79.88 21.8922 80.1921 21.8472C80.5042 21.8022 80.7653 21.7212 80.9783 21.6071C81.1884 21.4901 81.3474 21.334 81.4555 21.136C81.5635 20.9379 81.6175 20.6888 81.6175 20.3857C81.6175 20.1006 81.5635 19.8576 81.4555 19.6595C81.3474 19.4614 81.1944 19.3054 80.9933 19.1883C80.7923 19.0713 80.5522 18.9903 80.2761 18.9393C79.997 18.8912 79.6909 18.8672 79.3608 18.8672Z" fill="#003366" />
                                <path d="M91.5327 26.799C91.2296 26.2889 90.8875 25.7397 90.5124 25.1545C90.1373 24.5693 89.7472 23.9781 89.345 23.3839C88.9429 22.7897 88.5318 22.2106 88.1176 21.6524C87.7005 21.0942 87.3044 20.59 86.9292 20.1429V26.799H85.2667V17.499H86.6501C87.0073 17.8741 87.3914 18.3213 87.8055 18.8345C88.2167 19.3476 88.6308 19.8848 89.0479 20.437C89.4651 20.9922 89.8672 21.5473 90.2573 22.1085C90.6474 22.6667 90.9926 23.1889 91.2987 23.672V17.499H92.9762V26.799H91.5327Z" fill="#003366" />
                                <path d="M95.1969 26.799V17.499H101.169V18.9365H96.8865V21.2322H100.698V22.6397H96.8865V25.3646H101.49V26.802H95.1969V26.799Z" fill="#003366" />
                                <path d="M109.545 17.499V18.9605H106.688V26.799H104.983V18.9605H102.123V17.499H109.545Z" fill="#003366" />
                                <path d="M49.8222 29.707C51.1726 29.707 52.208 29.9531 52.9282 30.4453C53.6484 30.9374 54.0085 31.7057 54.0085 32.753C54.0085 33.2992 53.9125 33.7674 53.7204 34.1545C53.5284 34.5446 53.2493 34.8627 52.8832 35.1088C52.5171 35.3549 52.0699 35.5349 51.5417 35.652C51.0136 35.769 50.4104 35.826 49.7292 35.826H48.8829V39.1001H47.1933V29.9351C47.5865 29.8451 48.0216 29.7851 48.5018 29.755C48.9789 29.722 49.4201 29.707 49.8222 29.707ZM49.9422 31.1685C49.5131 31.1685 49.159 31.1805 48.8829 31.2075V34.3736H49.7021C50.5154 34.3736 51.1426 34.2595 51.5808 34.0314C52.0189 33.8034 52.238 33.3712 52.238 32.738C52.238 32.4349 52.181 32.1798 52.0639 31.9728C51.9469 31.7657 51.7878 31.6066 51.5808 31.4896C51.3737 31.3726 51.1306 31.2915 50.8485 31.2405C50.5664 31.1955 50.2663 31.1685 49.9422 31.1685Z" fill="#003366" />
                                <path d="M61.2829 29.7998H62.9725V39.0998H61.2829V34.9795H57.2436V39.0998H55.554V29.7998H57.2436V33.518H61.2829V29.7998Z" fill="#003366" />
                                <path d="M73.845 34.4456C73.845 35.2408 73.7279 35.943 73.4879 36.5522C73.2508 37.1614 72.9297 37.6686 72.5216 38.0767C72.1134 38.4849 71.6363 38.791 71.0931 38.995C70.5499 39.1991 69.9647 39.3041 69.3495 39.3041C68.7313 39.3041 68.1491 39.2021 67.597 38.995C67.0478 38.788 66.5676 38.4819 66.1625 38.0767C65.7544 37.6686 65.4303 37.1614 65.1902 36.5522C64.9471 35.943 64.8271 35.2408 64.8271 34.4456C64.8271 33.6503 64.9471 32.9481 65.1902 32.3449C65.4303 31.7417 65.7604 31.2345 66.1775 30.8204C66.5946 30.4093 67.0748 30.1002 67.621 29.8931C68.1671 29.686 68.7433 29.584 69.3525 29.584C69.9617 29.584 70.5379 29.686 71.0841 29.8931C71.6303 30.1002 72.1074 30.4093 72.5125 30.8204C72.9207 31.2315 73.2448 31.7387 73.4849 32.3449C73.725 32.9481 73.845 33.6473 73.845 34.4456ZM66.5856 34.4456C66.5856 34.9557 66.6486 35.4179 66.7747 35.835C66.9007 36.2522 67.0808 36.6033 67.3179 36.8944C67.5549 37.1855 67.843 37.4105 68.1821 37.5726C68.5213 37.7346 68.9054 37.8157 69.3375 37.8157C69.7577 37.8157 70.1388 37.7346 70.4779 37.5726C70.817 37.4105 71.1051 37.1855 71.3422 36.8944C71.5792 36.6033 71.7593 36.2492 71.8853 35.835C72.0114 35.4179 72.0744 34.9557 72.0744 34.4456C72.0744 33.9354 72.0114 33.4732 71.8853 33.0561C71.7593 32.639 71.5792 32.2879 71.3422 31.9968C71.1051 31.7057 70.817 31.4806 70.4779 31.3185C70.1388 31.1565 69.7577 31.0755 69.3375 31.0755C68.9084 31.0755 68.5243 31.1565 68.1821 31.3185C67.843 31.4806 67.5549 31.7087 67.3179 32.0028C67.0808 32.2969 66.9007 32.651 66.7747 33.0621C66.6456 33.4732 66.5856 33.9354 66.5856 34.4456Z" fill="#003366" />
                                <path d="M81.9656 39.1028C81.6625 38.5926 81.3204 38.0434 80.9453 37.4582C80.5702 36.873 80.18 36.2818 79.7779 35.6876C79.3758 35.0934 78.9646 34.5173 78.5505 33.9561C78.1334 33.3979 77.7372 32.8937 77.3621 32.4466V39.1028H75.6996V29.8027H77.083C77.4401 30.1779 77.8243 30.625 78.2384 31.1382C78.6495 31.6543 79.0637 32.1885 79.4808 32.7437C79.8979 33.2989 80.3001 33.854 80.6902 34.4152C81.0803 34.9734 81.4254 35.4956 81.7315 35.9787V29.8057H83.4091V39.1058H81.9656V39.1028Z" fill="#003366" />
                                <path d="M85.6268 39.1028V29.8027H91.5988V31.2402H87.3164V33.5359H91.1276V34.9464H87.3164V37.6713H91.9199V39.1088H85.6268V39.1028Z" fill="#003366" />
                                <path d="M96.2983 39.2077C95.8061 39.2077 95.311 39.1927 94.8098 39.1597C94.3086 39.1297 93.8705 39.0637 93.4954 38.9646V29.9317C93.6934 29.8957 93.9035 29.8627 94.1256 29.8297C94.3506 29.7996 94.5787 29.7756 94.8098 29.7546C95.0439 29.7366 95.2719 29.7246 95.5 29.7156C95.7281 29.7066 95.9442 29.7036 96.1512 29.7036C96.7154 29.7036 97.2376 29.7456 97.7207 29.8297C98.2039 29.9137 98.621 30.0547 98.9751 30.2528C99.3293 30.4509 99.6023 30.7089 99.8004 31.03C99.9985 31.3511 100.095 31.7503 100.095 32.2244C100.095 32.6626 99.9895 33.0377 99.7794 33.3528C99.5693 33.6649 99.2752 33.917 98.9001 34.103C99.4643 34.2921 99.8784 34.5682 100.149 34.9343C100.416 35.3004 100.551 35.7656 100.551 36.3298C100.551 37.2871 100.203 38.0043 99.5033 38.4845C98.8071 38.9706 97.7387 39.2077 96.2983 39.2077ZM95.1579 33.5869H96.3523C96.9975 33.5869 97.5017 33.4938 97.8678 33.3108C98.2339 33.1277 98.417 32.7976 98.417 32.3235C98.417 31.8763 98.2279 31.5582 97.8468 31.3692C97.4657 31.1801 96.9735 31.0871 96.3643 31.0871C96.1032 31.0871 95.8751 31.0931 95.6741 31.0991C95.473 31.1081 95.302 31.1201 95.1579 31.1381V33.5869ZM95.1579 34.9133V37.7432C95.347 37.7612 95.548 37.7732 95.7611 37.7822C95.9772 37.7912 96.1722 37.7942 96.3523 37.7942C96.7004 37.7942 97.0245 37.7732 97.3246 37.7282C97.6247 37.6832 97.8828 37.6052 98.1019 37.4941C98.3209 37.3831 98.495 37.2331 98.624 37.044C98.7531 36.8549 98.8191 36.6149 98.8191 36.3208C98.8191 35.7926 98.627 35.4265 98.2429 35.2194C97.8588 35.0153 97.3246 34.9103 96.6464 34.9103H95.1579V34.9133Z" fill="#003366" />
                                <path d="M110.952 34.4456C110.952 35.2408 110.835 35.943 110.595 36.5522C110.358 37.1614 110.037 37.6686 109.629 38.0767C109.22 38.4849 108.743 38.791 108.2 38.995C107.657 39.1991 107.072 39.3041 106.457 39.3041C105.838 39.3041 105.256 39.2021 104.704 38.995C104.155 38.788 103.675 38.4819 103.267 38.0767C102.858 37.6686 102.534 37.1614 102.294 36.5522C102.054 35.943 101.931 35.2408 101.931 34.4456C101.931 33.6503 102.051 32.9481 102.294 32.3449C102.537 31.7417 102.864 31.2345 103.282 30.8204C103.699 30.4093 104.179 30.1002 104.725 29.8931C105.271 29.686 105.847 29.584 106.457 29.584C107.066 29.584 107.642 29.686 108.188 29.8931C108.734 30.1002 109.211 30.4093 109.617 30.8204C110.025 31.2315 110.349 31.7387 110.589 32.3449C110.832 32.9481 110.952 33.6473 110.952 34.4456ZM103.693 34.4456C103.693 34.9557 103.756 35.4179 103.882 35.835C104.008 36.2522 104.188 36.6033 104.425 36.8944C104.662 37.1855 104.95 37.4105 105.289 37.5726C105.628 37.7346 106.015 37.8157 106.445 37.8157C106.865 37.8157 107.246 37.7346 107.585 37.5726C107.924 37.4105 108.212 37.1855 108.449 36.8944C108.686 36.6033 108.866 36.2492 108.992 35.835C109.118 35.4179 109.181 34.9557 109.181 34.4456C109.181 33.9354 109.118 33.4732 108.992 33.0561C108.866 32.639 108.686 32.2879 108.449 31.9968C108.212 31.7057 107.924 31.4806 107.585 31.3185C107.246 31.1565 106.865 31.0755 106.445 31.0755C106.015 31.0755 105.631 31.1565 105.289 31.3185C104.95 31.4806 104.662 31.7087 104.425 32.0028C104.188 32.2969 104.008 32.651 103.882 33.0621C103.756 33.4732 103.693 33.9354 103.693 34.4456Z" fill="#003366" />
                                <path d="M121.449 34.4456C121.449 35.2408 121.332 35.943 121.092 36.5522C120.855 37.1614 120.534 37.6686 120.126 38.0767C119.718 38.4849 119.241 38.791 118.698 38.995C118.154 39.1991 117.569 39.3041 116.954 39.3041C116.336 39.3041 115.754 39.2021 115.201 38.995C114.649 38.788 114.172 38.4819 113.764 38.0767C113.356 37.6686 113.032 37.1614 112.792 36.5522C112.552 35.943 112.429 35.2408 112.429 34.4456C112.429 33.6503 112.549 32.9481 112.792 32.3449C113.035 31.7417 113.362 31.2345 113.779 30.8204C114.196 30.4093 114.676 30.1002 115.222 29.8931C115.769 29.686 116.345 29.584 116.954 29.584C117.563 29.584 118.139 29.686 118.686 29.8931C119.232 30.1002 119.709 30.4093 120.114 30.8204C120.522 31.2315 120.846 31.7387 121.086 32.3449C121.326 32.9481 121.449 33.6473 121.449 34.4456ZM114.187 34.4456C114.187 34.9557 114.25 35.4179 114.376 35.835C114.502 36.2522 114.682 36.6033 114.919 36.8944C115.156 37.1855 115.445 37.4105 115.784 37.5726C116.123 37.7346 116.51 37.8157 116.939 37.8157C117.359 37.8157 117.74 37.7346 118.079 37.5726C118.418 37.4105 118.707 37.1855 118.944 36.8944C119.181 36.6033 119.361 36.2492 119.487 35.835C119.613 35.4179 119.676 34.9557 119.676 34.4456C119.676 33.9354 119.613 33.4732 119.487 33.0561C119.361 32.639 119.181 32.2879 118.944 31.9968C118.707 31.7057 118.418 31.4806 118.079 31.3185C117.74 31.1565 117.359 31.0755 116.939 31.0755C116.51 31.0755 116.126 31.1565 115.784 31.3185C115.445 31.4806 115.156 31.7087 114.919 32.0028C114.682 32.2969 114.502 32.651 114.376 33.0621C114.25 33.4732 114.187 33.9354 114.187 34.4456Z" fill="#003366" />
                                <path d="M128.856 39.1028C128.622 38.7456 128.355 38.3705 128.052 37.9744C127.748 37.5813 127.427 37.2001 127.091 36.834C126.755 36.4679 126.41 36.1198 126.05 35.7867C125.693 35.4566 125.339 35.1685 124.991 34.9284V39.1028H123.301V29.8027H124.991V33.641C125.285 33.3469 125.594 33.0318 125.918 32.6957C126.239 32.3596 126.56 32.0205 126.878 31.6753C127.196 31.3302 127.496 30.9971 127.785 30.676C128.07 30.3549 128.331 30.0638 128.562 29.8027H130.587C130.293 30.1418 129.978 30.496 129.648 30.8621C129.318 31.2282 128.976 31.5973 128.628 31.9694C128.28 32.3416 127.929 32.7107 127.574 33.0768C127.22 33.4429 126.875 33.794 126.533 34.1241C126.908 34.4092 127.292 34.7423 127.679 35.1235C128.067 35.5046 128.451 35.9097 128.826 36.3449C129.201 36.78 129.561 37.2302 129.906 37.7013C130.251 38.1725 130.566 38.6376 130.852 39.1028H128.856Z" fill="#003366" />
                                <path d="M28.0861 29.4275L23.9958 23.5156C23.0535 24.1698 21.9852 24.65 20.8328 24.9201L22.4713 31.9184C22.5583 32.2875 22.7174 32.6536 22.9455 32.9837C23.9268 34.4032 25.8744 34.7573 27.2939 33.776C28.7133 32.7946 29.0675 30.847 28.0861 29.4275Z" fill="#003366" />
                                <path d="M18.7171 26.1897C13.0363 26.1897 8.41475 21.5682 8.41475 15.8873C8.41475 10.2065 13.0363 5.58496 18.7171 5.58496C24.3979 5.58496 29.0194 10.2065 29.0194 15.8873C29.0224 21.5652 24.4009 26.1897 18.7171 26.1897ZM18.7171 7.62862C14.1646 7.62862 10.4614 11.3318 10.4614 15.8843C10.4614 20.4368 14.1646 24.14 18.7171 24.14C23.2696 24.14 26.9728 20.4368 26.9728 15.8843C26.9728 11.3318 23.2696 7.62862 18.7171 7.62862Z" fill="#003366" />
                                <path d="M18.7171 15.9624C16.0972 15.9624 13.8105 17.3759 12.5681 19.4795C13.8045 21.5892 16.0942 23.0087 18.7171 23.0087C21.3399 23.0087 23.6297 21.5892 24.8661 19.4795C23.6267 17.3759 21.3369 15.9624 18.7171 15.9624Z" fill="#006BFF" />
                                <path d="M18.7171 14.5551C20.3165 14.5551 21.613 13.2585 21.613 11.6591C21.613 10.0597 20.3165 8.76318 18.7171 8.76318C17.1177 8.76318 15.8212 10.0597 15.8212 11.6591C15.8212 13.2585 17.1177 14.5551 18.7171 14.5551Z" fill="#006BFF" />
                                <path d="M27.1258 30.7659C27.0418 30.7659 26.9578 30.7239 26.9098 30.6459L24.2389 26.4025C24.1639 26.2825 24.1999 26.1264 24.3199 26.0484C24.44 25.9734 24.599 26.0094 24.674 26.1294L27.3449 30.3728C27.4199 30.4928 27.3839 30.6489 27.2639 30.7269C27.2219 30.7539 27.1739 30.7659 27.1258 30.7659Z" fill="white" />
                                <path d="M40.15 2.99797C40.15 1.34443 38.8056 0 37.1521 0H26.1025C25.1182 0 24.2449 0.480157 23.6987 1.2154H30.2708C31.4172 1.2154 32.4555 1.68054 33.2088 2.43079H37.1521C37.4672 2.43079 37.7223 2.68587 37.7223 3.00097V8.82286C37.7223 9.13797 37.4672 9.39305 37.1521 9.39305H34.4332V11.8208H37.1521C37.4672 11.8208 37.7223 12.0759 37.7223 12.391V18.2129C37.7223 18.528 37.4672 18.7831 37.1521 18.7831H34.4332V21.2109H37.1521C37.4672 21.2109 37.7223 21.466 37.7223 21.7811V27.603C37.7223 27.9181 37.4672 28.1732 37.1521 28.1732H34.4332V30.6009H37.1521C37.4672 30.6009 37.7223 30.856 37.7223 31.1711V36.993C37.7223 37.3081 37.4672 37.5632 37.1521 37.5632H33.2088C32.4555 38.3134 31.4172 38.7786 30.2708 38.7786H23.6987C24.2449 39.5138 25.1182 39.994 26.1025 39.994H37.1521C38.8056 39.994 40.15 38.6496 40.15 36.996V31.1741C40.15 30.5049 39.928 29.8897 39.5559 29.3885C39.928 28.8904 40.15 28.2722 40.15 27.603V21.7811C40.15 21.1119 39.928 20.4967 39.5559 19.9955C39.928 19.4973 40.15 18.8791 40.15 18.2099V12.388C40.15 11.7188 39.928 11.1036 39.5559 10.6024C39.928 10.1043 40.15 9.48608 40.15 8.81687V2.99797Z" fill="#003366" />
                            </svg>

                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="p-2 me-2" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto justify-content-end container-fluid">

                                {/* <Nav.Link href="/auth/login">Login</Nav.Link>
                                    <Nav.Link href="/auth/signup">Registration</Nav.Link> */}
                                <Button href="/auth/login" className="m-1" style={{ backgroundColor: '#5D3CB1' }}>Login
                                </Button>
                                <Button href="/auth/signup" className="m-1" style={{ backgroundColor: '#5D3CB1' }}>Registration
                                </Button>


                             
                                 
                            

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>


                </Col>
            </Row>
        </div>

    );
};

export default AuthNavbar;
