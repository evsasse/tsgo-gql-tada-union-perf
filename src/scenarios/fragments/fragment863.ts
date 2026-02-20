import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken861 } from "./fragment861";
import type { FragmentToken862 } from "./fragment862";

export const FRAGMENT_863 = gql(`
  fragment Fragment863 on Member22 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_22
    memberCount_22
    memberMetric_22
  }
`);

type FragmentResult863 = ResultOf<typeof FRAGMENT_863>;
type FragmentSelf863 = NonNullable<FragmentResult863>;

export type FragmentToken863 =
  | FragmentSelf863["__typename"]
  | FragmentSelf863["typenameHint"] | FragmentToken861 | FragmentToken862;
