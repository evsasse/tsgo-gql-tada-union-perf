import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4230 } from "./fragment4230";
import type { FragmentToken4231 } from "./fragment4231";

export const FRAGMENT_4232 = gql(`
  fragment Fragment4232 on Member31 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_31
    memberCount_31
    memberMetric_31
  }
`);

type FragmentResult4232 = ResultOf<typeof FRAGMENT_4232>;
type FragmentSelf4232 = NonNullable<FragmentResult4232>;

export type FragmentToken4232 =
  | FragmentSelf4232["__typename"]
  | FragmentSelf4232["typenameHint"] | FragmentToken4230 | FragmentToken4231;
