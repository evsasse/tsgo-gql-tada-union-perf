import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken735 } from "./fragment735";
import type { FragmentToken736 } from "./fragment736";

export const FRAGMENT_737 = gql(`
  fragment Fragment737 on Member176 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_176
    memberCount_176
    memberMetric_176
  }
`);

type FragmentResult737 = ResultOf<typeof FRAGMENT_737>;
type FragmentSelf737 = NonNullable<FragmentResult737>;

export type FragmentToken737 =
  | FragmentSelf737["__typename"]
  | FragmentSelf737["typenameHint"] | FragmentToken735 | FragmentToken736;
