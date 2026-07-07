import { useMessages, useTranslations } from "next-intl";

type ExperienceItem = {
    year: string;
    role: string;
    company: string;
    description: string;
    achievements: string[];
};

export const Experience = () => {
    const t = useTranslations("Experience");
    const messages = useMessages();
    const items = (messages.Experience as any).items as Record<string, ExperienceItem>;

    return (
        <div className="w-full">
            <div className="flex flex-col gap-4">
                {Object.entries(items).map(([key, item]) => (
                    <div
                        key={key}
                        className="relative rounded-md border border-border bg-secondary/40 pl-5 pr-5 py-5 overflow-hidden"
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />

                        <div className="flex items-start justify-between gap-4">
                            <h4 className="text-base font-semibold text-foreground">
                                {item.role}
                            </h4>
                            <span className="shrink-0 text-xs whitespace-nowrap mt-1 font-bold text-accent">
                                {item.year}
                            </span>
                        </div>

                        <p className="text-sm font-medium text-accent mt-0.5">
                            {item.company}
                        </p>

                        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                            {item.description}
                        </p>

                        {item.achievements.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-4">
                                {item.achievements.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs font-medium px-2.5 py-1 rounded border border-accent/30 bg-accent/10 text-accent"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;