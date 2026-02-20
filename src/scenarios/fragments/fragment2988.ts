import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2986 } from "./fragment2986";
import type { FragmentToken2987 } from "./fragment2987";

export const FRAGMENT_2988 = gql(`
  fragment Fragment2988 on Member187 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_187
    memberCount_187
    memberMetric_187
  }
`);

type FragmentResult2988 = ResultOf<typeof FRAGMENT_2988>;
type FragmentSelf2988 = NonNullable<FragmentResult2988>;

export type FragmentToken2988 =
  | FragmentSelf2988["__typename"]
  | FragmentSelf2988["typenameHint"] | FragmentToken2986 | FragmentToken2987;
