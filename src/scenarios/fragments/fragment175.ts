import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken173 } from "./fragment173";
import type { FragmentToken174 } from "./fragment174";

export const FRAGMENT_175 = gql(`
  fragment Fragment175 on Member174 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_174
    memberCount_174
    memberMetric_174
  }
`);

type FragmentResult175 = ResultOf<typeof FRAGMENT_175>;
type FragmentSelf175 = NonNullable<FragmentResult175>;

export type FragmentToken175 =
  | FragmentSelf175["__typename"]
  | FragmentSelf175["typenameHint"] | FragmentToken173 | FragmentToken174;
