import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken229 } from "./fragment229";
import type { FragmentToken230 } from "./fragment230";

export const FRAGMENT_231 = gql(`
  fragment Fragment231 on Member230 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_230
    memberCount_230
    memberMetric_230
  }
`);

type FragmentResult231 = ResultOf<typeof FRAGMENT_231>;
type FragmentSelf231 = NonNullable<FragmentResult231>;

export type FragmentToken231 =
  | FragmentSelf231["__typename"]
  | FragmentSelf231["typenameHint"] | FragmentToken229 | FragmentToken230;
