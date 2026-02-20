import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2201 } from "./fragment2201";
import type { FragmentToken2202 } from "./fragment2202";

export const FRAGMENT_2203 = gql(`
  fragment Fragment2203 on Member242 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_242
    memberCount_242
    memberMetric_242
  }
`);

type FragmentResult2203 = ResultOf<typeof FRAGMENT_2203>;
type FragmentSelf2203 = NonNullable<FragmentResult2203>;

export type FragmentToken2203 =
  | FragmentSelf2203["__typename"]
  | FragmentSelf2203["typenameHint"] | FragmentToken2201 | FragmentToken2202;
