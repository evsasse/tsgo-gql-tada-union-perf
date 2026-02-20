import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken791 } from "./fragment791";
import type { FragmentToken792 } from "./fragment792";

export const FRAGMENT_793 = gql(`
  fragment Fragment793 on Member232 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_232
    memberCount_232
    memberMetric_232
  }
`);

type FragmentResult793 = ResultOf<typeof FRAGMENT_793>;
type FragmentSelf793 = NonNullable<FragmentResult793>;

export type FragmentToken793 =
  | FragmentSelf793["__typename"]
  | FragmentSelf793["typenameHint"] | FragmentToken791 | FragmentToken792;
