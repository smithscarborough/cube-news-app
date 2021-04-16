import { createMuiTheme } from "@material-ui/core";
import { Brightness3, Brightness7 } from "@material-ui/icons";


export const light = {
    palette: {
        type: 'light'
    }
};

export const dark = {
    palette: {
        type: 'dark'
    }
};

export default function Theme() {
    const [theme, setTheme] = useState(true);
    const classes = useStyle();
    const icon = !theme ? <Brightness7 /> : <Brightness3 />;
    const appliedTheme = createMuiTheme(theme ? light : dark);
    
    return (
        
    )
}