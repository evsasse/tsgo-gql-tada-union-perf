import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken310 } from "./fragment310";
import type { FragmentToken311 } from "./fragment311";

export const FRAGMENT_312 = gql(`
  fragment Fragment312 on Member31 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_31
    memberCount_31
    memberMetric_31
  }
`);

type FragmentResult312 = ResultOf<typeof FRAGMENT_312>;
type FragmentSelf312 = NonNullable<FragmentResult312>;

export type FragmentToken312 =
  | FragmentSelf312["__typename"]
  | FragmentSelf312["typenameHint"] | FragmentToken310 | FragmentToken311;
