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
  private membersService = inject(MembersService);
  members: Member[] = [];

  ngOnInit(): void {
      this.loadMember()
  }

  loadMember(){
    this.membersService.getMembers().subscribe({
      next: members => this.members = members
    })
  }
}
