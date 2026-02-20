import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4933 } from "./fragment4933";
import type { FragmentToken4934 } from "./fragment4934";

export const FRAGMENT_4935 = gql(`
  fragment Fragment4935 on Member174 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_174
    memberCount_174
    memberMetric_174
  }
`);

type FragmentResult4935 = ResultOf<typeof FRAGMENT_4935>;
type FragmentSelf4935 = NonNullable<FragmentResult4935>;

export type FragmentToken4935 =
  | FragmentSelf4935["__typename"]
  | FragmentSelf4935["typenameHint"] | FragmentToken4933 | FragmentToken4934;
