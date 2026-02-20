import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4229 } from "./fragment4229";
import type { FragmentToken4230 } from "./fragment4230";

export const FRAGMENT_4231 = gql(`
  fragment Fragment4231 on Member30 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_30
    memberCount_30
    memberMetric_30
  }
`);

type FragmentResult4231 = ResultOf<typeof FRAGMENT_4231>;
type FragmentSelf4231 = NonNullable<FragmentResult4231>;

export type FragmentToken4231 =
  | FragmentSelf4231["__typename"]
  | FragmentSelf4231["typenameHint"] | FragmentToken4229 | FragmentToken4230;
