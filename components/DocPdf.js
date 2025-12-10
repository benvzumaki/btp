import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  Image,
  PDFViewer,
  StyleSheet,
  Font,
  PDFDownloadLink,
  Link,
} from "@react-pdf/renderer";

const ListItem = ({ children }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: "2px",
      }}
    >
      <View
        style={{
          height: "100%",
        }}
      >
        <Text>{"\u2022" + " "}</Text>
      </View>
      {children}
    </View>
  );
};

const Line = ({ height, color }) => {
  return (
    <View
      style={{
        height: height,
        width: "100%",
        backgroundColor: color,
      }}
    ></View>
  );
};

Font.register({
  family: "Lexend",

  fonts: [
    {
      src: "/fonts/Lexend-Regular.ttf",
      fontStyle: "normal",
      fontWeight: "normal",
    },
    {
      src: "/fonts/Lexend-Bold.ttf",
      fontStyle: "bold",
      fontWeight: "bold",
    },
  ],
});

export const Pdf = () => {
  return (
    <Document>
      <Page
        size="A4"
        style={{
          fontFamily: "Lexend",
          fontSize: "10px",
          color: "#283747",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "16px",
            padding: "48px 48px 0px 48px",
          }}
        >
          <Image
            style={{
              borderRadius: "100%",
              height: "80px",
              width: "80px",
              objectFit: "cover",
            }}
            src={"/images/andribgbiru.jpg"}
          />
          <View
            style={{
              display: "flex",
              flex: 2,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "0px 20px 0px 20px",
            }}
          >
            <Text
              style={{
                fontSize: "28px",
                fontStyle: "bold",
              }}
            >
              Andri{" "}
              <Text
                style={{
                  color: "#E74C3C",
                }}
              >
                Febrian
              </Text>
            </Text>
            <Line height={"1.5px"} color={"#5d6d7E"} />
            <Text
              style={{
                fontSize: "14px",
                fontStyle: "bold",
              }}
            >
              Software Developer
            </Text>
          </View>
        </View>

        <Line height={6} color={"#EBEDEF"} />
        {/* content-resume */}
        <View
          style={{
            gap: "10px",
            display: "flex",
            flexDirection: "row",
            marginTop: "16px",
            padding: "0px 48px 0px 48px",
          }}
        >
          <View
            style={{
              // flex: 1,
              borderRight: "1.5px solid #5d6d7E",
            }}
          >
            <View
              style={{
                marginRight: "10px",
                marginBottom: "8px",
              }}
            >
              <Text
                style={{
                  fontStyle: "bold",
                  fontSize: "16px",
                  marginBottom: "6px",
                  color: "#E74C3C",
                }}
              >
                Kontak
              </Text>
              <View>
                <ListItem>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Text>Blok Wagir, Gantar,</Text>
                    <Text>Indramayu 45264</Text>
                  </View>
                </ListItem>
                <ListItem>
                  <Link
                    src="https://wa.me/0881023284544"
                    style={{
                      color: "#283747",
                    }}
                  >
                    0881-0232-84544
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    src="mailto:andri.feb.26@gmail.com"
                    style={{
                      color: "#283747",
                    }}
                  >
                    andri.feb.26@gmail.com
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    src="https://github.com/andribob26"
                    style={{
                      color: "#283747",
                    }}
                  >
                    github.com/andribob26
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    src="https://bob-portfolio.vercel.app/"
                    style={{
                      color: "#283747",
                    }}
                  >
                    bob-portfolio.vercel.app
                  </Link>
                </ListItem>
              </View>
            </View>

            <View
              style={{
                marginBottom: "8px",
              }}
            >
              <Text
                style={{
                  fontStyle: "bold",
                  fontSize: "16px",
                  marginBottom: "6px",
                  color: "#E74C3C",
                }}
              >
                Keahlian
              </Text>
              <View>
                <ListItem>
                  <Text>Html</Text>
                </ListItem>
                <ListItem>
                  <Text>Css</Text>
                </ListItem>
                <ListItem>
                  <Text>JavaScript</Text>
                </ListItem>
                <ListItem>
                  <Text>TypeScript</Text>
                </ListItem>
                <ListItem>
                  <Text>Dart</Text>
                </ListItem>
                <ListItem>
                  <Text>Node.js</Text>
                </ListItem>
                <ListItem>
                  <Text>React.js</Text>
                </ListItem>
                <ListItem>
                  <Text>Next.js</Text>
                </ListItem>
                <ListItem>
                  <Text>TailwindCss</Text>
                </ListItem>
                <ListItem>
                  <Text>Flutter</Text>
                </ListItem>
                <ListItem>
                  <Text>Express.js</Text>
                </ListItem>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 2,
            }}
          >
            <View
              style={{
                marginBottom: "8px",
              }}
            >
              <Text
                style={{
                  marginBottom: "2px",
                }}
              >
                Saya memulai pemrograman pada tahun 2017 dengan bahasa Pascal
                dan terus mendalami bidang ini seiring waktu. Pada tahun 2019,
                setelah mempelajari React.js, saya mengembangkan minat dalam
                pengembangan aplikasi.
              </Text>
              <Text
                style={{
                  marginBottom: "2px",
                }}
              >
                Di perusahaan sebelumnya, saya berpengalaman dalam mengembangkan
                aplikasi web dan mobile dengan menggunakan React.js, Flutter,
                Socket.io, Redux, dan Firebase untuk menciptakan solusi yang
                efektif dan skalabel.
              </Text>
              <Text>
                Sebagai lulusan S1 Teknik Informatika dari Universitas Komputer
                Indonesia, saya memiliki dasar yang kuat dalam pemrograman dan
                pengembangan perangkat lunak. Saat ini, saya terus belajar dan
                mencari peluang baru untuk berkembang dalam industri teknologi.
              </Text>
            </View>
            {/* pengalaman */}
            <View>
              <Text
                style={{
                  fontStyle: "bold",
                  fontSize: "16px",
                  marginBottom: "6px",
                  color: "#E74C3C",
                }}
              >
                Pengalaman
              </Text>
              <View
                style={{
                  marginBottom: "8px",
                }}
              >
                <View>
                  <Text>
                    <Text style={{ fontStyle: "bold" }}>
                      PT. Digi Tekno Indonesia
                    </Text>{" "}
                    - Freelance Frontend Develover
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      color: "#5d6d7E",
                      fontSize: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <Text>Jl. Magna Barat, Blok MD. 18, Bandung</Text>
                    <Text>agustus - september 2022</Text>
                  </View>
                </View>
                <View>
                  <ListItem>
                    <Text>
                      Menerapkan desain responsif untuk memastikan aplikasi
                      website berfungsi dengan baik di berbagai perangkat dan
                      ukuran layar.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      Mengintegrasikan layanan backend untuk memfasilitasi
                      operasi CRUD (Create, Read, Update, Delete) dan
                      sinkronisasi data dengan server menggunakan RESTful APIs
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      Menggunakan framework dan pustaka JavaScript seperti
                      React.js untuk membangun aplikasi website yang dinamis dan
                      interaktif.
                    </Text>
                  </ListItem>
                </View>
              </View>

              <View
                style={{
                  marginBottom: "8px",
                }}
              >
                <View>
                  <Text>
                    <Text style={{ fontStyle: "bold" }}>
                      PT. Atap Teknologi
                    </Text>{" "}
                    - Frontend Develover
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      color: "#5d6d7E",
                      fontSize: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <Text>
                      Jl. Cihanjuang, Blok Aki Nurhasan No.88-A, Bandung Barat
                    </Text>
                    <Text>Juli 2023 - agustus 2024</Text>
                  </View>
                </View>
                <View>
                  <ListItem>
                    <Text>
                      Menerapkan desain responsif untuk memastikan aplikasi
                      website dan aplikasi mobile berfungsi dengan baik di
                      berbagai perangkat dan ukuran layar.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      Mengintegrasikan layanan backend untuk memfasilitasi
                      operasi CRUD (Create, Read, Update, Delete) dan
                      sinkronisasi data dengan server menggunakan RESTful APIs
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      Menggunakan Socket.io untuk mengimplementasikan komunikasi
                      real-time dalam aplikasi web dan mobile, seperti chat dan
                      notifikasi langsung
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      Mengintegrasikan layanan Google, termasuk Google Maps API
                      untuk peta interaktif, Firebase Cloud Messaging (FCM)
                      untuk notifikasi push, dan Firebase Authentication untuk
                      berbagai metode otentikasi.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      Menggunakan framework dan pustaka JavaScript seperti
                      React.js serta Flutter untuk membangun aplikasi web dan
                      mobile yang dinamis dan interaktif.
                    </Text>
                  </ListItem>
                </View>
              </View>
            </View>

            {/* pendidikan */}
            <View>
              <Text
                style={{
                  fontStyle: "bold",
                  fontSize: "16px",
                  color: "#E74C3C",
                  marginBottom: "8px",
                }}
              >
                Pendidikan
              </Text>
              <View>
                <View>
                  <Text>
                    <Text style={{ fontStyle: "bold" }}>
                      Universitas Komputer Indonesia
                    </Text>{" "}
                    - S1 Teknik Informatika
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      color: "#5d6d7E",
                      fontSize: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <Text>2021 - 2023</Text>
                    <Text>Jl. Dipati Ukur No.112-116, Bandung</Text>
                  </View>
                </View>
              </View>
            </View>
            {/* Keahlian */}
            {/* <View
              style={{
                marginBottom: "8px",
              }}
            >
              <Text
                style={{
                  fontStyle: "bold",
                  fontSize: "16px",
                  marginBottom: "6px",
                }}
              >
                Keahlian
              </Text>
              <View
                style={{
                  marginLeft: "16px",
                }}
              >
                <ListItem>Html</ListItem>
                <ListItem>Css</ListItem>
                <ListItem>JavaScript</ListItem>
              </View>
            </View> */}
          </View>
        </View>
      </Page>
    </Document>
  );
};

const DocPdf = () => {
  return (
    <div className="w-full h-[100vh] overflow-hidden">
      <PDFViewer
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Pdf />
      </PDFViewer>
    </div>
  );
};

export default DocPdf;
