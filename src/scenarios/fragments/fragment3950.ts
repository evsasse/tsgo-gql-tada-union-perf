import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3948 } from "./fragment3948";
import type { FragmentToken3949 } from "./fragment3949";

export const FRAGMENT_3950 = gql(`
  fragment Fragment3950 on Member29 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_29
    memberCount_29
    memberMetric_29
  }
`);

type FragmentResult3950 = ResultOf<typeof FRAGMENT_3950>;
type FragmentSelf3950 = NonNullable<FragmentResult3950>;

export type FragmentToken3950 =
  | FragmentSelf3950["__typename"]
  | FragmentSelf3950["typenameHint"] | FragmentToken3948 | FragmentToken3949;
