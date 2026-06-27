interface Props{
    title:string;
    children:React.ReactNode;
}

export default function Section({
    title,
    children
}:Props){

    return(

        <section
            style={{
                marginBottom:"40px"
            }}
        >

            <h2
                style={{
                    marginBottom:"20px"
                }}
            >
                {title}
            </h2>

            {children}

        </section>

    );

}