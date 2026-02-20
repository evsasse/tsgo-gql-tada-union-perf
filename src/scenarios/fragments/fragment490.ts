import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken488 } from "./fragment488";
import type { FragmentToken489 } from "./fragment489";

export const FRAGMENT_490 = gql(`
  fragment Fragment490 on Member209 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_209
    memberCount_209
    memberMetric_209
  }
`);

type FragmentResult490 = ResultOf<typeof FRAGMENT_490>;
type FragmentSelf490 = NonNullable<FragmentResult490>;

export type FragmentToken490 =
  | FragmentSelf490["__typename"]
  | FragmentSelf490["typenameHint"] | FragmentToken488 | FragmentToken489;
