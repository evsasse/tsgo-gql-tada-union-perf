import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4898 } from "./fragment4898";
import type { FragmentToken4899 } from "./fragment4899";

export const FRAGMENT_4900 = gql(`
  fragment Fragment4900 on Member139 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_139
    memberCount_139
    memberMetric_139
  }
`);

type FragmentResult4900 = ResultOf<typeof FRAGMENT_4900>;
type FragmentSelf4900 = NonNullable<FragmentResult4900>;

export type FragmentToken4900 =
  | FragmentSelf4900["__typename"]
  | FragmentSelf4900["typenameHint"] | FragmentToken4898 | FragmentToken4899;
