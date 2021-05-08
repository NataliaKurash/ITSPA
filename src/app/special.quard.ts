import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class SpecialGuard implements CanActivate{
    public canActivate( route: ActivatedRouteSnapshot,  state: RouterStateSnapshot): boolean{
        const sanwichId = parseInt(route.params.id)
        return sanwichId < 4;
    }
}