# base-player-action-choose-government

The `ChooseGovernment` `MandatoryPlayerAction`: offered once a revolution is over, and answered before the turn can end,
by choosing the player's new government. Its value is the `PlayerGovernment` to set.

A library: it registers no rules. A ruleset offers it from its own `Action` rule (see `civ1-government`), after a
`Revolution` (`base-player-action-revolution`). Saves and clients name it by its class name, `ChooseGovernment`.
