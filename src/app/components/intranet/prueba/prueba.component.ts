import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Habito} from "../../../models/habito";
import {MatPaginator} from "@angular/material/paginator";
import {HabitoService} from "../../../services/habito.service";


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit{
  dataSource: MatTableDataSource<Habito> = new MatTableDataSource<Habito>();

  displayedColumns: string[] = ['id'];
  noDataMessage: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private habitosService: HabitoService) {}

  ngOnInit() {
    this.getAllHabitos();
  }

  getAllHabitos(): void {
    this.habitosService.getAllHabitosByUser().subscribe((habits) => {
      this.dataSource.data = habits;
    });
  }
}
