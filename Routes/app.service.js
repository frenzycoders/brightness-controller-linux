const { execSync } = require('child_process');
class AppServices {

    async fetchListofMonitor(req, res) {
        try {
            let monitors = execSync('xrandr | grep " connected" | cut -f1 -d " "');
            monitors = monitors.toString().split('\n');
            res.status(200).send({ monitors });
        } catch (error) {
            res.status(400).send({ error: error })
        }
    }

    async changeBrightnessLevel(req, res) {
        try {
            let { level, screen } = req.params;
            if (level > 1.0) return res.status(400).send({ messge: "Brightness level heigh" });
            execSync('xrandr --output ' + screen + ' --brightness ' + level);
            res.status(200).send({ screen, level, message: "Update success" });
        } catch (error) {
            res.status(400).send({ error: error });
        }
    }
}

const appService = new AppServices();
module.exports = appService;