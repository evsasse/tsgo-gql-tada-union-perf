import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3702 } from "./fragment3702";
import type { FragmentToken3703 } from "./fragment3703";

export const FRAGMENT_3704 = gql(`
  fragment Fragment3704 on Member63 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_63
    memberCount_63
    memberMetric_63
  }
`);

type FragmentResult3704 = ResultOf<typeof FRAGMENT_3704>;
type FragmentSelf3704 = NonNullable<FragmentResult3704>;

export type FragmentToken3704 =
  | FragmentSelf3704["__typename"]
  | FragmentSelf3704["typenameHint"] | FragmentToken3702 | FragmentToken3703;
