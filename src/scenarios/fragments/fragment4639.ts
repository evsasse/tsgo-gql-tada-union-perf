import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4637 } from "./fragment4637";
import type { FragmentToken4638 } from "./fragment4638";

export const FRAGMENT_4639 = gql(`
  fragment Fragment4639 on Member158 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_158
    memberCount_158
    memberMetric_158
  }
`);

type FragmentResult4639 = ResultOf<typeof FRAGMENT_4639>;
type FragmentSelf4639 = NonNullable<FragmentResult4639>;

export type FragmentToken4639 =
  | FragmentSelf4639["__typename"]
  | FragmentSelf4639["typenameHint"] | FragmentToken4637 | FragmentToken4638;
