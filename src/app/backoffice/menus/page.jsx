"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CopyPlus, Trash, ChevronDown, GripVertical, Copy, Plus } from "lucide-react";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import AddMenuItemSheet from "@/components/add-menu-item-sheet";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import Loading from "@/components/loading";

// ✅ แก้ไข SortableItem - ใช้ CSS transform และ transition ที่ดีขึ้น
function SortableItem({ id, children, isDragging }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: dndKitIsDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || "transform 200ms ease",
    opacity: dndKitIsDragging ? 0.5 : 1,
    zIndex: dndKitIsDragging ? 50 : "auto",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {React.cloneElement(children, {
        dragHandleProps: { ...attributes, ...listeners },
        isDragging: dndKitIsDragging,
      })}
    </div>
  );
}

// ✅ แก้ไข MenuItemCard - ลดความซับซ้อนของ drag handle
function MenuItemCard({
  item,
  isDragging,
  dragHandleProps,
  isChild,
  onDelete,
  menuId,
}) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDeleteClick = (e) => {
    e.stopPropagation(); // ✅ ป้องกัน event bubbling
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    onDelete(item.id, menuId);
    setShowDeleteDialog(false);
  };

  const handleCopyUrl = (e) => {
    e.stopPropagation(); // ✅ ป้องกัน event bubbling
    navigator.clipboard.writeText(`http://localhost:8000${item.url}`);
  };

  return (
    <>
      <Card
        className={`
        shadow-none border transition-all duration-150 ease-in-out
        ${isDragging ? "bg-accent shadow-lg" : "hover:shadow-sm"}
      `}
      >
        <CardContent className="py-2">
          <div className="flex justify-between items-center">
            {/* ✅ แก้ไข drag handle */}
            {!isChild && (
              <div
                {...dragHandleProps}
                className="
                  cursor-grab active:cursor-grabbing 
                  p-2 hover:bg-muted rounded-md mr-3
                  transition-colors duration-150
                  touch-none select-none
                "
                title="Drag to reorder"
              >
                <GripVertical className="h-4 w-4 text-muted-foreground" />
              </div>
            )}

            <div className="flex-1 flex flex-col min-w-0">
              <span className="font-semibold truncate">{item.name}</span>
              <div className="flex items-center gap-2 text-sm text-gray-600 w-fit group cursor-pointer transition-all">
                <span
                  onClick={handleCopyUrl}
                  className="truncate max-w-xs text-muted-foreground"
                >
                  {`http://localhost:8000${item.url}`}
                </span>
                <Copy
                  size={16}
                  className="opacity-0 transition-opacity duration-200 group-hover:opacity-100 text-gray-500 hover:text-gray-700"
                />
              </div>
            </div>

            {/* ✅ ซ่อนปุ่มเมื่อ drag */}
            {!isDragging && (
              <div className="flex gap-2 ml-2">
                <Button size="icon" variant="outline" className="h-8 w-8">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={handleDeleteClick}
                  className="h-8 w-8"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              menu item "{item.name}".
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

// ✅ แก้ไข RenderMenuItem - ลดความซับซ้อน
function RenderMenuItem({
  item,
  draggingItemId,
  dragHandleProps,
  isChild = false,
  onDelete,
  menuId,
  parentIsDragging = false,
}) {
  const isDragging = draggingItemId === item.id.toString();
  const shouldHighlight = isDragging || parentIsDragging;

  return (
    <div className="space-y-1">
      <MenuItemCard
        item={item}
        isDragging={shouldHighlight}
        dragHandleProps={isChild ? undefined : dragHandleProps}
        isChild={isChild}
        onDelete={onDelete}
        menuId={menuId}
      />
      {item.children && item.children.length > 0 && (
        <div
          className={`
          ml-6 space-y-1 transition-all duration-200
          ${isDragging ? "opacity-50" : "opacity-100"}
        `}
        >
          {item.children
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map((child) => (
              <RenderMenuItem
                key={child.id}
                item={child}
                draggingItemId={draggingItemId}
                isChild={true}
                onDelete={onDelete}
                menuId={menuId}
                parentIsDragging={isDragging}
              />
            ))}
        </div>
      )}
    </div>
  );
}

// Main Menus component
export default function Menus() {
  const [menus, setMenus] = useState([]);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [draggingItemId, setDraggingItemId] = useState(null);
  const [draggingItem, setDraggingItem] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMenus = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/menus");
        if (!res.ok) throw new Error("Failed to fetch menus");
        const data = await res.json();
        setMenus(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching menus:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMenus();
  }, []);

  const handleDeleteMenuItem = async (itemId, menuId) => {
    try {
      const res = await fetch(`/api/menu-items/${itemId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete menu item");

      setMenus((prevMenus) =>
        prevMenus.map((menu) => {
          if (menu.id !== menuId) return menu;
          const removeItem = (items) =>
            items
              .filter((item) => item.id !== itemId)
              .map((item) => ({
                ...item,
                children: item.children ? removeItem(item.children) : undefined,
              }));
          return { ...menu, items: removeItem(menu.items) };
        })
      );
      toast.success("Menu added delated.");
    } catch (error) {
      console.error("Error deleting menu item:", error);
    }
  };

  const handleToggleMenu = (id) => setOpenMenuId(openMenuId === id ? null : id);

  // ✅ แก้ไข drag handlers
  const handleDragStart = (event) => {
    const draggedId = event.active.id.toString();
    setDraggingItemId(draggedId);

    // หา item ที่ถูก drag
    let draggedItem = null;
    for (const menu of menus) {
      draggedItem = menu.items.find((item) => item.id.toString() === draggedId);
      if (draggedItem) break;
    }
    setDraggingItem(draggedItem);
  };

  const handleDragEnd = async (event, menuId) => {
    const { active, over } = event;
    setDraggingItemId(null); // ✅ clear ตอนลากเสร็จ
    setDraggingItem(null); // ✅ clear dragging item

    if (!over || active.id === over.id) return;

    setMenus((prev) =>
      prev.map((menu) => {
        if (menu.id !== menuId) return menu;

        const oldIndex = menu.items.findIndex(
          (m) => m.id.toString() === active.id
        );
        const newIndex = menu.items.findIndex(
          (m) => m.id.toString() === over.id
        );

        const reordered = arrayMove(menu.items, oldIndex, newIndex).map(
          (m, idx) => ({ ...m, sortOrder: idx + 1 })
        );

        // อัปเดตข้อมูลบนเซิร์ฟเวอร์
        reordered.forEach(async (item) => {
          try {
            await fetch(`/api/menu-items/${item.id}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ sortOrder: item.sortOrder }),
            });
          } catch (error) {
            console.error("Failed to update menu item:", error);
          }
        });

        return { ...menu, items: reordered };
      })
    );
  };

  if (loading) return <Loading />;

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Menus</h1>
          <p className="text-sm text-muted-foreground">Manage your menus</p>
        </div>
      </div>

      <div className="border-l-4 border-l-white flex pb-3 px-2 border-b text-sm font-medium text-muted-foreground">
        <div className="flex-1">Name</div>
        <div className="w-36 text-center">Items</div>
      </div>

      {menus.map((menu) => (
        <div key={menu.id}>
          <div
            className={`py-3 px-2 flex items-center border-l-4 border-y cursor-pointer transition-all duration-200 ${
              openMenuId === menu.id
                ? "border-l-black bg-muted/20"
                : "border-l-white hover:border-l-black hover:bg-muted/30"
            }`}
            onClick={() => handleToggleMenu(menu.id)}
          >
            <div className="flex-1 font-medium">{menu.name}</div>
            <div className="w-36 text-center text-muted-foreground">
              {menu.items.length}
            </div>
            <ChevronDown
              className={`h-4 w-4 ml-2 transition-transform duration-200 ${
                openMenuId === menu.id ? "rotate-180" : ""
              }`}
            />
          </div>

          {openMenuId === menu.id && (
            <div className="pl-6 my-4 space-y-2">
              <AddMenuItemSheet
                menu={menu}
                onAdd={(newItem) => {
                  setMenus((prev) =>
                    prev.map((m) =>
                      m.id === menu.id
                        ? { ...m, items: [...m.items, newItem] }
                        : m
                    )
                  );
                  toast.success("Menu item added!");
                }}
              />

              {/* ✅ แก้ไข DndContext */}
              <DndContext
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={(e) => handleDragEnd(e, menu.id)}
              >
                <SortableContext
                  items={menu.items.map((item) => item.id.toString())}
                  strategy={verticalListSortingStrategy}
                >
                  {/* ✅ ลบ minHeight ที่ซับซ้อน */}
                  <div className="space-y-2">
                    {menu.items
                      .sort((a, b) => a.sortOrder - b.sortOrder)
                      .map((item) => (
                        <SortableItem
                          key={item.id}
                          id={item.id.toString()}
                          isDragging={draggingItemId === item.id.toString()}
                        >
                          <RenderMenuItem
                            item={item}
                            draggingItemId={draggingItemId}
                            onDelete={handleDeleteMenuItem}
                            menuId={menu.id}
                          />
                        </SortableItem>
                      ))}
                  </div>
                </SortableContext>

                {/* ✅ แก้ไข DragOverlay */}
                <DragOverlay>
                  {draggingItem && (
                    <div>
                      <MenuItemCard
                        item={draggingItem}
                        isDragging={false}
                        isChild={false}
                        onDelete={() => {}}
                        menuId={menu.id}
                      />
                    </div>
                  )}
                </DragOverlay>
              </DndContext>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
