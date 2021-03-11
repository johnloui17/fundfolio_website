export const breakout = (props) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width || "119"} height={props.height || "20"} fill="none" viewBox="0 0 119 20">
            <path fill={props.fill || "#fff"} d="M7.876 19.297c1.823 0 3.379-.689 4.67-2.067 1.29-1.379 1.934-3.068 1.934-5.068 0-2-.645-3.689-1.935-5.067-1.29-1.379-2.846-2.068-4.669-2.068-1.894 0-3.356.658-4.384 1.973V0H0v18.919h3.492v-1.595c1.028 1.316 2.49 1.973 4.384 1.973zm-.65-3.324c-1.082 0-1.975-.351-2.679-1.054-.704-.72-1.055-1.64-1.055-2.757 0-1.117.351-2.031 1.055-2.743.704-.712 1.597-1.068 2.68-1.068 1.082 0 1.98.356 2.693 1.068.712.712 1.069 1.626 1.069 2.743s-.357 2.032-1.07 2.743c-.712.712-1.61 1.068-2.692 1.068zm13.209 2.946v-6.46c0-1.297.42-2.225 1.258-2.783.84-.559 1.791-.775 2.856-.649V5.135c-.92 0-1.755.216-2.504.649-.749.432-1.285 1.08-1.61 1.946V5.405h-3.492V18.92h3.492zm12.856.378c2.599 0 4.565-.964 5.9-2.892l-2.814-1.621c-.686.9-1.696 1.351-3.032 1.351-2.075 0-3.347-.847-3.816-2.54h10.204c.09-.505.135-.982.135-1.433 0-2.018-.645-3.712-1.935-5.08-1.29-1.37-2.928-2.055-4.913-2.055-2.093 0-3.807.68-5.142 2.04-1.335 1.36-2.003 3.06-2.003 5.095 0 2.054.677 3.757 2.03 5.108 1.353 1.352 3.149 2.027 5.386 2.027zm3.086-8.405h-6.902c.198-.865.604-1.536 1.218-2.014.613-.477 1.39-.716 2.327-.716.794 0 1.503.225 2.125.676.623.45 1.033 1.135 1.232 2.054zm11.8 8.405c1.895 0 3.366-.657 4.412-1.973v1.595h3.492V5.405h-3.492V7c-1.046-1.315-2.517-1.973-4.411-1.973-1.805 0-3.352.69-4.642 2.068-1.29 1.378-1.936 3.067-1.936 5.067s.645 3.69 1.936 5.068c1.29 1.378 2.837 2.067 4.642 2.067zm.65-3.324c-1.082 0-1.976-.351-2.68-1.054-.703-.72-1.055-1.64-1.055-2.757 0-1.117.352-2.031 1.056-2.743.703-.712 1.596-1.068 2.68-1.068 1.082 0 1.98.356 2.692 1.068.713.712 1.07 1.626 1.07 2.743s-.357 2.032-1.07 2.743c-.713.712-1.61 1.068-2.693 1.068zm13.912 2.946v-6.135l4.926 6.135h4.06l-5.603-6.838 5.44-6.676h-4.168l-4.655 5.946V0h-3.491v18.919h3.491zm17.268.351c1.985 0 3.672-.684 5.061-2.054 1.39-1.37 2.085-3.054 2.085-5.054 0-2-.695-3.685-2.085-5.054-1.389-1.37-3.076-2.054-5.06-2.054-1.986 0-3.668.685-5.049 2.054-1.38 1.37-2.07 3.054-2.07 5.054 0 2 .69 3.685 2.07 5.054 1.38 1.37 3.063 2.054 5.048 2.054zm0-2.297c-1.335 0-2.463-.46-3.383-1.378-.92-.92-1.38-2.064-1.38-3.433 0-1.37.46-2.513 1.38-3.432.92-.92 2.048-1.379 3.383-1.379 1.353 0 2.49.46 3.41 1.379.92.919 1.38 2.063 1.38 3.432 0 1.37-.46 2.514-1.38 3.433-.92.918-2.056 1.378-3.41 1.378zm14.886 2.297c1.967 0 3.429-.765 4.385-2.297v1.946h2.355V5.405h-2.355v7.163c0 1.513-.36 2.635-1.083 3.364-.721.73-1.669 1.095-2.841 1.095-1.047 0-1.868-.302-2.463-.905-.596-.604-.894-1.455-.894-2.554V5.405h-2.354v8.298c0 1.711.478 3.067 1.434 4.067.957 1 2.229 1.5 3.816 1.5zm13.155-.851c.956.604 2.463.77 4.52.5V16.81c-.794.036-1.462.05-2.003.04-.542-.009-.943-.153-1.205-.432-.261-.28-.392-.752-.392-1.419V7.676h3.6v-2.27h-3.6V1.621l-2.355.702v3.081h-2.679v2.27h2.679V15c0 1.676.478 2.815 1.435 3.419z"/>
            <path fill={props.fill || "#14CC60"} d="M117.07 19.297c.554 0 1.015-.188 1.381-.564.366-.376.549-.831.549-1.365 0-.535-.183-.99-.549-1.366-.366-.376-.827-.564-1.381-.564-.534 0-.989.188-1.365.564-.376.376-.565.831-.565 1.366 0 .534.189.99.565 1.365.376.376.831.564 1.365.564z"/>
        </svg>
    )
}
