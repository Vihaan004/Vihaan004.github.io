import Image from "next/image";
import works from "@/content/works/works.json";

interface Work {
    name: string;
    link: string;
    description: string;
    image: string;
    imageLink?: string;
}

export default function Works() {
    const worksList: Work[] = works;

    return (
        <main>
            <div className="repos">
                {worksList.map((work) => (
                    <div key={work.name} className="repo-card">
                        {work.image && (
                            <div className="work-image">
                                {work.imageLink ? (
                                    <a href={work.imageLink} target="_blank" rel="noopener noreferrer">
                                        <Image 
                                            src={work.image} 
                                            alt={work.name}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </a>
                                ) : (
                                    <Image 
                                        src={work.image} 
                                        alt={work.name}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                )}
                            </div>
                        )}
                        <div className="work-content">
                            <h4>
                                <a href={work.link} target="_blank" rel="noopener noreferrer">
                                    {work.name}
                                </a>
                            </h4>
                            <p dangerouslySetInnerHTML={{ __html: work.description }} />
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}