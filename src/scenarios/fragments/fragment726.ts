import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken724 } from "./fragment724";
import type { FragmentToken725 } from "./fragment725";

export const FRAGMENT_726 = gql(`
  fragment Fragment726 on Member165 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_165
    memberCount_165
    memberMetric_165
  }
`);

type FragmentResult726 = ResultOf<typeof FRAGMENT_726>;
type FragmentSelf726 = NonNullable<FragmentResult726>;

export type FragmentToken726 =
  | FragmentSelf726["__typename"]
  | FragmentSelf726["typenameHint"] | FragmentToken724 | FragmentToken725;
