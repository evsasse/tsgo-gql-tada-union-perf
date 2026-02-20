import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken693 } from "./fragment693";
import type { FragmentToken694 } from "./fragment694";

export const FRAGMENT_695 = gql(`
  fragment Fragment695 on Member134 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_134
    memberCount_134
    memberMetric_134
  }
`);

type FragmentResult695 = ResultOf<typeof FRAGMENT_695>;
type FragmentSelf695 = NonNullable<FragmentResult695>;

export type FragmentToken695 =
  | FragmentSelf695["__typename"]
  | FragmentSelf695["typenameHint"] | FragmentToken693 | FragmentToken694;
