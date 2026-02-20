import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken922 } from "./fragment922";
import type { FragmentToken923 } from "./fragment923";

export const FRAGMENT_924 = gql(`
  fragment Fragment924 on Member83 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_83
    memberCount_83
    memberMetric_83
  }
`);

type FragmentResult924 = ResultOf<typeof FRAGMENT_924>;
type FragmentSelf924 = NonNullable<FragmentResult924>;

export type FragmentToken924 =
  | FragmentSelf924["__typename"]
  | FragmentSelf924["typenameHint"] | FragmentToken922 | FragmentToken923;
