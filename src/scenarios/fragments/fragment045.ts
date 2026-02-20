import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken043 } from "./fragment043";
import type { FragmentToken044 } from "./fragment044";

export const FRAGMENT_045 = gql(`
  fragment Fragment045 on Member44 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_44
    memberCount_44
    memberMetric_44
  }
`);

type FragmentResult045 = ResultOf<typeof FRAGMENT_045>;
type FragmentSelf045 = NonNullable<FragmentResult045>;

export type FragmentToken045 =
  | FragmentSelf045["__typename"]
  | FragmentSelf045["typenameHint"] | FragmentToken043 | FragmentToken044;
