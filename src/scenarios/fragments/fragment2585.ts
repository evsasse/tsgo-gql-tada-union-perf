import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2583 } from "./fragment2583";
import type { FragmentToken2584 } from "./fragment2584";

export const FRAGMENT_2585 = gql(`
  fragment Fragment2585 on Member64 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_64
    memberCount_64
    memberMetric_64
  }
`);

type FragmentResult2585 = ResultOf<typeof FRAGMENT_2585>;
type FragmentSelf2585 = NonNullable<FragmentResult2585>;

export type FragmentToken2585 =
  | FragmentSelf2585["__typename"]
  | FragmentSelf2585["typenameHint"] | FragmentToken2583 | FragmentToken2584;
