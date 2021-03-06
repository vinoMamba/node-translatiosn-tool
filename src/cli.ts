import * as commander from 'commander';
import {translate} from './main';

const program = new commander.Command();

program.version('0.0.1')
    .name('vino-trans')
    .usage('<English>')
    .arguments('<English>')
    .action((english) => {
        translate(english);
    });

program.parse(process.argv);