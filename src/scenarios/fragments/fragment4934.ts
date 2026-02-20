import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4932 } from "./fragment4932";
import type { FragmentToken4933 } from "./fragment4933";

export const FRAGMENT_4934 = gql(`
  fragment Fragment4934 on Member173 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_173
    memberCount_173
    memberMetric_173
  }
`);

type FragmentResult4934 = ResultOf<typeof FRAGMENT_4934>;
type FragmentSelf4934 = NonNullable<FragmentResult4934>;

export type FragmentToken4934 =
  | FragmentSelf4934["__typename"]
  | FragmentSelf4934["typenameHint"] | FragmentToken4932 | FragmentToken4933;
