import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4635 } from "./fragment4635";
import type { FragmentToken4636 } from "./fragment4636";

export const FRAGMENT_4637 = gql(`
  fragment Fragment4637 on Member156 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_156
    memberCount_156
    memberMetric_156
  }
`);

type FragmentResult4637 = ResultOf<typeof FRAGMENT_4637>;
type FragmentSelf4637 = NonNullable<FragmentResult4637>;

export type FragmentToken4637 =
  | FragmentSelf4637["__typename"]
  | FragmentSelf4637["typenameHint"] | FragmentToken4635 | FragmentToken4636;
