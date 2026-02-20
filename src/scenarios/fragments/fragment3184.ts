import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3182 } from "./fragment3182";
import type { FragmentToken3183 } from "./fragment3183";

export const FRAGMENT_3184 = gql(`
  fragment Fragment3184 on Member103 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_103
    memberCount_103
    memberMetric_103
  }
`);

type FragmentResult3184 = ResultOf<typeof FRAGMENT_3184>;
type FragmentSelf3184 = NonNullable<FragmentResult3184>;

export type FragmentToken3184 =
  | FragmentSelf3184["__typename"]
  | FragmentSelf3184["typenameHint"] | FragmentToken3182 | FragmentToken3183;
