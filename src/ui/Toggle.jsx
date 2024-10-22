import { Switch } from "@headlessui/react";
import React from "react";

function Toggle({ label, enabled, onChange }) {
  return (
    <Switch.Group>
      <div className="flex gap-2 w-">
        <Switch.Label>{label}</Switch.Label>
        <Switch
          checked={enabled}
          onChange={onChange}
          className={`${
            enabled ? "bg-primary-900" : "bg-secondery-200"
          } relative inline-flex h-6 min-w-10 items-center rounded-full transition-colors`}>
          <span
            className={`${
              enabled ? "translate-x-5" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-secondery-0 transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}

export default Toggle;
