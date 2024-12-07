import { Member } from '../../_models/member';
import { MembersService } from './../../_services/members.service';
import { Component, inject, OnInit } from '@angular/core';
import { MemberCardComponent } from "../member-card/member-card.component";

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [MemberCardComponent],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements OnInit {
  membersService = inject(MembersService);

  ngOnInit(): void {
    if(this.membersService.members().length === 0) this.loadMember()
  }

  loadMember(){
    this.membersService.getMembers()
  }
}
