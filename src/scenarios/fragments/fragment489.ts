import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken487 } from "./fragment487";
import type { FragmentToken488 } from "./fragment488";

export const FRAGMENT_489 = gql(`
  fragment Fragment489 on Member208 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_208
    memberCount_208
    memberMetric_208
  }
`);

type FragmentResult489 = ResultOf<typeof FRAGMENT_489>;
type FragmentSelf489 = NonNullable<FragmentResult489>;

export type FragmentToken489 =
  | FragmentSelf489["__typename"]
  | FragmentSelf489["typenameHint"] | FragmentToken487 | FragmentToken488;
