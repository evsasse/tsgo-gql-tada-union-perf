import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3949 } from "./fragment3949";
import type { FragmentToken3950 } from "./fragment3950";

export const FRAGMENT_3951 = gql(`
  fragment Fragment3951 on Member30 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_30
    memberCount_30
    memberMetric_30
  }
`);

type FragmentResult3951 = ResultOf<typeof FRAGMENT_3951>;
type FragmentSelf3951 = NonNullable<FragmentResult3951>;

export type FragmentToken3951 =
  | FragmentSelf3951["__typename"]
  | FragmentSelf3951["typenameHint"] | FragmentToken3949 | FragmentToken3950;
