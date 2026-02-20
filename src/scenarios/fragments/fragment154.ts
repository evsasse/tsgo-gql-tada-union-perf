import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken152 } from "./fragment152";
import type { FragmentToken153 } from "./fragment153";

export const FRAGMENT_154 = gql(`
  fragment Fragment154 on Member153 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_153
    memberCount_153
    memberMetric_153
  }
`);

type FragmentResult154 = ResultOf<typeof FRAGMENT_154>;
type FragmentSelf154 = NonNullable<FragmentResult154>;

export type FragmentToken154 =
  | FragmentSelf154["__typename"]
  | FragmentSelf154["typenameHint"] | FragmentToken152 | FragmentToken153;
