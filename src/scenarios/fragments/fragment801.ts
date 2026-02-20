import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken799 } from "./fragment799";
import type { FragmentToken800 } from "./fragment800";

export const FRAGMENT_801 = gql(`
  fragment Fragment801 on Member240 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_240
    memberCount_240
    memberMetric_240
  }
`);

type FragmentResult801 = ResultOf<typeof FRAGMENT_801>;
type FragmentSelf801 = NonNullable<FragmentResult801>;

export type FragmentToken801 =
  | FragmentSelf801["__typename"]
  | FragmentSelf801["typenameHint"] | FragmentToken799 | FragmentToken800;
