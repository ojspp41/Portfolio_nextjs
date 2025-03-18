const colorMap = {
    "Next.js": "bg-pink-200 text-pink-900",
    "TailwindCss": "bg-blue-100 text-blue-900",
    "ReactJs": "bg-green-100 text-green-900",
    "VanilaCss": "bg-yellow-100 text-yellow-900",
    "FireBase": "bg-orange-100 text-orange-900",
    "Recoil": "bg-purple-100 text-purple-900",
    "SockJS": "bg-indigo-100 text-indigo-900",
    "CSS": "bg-pink-100 text-pink-900",
    "Vercel": "bg-gray-200 text-gray-900",
    "LottiAnimation": "bg-gray-200 text-gray-900",
    "Notion.API": "bg-gray-300 text-gray-900",
    "QR-reader": "bg-gray-300 text-gray-900",
    "Redux": "bg-red-100 text-red-900",
    "CssComponent": "bg-green-100 text-green-900",
    "zustand": "bg-orange-200 text-orange-900",
    "React Query": "bg-green-200 text-green-900",
    "NodeJs": "bg-green-300 text-green-900",
    "MongoDB": "bg-emerald-200 text-emerald-900",
    "Render": "bg-gray-300 text-gray-900",
    "Passport": "bg-orange-300 text-orange-900",
    "Oauth": "bg-purple-200 text-purple-900"
};

export default function TechStackTag({name, id}) {
    const colorClasses = colorMap[name] || "bg-gray-100 text-gray-900";

    return (
        <span className={`px-3 border py-1 bg-opacity-30 text-sm rounded-md ${colorClasses}`} key={id}>
            {name}
        </span>
    );
}
