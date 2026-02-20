import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken252 } from "./fragment252";
import type { FragmentToken253 } from "./fragment253";

export const FRAGMENT_254 = gql(`
  fragment Fragment254 on Member253 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_253
    memberCount_253
    memberMetric_253
  }
`);

type FragmentResult254 = ResultOf<typeof FRAGMENT_254>;
type FragmentSelf254 = NonNullable<FragmentResult254>;

export type FragmentToken254 =
  | FragmentSelf254["__typename"]
  | FragmentSelf254["typenameHint"] | FragmentToken252 | FragmentToken253;
