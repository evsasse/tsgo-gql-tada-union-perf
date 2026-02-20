import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken949 } from "./fragment949";
import type { FragmentToken950 } from "./fragment950";

export const FRAGMENT_951 = gql(`
  fragment Fragment951 on Member110 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_110
    memberCount_110
    memberMetric_110
  }
`);

type FragmentResult951 = ResultOf<typeof FRAGMENT_951>;
type FragmentSelf951 = NonNullable<FragmentResult951>;

export type FragmentToken951 =
  | FragmentSelf951["__typename"]
  | FragmentSelf951["typenameHint"] | FragmentToken949 | FragmentToken950;
