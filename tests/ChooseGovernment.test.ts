import ChooseGovernment from '../ChooseGovernment';
import MandatoryPlayerAction from '@civ-clone/core-player/MandatoryPlayerAction';
import Player from '@civ-clone/core-player/Player';
import PlayerAction from '@civ-clone/core-player/PlayerAction';
import PlayerGovernment from '@civ-clone/core-government/PlayerGovernment';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
import { expect } from 'chai';

describe('ChooseGovernment', (): void => {
  it('is a mandatory player action, saved and matched by its class name', (): void => {
    const ruleRegistry = new RuleRegistry(),
      player = new Player(ruleRegistry),
      playerGovernment = new PlayerGovernment(player, undefined, ruleRegistry),
      action = new ChooseGovernment(player, playerGovernment);

    expect(action).to.be.instanceOf(MandatoryPlayerAction);
    expect(action).to.be.instanceOf(PlayerAction);
    expect(action.value()).to.equal(playerGovernment);
    expect(action.player()).to.equal(player);
    expect(ChooseGovernment.name).to.equal('ChooseGovernment');
  });
});
