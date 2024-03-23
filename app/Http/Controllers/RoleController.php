<?php

namespace App\Http\Controllers;

use App\Http\Requests\PermissionRequest;
use App\Http\Requests\RoleRequest;
use App\Http\Resources\PermissionResource;
use App\Http\Resources\RoleResource;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Admin/Role/Index',[
            'roles' => RoleResource::collection(Role::all())
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create():Response
    {

        return Inertia::render('Admin/Role/Create',[
            'permissions' => PermissionResource::collection(Permission::all())
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RoleRequest $request):RedirectResponse
    {
       $role= Role::create($request->validated());
        if($request->has('permissions')){
            $role->syncPermissions($request->permissions);
        }
        return to_route('role.index')->with('success','Role was created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id): Response
    {
        $role = Role::findById($id);
        $role->load('permissions');
        return Inertia::render('Admin/Role/Edit',[
            'role' => new RoleResource($role),
            'permissions' => PermissionResource::collection(Permission::all())
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RoleRequest $request, string $id):RedirectResponse
    {
        $role = Role::findById($id);
        $role->update([
            'name'=> $request->name
        ]);
        $role->syncPermissions($request->permissions);
        return to_route('role.index')->with('success','Updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id):RedirectResponse
    {
        $role = Role::findById($id);
        $role->delete();
        return back()->with('success','Deleted');
    }
}
