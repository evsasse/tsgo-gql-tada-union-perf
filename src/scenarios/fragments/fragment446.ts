import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken444 } from "./fragment444";
import type { FragmentToken445 } from "./fragment445";

export const FRAGMENT_446 = gql(`
  fragment Fragment446 on Member165 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_165
    memberCount_165
    memberMetric_165
  }
`);

type FragmentResult446 = ResultOf<typeof FRAGMENT_446>;
type FragmentSelf446 = NonNullable<FragmentResult446>;

export type FragmentToken446 =
  | FragmentSelf446["__typename"]
  | FragmentSelf446["typenameHint"] | FragmentToken444 | FragmentToken445;
