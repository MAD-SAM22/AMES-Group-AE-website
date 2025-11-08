import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";

const images = [
  {
    src: "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-6/481345679_950044420659567_2318569573567916446_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=iXZYLVPLpkcQ7kNvwGB_oLC&_nc_oc=AdnDW3IC8WpAmrIst5zGsPXtn9N5tLuadMSmlK4cHO9PCL95QDZbhfMHTvwKDMIpZNs&_nc_zt=23&_nc_ht=scontent.fcai20-6.fna&_nc_gid=tfPDZld_lZcHE9WCGoU1xA&oh=00_AfhtJFhGiYlXivj4bMcimPGdL4-1_FXKO0npqwQCuzOEdA&oe=69157331",
    title: "Campus admissions day",
    caption: "Students receiving acceptance guidance for Australia and Canada.",
  },
  {
    src: "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-6/487818649_966972462300096_4398543638602195295_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NtH8iWwyIB0Q7kNvwFXOuc0&_nc_oc=Adkw8t7plFUD3rhwEedUcDaO-XkWdtigDDujTebxpfrYcW0Mq-GiZbYUDjWVn4HJzHM&_nc_zt=23&_nc_ht=scontent.fcai20-4.fna&_nc_gid=4Kk6EFOVMly0E2WDzMNPeg&oh=00_AfirGudkQ0G1D9fw8y6gfZpRqQVCTsFNEBswSZJVn3rvGA&oe=69158EC0",
    title: "Family visa consultation",
    caption: "Helping families organise documents for partner and parent visas.",
  },  
  {
    src: "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/480969092_941936214803721_3687545503313734311_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GlaZWRoGS48Q7kNvwEbs23m&_nc_oc=AdnGx2JY__gjGvX9ld0wRcOMS_Ca2gGAhyT1RRLwL6zb32EIpyWKWe44mpHBTch9djw&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=KEUDD3QKAPwQMeJxVyDfsw&oh=00_AfiBm8vWpIvJSNs4UABwKUtVkfzJ32NOs3XMp1PJyRicAQ&oe=69157419",
    title: "IELTS coaching workshop",
    caption: "Preparing applicants for English proficiency and interview success.",
  },
  {
    src: "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/487957072_966964488967560_7951872543168457981_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OYUorYyLfysQ7kNvwHSaR5n&_nc_oc=AdlSY4KivPqBaQMVRsqHq19zhu1EPGbxpzrXNDevuGBHHYXjH4Mi0TlRqmYsavLk5oQ&_nc_zt=23&_nc_ht=scontent.fcai20-1.fna&_nc_gid=DyO1pyYYqUpzIBzxoqMFYw&oh=00_Afgcme789WaiUuB-K6bqMNDqV2etr-nYLoy494BqCpYc4A&oe=69155C74",
    title: "Golden Visa briefing",
    caption: "Investor session on UAE Golden Visa requirements and benefits.",
  },

  {
    src: "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/488431438_1149233877214499_6255623759142814901_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eAxFVfn3NkEQ7kNvwFMWCus&_nc_oc=Adlrf_ueGoxCHwvYR3eaXyLeoeF3bQv1Yu0eR8pfgcIXA0EadFyOt-qEUtOd9fAvtfE&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=7vzYO0ta3qZt7fVRMxkcxg&oh=00_Afgvjj0Q4OT_jIcClO-70jG9xmRdFJu1DCpSI3j8PmVoRA&oe=69158E58",
    title: "Relocation planning",
    caption: "Reviewing housing, insurance, and settlement essentials.",
  },
  {
    src: "https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/488158429_1148805167257370_850167978631877075_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VAdcT5D6KocQ7kNvwHjYJLY&_nc_oc=Adk0K08N16EgytQPD3xXL6hvbyDpNNYCILLgE5Gv6zzZMBrMOhdKQNCOvoVWJCtRauw&_nc_zt=23&_nc_ht=scontent.fcai20-2.fna&_nc_gid=6VCjMXxCSoBhZxauplvOpg&oh=00_AfgjqRYpjr67KkGTH1_7Suf9nhqWzATmkZDT5QQRvh_kOQ&oe=691583DE",
    title: "Graduation milestone",
    caption: "Celebrating students who transitioned to post-study work visas.",
  },
];

const HomeGallery = () => (
  <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="rounded-3xl bg-white p-6 shadow-card sm:p-10">
      <h2 className="text-center text-3xl font-bold text-brand-accent sm:text-4xl">
        Moments from the AMES journey
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-gray-600 sm:text-base">
        Real snapshots from counselling sessions, workshops, and client
        celebrations captured by the AMES Group team across our network.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <figure
            key={image.title}
            className="group relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src={image.src}
              alt={image.title}
              className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-black/10 px-4 py-3 text-left text-white">
              <p className="text-sm font-semibold">{image.title}</p>
              <p className="text-xs text-white/80">{image.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default HomeGallery;


