import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3947 } from "./fragment3947";
import type { FragmentToken3948 } from "./fragment3948";

export const FRAGMENT_3949 = gql(`
  fragment Fragment3949 on Member28 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_28
    memberCount_28
    memberMetric_28
  }
`);

type FragmentResult3949 = ResultOf<typeof FRAGMENT_3949>;
type FragmentSelf3949 = NonNullable<FragmentResult3949>;

export type FragmentToken3949 =
  | FragmentSelf3949["__typename"]
  | FragmentSelf3949["typenameHint"] | FragmentToken3947 | FragmentToken3948;
