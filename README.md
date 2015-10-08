# angular-slot-select
An HTML select input for angularjs which looks like a slot machine or a ios list picker

I use http://josex2r.github.io/jQuery-SlotMachine/ for slot effect

Developement in process

```
<div class="slot-select" slot-select-list="contact in contacts" selected-slot="currentContact">
      <p class="name"><strong>{{ contact.name }}</strong></p>
      <div class="email text-muted" ng-if="!hideEmail">{{ contact.email }}</div>
</div>
```
