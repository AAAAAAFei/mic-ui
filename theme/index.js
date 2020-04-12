import defaultVars from './default';
import hostConfig from './host';
import extendConfig from './extend';

const hostVars = hostConfig.vars;
const extendVars = extendConfig.vars, appName = extendConfig.getAppName();
const vars = {};

[defaultVars, hostVars, extendVars].forEach(v => {
    Object.keys(v).forEach(key => {
        if (!vars[key]) {
            vars[key] = {};
        }
        Object.assign(vars[key], v[key]);
    });
});

const theme = Object.assign({}, vars.common, vars[appName]);

export default function (name, value) {
    if (value) {
        theme[name] = value;
    } else {
        return theme[name];
    }
}