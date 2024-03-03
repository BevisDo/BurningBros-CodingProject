/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ForwardedRef, forwardRef } from "react";

type AppFlatListProps = {
  data: any[];
  renderItem: (item: any, index: number) => void;
  isLoading: boolean;
  ListSkeletonComponent: any;
  ListEmptyComponent: React.FunctionComponent;
  className?: string;
  isFetchingNextPage?: boolean;
  totalData: number;
};

const getEmptyContainer = (ListEmptyComponent: React.FunctionComponent) => {
  if (ListEmptyComponent)
    return React.isValidElement(ListEmptyComponent) ? (
      ListEmptyComponent
    ) : (
      <ListEmptyComponent />
    );
  return null;
};
const AppListView = (props: any) => {
  return <div className={props.className}>{props.children}</div>;
};
const AppFlatListInner = (
  {
    data,
    renderItem,
    ListEmptyComponent,
    className,
    ListSkeletonComponent,
    isLoading,
    totalData,
    isFetchingNextPage,
  }: AppFlatListProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  if (isLoading)
    return <div className={className}>{ListSkeletonComponent}</div>;
  return (
    <>
      <AppListView className={className}>
        {data?.length > 0
          ? data.map((item, index) => renderItem(item, index))
          : getEmptyContainer(ListEmptyComponent)}
      </AppListView>
      {data?.length !== totalData && (
        <div className="spacing-top-10" ref={ref}></div>
      )}
      {isFetchingNextPage && (
        <div className={className}>{ListSkeletonComponent}</div>
      )}
    </>
  );
};
export const AppFlatList = forwardRef(AppFlatListInner);
