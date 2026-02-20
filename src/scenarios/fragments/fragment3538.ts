import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3536 } from "./fragment3536";
import type { FragmentToken3537 } from "./fragment3537";

export const FRAGMENT_3538 = gql(`
  fragment Fragment3538 on Member177 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_177
    memberCount_177
    memberMetric_177
  }
`);

type FragmentResult3538 = ResultOf<typeof FRAGMENT_3538>;
type FragmentSelf3538 = NonNullable<FragmentResult3538>;

export type FragmentToken3538 =
  | FragmentSelf3538["__typename"]
  | FragmentSelf3538["typenameHint"] | FragmentToken3536 | FragmentToken3537;
