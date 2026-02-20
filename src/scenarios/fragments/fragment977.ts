import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken975 } from "./fragment975";
import type { FragmentToken976 } from "./fragment976";

export const FRAGMENT_977 = gql(`
  fragment Fragment977 on Member136 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_136
    memberCount_136
    memberMetric_136
  }
`);

type FragmentResult977 = ResultOf<typeof FRAGMENT_977>;
type FragmentSelf977 = NonNullable<FragmentResult977>;

export type FragmentToken977 =
  | FragmentSelf977["__typename"]
  | FragmentSelf977["typenameHint"] | FragmentToken975 | FragmentToken976;
