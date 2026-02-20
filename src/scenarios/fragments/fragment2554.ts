import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2552 } from "./fragment2552";
import type { FragmentToken2553 } from "./fragment2553";

export const FRAGMENT_2554 = gql(`
  fragment Fragment2554 on Member33 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_33
    memberCount_33
    memberMetric_33
  }
`);

type FragmentResult2554 = ResultOf<typeof FRAGMENT_2554>;
type FragmentSelf2554 = NonNullable<FragmentResult2554>;

export type FragmentToken2554 =
  | FragmentSelf2554["__typename"]
  | FragmentSelf2554["typenameHint"] | FragmentToken2552 | FragmentToken2553;
